// List of sky images
const skyImages = [];
for (let i = 1; i <= 40; i++) {
    skyImages.push({ src: `sky/sky${i}.jpg` });
}

// Function to load sky images dynamically
function loadSkyImages() {
    const gallery = document.getElementById('sky-gallery');
    skyImages.forEach(imageObj => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        
        const img = document.createElement('img');
        img.src = imageObj.src;
        img.alt = 'Sky Image';
        img.classList.add('gallery-image');

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.innerText = 'View Image';

        imgContainer.appendChild(img);
        imgContainer.appendChild(overlay);

        // Onclick to open modal
        imgContainer.onclick = () => openModal(imageObj.src);

        gallery.appendChild(imgContainer);
    });
}

// Modal functions
function openModal(imagePath) {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('modalImage').src = imagePath;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Load images after DOM content is loaded
document.addEventListener('DOMContentLoaded', loadSkyImages);
