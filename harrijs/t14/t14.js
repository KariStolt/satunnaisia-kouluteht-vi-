let laskuri = 0;

const piirraMinulle = (x1, y1, x2, y2) => {
    const c = document.getElementById('myCanvas');
    let ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x1, y1, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x2, y2, 5, 0, 2 * Math.PI);
    ctx.stroke();

    document.body.style.cursor = 'auto';
};

const laskenMontako = (lahtoX, lahtoY) => {
    laskuri = laskuri + 1;
    if (laskuri == 1) {
        X1 = lahtoX;
        Y1 = lahtoY;
        // piirraMinulle(X1,Y1,X2+1,Y2+1);
    } else if (laskuri == 2) {
        let X2 = lahtoX;
        let Y2 = lahtoY;
        piirraMinulle(X1, Y1, X2, Y2);
        laskuri = 0;
        document.getElementById('x').innerHTML = 'X koordinaatit: '
            + X1 + ' ' + X2;
        document.getElementById('y').innerHTML = 'Y koordinaatit: '
            + Y1 + ' ' + Y2;
    }
};

const printMousePos = (event) => {
    let lahtoX = event.clientX;
    let lahtoY = event.clientY;
    let Wi = document.getElementById('myCanvas').width;
    let Hi = document.getElementById('myCanvas').height;
    if (lahtoX > Wi) {
        alert('viiva ei mahdu vaakasuunnassa canvas alueelle, max leveys on: '
            + Wi);
    } else if (lahtoY > Hi) {
        alert('viiva ei mahdu pystysuunnassa canvas alueelle, max korkeus on: '
            + Hi);
    } else {
        document.body.style.cursor = 'crosshair';
        laskenMontako(lahtoX, lahtoY);
    }
};

document.addEventListener('click', printMousePos);
