document.getElementById('button').addEventListener('click', (evt) => {
    piirraMinulle();
});

let piirraMinulle = () => {
let c = document.getElementById('canvas');
let ctx = c.getContext('2d');
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 150);
ctx.stroke();
};
