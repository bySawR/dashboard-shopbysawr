const searchInput = document.getElementById('searchInput');
const fileWrappers = document.getElementsByClassName('file-wrapper');

// Add fade-in animation on load
Array.from(fileWrappers).forEach((fileWrapper, index) => {
  fileWrapper.style.opacity = '0';
  fileWrapper.style.transform = 'translateY(10px)';
  fileWrapper.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  setTimeout(() => {
    fileWrapper.style.opacity = '1';
    fileWrapper.style.transform = 'translateY(0)';
  }, index * 100); // staggered effect
});

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();

  let visibleCount = 0;

  for (let i = 0; i < fileWrappers.length; i++) {
    const fileWrapper = fileWrappers[i];
    const filename = fileWrapper.querySelector('.name').textContent.toLowerCase();

    if (filename.includes(searchTerm)) {
      fileWrapper.style.display = '';
      requestAnimationFrame(() => {
        fileWrapper.style.opacity = '1';
        fileWrapper.style.transform = 'translateY(0)';
      });
      visibleCount++;
    } else {
      fileWrapper.style.opacity = '0';
      fileWrapper.style.transform = 'translateY(10px)';
      setTimeout(() => {
        fileWrapper.style.display = 'none';
      }, 200); // delay hiding to allow fade-out
    }
  }

  // Adjust layout based on visible count
  const flexBasis = `${Math.min(100, Math.max(100 / visibleCount, 25))}%`;

  Array.from(fileWrappers).forEach((fw) => {
    if (fw.style.display !== 'none') {
      fw.style.flexBasis = flexBasis;
    }
  });
});

// Get the element with id="defaultOpen" and click on it
const defaultTab = document.getElementById("defaultOpen");
if (defaultTab) defaultTab.click();
