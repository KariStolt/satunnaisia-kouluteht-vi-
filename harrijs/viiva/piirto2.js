document.getElementById('button').addEventListener('click', (evt) => {
    piirraMinulle();
});
let taulukko = [200, 20, 20, 120];

let piirraMinulle = () => {
let c = document.getElementById('canvas');
let ctx = c.getContext('2d');
ctx.beginPath();
ctx.moveTo(taulukko[0], taulukko[1]);
ctx.lineTo(taulukko[2], taulukko[3]);
ctx.stroke();
};
