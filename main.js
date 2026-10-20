// Fade/slide elements in as they scroll into view
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }
  var y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
})();

// Contact popover in the nav
(function () {
  var wrap = document.querySelector('.nav-contact');
  if (!wrap) return;
  var btn = wrap.querySelector('button[aria-controls]');
  var pop = wrap.querySelector('.contact-pop');
  function set(open) { pop.classList.toggle('open', open); btn.setAttribute('aria-expanded', open); }
  btn.addEventListener('click', function (e) { e.stopPropagation(); set(!pop.classList.contains('open')); });
  document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  var copy = pop.querySelector('.copy');
  copy.addEventListener('click', function () {
    var email = copy.getAttribute('data-email');
    var done = function () { copy.textContent = 'Copied ✓'; setTimeout(function () { copy.textContent = 'Copy email'; }, 1600); };
    if (navigator.clipboard) navigator.clipboard.writeText(email).then(done, done); else done();
  });
})();
