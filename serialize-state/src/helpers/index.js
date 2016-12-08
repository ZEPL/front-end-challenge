// Helper functions for the application

// Helper function to copy data into clipboard
// Inspired from http://stackoverflow.com/a/34192073/5154397
function copyDataToClipboard(data) {
  let tempEl = document.getElementById('__clipboard__');
  if (!tempEl) {
    tempEl = document.createElement('div'); // creates a temp. element
    tempEl.style.opacity = 0;
    tempEl.id = '__clipboard__';
  }
  tempEl.innerHTML = data; // places data inside it
  document.body.appendChild(tempEl); // appends to main document

  let range = document.createRange(); // creates a selection
  range.selectNode(tempEl);
  window.getSelection().addRange(range);
  document.execCommand('copy'); // copies text
};

export default copyDataToClipboard;
