
//Intersection Observer that only adds background image when scrolled into view. Ref: https://www.corewebvitals.io/pagespeed/defer-background-images#d2
window.addEventListener('DOMContentLoaded', (event) => {
  // All elements with background images that should be lazy loaded
  const lazyImages = document.querySelectorAll('.bg-lazy-image');

  // Options for the observer
  const backgroundOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
  };

  // The observer
  const imageObserver = new IntersectionObserver((entries, imageObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        showImageBackground(entry.target);
        imageObserver.unobserve(entry.target);
      }
    });
  }, backgroundOptions);

  // Observe each image
  lazyImages.forEach(image => { 
    imageObserver.observe(image);
  });

  // Show background image
  function showImageBackground(node) {
      node.classList.remove('bg-lazy-image');
      console.info("Image visible");
  }
});

// Mobile Navigation Functionality
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.primary-navigation__toggle');
  const nav = document.querySelector('.primary-navigation');

  toggleButton.addEventListener('click', () => {
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', !expanded);
    nav.setAttribute('aria-expanded', !expanded);
  });
});