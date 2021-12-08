function BioHover(element) {
    element.setAttribute('src', 'images/polaroid1.jpg')
    element.setAttribute('width', '27%')
    document.getElementById('biosideleft').style.top = '140%';
    document.getElementById('biosideleft').style.left = '2%';
    document.getElementById('biosideleft').style.transform = 'rotate(-5deg)';
    
}
function BioUnHover(element) {
    element.setAttribute('src', 'images/bio-side-image5-pic.png')
    element.setAttribute('width', '37%')
    document.getElementById('biosideleft').style.top = '135%';
    document.getElementById('biosideleft').style.left = '0';
    document.getElementById('biosideleft').style.transform = 'rotate(0deg)';
}