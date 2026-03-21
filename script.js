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
