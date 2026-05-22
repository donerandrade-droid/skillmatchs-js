// RF01 - Criando perfil do candidato
// array e objeto

const candidato = {
    nome: "Doner Andrade",
    area: "Front-End",
    habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "kanban"],
    experineciaMeses: 3,
};

// RF02 - Criando uma lista de vagas
// array, objeto, array de objetos, 
const vagas = [
    {
        id: 1,
        empresa: "TechStart",
        cargo: "Desenvolvedor Front-End Júnior",
        requisitos: ["JavaScript", "GitHub", "Lógica de Programação"],
        salario: 2800,
        modalidade: "Remoto",
    },
    {
        id: 2,
        empresa: "CodeLab",
        cargo: "Estágio Front-End",
        requisitos: ["JavaScript", "Kanban", "GitHub"],
        salario: 1800,
        modalidade: "Hibrido",
    },
    {
        id: 3,
        empresa: "WebSolutions",
        cargo: "Programador JavaScript Júnior",
        requisitos: ["JavaScript", "Arrays", "Objetos", "Funcões"],
        salario: 3000,
        modalidade: "Presencial",
    }

];

// RF03 - Calcular compatibilidade com cada vaga

function analisarVaga(vaga) {
    const habilidadesEncontradas = vaga.requisitos.filter(req =>
        candidato.habilidades.includes(req)
    );
    const habilidadesFaltantes = vaga.requisitos.filter(req =>
        !candidato.habilidades.includes(req)
    );

    const totalRequisitos = vaga.requisitos.length;
    const compatibilidade = Math.round((habilidadesEncontradas.length / totalRequisitos) * 100);


// RF04 - Classificar vagas por compatibilidade
        
let classificacao = "";
if (compatibilidade >= 80) {
    classificacao = "Alta Compatibilidade";
} else if (compatibilidade >= 50) {
    classificacao = "Média Compatibilidade";
} else {
    classificacao = "Baixa Compatibilidade";
}

// RF05 - Exibir resultados
  console.log('Nome do candidato: ' + candidato.nome);
    console.log(`Empresa: ${vaga.empresa}`);
    console.log(`Cargo: ${vaga.cargo}`);
    console.log(`Compatibilidade: ${compatibilidade}%`);
    console.log(`Habilidades encontradas: ${habilidadesEncontradas.join(", ")}`);
    console.log(`Habilidades faltantes: ${habilidadesFaltantes.join(", ") || "Nenhuma!"}`);
    console.log(`Classificação: ${classificacao}`);
    console.log("---");
}
// RF06 - Vaga com maior compatibilidade
function calcularCompatibilidade(vaga) {
    const atendidos = vaga.requisitos.filter(req =>
        candidato.habilidades.includes(req)
    ).length;
    return Math.round((atendidos / vaga.requisitos.length) * 100);
}

const vagaMaisCompativel = vagas.reduce((melhor, vagaAtual) => {
    const percentualAtual = calcularCompatibilidade(vagaAtual);
    const percentualMelhor = calcularCompatibilidade(melhor);
    return percentualAtual > percentualMelhor ? vagaAtual : melhor;
});

const melhorPercentual = calcularCompatibilidade(vagaMaisCompativel);

// RF07 - Recomendação de estudo

const habilidadesFaltantes = [];

vagas.map(vaga => vaga.requisitos).forEach(requisitos => {
    requisitos.forEach(req => {
        if (!candidato.habilidades.includes(req) && !habilidadesFaltantes.includes(req)) {
            habilidadesFaltantes.push(req);
        }
    });
});

// RF09 - Criar classe
class vaga {
    constructor(empresa, cargo, salario){
        this.empresa = empresa;
        this.cargo = cargo;
        this.salario = salario;
    }
    exibirResumo(){
        return `vaga: ${this.cargo} na empresa ${this.empresa} com salário de R$${this.salario}`;
    }
}

class vagaFrontEnd extends vaga {
    constructor(empresa, cargo, salario, nivel){
        super(empresa, cargo, salario); 
        this.nivel = nivel;
    }
    exibirNivel(){
        return `Nível: ${this.nivel}`;
    }     
}
const vaga1 = new vagaFrontEnd("DevHouse","Desenvovedor Front-End", 3500, "Júnior");

// RF13 - Closure
function criarContadorDeAnalises() {
    let total = 0; // essa variável fica "presa" dentro da função
    return function() {
        total++; // a cada chamada, soma 1 no total guardado
        return total;
    };
}

const contador = criarContadorDeAnalises();

//RF12 - callback
function finalizarAnalise(nomeCandidato, callback) {
    console.log("\nanálise técnica do SkillMatch finalizada com sucesso.");
    callback(nomeCandidato);
}
function exibirMensagemFinal(nome){
    console.log(`[Sistema]:, ${nome}, revise suas habilidades faltantes!`);
  
}
// RF14 - Promise e async/await
function buscarVagasSimuladas() {
    return new Promise((resolve) => {
        console.log("Conectando ao servidor de vagas...");
        setTimeout(() => {
            resolve(vagas);
        }, 2000); // simula um atraso de 2 segundos 
    });
}

async function iniciarSistema() {
    console.log("=== INICIANDO SISTEMA SKILLMATCH ===");

    const vagasCarregadas = await buscarVagasSimuladas();
    console.log("Vagas carregadas com sucesso!\n");

    console.log("=== Vaga mais compatível ===");
    console.log(`Empresa: ${vagaMaisCompativel.empresa}`);
    console.log(`Cargo: ${vagaMaisCompativel.cargo}`);
    console.log(`Compatibilidade: ${melhorPercentual}%`);
    console.log("---");

    vagasCarregadas.forEach(vaga => {
        analisarVaga(vaga);
        contador();
    });

    console.log("\n=== Recomendação de estudo ===");
    console.log(`Priorize estudar: ${habilidadesFaltantes.join(", ")}`);

    console.log("\n=== Teste de Classe ===");
    console.log(vaga1.exibirResumo());
    console.log(vaga1.exibirNivel());

    const totalAnalisadas = contador() - 1;
    console.log(`\nTotal de vagas analisadas pelo motor: ${totalAnalisadas}`);

    
    finalizarAnalise(candidato.nome, exibirMensagemFinal);
}

// inicia todo o sistema
iniciarSistema();