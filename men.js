function changeImage() {
    var selectedColor = document.querySelector('input[name="color"]:checked').value;
    var imageElement = document.getElementById('imageToChange');

    switch (selectedColor) {
        case 'red':
            imageElement.src = 'red_image.jpg';
            break;
        case 'green':
            imageElement.src = 'green_image.jpg';
            break;
        case 'blue':
            imageElement.src = 'blue_image.jpg';
            break;
        default:
            imageElement.src = 'default.jpg';
            break;
        }
}