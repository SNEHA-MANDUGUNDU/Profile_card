function flipElement(element) {
    var flipper = element.querySelector('.card');
    if (flipper.style.transform === 'rotateY(180deg)') {
        flipper.style.transform = 'rotateY(0deg)';
    } else {
        flipper.style.transform = 'rotateY(180deg)';
    }
}

function github(){
    window.open('https://GitHub.com/SNEHA-MANDUGUNDU','_blank');
}

function linkedin(){
    window.open('https://www.linkedin.com/in/sneha-mandugundu')
}