  // JavaScript to handle image preview and description in modal
  var previewImage = document.getElementById('previewImage');
  var imageDescription = document.getElementById('imageDescription');
  var imageModals = document.querySelectorAll('[data-toggle="modal"]');
  
  imageModals.forEach(function (modalTrigger) {
    modalTrigger.addEventListener('click', function () {
      var imagePath = modalTrigger.getAttribute('src');
      var description = modalTrigger.getAttribute('data-description');
      previewImage.setAttribute('src', imagePath);
      imageDescription.textContent = description;
    });
  });