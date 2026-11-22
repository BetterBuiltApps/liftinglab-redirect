# liftinglab.app redirect

Static stub that keeps every old liftinglab.app link (shipped apps use /privacy/, /terms/, /help/, and /#contact)
working by sending it to https://barforgeweightlifting.com/. Keep the domain registered and this site up for at
least 12 months after the renamed apps ship.

Deploy: GitHub Pages "Deploy from a branch" (main, root), custom domain liftinglab.app, Enforce HTTPS. No
Actions needed. Do NOT switch liftinglab.app to this until barforgeweightlifting.com/ is live, or old links
point at nothing. It must replace the current liftinglab.app Pages site (a Pages site can hold only one custom
domain, so barforge.app takes over the old website repo).

Mapping (redirect.js): the same path on barforgeweightlifting.com (unknown paths go to /). Query string and #fragment are kept. Test locally with
`python3 -m http.server` and open /privacy/ (it will try the real barforge.app).
