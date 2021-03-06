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

### Without optimalisation
![image](https://github.com/meesrutten/performance-matters/blob/master/master.png "The Project")

### font display swap
in branch `feature/fontswap`
![font swap](https://github.com/meesrutten/performance-matters/blob/master/fontswap.png "The Project")

### async css loading
in branch `feature/async-fonts`
with loadCSS
![image](https://github.com/meesrutten/performance-matters/blob/master/asyncfonts.png "The Project")

### async js loading
in branch `feature/async`
![image](https://github.com/meesrutten/performance-matters/blob/master/async.png "The Project")

### minified js, css
in branch `feature/minify-and-bundle`
![image](https://github.com/meesrutten/performance-matters/blob/master/minify-and-bundle.png "The Project")

### service worker with caching
in branch `feature/sw`
![image](https://github.com/meesrutten/performance-matters/blob/master/sw.png "The Project")

### critical css
in branch `feature/criticalcss`
![image](https://github.com/meesrutten/performance-matters/blob/master/criticalcss.png "The Project")

### serve from CDN 
in branch `feature/cdn`
because if people cached that before performance ++
![image](https://github.com/meesrutten/performance-matters/blob/master/cdn.png "The Project")

### add gzip
in branch `feature/gzip`
![image](https://github.com/meesrutten/performance-matters/blob/master/gzip.png "The Project")

### header cache time
in branch `header-cache`
[link](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)
![image](https://github.com/meesrutten/performance-matters/blob/master/header cache.png "The Project")

### final test - patch2.0
![image](https://github.com/meesrutten/performance-matters/blob/master/patch2.0.png "The Project")
