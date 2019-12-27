function typeWriter(i, speed, text, output) {
    if(!text || !output) {
        return;
    }
    document.querySelector(output).innerHTML += text.charAt(i);
    setTimeout(function(){
        ((i < text.length - 1) ? typeWriter(i+1, speed, text, output) : false);
    }, speed);
}

export default typeWriter