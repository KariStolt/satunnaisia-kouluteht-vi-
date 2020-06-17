document.getElementById('button').addEventListener('click', (evt) => {
    piirraMinulle();
    document.getElementById('toimii').innerHTML = 'toimii';
});

let wi = document.getElementById('canvas').width;
let he = document.getElementById('canvas').height;

let piirraMinulle = () => {
    let x = 0;
    let y = 0;
    let c = document.getElementById('canvas');
    let ctx = c.getContext('2d');
    for (let j = 0; j <= wi; j++) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 200);
        ctx.stroke();
        x = x + 10;
    }
    for (let n = 0; n <= he; n++) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(300, y);
        ctx.stroke();
        y = y + 5;
    }
};
