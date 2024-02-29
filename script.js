document.addEventListener('DOMContentLoaded', function() {
    const indianElements = document.querySelectorAll('.indian');
  
    // Function to toggle popup display for a given ID
    function togglePopup(id) {
      const popup = document.getElementById(`${id}-popup`);
      if (popup) {
        const isPopupVisible = popup.style.display === 'flex';
        closeAllPopups();
        popup.style.display = isPopupVisible ? 'none' : 'flex';
      }
    }
  
    // Function to close all popups
    function closeAllPopups() {
      const popups = document.querySelectorAll('.popup');
      popups.forEach(popup => popup.style.display = 'none');
    }
  
    // Event listener for clicks on elements with the "indian" class
    indianElements.forEach(element => {
      const id = element.id;
      element.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent propagation to the window click event
        togglePopup(id);
      });
    });
  
    // Event listener to close the popup when clicking outside of it
    window.addEventListener('click', () => closeAllPopups());
  });
  