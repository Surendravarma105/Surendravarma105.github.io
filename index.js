

const togglebtn = document.querySelector('.mob__toggle-items');
const MobBar = document.querySelector('.mob__wrapper');
const closebtn = document.querySelector('.closebtn');

function showMobBar() {
    MobBar.style.display = 'block';
    togglebtn.style.display = 'none';
}

function closeBar() {
    MobBar.style.display = 'none';
    togglebtn.style.display = 'block';
}


togglebtn.addEventListener('click',showMobBar);
closebtn.addEventListener('click',closeBar);







