// eslint-disable-next-line no-unused-vars
function showResultInDomKvadrat() {
    const squareSide = document.getElementById('dlinaStoroniKvadrata').value;
    // eslint-disable-next-line no-undef
    document.getElementById('ploschadKvadrata').innerHTML = areaSquare(squareSide);
}

// eslint-disable-next-line no-unused-vars
function showResultInDomPriamougolnika() {
    const firstSide = document.getElementById('pervayaStoronaPriamougolnika').value;
    const secondSide = document.getElementById('drugayaStoronaPriamougolnika').value;
    // eslint-disable-next-line no-undef
    document.getElementById('ploschadPriamougolnika').innerHTML = areaRectangle(firstSide, secondSide);
}

// eslint-disable-next-line no-unused-vars
function showResultInDomParalelograma() {
    const sideLength = document.getElementById('dlinaStoronyParalelograma').value;
    const heightLength = document.getElementById('dlinaVisotyParalelograma').value;
    // eslint-disable-next-line no-undef
    document.getElementById('ploschadParalelograma').innerHTML = areaParallelogram(sideLength, heightLength);
}

// eslint-disable-next-line no-unused-vars
function showResultInDomRomba() {
    const baseRhombus = document.getElementById('dlinaStoronyRomba').value;
    const heightRhombus = document.getElementById('dlinaVisotyRomba').value;
    document.getElementById('ploschadRomba').innerHTML = areaRhombus(baseRhombus, heightRhombus);
}

