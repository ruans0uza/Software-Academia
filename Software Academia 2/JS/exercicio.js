
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pegarExerciciosAleatorio(array) {
    return array[getRandomInt(0, array.length - 1)];
}


var exercicios = [
    'exerciciosPeito',
    'exerciciosTriceps',
    'exerciciosCosta',
    'exerciciosBiceps',
    'exerciciosPerna',
    'exerciciosOmbro',
    'exerciciosPanturilha'
];


//Math.floor(Math.random() * (exercicios.length - 0 + 1))
var exerciciosTipo = {
    'exerciciosPeito': [
        "Supino Reto",
        "Supino Inclinado",
        "Supino Declinado",
        "Crucifixo com Halteres",
        "Pulldown com Corda",
        "Flexões(Push - ups)",
        "Máquina de Supino",
        "Peck Deck",
        "CrossOver"
    ],
    'exerciciosTriceps': [
        "Tríceps Corda ",
        "Mergulhos em Paralelas ",
        "Extensão de Cotovelo em Pé ",
        "Tríceps Testa ",
        "Extensão de Tríceps deitado ",
        "Fundições ",
        "Pulldown de Tríceps na Polia Alta ",
        "Tríceps Unilateral com Halteres ",
        "Puxada na Máquina para Tríceps ",
        "Mergulho no Banco "
    ],
    'exerciciosCosta': [
        "Face Pulls com Corda",
        "Puxada na Máquina com Pegada Neutra",
        "Hiperextensões",
        "Remada Curvada com Pegada Ampla",
        "Puxada Alta na Máquina",
        "Puxada na Polia Baixa",
        "Remada Unilateral com Halteres",
        "Levantamento Terra(Deadlift)",
        "Barra Fixa Supinada"
    ],
    'exerciciosBiceps': [
        "Rosca com Barra ",
        "Rosca com Halteres ",
        "Martelo com Halteres ",
        "Rosca Scott ",
        "Rosca Concentrado ",
        "Rosca na Máquina ",
        "Rosca 21s ",
        "Rosca Inversa "
    ],
    'exerciciosPerna': [
        "Agachamento(Squat)",
        "Leg Press",
        "Avanço(Lunge)",
        "Cadeira Extensora(Leg Extension)",
        "Flexora(Leg Curl)",
        "Agachamento Frontal(Front Squat)",
        "Prensa de Quadril(Hip Thrust)",
        "Cadeira Adutora / Abdutora(Inner / Outer Thigh Machine)",
        "Passada na Esteira(Treadmill Walking Lunges)",
        "Agachamento Búlgaro(Bulgarian Split Squat)",
        "Elevação de Panturrilhas(Calf Raises)",
        "Agachamento de Pernas Rígidas(Stiff - Legged Deadlift)",
        "Máquina de Adutores Sentados(Seated Leg Adductor Machine)",
        "Máquina de Abdutores(Hip Abductor Machine)",
        "Levantamento Terra(Deadlift)"
    ],
    'exerciciosOmbro': [
        "Desenvolvimento Militar",
        "Elevação Lateral",
        "Elevação Frontal",
        "Desenvolvimento Arnold",
        "Elevação Posterior",
        "Encolhimento de Ombros",
        "Remada Alta",
        "Press de Halteres"
    ],
    'exerciciosPanturilha': [
        "Elevação de Panturrilhas em Pé",
        "Elevação de Panturrilhas Sentado",
        "Elevação de Panturrilhas Unilateral",
        "Elevação de Panturrilhas em Máquina Smith",
        "Salto de Panturrilhas",
        "Treino de Panturrilha com Bosu (meia bola)",
        "Treino em Pirâmide",
    ]
}

function gerarTreino() {
    const tabelaTreino = document.getElementById("tabelaTreino");
    tabelaTreino.innerHTML = "<tr><th>Dia</th><th>Exercício</th></tr>";
    //var tiposTreinoKeys = Object.keys(exercicios);
    var qtdExerciciosDia = 6;
    var treinosSorteados = [];

    function pegarTreinoDia(){
        var tipoTreinoDia = exercicios[getRandomInt(0, Object.keys(exercicios).length - 1)];
        if(treinosSorteados.indexOf(tipoTreinoDia) == -1){
            treinosSorteados.push(tipoTreinoDia);
            var arrayTreinoDia = exerciciosTipo[tipoTreinoDia];
            return { 'array': arrayTreinoDia, 'tipo': tipoTreinoDia };
        }else{
            return pegarTreinoDia();
        }
    }

    for (let i = 1; i <= 6; i++) {
        const diaDaSemana = obterDiaDaSemana(i);
        var arrayTreinoDia = pegarTreinoDia();
        var exerciciosDia = '';

        for (let countExer = 0; countExer < qtdExerciciosDia; countExer++) {
            exerciciosDia += pegarExerciciosAleatorio(arrayTreinoDia['array']) + '<br>';
        }

        tabelaTreino.innerHTML += `
        <tr>
            <td>${diaDaSemana}<br>${arrayTreinoDia['tipo'].replace('exercicios', '')}</td>
            <td>${exerciciosDia}</td>
        </tr>
            `;
    }
}



var exerciciosEscolhidos = {};
function pegarTreinoDia() {
    var tipoTreinoDia = exercicios[getRandomInt(0, exercicios.length - 1)];
    if (treinosSorteados.indexOf(tipoTreinoDia) == -1) {
        treinosSorteados.push(tipoTreinoDia);

       
        if (!exerciciosEscolhidos[tipoTreinoDia]) {
            exerciciosEscolhidos[tipoTreinoDia] = [];
        }

        var arrayTreinoDia = exerciciosTipo[tipoTreinoDia];
        var exerciciosNaoEscolhidos = arrayTreinoDia.filter(exercicio => !exerciciosEscolhidos[tipoTreinoDia].includes(exercicio));

       
        if (exerciciosNaoEscolhidos.length === 0) {
            exerciciosEscolhidos[tipoTreinoDia] = [];
            exerciciosNaoEscolhidos = arrayTreinoDia;
        }

        var exercicioEscolhido = pegarExerciciosAleatorio(exerciciosNaoEscolhidos);
        exerciciosEscolhidos[tipoTreinoDia].push(exercicioEscolhido);

        return { 'array': arrayTreinoDia, 'tipo': tipoTreinoDia, 'exercicio': exercicioEscolhido };
    } else {
        return pegarTreinoDia();
    }
}

function obterDiaDaSemana(numeroDia) {
    const diasSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return diasSemana[numeroDia - 1];
}