// Mobile navigation toggle
(function () {
  var burger = document.querySelector('.nav__burger');
  var links = document.getElementById('nav-links');

  if (!burger || !links) return;

  burger.addEventListener('click', function () {
    var isOpen = links.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when a nav link is clicked
  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Scroll fade-up animation
(function () {
  var targets = document.querySelectorAll('.how-i-think, .work, .about, .contact');

  targets.forEach(function (el) {
    el.classList.add('fade-up');
  });

  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
