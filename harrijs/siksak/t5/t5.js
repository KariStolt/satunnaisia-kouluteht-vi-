document.getElementById('nappi').addEventListener('click', (evt) => {
    siksak();
});
document.getElementById('butt').addEventListener('click', (evt) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }, false);
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let siksak = () => {
    let c = document.getElementById('canvas');
    let ctx = c.getContext('2d');
    let k = 0;
    let l = 0;
    let range = parseInt(document.getElementById('myRange').value);
    for (let i = 0; i <= 10; i++) {
        for (let j = 0; j <= 4; j++) {
            ctx.beginPath();
            ctx.moveTo(k, l);
            k = k + range;
            l = l + 20;
            ctx.lineTo(k, l);
            ctx.stroke();
            ctx.moveTo(k, l);
            k = k - range;
            l = l + 20;
            ctx.lineTo(k, l);
            ctx.stroke();
        }
        l = 0;
        k = k +range;
        console.log(k);
    }
};
