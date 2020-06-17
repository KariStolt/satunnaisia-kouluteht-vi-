document.getElementById('nappi').addEventListener('click', (evt) => {
    siksak();
    document.getElementById('toimii').innerHTML = 'toimii';
});

let siksak = () => {
    let c = document.getElementById('canvas');
    let ctx = c.getContext('2d');
    let k = 0;
    let l = 0;
    for (let i = 0; i <= 10; i++) {
        for (let j = 0; j <= 4; j++) {
            ctx.beginPath();
            ctx.moveTo(k, l);
            k = k + 20;
            l = l + 20;
            ctx.lineTo(k, l);
            ctx.stroke();
            ctx.moveTo(k, l);
            k = k - 20;
            l = l + 20;
            ctx.lineTo(k, l);
            ctx.stroke();
        }
        l = 0;
        k = k +40;
        console.log(k);
    }
};
