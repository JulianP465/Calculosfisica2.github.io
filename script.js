// Función para mostrar los campos de entrada según la operación seleccionada
function solicitarDatos(operacion) {
    const datos = document.getElementById("datos");
    datos.innerHTML = ""; // Limpiar los campos anteriores

    if (operacion === "campo electrico") {
        datos.innerHTML = `
            <label for="carga">Carga (Coulombs):</label>
            <input type="number" id="carga" step="any">
            <label for="distancia">Distancia (metros):</label>
            <input type="number" id="distancia" step="any">
        `;
    } else if (operacion === "potencial electrico") {
        datos.innerHTML = `
            <label for="carga">Carga (Coulombs):</label>
            <input type="number" id="carga" step="any">
            <label for="distancia">Distancia (metros):</label>
            <input type="number" id="distancia" step="any">
        `;
    } else if (operacion === "diferencia de potencial") {
        datos.innerHTML = `
            <label for="potencialA">Potencial en A (Volts):</label>
            <input type="number" id="potencialA" step="any">
            <label for="potencialB">Potencial en B (Volts):</label>
            <input type="number" id="potencialB" step="any">
        `;
    } else if (operacion === "trabajo") {
        datos.innerHTML = `
            <label for="carga">Carga (Coulombs):</label>
            <input type="number" id="carga" step="any">
            <label for="potencialA">Potencial inicial (Volts):</label>
            <input type="number" id="potencialA" step="any">
            <label for="potencialB">Potencial final (Volts):</label>
            <input type="number" id="potencialB" step="any">
        `;
    } else if (operacion === "fuerza electrica") {
        datos.innerHTML = `
            <label for="carga1">Carga 1 (Coulombs):</label>
            <input type="number" id="carga1" step="any">
            <label for="carga2">Carga 2 (Coulombs):</label>
            <input type="number" id="carga2" step="any">
            <label for="distancia">Distancia (metros):</label>
            <input type="number" id="distancia" step="any">
        `;
    } else if (operacion === "energia potencial") {
        datos.innerHTML = `
            <label for="carga1">Carga 1 (Coulombs):</label>
            <input type="number" id="carga1" step="any">
            <label for="carga2">Carga 2 (Coulombs):</label>
            <input type="number" id="carga2" step="any">
            <label for="distancia">Distancia (metros):</label>
            <input type="number" id="distancia" step="any">
        `;
    }
}

// Función para realizar el cálculo y mostrar los resultados en notación científica
function calcular() {
    const operacion = document.getElementById("operaciones").value;
    let resultado = 0;

    if (operacion === "campo electrico") {
        const carga = parseFloat(document.getElementById("carga").value);
        const distancia = parseFloat(document.getElementById("distancia").value);
        if (!isNaN(carga) && !isNaN(distancia) && distancia !== 0) {
            resultado = (8.99e9 * carga) / (distancia ** 2); // Fórmula del campo eléctrico
        }
    } else if (operacion === "potencial electrico") {
        const carga = parseFloat(document.getElementById("carga").value);
        const distancia = parseFloat(document.getElementById("distancia").value);
        if (!isNaN(carga) && !isNaN(distancia) && distancia !== 0) {
            resultado = (8.99e9 * carga) / distancia; // Fórmula del potencial eléctrico
        }
    } else if (operacion === "diferencia de potencial") {
        const potencialA = parseFloat(document.getElementById("potencialA").value);
        const potencialB = parseFloat(document.getElementById("potencialB").value);
        if (!isNaN(potencialA) && !isNaN(potencialB)) {
            resultado = potencialB - potencialA; // Diferencia de potencial
        }
    } else if (operacion === "trabajo") {
        const carga = parseFloat(document.getElementById("carga").value);
        const potencialA = parseFloat(document.getElementById("potencialA").value);
        const potencialB = parseFloat(document.getElementById("potencialB").value);
        if (!isNaN(carga) && !isNaN(potencialb) && !isNaN(potencialB)) {
            resultado = carga * (potencialB - potencialA); // Trabajo realizado
        }
    } else if (operacion === "fuerza electrica") {
        const carga1 = parseFloat(document.getElementById("carga1").value);
        const carga2 = parseFloat(document.getElementById("carga2").value);
        const distancia = parseFloat(document.getElementById("distancia").value);
        if (!isNaN(carga1) && !isNaN(carga2) && !isNaN(distancia) && distancia !== 0) {
            resultado = (8.99e9 * carga1 * carga2) / (distancia ** 2); // Fuerza eléctrica (Ley de Coulomb)
        }
    } else if (operacion === "energia potencial") {
        const carga1 = parseFloat(document.getElementById("carga1").value);
        const carga2 = parseFloat(document.getElementById("carga2").value);
        const distancia = parseFloat(document.getElementById("distancia").value);
        if (!isNaN(carga1) && !isNaN(carga2) && !isNaN(distancia) && distancia !== 0) {
            resultado = (8.99e9 * carga1 * carga2) / distancia; // Energía potencial eléctrica
        }
    }

    // Mostrar el resultado en notación científica
    if (resultado !== 0) {
        document.getElementById("resultado").innerHTML = `Resultado: ${resultado.toExponential(2)}`;
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa valores válidos.";
    }

}
function preguntarIA() {
    const preguntas = document.getElementById("preguntas").value;
    const respuestaIA = document.getElementById("respuestaIA");
    
    const respuestas = {
        "campo electrico": "Es una región alrededor de una carga eléctrica donde se ejercen fuerzas sobre otras cargas.",
        "potencial electrico": "Es la energía potencial por unidad de carga en un punto en el campo eléctrico.",
        "diferencia de potencial": "Es la variación del potencial eléctrico entre dos puntos en un campo eléctrico.",
        "trabajo": "Es la energía transferida a un objeto al aplicarle una fuerza a lo largo de una distancia.",
        "energia potencial": "Es la energía almacenada en una carga debido a su posición en un campo eléctrico.",
        "fuerza electrica": "Es la fuerza de atracción o repulsión entre cargas eléctricas.",
        "ley de coulomb": "Establece que la fuerza entre dos cargas es directamente proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia entre ellas.",
        "ley de gauss": "Afirma que el flujo eléctrico a través de una superficie cerrada es proporcional a la carga encerrada.",
        "campo magnetico": "Es una región donde una carga en movimiento experimenta una fuerza magnética.",
        "energia cinetica": "Es la energía que posee un objeto debido a su movimiento.",
        "energia mecanica": "Es la suma de la energía cinética y la energía potencial de un sistema.",
        "conservacion de energia": "Establece que la energía no se crea ni se destruye, solo se transforma de una forma a otra.",
        "fuerza gravitatoria": "Es la atracción que experimentan dos cuerpos debido a su masa.",
        "principio de superposicion": "Establece que en un sistema lineal, la respuesta total es la suma de las respuestas individuales a las fuerzas aplicadas.",
        "dipolo electrico": "Es un sistema compuesto por dos cargas de igual magnitud y signo opuesto separadas por una distancia.",
        "potencial gravitatorio": "Es la energía potencial por unidad de masa en un campo gravitacional.",
        "aceleracion": "Es el cambio de velocidad de un objeto en función del tiempo.",
        "velocidad": "Es la distancia recorrida por un objeto en un tiempo determinado.",
        "aceleracion centripeta": "Es la aceleración dirigida hacia el centro de una trayectoria circular.",
        "energia termica": "Es la energía interna de un sistema debida al movimiento de sus partículas.",
        "presion": "Es la fuerza ejercida por unidad de área sobre una superficie.",
        "conservacion cantidad movimiento": "Establece que la cantidad de movimiento total de un sistema aislado se conserva.",
        "principio de arquimedes": "Establece que un cuerpo sumergido en un fluido experimenta una fuerza de flotación igual al peso del fluido desplazado.",
        "momento de una fuerza": "Es la medida de la tendencia de una fuerza a hacer girar un objeto alrededor de un punto o eje.",
        "principio de inercia": "Establece que un objeto en reposo permanecerá en reposo y un objeto en movimiento continuará en movimiento a menos que actúe sobre él una fuerza externa."
    };

    respuestaIA.innerText = respuestas[preguntas] || "";
}

