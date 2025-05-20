const perguntas = [
    {
        pergunta: "O que significa a sigla SENAI?",
        opcoes: [
            "Serviço Nacional de Aprendizagem Industrial",
            "Secretaria Nacional de Administração e Inovação",
            "Sociedade Nacional de Ensino e Instrução",
            "Sistema Nacional de Avaliação Industrial"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o foco principal dos cursos do SENAI?",
        opcoes: [
            "Ensino de artes",
            "Formação técnica e profissional para a indústria",
            "Cursos de culinária",
            "Educação infantil"
        ],
        correta: 1
    },
    {
        pergunta: "Qual dessas áreas é comum nos cursos do SENAI?",
        opcoes: [
            "Indústria e tecnologia",
            "Medicina",
            "Direito penal",
            "Arquitetura"
        ],
        correta: 0
    },
    {
        pergunta: "O SENAI é mantido por qual setor?",
        opcoes: [
            "Governo federal",
            "Sistema S, ligado à indústria",
            "Escolas particulares",
            "ONGs internacionais"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a idade mínima geralmente exigida para cursos técnicos do SENAI?",
        opcoes: [
            "10 anos",
            "14 anos",
            "16 anos",
            "18 anos"
        ],
        correta: 1
    },
    {
        pergunta: "O SENAI oferece cursos nas modalidades:",
        opcoes: [
            "Somente presenciais",
            "Somente online",
            "Presenciais e a distância (EAD)",
            "Somente por correspondência"
        ],
        correta: 2
    },
    {
        pergunta: "Qual documento é geralmente necessário para se inscrever no SENAI?",
        opcoes: [
            "Carteira de trabalho",
            "Passaporte",
            "RG e CPF",
            "Carteira de vacinação"
        ],
        correta: 2
    },
    {
        pergunta: "Além de cursos, o SENAI também oferece:",
        opcoes: [
            "Shows musicais",
            "Treinamentos esportivos",
            "Serviços técnicos e de inovação para indústrias",
            "Aulas de teatro"
        ],
        correta: 2
    },
    {
        pergunta: "O SENAI pertence ao mesmo sistema de qual outra instituição?",
        opcoes: [
            "SENAC",
            "SENAR",
            "SESI",
            "UNESCO"
        ],
        correta: 2
    },
    {
        pergunta: "O SENAI é reconhecido por sua qualidade em:",
        opcoes: [
            "Educação para o setor industrial",
            "Educação artística",
            "Formação de médicos",
            "Cursos de idiomas estrangeiros"
        ],
        correta: 0
    }
];


let indice = 0;
let acertos = 0;

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const finalEl = document.getElementById("final");
const barra = document.getElementById("barra");
const totalEl = document.getElementById("total");
const acertosEl = document.getElementById("acertos");
const proximaBtn = document.getElementById("proxima");

proximaBtn.addEventListener("click", () => {
  indice++;
  if (indice < perguntas.length) {
    carregarPergunta();
  } else {
    mostrarResultado();
  }
  proximaBtn.classList.add("esconder");
});

function carregarPergunta() {
  const q = perguntas[indice];

  perguntaEl.classList.remove("mostrar");
  opcoesEl.classList.remove("mostrar");

  setTimeout(() => {
    perguntaEl.textContent = q.pergunta;
    opcoesEl.innerHTML = "";

    q.opcoes.forEach((texto, i) => {
      const btn = document.createElement("button");
      btn.className = "opcao";
      btn.textContent = texto;
      btn.onclick = () => verificarResposta(i, q.correta, btn);
      opcoesEl.appendChild(btn);
    });

    const progresso = ((indice) / perguntas.length) * 100;
    barra.style.width = `${progresso}%`;

    perguntaEl.classList.add("mostrar");
    opcoesEl.classList.add("mostrar");
  }, 300);
}

function verificarResposta(i, correta, botaoClicado) {
  const botoes = document.querySelectorAll(".opcao");

  botoes.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correta) btn.classList.add("correta");
    else if (btn === botaoClicado) btn.classList.add("errada");
  });

  if (i === correta) acertos++;
  proximaBtn.classList.remove("esconder");
}

function mostrarResultado() {
  document.getElementById("quiz")?.classList.add("esconder");
  perguntaEl.classList.add("esconder");
  opcoesEl.classList.add("esconder");
  proximaBtn.classList.add("esconder");
  finalEl.classList.remove("esconder");
  acertosEl.textContent = acertos;
  totalEl.textContent = perguntas.length;
  barra.style.width = "100%";
}

function reiniciarQuiz() {
  indice = 0;
  acertos = 0;
  finalEl.classList.add("esconder");
  perguntaEl.classList.remove("esconder");
  opcoesEl.classList.remove("esconder");
  carregarPergunta();
}

carregarPergunta();