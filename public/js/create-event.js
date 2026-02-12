const imageInput = document.getElementById('eventImage');
    const imagePreview = document.getElementById('imagePreview');
    const fileNameDisplay = document.getElementById('file-name');

    imageInput.addEventListener('change', function() {
        const file = this.files[0]; // Get the selected file

        if (file) {
            const reader = new FileReader();

            // When the file is read, show it in the <img> tag
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block'; // Make it visible
                fileNameDisplay.textContent = `Selected: ${file.name}`;
            };

            reader.readAsDataURL(file); // Convert image to a string the browser can show
        } else {
            // Reset if user cancels selection
            imagePreview.style.display = 'none';
            imagePreview.src = "#";
            fileNameDisplay.textContent = "";
        }
    });
