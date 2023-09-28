function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeBackgroundColor() {
    const body = document.querySelector('body');
    body.style.backgroundColor = getRandomColor();
}
function toggleImageVisibility() {
    const image = document.querySelector('img');
    image.style.display = image.style.display === 'none' ? 'block' : 'none';
}
function showAlert() {
    alert("You clicked a navigation menu link!");
}
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('changeColorButton');
    const checkbox = document.getElementById('toggleImageCheckbox');
    const links = document.querySelectorAll('nav ul li a');
    button.addEventListener('click', changeBackgroundColor);
    checkbox.addEventListener('change', toggleImageVisibility);
    links.forEach(link => {
        link.addEventListener('click', showAlert);
    });
});