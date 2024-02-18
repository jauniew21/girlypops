document.getElementById('nextButton').addEventListener('click', function() {
    const selectedImage = document.getElementById('imageSelect').value;
    
    // Store the selected image in localStorage or pass it as a query parameter
    localStorage.setItem('selectedImage', selectedImage);
  
    // Redirect to the next page
    window.location.href = 'nextpage.html';


  });

  function goBack() {
    window.history.back();
  }

  