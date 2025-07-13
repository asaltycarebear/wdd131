function openOrFocusTab(event) {
  event.preventDefault(); // Prevent default link behavior
  window.open("https://example.com", "exampleTab"); // Reuses the tab if already open
}
