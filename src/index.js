import areaParallelogram from "./areaParallelogram";
import areaRectangle from "./areaRectangle";
import areaRhombus from "./areaRhombus";
import areaSquare from "./areaSquare";



window.showResultInDomKvadrat = () => {
    const squareSide = document.getElementById('dlinaStoroniKvadrata').value;
    // eslint-disable-next-line no-undef
    document.getElementById('ploschadKvadrata').innerHTML = areaSquare(squareSide);
}

window.showResultInDomPriamougolnika = () => {
    const firstSide = document.getElementById('pervayaStoronaPriamougolnika').value;
    const secondSide = document.getElementById('drugayaStoronaPriamougolnika').value;
    document.getElementById('ploschadPriamougolnika').innerHTML = areaRectangle(firstSide, secondSide);
};

window.showResultInDomParalelograma = () => {
    const sideLength = document.getElementById('dlinaStoronyParalelograma').value;
    const heightLength = document.getElementById('dlinaVisotyParalelograma').value;
    // eslint-disable-next-line no-undef
    document.getElementById('ploschadParalelograma').innerHTML = areaParallelogram(sideLength, heightLength);
};

window.showResultInDomRomba = () => {
    const baseRhombus = document.getElementById('dlinaStoronyRomba').value;
    const heightRhombus = document.getElementById('dlinaVisotyRomba').value;
    document.getElementById('ploschadRomba').innerHTML = areaRhombus(baseRhombus, heightRhombus);
};

