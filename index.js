class Votacion {
    constructor(candidatos) {
        this.resultadosVotacion = {};
        this.candidatos = candidatos;
        this.inicializarResultados();
        this.crearBotonesVotacion();
    }

    inicializarResultados() {
        this.candidatos.forEach(candidato => {
            this.resultadosVotacion[candidato] = 0;
        });
    }

    crearBotonesVotacion() {
        const equipos = document.getElementById("votacion-equipos");

        this.candidatos.forEach(candidato => {
            const button = document.createElement("button");
            button.textContent = candidato;
            button.addEventListener("click", () => this.votar(candidato));
            equipos.appendChild(button);
        });
    }

    votar(candidato) {
        this.resultadosVotacion[candidato]++;
        console.log(`Voto registrado para ${candidato}`);
        console.log("Resultados de la votación:", this.resultadosVotacion);
    }
}

// Lista de candidatos
const candidatos = ["Fluminense", "Huachipato", "River Plate", "Nacional", "Peñarol", "Alianza de Lima", "Boca Juniors", "Cerro Porteño"];

// Crear una instancia de Votacion
const votacion = new Votacion(candidatos);