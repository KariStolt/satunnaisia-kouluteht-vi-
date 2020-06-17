let bule = 16363;
let hame = 16364;
let leir = 16365;
let lepu = 16435;
let vier = 16448;
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

today = yyyy + '/' + mm + '/' + dd;
currentDate = dd + '.' + mm + '.' + yyyy;


const parseResponse = (responseData) => {
    // loopin sisällä, käy läpi responsedatan sisältä löytyviä elementtejä
    // miksi i = 6?
    // mikä on alielementti responseDatassa jossa päivän ruoat?

    const courses = responseData.courses;
    // aina: tyhjennä ennen kirjoitus menu
    document.getElementById('menu').innerHTML = '';
    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        console.log(course.title_fi);
        let listElement = document.createElement('LI');
        let listElementTxt = document.createTextNode(course.title_fi
            + ' ' + course.price + '€' + ' ' + course.properties);
        listElement.appendChild(listElementTxt);
        document.getElementById('menu').appendChild(listElement);
    }
};


const getMenu = (restaurant, today, lang) => {
    fetch('https://www.sodexo.fi/ruokalistat/output/daily_json/' + restaurant + '/' + today + '/fi')
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log('vastaus Sodexolta: ' + JSON.stringify(result));
            console.log(result.meta.ref_title);
            console.log(result.meta.ref_url);
            parseResponse(result);
        });
};
document.getElementById('bule').addEventListener('click', (evt) => {
    console.log('bule');
    document.getElementById('textbox').innerHTML = 'Ruokalista Bulevardi ' + currentDate;
    getMenu(bule, today);
});
document.getElementById('hame').addEventListener('click', (evt) => {
    console.log('hame');
    document.getElementById('textbox').innerHTML = 'Ruokalista Hämeentie ' + currentDate;
    getMenu(hame, today);
});
document.getElementById('leir').addEventListener('click', (evt) => {
    console.log('leiritie');
    document.getElementById('textbox').innerHTML = 'Ruokalista Leiritie ' + currentDate;
    getMenu(leir, today);
});
document.getElementById('lepu').addEventListener('click', (evt) => {
    console.log('leppävaara');
    document.getElementById('textbox').innerHTML = 'Ruokalista Leppävaara ' + currentDate;
    getMenu(lepu, today);
});
document.getElementById('vier').addEventListener('click', (evt) => {
    console.log('viertotie');
    document.getElementById('textbox').innerHTML = 'Ruokalista Vanha Viertotie ' + currentDate;
    getMenu(vier, today);
});
