

const togglebtn = document.querySelector('.mob__toggle-items');
const MobBar = document.querySelector('.mob__wrapper');


function showMobBar() {
    MobBar.style.display = 'block';
    togglebtn.style.display = 'none';
}

togglebtn.addEventListener('click',showMobBar);








