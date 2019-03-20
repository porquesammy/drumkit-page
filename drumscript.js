// document.addEventListener("keydown", function(e) {
//     console.log(e.which);
//   });

window.addEventListener('keydown', function(e){
    const audioKey = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audioKey){ 
    return;} //stop function if invalid keypress
    audioKey.currentTime = 0; // rewind on keypress 
    audioKey.play();
    key.classList.add("playing");
    
});

function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip if not true
    this.classList.remove('playing'); 
    // console.log(this);
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));