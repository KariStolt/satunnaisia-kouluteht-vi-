const piirraMinulle = () => {
    let data = [];

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
            txt += x[i].childNodes[0].nodeValue + ', ';
        }
        document.getElementById('toimii').innerHTML = txt;
        data.push(txt);
        console.log(data);
    }

    d3.select('.chart')
        .selectAll('div')
        .data(data)
        .enter()
        .append('div')
        .style('width', function(d) {
            return d + 'px';
        })
        .text(function(d) {
            return d;
        });
};
