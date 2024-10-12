// Constante de Coulomb
const k = 8.99e9; // N·m²/C²

function calcular() {
    // Obtener los valores de la carga y distancia del formulario
    let carga = parseFloat(document.getElementById("carga").value);
    let distancia = parseFloat(document.getElementById("distancia").value);

    // Validar que los datos sean correctos
    if (isNaN(carga) || isNaN(distancia) || distancia <= 0) {
        alert("Por favor, ingrese valores válidos para la carga y la distancia.");
        return;
    }

    // Cálculo del Campo Eléctrico
    let campoElectrico = (k * Math.abs(carga)) / (distancia ** 2);
    document.getElementById("campoElectrico").innerText = "Campo Eléctrico: " + campoElectrico.toFixed(2) + " N/C";

    // Cálculo del Potencial Eléctrico
    let potencialElectrico = (k * carga) / distancia;
    document.getElementById("potencialElectrico").innerText = "Potencial Eléctrico: " + potencialElectrico.toFixed(2) + " V";

    // Si tuvieras otra carga q2, podrías calcular la Fuerza y la Energía Potencial
    let q2 = 1e-6; // Carga hipotética en Coulombs
    let fuerzaElectrica = (k * Math.abs(carga * q2)) / (distancia ** 2);
    document.getElementById("fuerzaElectrica").innerText = "Fuerza Eléctrica: " + fuerzaElectrica.toFixed(2) + " N";

    let energiaPotencial = (k * carga * q2) / distancia;
    document.getElementById("energiaPotencial").innerText = "Energía Potencial Eléctrica: " + energiaPotencial.toFixed(2) + " J";
}
