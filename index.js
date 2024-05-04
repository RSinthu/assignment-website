function changeBackground() {
    var container = document.getElementById('fbox1');
    var selectedColor = document.querySelector('input[name="color"]:checked').value;

    switch (selectedColor) {
        case 'red':
            container.style.backgroundImage = "url('resources/card1-red.jpg')";
            break;
        case 'green':
            container.style.backgroundImage = "url('resources/card1-green.jpg')";
            break;
        case 'blue':
            container.style.backgroundImage = "url('resources/card1.jpg')";
            break;
        default:
            container.style.backgroundImage = "url('resources/card1.jpg')";
            break;
    }
}

function changeRedImage()  {
    var container = document.getElementById('fbox1');

    container.style.backgroundImage = "url('resources/card1-red.jpg')";
}

function changeGreenImage()  {
    var container = document.getElementById('fbox1');

    container.style.backgroundImage = "url('resources/card1-green.jpg')";
}

function changeBlueImage()  {
    var container = document.getElementById('fbox1');

    container.style.backgroundImage = "url('resources/card1.jpg')";
}

//fbox2