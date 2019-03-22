// document.addEventListener("keydown", function(e) {
//     console.log(e.which);
//   });


// key down event (play and animate) on the window object
window.addEventListener('keydown', function (e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audioKey = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audioKey) {
        return;
    } //stop function if invalid keypress
    audioKey.currentTime = 0; // rewind on keypress 
    audioKey.play();
    key.classList.add("playing");
});

// click events (play and animate) on key divs *needs refactoring*
const keyDiv = document.querySelectorAll('.key');


// q tom1 on click
keyDiv[0].addEventListener('click', function (e) {
    const audioKey = document.querySelector('audio[data-key="81"]');
    audioKey.currentTime = 0;
    audioKey.play();
    keyDiv[0].classList.add("playing");
});

// w tom2 on click

keyDiv[1].addEventListener('click', function (e) {
    const audioKey = document.querySelector('audio[data-key="87"]');
    audioKey.currentTime = 0;
    audioKey.play();
    keyDiv[1].classList.add("playing");
});

// e tom3 on click

keyDiv[2].addEventListener('click', function (e) {
    const audioKey = document.querySelector('audio[data-key="69"]');
    audioKey.currentTime = 0;
    audioKey.play();
    keyDiv[2].classList.add("playing");
});

// r tom4 on click

keyDiv[3].addEventListener('click', function (e) {
    const audioKey = document.querySelector('audio[data-key="82"]');
    audioKey.currentTime = 0;
    audioKey.play();
    keyDiv[3].classList.add("playing");
});

// t tom5 on click

keyDiv[4].addEventListener('click', function (e) {
    const audioKey = document.querySelector('audio[data-key="84"]');
    audioKey.currentTime = 0;
    audioKey.play();
    keyDiv[4].classList.add("playing");
});

// a snare  on click

keyDiv[5].addEventListener('click', function (e) {
    const audioKey = document.querySelector('audio[data-key="65"]');
    audioKey.currentTime = 0;
    audioKey.play();
    keyDiv[5].classList.add("playing");
});

// s snare deep  on click

keyDiv[6].addEventListener('click', function (e) {
    const audioKey = document.querySelector('audio[data-key="83"]');
    audioKey.currentTime = 0;
    audioKey.play();
    keyDiv[6].classList.add("playing");
});

// d kick  on click

keyDiv[7].addEventListener('click', function (e) {
    const audioKey = document.querySelector('audio[data-key="68"]');
    audioKey.currentTime = 0;
    audioKey.play();
    keyDiv[7].classList.add("playing");
});

// f boom  on click

keyDiv[8].addEventListener('click', function (e) {
    const audioKey = document.querySelector('audio[data-key="70"]');
    audioKey.currentTime = 0;
    audioKey.play();
    keyDiv[8].classList.add("playing");
});

// g kick boom  on click

keyDiv[9].addEventListener('click', function (e) {
    const audioKey = document.querySelector('audio[data-key="71"]');
    audioKey.currentTime = 0;
    audioKey.play();
    keyDiv[9].classList.add("playing");
});

// h tink  on click

keyDiv[10].addEventListener('click', function (e) {
    const audioKey = document.querySelector('audio[data-key="72"]');
    audioKey.currentTime = 0;
    audioKey.play();
    keyDiv[10].classList.add("playing");
});

// j clap on click

keyDiv[11].addEventListener('click', function (e) {
    const audioKey = document.querySelector('audio[data-key="74"]');
    audioKey.currentTime = 0;
    audioKey.play();
    keyDiv[11].classList.add("playing");
});

// k highhat on click

keyDiv[12].addEventListener('click', function (e) {
    const audioKey = document.querySelector('audio[data-key="75"]');
    audioKey.currentTime = 0;
    audioKey.play();
    keyDiv[12].classList.add("playing");
});

// l open highhat on click

keyDiv[13].addEventListener('click', function (e) {
    const audioKey = document.querySelector('audio[data-key="76"]');
    audioKey.currentTime = 0;
    audioKey.play();
    keyDiv[13].classList.add("playing");
});

// u ride on click

keyDiv[14].addEventListener('click', function (e) {
    const audioKey = document.querySelector('audio[data-key="85"]');
    audioKey.currentTime = 0;
    audioKey.play();
    keyDiv[14].classList.add("playing");
});

// i crash on click

keyDiv[15].addEventListener('click', function (e) {
    const audioKey = document.querySelector('audio[data-key="73"]');
    audioKey.currentTime = 0;
    audioKey.play();
    keyDiv[15].classList.add("playing");
});






function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if not true
    this.classList.remove('playing');
    // console.log(this);
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));