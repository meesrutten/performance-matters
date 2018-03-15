if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../../../service-worker.js', {
        scope: './'
    }).then(function (registration) {
        var serviceWorker;
        if (registration.installing) {
            serviceWorker = registration.installing;
        } else if (registration.waiting) {
            serviceWorker = registration.waiting;
        } else if (registration.active) {
            serviceWorker = registration.active;
        }
        if (serviceWorker) {
            // logState(serviceWorker.state);
            serviceWorker.addEventListener('statechange', function (e) {
                // logState(e.target.state);
            });
        }
    }).catch(function (error) {
        // Something went wrong during registration. The service-worker.js file
        // might be unavailable or contain a syntax error.
    });
}

const images = document.querySelectorAll('[data-src]');
const config = {
  rootMargin: '0px 0px 50px 0px',
  threshold: 0
};
let loaded = 0;

const observer = new IntersectionObserver(function (entries, self) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // console.log(`Image ${entry.target.src} is in the viewport!`);
      preloadImage(entry.target);
      // Stop watching and load the image
      self.unobserve(entry.target);
    }
  });
}, config);

images.forEach(image => {
  observer.observe(image);
});

function preloadImage(img) {
  const src = img.getAttribute('data-src');
  if (!src) { return; }
  img.src = src;
}
