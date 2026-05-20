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

