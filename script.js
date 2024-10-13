function mostrarInputs() {
    const operacion = document.getElementById("operacion").value;
    const inputFields = document.getElementById("inputFields");
    const instructivo = document.getElementById("instructivo");
    inputFields.innerHTML = ""; // Limpiar campos anteriores
    instructivo.innerHTML = ""; // Limpiar el instructivo anterior

    let html = "";
    let instruccion = "";

    if (operacion === "campo") {
        html += `
            <input type="number" id="carga" placeholder="Carga (C)" required>
            <label for="carga">Carga (C)</label>
            <input type="number" id="distancia" placeholder="Distancia (m)" required>
            <label for="distancia">Distancia (m)</label>
        `;
        instruccion = "Introduce la carga (en Coulombs) y la distancia (en metros) en notación científica, por ejemplo, 1.5e-6 para 1.5 x 10<sup>-6</sup> C.";
    } else if (operacion === "potencial") {
        html += `
            <input type="number" id="cargaPotencial" placeholder="Carga (C)" required>
            <label for="cargaPotencial">Carga (C)</label>
            <input type="number" id="distanciaPotencial" placeholder="Distancia (m)" required>
            <label for="distanciaPotencial">Distancia (m)</label>
        `;
        instruccion = "Introduce la carga (en Coulombs) y la distancia (en metros) en notación científica, por ejemplo, 1.5e-6 para 1.5 x 10<sup>-6</sup> C.";
    } else if (operacion === "diferenciaPotencial") {
        html += `
            <input type="number" id="potencialFinal" placeholder="Potencial Final (V)" required>
            <label for="potencialFinal">Potencial Final (V)</label>
            <input type="number" id="potencialInicial" placeholder="Potencial Inicial (V)" required>
            <label for="potencialInicial">Potencial Inicial (V)</label>
        `;
        instruccion = "Introduce los potenciales (en Volts) en notación científica, por ejemplo, 3.0e3 para 3000 V.";
    } else if (operacion === "trabajo") {
        html += `
            <input type="number" id="cargaTrabajo" placeholder="Carga (C)" required>
            <label for="cargaTrabajo">Carga (C)</label>
            <input type="number" id="diferenciaPotencialTrabajo" placeholder="Diferencia de Potencial (V)" required>
            <label for="diferenciaPotencialTrabajo">Diferencia de Potencial (V)</label>
        `;
        instruccion = "Introduce la carga (en Coulombs) y la diferencia de potencial (en Volts) en notación científica, por ejemplo, 2.5e2 para 250 V.";
    } else if (operacion === "fuerza") {
        html += `
            <input type="number" id="cargaFuerza1" placeholder="Carga 1 (C)" required>
            <label for="cargaFuerza1">Carga 1 (C)</label>
            <input type="number" id="cargaFuerza2" placeholder="Carga 2 (C)" required>
            <label for="cargaFuerza2">Carga 2 (C)</label>
            <input type="number" id="distanciaFuerza" placeholder="Distancia (m)" required>
            <label for="distanciaFuerza">Distancia (m)</label>
        `;
        instruccion = "Introduce las cargas (en Coulombs) y la distancia (en metros) en notación científica, por ejemplo, 5.0e-9 para 5.0 x 10<sup>-9</sup> C.";
    } else if (operacion === "energia") {
        html += `
            <input type="number" id="cargaEnergia" placeholder="Carga (C)" required>
            <label for="cargaEnergia">Carga (C)</label>
            <input type="number" id="potencialEnergia" placeholder="Potencial (V)" required>
            <label for="potencialEnergia">Potencial (V)</label>
        `;
        instruccion = "Introduce la carga (en Coulombs) y el potencial (en Volts) en notación científica, por ejemplo, 1.2e1 para 12 V.";
    }

    inputFields.innerHTML = html;
    instructivo.innerHTML = instruccion; // Muestra la instrucción
}

function calcular() {
    const operacion = document.getElementById("operacion").value;
    let resultado;

    if (operacion === "campo") {
        const carga = parseFloat(document.getElementById("carga").value);
        const distancia = parseFloat(document.getElementById("distancia").value);
        resultado = (9 * Math.pow(10, 9) * carga) / Math.pow(distancia, 2); // Campo Eléctrico
    } else if (operacion === "potencial") {
        const carga = parseFloat(document.getElementById("cargaPotencial").value);
        const distancia = parseFloat(document.getElementById("distanciaPotencial").value);
        resultado = (9 * Math.pow(10, 9) * carga) / distancia; // Potencial Eléctrico
    } else if (operacion === "diferenciaPotencial") {
        const potencialFinal = parseFloat(document.getElementById("potencialFinal").value);
        const potencialInicial = parseFloat(document.getElementById("potencialInicial").value);
        resultado = potencialFinal - potencialInicial; // Diferencia de Potencial
    } else if (operacion === "trabajo") {
        const carga = parseFloat(document.getElementById("cargaTrabajo").value);
        const diferenciaPotencial = parseFloat(document.getElementById("diferenciaPotencialTrabajo").value);
        resultado = carga * diferenciaPotencial; // Trabajo
    } else if (operacion === "fuerza") {
        const carga1 = parseFloat(document.getElementById("cargaFuerza1").value);
        const carga2 = parseFloat(document.getElementById("cargaFuerza2").value);
        const distancia = parseFloat(document.getElementById("distanciaFuerza").value);
        resultado = (9 * Math.pow(10, 9) * carga1 * carga2) / Math.pow(distancia, 2); // Fuerza Eléctrica
    } else if (operacion === "energia") {
        const carga = parseFloat(document.getElementById("cargaEnergia").value);
        const potencial = parseFloat(document.getElementById("potencialEnergia").value);
        resultado = carga * potencial; // Energía Potencial Eléctrica
    }

    document.getElementById("resultado").innerText = `Resultado: ${resultado.toExponential(2)} N/C`; // Muestra el resultado en notación científica
}
