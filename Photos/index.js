window.onload = generateImages;

function generateImages() {
    const imageContainer = document.getElementById('imgContainer');
    const numImages = 35; // Number of images to generate

    for (let i = 1; i <= numImages; i++) {
        const img = document.createElement('img');
        img.src = `../Images/DisplayPhotos/image${i}.JPG`; // Assuming images are named image1.jpg, image2.jpg, etc.
        img.alt = `Image ${i}`; // Optional: Set alt attribute for accessibility
        img.classList.add('generated-image'); // Optional: Add a class for styling

        imageContainer.appendChild(img);
    }
}
