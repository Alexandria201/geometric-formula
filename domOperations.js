function showResultInDomKvadrat() {
    const squareSide = document.getElementById('dlinaStoroniKvadrata').value;
    document.getElementById('ploschadKvadrata').innerHTML = areaSquare(squareSide);
}

function showResultInDomPriamougolnika() {
    const firstSide = document.getElementById('pervayaStoronaPriamougolnika').value;
    const secondSide = document.getElementById('drugayaStoronaPriamougolnika').value;
    document.getElementById('ploschadPriamougolnika').innerHTML = areaRectangle(firstSide, secondSide);
}

function showResultInDomParalelograma() {
    const sideLength = document.getElementById('dlinaStoronyParalelograma').value;
    const heightLength = document.getElementById('dlinaVisotyParalelograma').value;
    document.getElementById('ploschadParalelograma').innerHTML = areaParallelogram(sideLength, heightLength);
}

function showResultInDomRomba() {
    const baseRhombus = document.getElementById('dlinaStoronyRomba').value;
    const heightRhombus = document.getElementById('dlinaVisotyRomba').value;
    document.getElementById('ploschadRomba').innerHTML = areaRhombus(baseRhombus, heightRhombus);
}

