  const searchInput = document.getElementById('searchInput');
  const fileWrappers = document.getElementsByClassName('file-wrapper');

  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();

    for (let i = 0; i < fileWrappers.length; i++) {
      const fileWrapper = fileWrappers[i];
      const filename = fileWrapper.querySelector('.name').textContent.toLowerCase();

      if (filename.includes(searchTerm)) {
        fileWrapper.style.display = '';
      } else {
        fileWrapper.style.display = 'none';
      }
    }

    // Get the visible file-wrapper elements
    const visibleFileWrappers = Array.from(fileWrappers).filter((fw) => fw.style.display !== 'none');

    // Calculate the number of visible file-wrapper elements
    const visibleFileWrappersCount = visibleFileWrappers.length;

    // Calculate the flex-basis value for the container-list based on the number of visible file-wrapper elements
    const flexBasisValue = `${Math.min(100, Math.max(100 / visibleFileWrappersCount, 25))}%`;

    // Set the flex-basis value for the container-list elements
    visibleFileWrappers.forEach((fw) => {
      fw.style.flexBasis = flexBasisValue;
    });
  });


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();