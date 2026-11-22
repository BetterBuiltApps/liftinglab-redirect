# liftinglab.app redirect

Static stub that keeps every old liftinglab.app link (shipped apps use /privacy/, /terms/, /help/, and /#contact)
working by sending it to https://barforge.app/weightlifting/. Keep the domain registered and this site up for at
least 12 months after the renamed apps ship.

Deploy: GitHub Pages "Deploy from a branch" (main, root), custom domain liftinglab.app, Enforce HTTPS. No
Actions needed. Do NOT switch liftinglab.app to this until barforge.app/weightlifting/ is live, or old links
point at nothing. It must replace the current liftinglab.app Pages site (a Pages site can hold only one custom
domain, so barforge.app takes over the old website repo).

Mapping (redirect.js): / and anything unknown go to /weightlifting/; /privacy/, /terms/, /get/, /help/... keep
their path under /weightlifting/. Query string and #fragment are kept. Test locally with
`python3 -m http.server` and open /privacy/ (it will try the real barforge.app).
