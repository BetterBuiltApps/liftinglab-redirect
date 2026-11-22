// Sends every liftinglab.app URL to its place on barforge.app/weightlifting/.
// GitHub Pages cannot send HTTP 301s, so this is a meta refresh plus a script that keeps
// the path, query and #fragment (the apps link to /privacy/, /terms/, /help/... and /#contact).
(function () {
  var base = 'https://barforge.app/weightlifting';
  var p = location.pathname.replace(/\/index\.html$/, '/');
  var target;
  if (p === '/' || p === '') target = base + '/';
  else if (/^\/(privacy|terms|get|help)(\/|$)/.test(p)) target = base + p;
  else target = base + '/';
  location.replace(target + location.search + location.hash);
})();
