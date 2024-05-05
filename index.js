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

//fbox8

function changeRedImage8()  {
    var container = document.getElementById('fbox8');

    container.style.backgroundImage = "url('resources/card8-red.jpg')";
}

function changeGreenImage8()  {
    var container = document.getElementById('fbox8');

    container.style.backgroundImage = "url('resources/card8-green.jpg')";
}

function changeBlueImage8()  {
    var container = document.getElementById('fbox8');

    container.style.backgroundImage = "url('resources/card8.jpg')";
}

//fbox7
function changeRedImage7()  {
    var container = document.getElementById('fbox7');

    container.style.backgroundImage = "url('resources/card7-red.jpg')";
}

function changeBrownImage7()  {
    var container = document.getElementById('fbox7');

    container.style.backgroundImage = "url('resources/card7-brown.jpg')";
}

function changeSilverImage7()  {
    var container = document.getElementById('fbox7');

    container.style.backgroundImage = "url('resources/card7.jpg')";
}

//fbox4
function changeRedImage4()  {
    var container = document.getElementById('fbox4');

    container.style.backgroundImage = "url('resources/card4-red.jpg')";
}

function changeGreenImage4()  {
    var container = document.getElementById('fbox4');

    container.style.backgroundImage = "url('resources/card4-green.jpg')";
}

function changeBlackImage4()  {
    var container = document.getElementById('fbox4');

    container.style.backgroundImage = "url('resources/card4-black.jpg')";
}

function changeBlueImage4()  {
    var container = document.getElementById('fbox4');

    container.style.backgroundImage = "url('resources/card4.jpg')";
}

//fbox2
function changeBlueImage2()  {
    var container = document.getElementById('fbox2');

    container.style.backgroundImage = "url('resources/card2-blue.jpg')";
}

function changeLightBlueImage2()  {
    var container = document.getElementById('fbox2');

    container.style.backgroundImage = "url('resources/card2.jpg')";
}

function changeGreenImage2()  {
    var container = document.getElementById('fbox2');

    container.style.backgroundImage = "url('resources/card2-green.jpg')";
}

function changeOrangeImage2()  {
    var container = document.getElementById('fbox2');

    container.style.backgroundImage = "url('resources/card2-orange.jpg')";
}

//fbox10
function changeOrangeImage10()  {
    var container = document.getElementById('fbox10');

    container.style.backgroundImage = "url('resources/cad10-brown.jpg')";
}

function changeRedImage10()  {
    var container = document.getElementById('fbox10');

    container.style.backgroundImage = "url('resources/cad10-red.jpg')";
}

function changePurpleImage10()  {
    var container = document.getElementById('fbox10');

    container.style.backgroundImage = "url('resources/cad10-purple.jpg')";
}

function changeBlueImage10()  {
    var container = document.getElementById('fbox10');

    container.style.backgroundImage = "url('resources/cad10.jpg')";
}