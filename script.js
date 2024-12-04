// JavaScript to handle the page load and animation transition
window.onload = () => {
  const timeout = setTimeout(() => {
    // Remove 'not-loaded' class and add 'loaded' class to trigger animation
    document.body.classList.remove("not-loaded");
    document.body.classList.add("loaded");
    clearTimeout(timeout);
  }, 1000); // 1-second delay before the flowers start to "bloom"
};
