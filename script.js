function mostrarDatos(operacion) {
    let html = "";

    switch (operacion) {
        case "campo electrico":
            html = `
                <h3>Cálculo del Campo Eléctrico</h3>
                <label for="carga">Carga (C):</label>
                <input type="number" id="carga" step="any">
                <label for="distancia">Distancia (m):</label>
                <input type="number" id="distancia" step="any">`;
            break;
        case "potencial electrico":
            html = `
                <h3>Cálculo del Potencial Eléctrico</h3>
                <label for="cargaPotencial">Carga (C):</label>
                <input type="number" id="cargaPotencial" step="any">
                <label for="distanciaPotencial">Distancia (m):</label>
                <input type="number" id="distanciaPotencial" step="any">`;
            break;
        case "diferencia de potencial":
            html = `
                <h3>Cálculo de la Diferencia de Potencial</h3>
                <label for="potencialA">Potencial A (V):</label>
                <input type="number" id="potencialA" step="any">
                <label for="potencialB">Potencial B (V):</label>
                <input type="number" id="potencialB" step="any">`;
            break;
        case "trabajo":
            html = `
                <h3>Cálculo del Trabajo</h3>
                <label for="cargaTrabajo">Carga (C):</label>
                <input type="number" id="cargaTrabajo" step="any">
                <label for="diferenciaPotencial">Diferencia de Potencial (V):</label>
                <input type="number" id="diferenciaPotencial" step="any">`;
            break;
        case "energia potencial":
            html = `
                <h3>Cálculo de la Energía Potencial</h3>
                <label for="carga1Energia">Carga 1 (C):</label>
                <input type="number" id="carga1Energia" step="any">
                <label for="carga2Energia">Carga 2 (C):</label>
                <input type="number" id="carga2Energia" step="any">
                <label for="distanciaEnergia">Distancia (m):</label>
                <input type="number" id="distanciaEnergia" step="any">`;
            break;
        case "fuerza electrica":
            html = `
                <h3>Cálculo de la Fuerza Eléctrica</h3>
                <label for="carga1">Carga 1 (C):</label>
                <input type="number" id="carga1" step="any">
                <label for="carga2">Carga 2 (C):</label>
                <input type="number" id="carga2" step="any">
                <label for="distanciaFuerza">Distancia (m):</label>
                <input type="number" id="distanciaFuerza" step="any">`;
            break;
        case "ley de coulomb":
            html = `
                <h3>Cálculo según la Ley de Coulomb</h3>
                <label for="carga1Ley">Carga 1 (C):</label>
                <input type="number" id="carga1Ley" step="any">
                <label for="carga2Ley">Carga 2 (C):</label>
                <input type="number" id="carga2Ley" step="any">
                <label for="distanciaLey">Distancia (m):</label>
                <input type="number" id="distanciaLey" step="any">`;
            break;
        case "potencial electrico debido a una carga puntual":
            html = `
                <h3>Cálculo del Potencial Eléctrico debido a una Carga Puntual</h3>
                <label for="cargaPunto">Carga (C):</label>
                <input type="number" id="cargaPunto" step="any">
                <label for="distanciaPunto">Distancia (m):</label>
                <input type="number" id="distanciaPunto" step="any">`;
            break;
        case "carga de un capacitor":
            html = `
                <h3>Cálculo de la Carga de un Capacitor</h3>
                <label for="capacitancia">Capacitancia (F):</label>
                <input type="number" id="capacitancia" step="any">
                <label for="voltaje">Voltaje (V):</label>
                <input type="number" id="voltaje" step="any">`;
            break;
        case "efecto de la distancia en el campo electrico":
            html = `
                <h3>Efecto de la Distancia en el Campo Eléctrico</h3>
                <label for="cargaCampo">Carga (C):</label>
                <input type="number" id="cargaCampo" step="any">
                <label for="distanciaCampo">Distancia (m):</label>
                <input type="number" id="distanciaCampo" step="any">`;
            break;
        case "carga de un electron":
            html = "<p>La carga de un electrón es -1.602 x 10<sup>-19</sup> C.</p>";
            break;
        case "campo electrico de un dipolo":
            html = `
                <h3>Cálculo del Campo Eléctrico de un Dipolo</h3>
                <label for="dipoloCarga">Carga (C):</label>
                <input type="number" id="dipoloCarga" step="any">
                <label for="dipoloDistancia">Distancia (m):</label>
                <input type="number" id="dipoloDistancia" step="any">`;
            break;
        case "potencial electrico en un conductor":
            html = `
                <h3>Cálculo del Potencial Eléctrico en un Conductor</h3>
                <label for="cargaConductor">Carga (C):</label>
                <input type="number" id="cargaConductor" step="any">
                <label for="distanciaConductor">Distancia (m):</label>
                <input type="number" id="distanciaConductor" step="any">`;
            break;
        case "energia almacenada en un capacitor":
            html = `
                <h3>Cálculo de la Energía Almacenada en un Capacitor</h3>
                <label for="capacitanciaEnergia">Capacitancia (F):</label>
                <input type="number" id="capacitanciaEnergia" step="any">
                <label for="voltajeEnergia">Voltaje (V):</label>
                <input type="number" id="voltajeEnergia" step="any">`;
            break;
        case "efecto de la temperatura en los conductores":
            html = "<p>La resistencia de los conductores aumenta con la temperatura.</p>";
            break;
        case "energia potencial de un sistema de cargas":
            html = `
                <h3>Cálculo de la Energía Potencial de un Sistema de Cargas</h3>
                <label for="carga1Sistema">Carga 1 (C):</label>
                <input type="number" id="carga1Sistema" step="any">
                <label for="carga2Sistema">Carga 2 (C):</label>
                <input type="number" id="carga2Sistema" step="any">
                <label for="distanciaSistema">Distancia (m):</label>
                <input type="number" id="distanciaSistema" step="any">`;
            break;
        case "ley de gauss":
            html = `
                <h3>Cálculo según la Ley de Gauss</h3>
                <label for="cargaGauss">Carga (C):</label>
                <input type="number" id="cargaGauss" step="any">
                <label for="radioGauss">Radio (m):</label>
                <input type="number" id="radioGauss" step="any">`;
            break;
        case "carga por induccion":
            html = "<p>La carga inducida depende de la geometría y el material del conductor.</p>";
            break;
        case "capacitancia de un capacitor":
            html = `
                <h3>Cálculo de la Capacitancia de un Capacitor</h3>
                <label for="cargaCapacitancia">Carga (C):</label>
                <input type="number" id="cargaCapacitancia" step="any">
                <label for="voltajeCapacitancia">Voltaje (V):</label>
                <input type="number" id="voltajeCapacitancia" step="any">`;
            break;
        case "campo electrico de un conductor":
            html = `
                <h3>Cálculo del Campo Eléctrico de un Conductor</h3>
                <label for="cargaConductorCampo">Carga (C):</label>
                <input type="number" id="cargaConductorCampo" step="any">
                <label for="distanciaConductorCampo">Distancia (m):</label>
                <input type="number" id="distanciaConductorCampo" step="any">`;
            break;
        default:
            html = "<p>Operación no válida.</p>";
            break;
    }

    const dataSection = document.getElementById("datos");
    dataSection.innerHTML = html;
}

function calcular(operacion) {
    let resultado = "";

    switch (operacion) {
        case "campo electrico":
            const carga = parseFloat(document.getElementById("carga").value);
            const distancia = parseFloat(document.getElementById("distancia").value);
            if (!isNaN(carga) && !isNaN(distancia) && distancia > 0) {
                const campoElectrico = (8.99 * Math.pow(10, 9)) * (carga / Math.pow(distancia, 2));
                resultado = `Campo Eléctrico: ${campoElectrico.toExponential(2)} N/C`;
            } else {
                resultado = "Por favor, ingrese valores válidos.";
            }
            break;
        case "potencial electrico":
            const cargaPotencial = parseFloat(document.getElementById("cargaPotencial").value);
            const distanciaPotencial = parseFloat(document.getElementById("distanciaPotencial").value);
            if (!isNaN(cargaPotencial) && !isNaN(distanciaPotencial) && distanciaPotencial > 0) {
                const potencialElectrico = (8.99 * Math.pow(10, 9)) * (cargaPotencial / distanciaPotencial);
                resultado = `Potencial Eléctrico: ${potencialElectrico.toExponential(2)} V`;
            } else {
                resultado = "Por favor, ingrese valores válidos.";
            }
            break;
        case "diferencia de potencial":
            const potencialA = parseFloat(document.getElementById("potencialA").value);
            const potencialB = parseFloat(document.getElementById("potencialB").value);
            if (!isNaN(potencialA) && !isNaN(potencialB)) {
                const diferenciaPotencial = potencialA - potencialB;
                resultado = `Diferencia de Potencial: ${diferenciaPotencial.toExponential(2)} V`;
            } else {
                resultado = "Por favor, ingrese valores válidos.";
            }
            break;
        case "trabajo":
            const cargaTrabajo = parseFloat(document.getElementById("cargaTrabajo").value);
            const diferenciaPotencialTrabajo = parseFloat(document.getElementById("diferenciaPotencial").value);
            if (!isNaN(cargaTrabajo) && !isNaN(diferenciaPotencialTrabajo)) {
                const trabajo = cargaTrabajo * diferenciaPotencialTrabajo;
                resultado = `Trabajo: ${trabajo.toExponential(2)} J`;
            } else {
                resultado = "Por favor, ingrese valores válidos.";
            }
            break;
        case "energia potencial":
            const carga1Energia = parseFloat(document.getElementById("carga1Energia").value);
            const carga2Energia = parseFloat(document.getElementById("carga2Energia").value);
            const distanciaEnergia = parseFloat(document.getElementById("distanciaEnergia").value);
            if (!isNaN(carga1Energia) && !isNaN(carga2Energia) && !isNaN(distanciaEnergia) && distanciaEnergia > 0) {
                const energiaPotencial = (8.99 * Math.pow(10, 9)) * (carga1Energia * carga2Energia / distanciaEnergia);
                resultado = `Energía Potencial: ${energiaPotencial.toExponential(2)} J`;
            } else {
                resultado = "Por favor, ingrese valores válidos.";
            }
            break;
        case "fuerza electrica":
            const carga1 = parseFloat(document.getElementById("carga1").value);
            const carga2 = parseFloat(document.getElementById("carga2").value);
            const distanciaFuerza = parseFloat(document.getElementById("distanciaFuerza").value);
            if (!isNaN(carga1) && !isNaN(carga2) && !isNaN(distanciaFuerza) && distanciaFuerza > 0) {
                const fuerzaElectrica = (8.99 * Math.pow(10, 9)) * (carga1 * carga2 / Math.pow(distanciaFuerza, 2));
                resultado = `Fuerza Eléctrica: ${fuerzaElectrica.toExponential(2)} N`;
            } else {
                resultado = "Por favor, ingrese valores válidos.";
            }
            break;
        case "ley de coulomb":
            const carga1Ley = parseFloat(document.getElementById("carga1Ley").value);
            const carga2Ley = parseFloat(document.getElementById("carga2Ley").value);
            const distanciaLey = parseFloat(document.getElementById("distanciaLey").value);
            if (!isNaN(carga1Ley) && !isNaN(carga2Ley) && !isNaN(distanciaLey) && distanciaLey > 0) {
                const fuerzaLey = (8.99 * Math.pow(10, 9)) * (carga1Ley * carga2Ley / Math.pow(distanciaLey, 2));
                resultado = `Fuerza según Ley de Coulomb: ${fuerzaLey.toExponential(2)} N`;
            } else {
                resultado = "Por favor, ingrese valores válidos.";
            }
            break;
        case "potencial electrico debido a una carga puntual":
            const cargaPunto = parseFloat(document.getElementById("cargaPunto").value);
            const distanciaPunto = parseFloat(document.getElementById("distanciaPunto").value);
            if (!isNaN(cargaPunto) && !isNaN(distanciaPunto) && distanciaPunto > 0) {
                const potencialPunto = (8.99 * Math.pow(10, 9)) * (cargaPunto / distanciaPunto);
                resultado = `Potencial Eléctrico de la Carga Puntual: ${potencialPunto.toExponential(2)} V`;
            } else {
                resultado = "Por favor, ingrese valores válidos.";
            }
            break;
        case "carga de un capacitor":
            const capacitancia = parseFloat(document.getElementById("capacitancia").value);
            const voltaje = parseFloat(document.getElementById("voltaje").value);
            if (!isNaN(capacitancia) && !isNaN(voltaje)) {
                const cargaCapacitor = capacitancia * voltaje;
                resultado = `Carga de un Capacitor: ${cargaCapacitor.toExponential(2)} C`;
            } else {
                resultado = "Por favor, ingrese valores válidos.";
            }
            break;
        case "efecto de la distancia en el campo electrico":
            const cargaCampo = parseFloat(document.getElementById("cargaCampo").value);
            const distanciaCampo = parseFloat(document.getElementById("distanciaCampo").value);
            if (!isNaN(cargaCampo) && !isNaN(distanciaCampo) && distanciaCampo > 0) {
                const campoCampo = (8.99 * Math.pow(10, 9)) * (cargaCampo / Math.pow(distanciaCampo, 2));
                resultado = `Campo Eléctrico: ${campoCampo.toExponential(2)} N/C`;
            } else {
                resultado = "Por favor, ingrese valores válidos.";
            }
            break;
        case "carga de un electron":
            resultado = "La carga de un electrón es -1.602 x 10<sup>-19</sup> C.";
            break;
        case "campo electrico de un dipolo":
            const dipoloCarga = parseFloat(document.getElementById("dipoloCarga").value);
            const dipoloDistancia = parseFloat(document.getElementById("dipoloDistancia").value);
            if (!isNaN(dipoloCarga) && !isNaN(dipoloDistancia) && dipoloDistancia > 0) {
                // Aquí puedes calcular el campo eléctrico de un dipolo. 
                const campoDipolo = (1 / (4 * Math.PI * 8.85 * Math.pow(10, -12))) * (2 * dipoloCarga) / Math.pow(dipoloDistancia, 3);
                resultado = `Campo Eléctrico del Dipolo: ${campoDipolo.toExponential(2)} N/C`;
            } else {
                resultado = "Por favor, ingrese valores válidos.";
            }
            break;
        case "potencial electrico en un conductor":
            const cargaConductor = parseFloat(document.getElementById("cargaConductor").value);
            const distanciaConductor = parseFloat(document.getElementById("distanciaConductor").value);
            if (!isNaN(cargaConductor) && !isNaN(distanciaConductor) && distanciaConductor > 0) {
                const potencialConductor = (8.99 * Math.pow(10, 9)) * (cargaConductor / distanciaConductor);
                resultado = `Potencial Eléctrico en un Conductor: ${potencialConductor.toExponential(2)} V`;
            } else {
                resultado = "Por favor, ingrese valores válidos.";
            }
            break;
        case "energia almacenada en un capacitor":
            const capacitanciaEnergia = parseFloat(document.getElementById("capacitanciaEnergia").value);
            const voltajeEnergia = parseFloat(document.getElementById("voltajeEnergia").value);
            if (!isNaN(capacitanciaEnergia) && !isNaN(voltajeEnergia)) {
                const energiaCapacitor = 0.5 * capacitanciaEnergia * Math.pow(voltajeEnergia, 2);
                resultado = `Energía Almacenada en un Capacitor: ${energiaCapacitor.toExponential(2)} J`;
            } else {
                resultado = "Por favor, ingrese valores válidos.";
            }
            break;
        case "efecto de la temperatura en los conductores":
            resultado = "La resistencia de los conductores aumenta con la temperatura.";
            break;
        case "energia potencial de un sistema de cargas":
            const carga1Sistema = parseFloat(document.getElementById("carga1Sistema").value);
            const carga2Sistema = parseFloat(document.getElementById("carga2Sistema").value);
            const distanciaSistema = parseFloat(document.getElementById("distanciaSistema").value);
            if (!isNaN(carga1Sistema) && !isNaN(carga2Sistema) && !isNaN(distanciaSistema) && distanciaSistema > 0) {
                const energiaSistema = (8.99 * Math.pow(10, 9)) * (carga1Sistema * carga2Sistema / distanciaSistema);
                resultado = `Energía Potencial de un Sistema de Cargas: ${energiaSistema.toExponential(2)} J`;
            } else {
                resultado = "Por favor, ingrese valores válidos.";
            }
            break;
        case "ley de gauss":
            const cargaGauss = parseFloat(document.getElementById("cargaGauss").value);
            const radioGauss = parseFloat(document.getElementById("radioGauss").value);
            if (!isNaN(cargaGauss) && !isNaN(radioGauss) && radioGauss > 0) {
                const campoGauss = (1 / (4 * Math.PI * 8.85 * Math.pow(10, -12))) * (cargaGauss / Math.pow(radioGauss, 2));
                resultado = `Campo según la Ley de Gauss: ${campoGauss.toExponential(2)} N/C`;
            } else {
                resultado = "Por favor, ingrese valores válidos.";
            }
            break;
        case "carga por induccion":
            resultado = "La carga inducida depende de la geometría y el material del conductor.";
            break;
        case "capacitancia de un capacitor":
            const cargaCapacitancia = parseFloat(document.getElementById("cargaCapacitancia").value);
            const voltajeCapacitancia = parseFloat(document.getElementById("voltajeCapacitancia").value);
            if (!isNaN(cargaCapacitancia) && !isNaN(voltajeCapacitancia)) {
                const capacitanciaCalculada = cargaCapacitancia / voltajeCapacitancia;
                resultado = `Capacitancia de un Capacitor: ${capacitanciaCalculada.toExponential(2)} F`;
            } else {
                resultado = "Por favor, ingrese valores válidos.";
            }
            break;
        case "campo electrico de un conductor":
            const cargaConductorCampo = parseFloat(document.getElementById("cargaConductorCampo").value);
            const distanciaConductorCampo = parseFloat(document.getElementById("distanciaConductorCampo").value);
            if (!isNaN(cargaConductorCampo) && !isNaN(distanciaConductorCampo) && distanciaConductorCampo > 0) {
                const campoConductor = (1 / (4 * Math.PI * 8.85 * Math.pow(10, -12))) * (cargaConductorCampo / Math.pow(distanciaConductorCampo, 2));
                resultado = `Campo Eléctrico de un Conductor: ${campoConductor.toExponential(2)} N/C`;
            } else {
                resultado = "Por favor, ingrese valores válidos.";
            }
            break;
        default:
            resultado = "Operación no válida.";
            break;
    }

    const resultadoSection = document.getElementById("resultado");
    resultadoSection.innerHTML = resultado;
}
