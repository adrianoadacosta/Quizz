/** @format */
document.addEventListener('DOMContentLoaded', function () {
	// Declaração de variáveis
	const question = document.querySelector('#question');
	const answersBox = document.querySelector('#answers-box');
	const quizzContainer = document.querySelector('#quizz-container');
	const scoreContainer = document.querySelector('#score-container');
	const letters = ['a', 'b', 'c', 'd'];
	let points = 0;
	let actualQuestion = 0;

	// perguntas
	const questions = [
		{
			question: 'PHP foi desenvolvido para qual fim?',
			answers: [
				{
					answer: 'back-end',
					correct: true,
				},
				{
					answer: 'front-end',
					correct: false,
				},
				{
					answer: 'Sistema operacional',
					correct: false,
				},
				{
					answer: 'Banco de dados',
					correct: false,
				},
			],
		},
		{
			question: 'Uma forma de declarar variável em JavaScript:',
			answers: [
				{
					answer: '$var',
					correct: false,
				},
				{
					answer: 'var',
					correct: true,
				},
				{
					answer: '@var',
					correct: false,
				},
				{
					answer: '#let',
					correct: false,
				},
			],
		},
		{
			question: 'Qual o seletor de id no CSS?',
			answers: [
				{
					answer: '#',
					correct: true,
				},
				{
					answer: '.',
					correct: false,
				},
				{
					answer: '@',
					correct: false,
				},
				{
					answer: '/',
					correct: false,
				},
			],
		},
	];

	// substituição do quizz para a primeira pergunta
	function init() {
		//criar a primeira pergunta
		createQuestion(0);
		// aqui aonde posso atrelar a temas das perguntas por exemplo
	}
	// cria uma pergunta
	function createQuestion(i) {
		// Limpa questão anterior
		const oldButtons = answersBox.querySelectorAll('button');

		oldButtons.forEach(function (btn) {
			btn.remove();
		});

		// Altera texto da pergunta
		const questionText = question.querySelector('#question-text');
		const questionNumber = question.querySelector('#question-number');

		questionText.textContent = questions[i].question;
		questionNumber.textContent = i + 1;
		// coloca as alternativas aleatoriamente
		questions[i].answers.sort(function () {
			return 0.5 - Math.random();
		});

		// Insere alternativas
		questions[i].answers.forEach(function (answer, i) {
			// Altera texto do template
			const answerTemplate = document
				.querySelector('.answers-template')
				.cloneNode(true);

			const letterBtn = answerTemplate.querySelector('.btn-letter');
			const answerText = answerTemplate.querySelector('.question-answer');

			letterBtn.textContent = letters[i];
			answerText.textContent = answer['answer'];

			answerTemplate.setAttribute('correct-answer', answer['correct']);

			// remove classe de hide e template do template
			answerTemplate.classList.remove('hide');
			answerTemplate.classList.remove('answer-template');

			// Insere template na tela
			answersBox.appendChild(answerTemplate);

			// inserir um evento de click no botão
			answerTemplate.addEventListener('click', function () {
				checkAnswer(this);
			});
		});
		// incrementar o numero da questão
		actualQuestion++;
	}

	// verificando resposta do usuario
	function checkAnswer(btn) {
		// seleciona todos os botões
		const buttons = answersBox.querySelectorAll('button');

		// verifica se a resposta esta correta e adiciona classes nos botões
		buttons.forEach(function (button) {
			if (button.getAttribute('correct-answer') === 'true') {
				button.classList.add('correct-answer');

				//checa se o usuario acertou a pergunta e incrementa os pontos
				if (btn === button) {
					points++;
				}
			} else {
				button.classList.add('wrong-answer');
			}
		});

		// exibir proxima pergunta
		nextQuestion();
	}
	// exibir proxima pergunta no quizz
	function nextQuestion() {
		// timer para o usuario ver as respostas
		setTimeout(function () {
			//verifica se ainda há perguntas
			if (actualQuestion >= questions.length) {
				// apresenta a msg de sucesso
				showSuccessMessage();
				return;
			}
			createQuestion(actualQuestion);
		}, 1700);
	}

	//exibe a tela final
	function showSuccessMessage() {
		hideOrShowQuizz();

		// trocar dados na tela de sucesso
		// calcular pontos
		const score = ((points / questions.length) * 100).toFixed(2);

		const displayScore = document.querySelector('#display-score span');
		displayScore.textContent = score.toString();

		// altera o numero de perguntas corretas
		const correctAnswer = document.querySelector('#correct-answers');
		correctAnswer.textContent = points;

		//altera total de perguntas
		const totalQuestions = document.querySelector('#questions-qty');
		totalQuestions.textContent = questions.length;
	}

	//  mostra ou esconde o score
	function hideOrShowQuizz() {
		quizzContainer.classList.toggle('hide');
		scoreContainer.classList.toggle('hide');
	}

	// reiniciar o quizz
	const restartBtn = document.querySelector('#restart');
	restartBtn.addEventListener('click', function () {
		// zerar o jogo
		actualQuestion = 0;
		points = 0;
		hideOrShowQuizz();
		init();
	});

	// inicilaização do quizz
	init();
});
