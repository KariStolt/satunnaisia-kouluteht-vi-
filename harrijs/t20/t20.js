const piirraMinulle = () => {
    let elem = document.getElementById('myAnimation');
    let container = document.getElementById('myContainer');

    let pos = 0;
    let kulma = 0;
    let koko = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            let tekstiNumero = kulma.toString();
            let kokoNumero = koko.toString();
            let alkuosa = 'rotate(';
            let loppuosa = 'deg) ';
            let osa1 = alkuosa.concat(tekstiNumero);
            let valmisOsa1 = osa1.concat(loppuosa);
            let alku2 = 'scaleX(';
            let loppu2 = ') ';
            let osa2 = alku2.concat(kokoNumero);
            let valmisOsa2 = osa2.concat(loppu2);
            let kaannetaan = valmisOsa1.concat(valmisOsa2);

            pos++;
            elem.style.top = pos + 'px';
            elem.style.right = pos + 'px';
            container.style.backgroundColor = 'green';
            // Code for Safari
            elem.style.WebkitTransform = kaannetaan;
            // Code for IE9
            elem.style.msTransform = kaannetaan;
            // Standard syntax
            elem.style.transform = kaannetaan;
            kulma = parseInt(tekstiNumero);
            kulma = kulma + 5;
            koko = parseInt(kokoNumero);
            koko = koko + 1;
        }
    }
};
