// Sends every liftinglab.app URL to the same path on barforgeweightlifting.com.
// GitHub Pages cannot send HTTP 301s, so this is a meta refresh plus a script that keeps the path,
// query and #fragment (the shipped apps link to /privacy/, /terms/, /help/... and /#contact).
(function () {
  var p = location.pathname.replace(/\/index\.html$/, '/');
  var known = /^\/(privacy|terms|get|help)(\/|$)/.test(p) || p === '/';
  location.replace('https://barforgeweightlifting.com' + (known ? p : '/') + location.search + location.hash);
})();
