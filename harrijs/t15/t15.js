document.getElementById('button').addEventListener('click', (evt) => {
    piirraMinulle();
});
document.getElementById('nappi').addEventListener('click', (evt) => {
    tt();
});
let taulukko = [];

let piirraMinulle = () => {
let c = document.getElementById('canvas');
let ctx = c.getContext('2d');
ctx.beginPath();
ctx.moveTo(taulukko[0], taulukko[1]);
ctx.lineTo(taulukko[2], taulukko[3]);
ctx.stroke();
};

let tt = () => {
let xhttp;
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open('GET', 'Face.xml', true);
xhttp.send();

function myFunction(xml) {
    let x;
    let i;
    let txt;
    let xmlDoc;
    xmlDoc = xml.responseXML;
    txt = '';
    x = xmlDoc.getElementsByTagName('coordinates');
    for (i = 0; i < x.length; i++) {
        txt += x[i].childNodes[0].nodeValue + '<br>';
    }
    document.getElementById('toimii').innerHTML = txt;
    taulukko.push(txt);
    console.log(taulukko);
}
};
