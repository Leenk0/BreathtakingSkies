// JavaScript
function openModal(imagePath) {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('modalImage').src = imagePath;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
