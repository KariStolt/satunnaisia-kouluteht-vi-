const wrapper = document.querySelector('.wrapper');
const layerOne = document.querySelector('.mario');
const layerTwo = document.querySelector('.block');
const mouse = document.querySelector('#mouse');
const mouse_center = document.querySelector('#mouse-center');

// Find page center
const cx = wrapper.clientWidth / 2;
const cy = wrapper.clientHeight / 2;

wrapper.addEventListener('mousemove', (evt) => {



    let mouseX = evt.clientX;
    let mouseY = evt.clientY;

    let coor = 'From the top left<br> X: ' + mouseX + ', Y: ' + mouseY;
    mouse.innerHTML = coor;

    let from_center_x = cx - mouseX;
    let from_center_y = cy - mouseY;

    let coor2 = 'From the center<br> X: ' + from_center_x + ', Y: ' + from_center_y;
    mouse_center.innerHTML = coor2;


    layerOne.style.transform = 'translateX(' + from_center_x / 20 + '%) translateY(' + from_center_y / 20 + '%)';
    layerTwo.style.transform = 'translateX(' + from_center_x / 5000 + '%) translateY(' + from_center_y / 2000 + '%)';
});