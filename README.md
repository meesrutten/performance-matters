# Performance matters

## Project setup

This project serves an adapted version of the [Bootstrap documentation website](http://getbootstrap.com/). It is based on the [github pages branche of Bootstrap](https://github.com/twbs/bootstrap/tree/gh-pages). 

Differences from actual Bootstrap documentation:

- Added custom webfont
- Removed third party scripts
- The src directory is served with [Express](https://expressjs.com/).
- Templating is done with [Nunjucks](https://mozilla.github.io/nunjucks/)

## Getting started

- Install dependencies: `npm install`
- Serve: `npm start`
- Expose localhost: `npm run expose`


## Performance
<!-- `Async` and `defer` increases speed by approx. 100ms -->
<!-- ```
    <script defer src="/assets/js/vendor/jquery.min.js"></script>
    <script async src="/dist/js/bootstrap.js"></script>
    <script defer src="/assets/js/docs.min.js"></script>
    <script defer src="/assets/js/ie10-viewport-bug-workaround.js"></script>
``` -->
<!-- lazy loading images with intersection observer -->
### font display swap
in branch `feature/fontswap`


### async css loading
in branch `feature/async-fonts`
with loadCSS

### async js loading
in branch `feature/async`

### minified js, css
in branch `feature/minify-and-bundle`

### service worker with caching
in branch `feature/sw`

### critical css
in branch `feature/criticalcss`

### serve from CDN 
in branch `feature/cdn`
because if people cached that before performance ++

### add gzip
in branch `feature/gzip`

### header cache time
in branch `header-cache`
[link](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)