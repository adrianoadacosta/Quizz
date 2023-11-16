/** @format */
document.addEventListener('DOMContentLoaded', function () {
	// Declaração de variáveis
	const question = document.querySelector('#question');
	const answersBox = document.querySelector('#answers-box');
	const themeBox = document.querySelector('#questions-box');
	const questionContainer = document.querySelector('#question-container');
	const quizzContainer = document.querySelector('#quizz-container');
	const scoreContainer = document.querySelector('#score-container');
	const ready = document.querySelector('#ready');
	const letters = ['a', 'b', 'c', 'd'];
	let points = 0;
	let actualQuestion = 0;

	// perguntas
	let questions = [];
	const cinema = [
		{
			question: 'Quem ganhou o oscar de melhor filme em 2001?',
			answers: [
				{ answer: 'Gladiador', correct: true },
				{ answer: 'Avatar', correct: false },
				{ answer: 'Senhor dos aneis', correct: false },
				{ answer: 'A cruzada', correct: false },
			],
		},
		{
			question: 'Quantos oscars ganhou senhor dos aneis o retorno do rei?',
			answers: [
				{ answer: '2', correct: false },
				{ answer: '11', correct: true },
				{ answer: '14', correct: false },
				{ answer: '16', correct: false },
			],
		},
		{
			question: 'Qual vencedor do oscar de 2023 de melhor animação?',
			answers: [
				{ answer: 'Pinóquio', correct: true },
				{ answer: 'red', correct: false },
				{ answer: 'forzen 2', correct: false },
				{ answer: 'os 3 porquinhos', correct: false },
			],
		},
		{
			question: 'Qual filme ganhou o Oscar de Melhor Filme em 1994?',
			answers: [
				{ answer: 'Forrest Gump', correct: true },
				{ answer: 'Pulp Fiction', correct: false },
				{ answer: 'O Rei Leão', correct: false },
				{ answer: 'A Lista de Schindler', correct: false },
			],
		},
		{
			question: 'Quem dirigiu o filme "Cidadão Kane"?',
			answers: [
				{ answer: 'Alfred Hitchcock', correct: false },
				{ answer: 'Steven Spielberg', correct: false },
				{ answer: 'Orson Welles', correct: true },
				{ answer: 'Martin Scorsese', correct: false },
			],
		},
		{
			question:
				'Qual ator interpretou o Coringa no filme "O Cavaleiro das Trevas"?',
			answers: [
				{ answer: 'Jack Nicholson', correct: false },
				{ answer: 'Joaquin Phoenix', correct: false },
				{ answer: 'Heath Ledger', correct: true },
				{ answer: 'Cesar Romero', correct: false },
			],
		},
		{
			question: 'Qual ator interpretou o Coringa no filme "JOKER"?',
			answers: [
				{ answer: 'Jack Nicholson', correct: false },
				{ answer: 'Joaquin Phoenix', correct: true },
				{ answer: 'Heath Ledger', correct: false },
				{ answer: 'Cesar Romero', correct: false },
			],
		},
		{
			question: 'Qual é o nome do planeta natal do Superman?',
			answers: [
				{ answer: 'Saturno', correct: false },
				{ answer: 'Krypton', correct: true },
				{ answer: 'Terra', correct: false },
				{ answer: 'Marte', correct: false },
			],
		},
		{
			question: 'Qual é o nome do gato de Alice no País das Maravilhas?',
			answers: [
				{ answer: 'Cheshire', correct: false },
				{ answer: 'Dinah', correct: true },
				{ answer: 'Bichento', correct: false },
				{ answer: 'Ora', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do vilão principal do filme "O Poderoso Chefão"?',
			answers: [
				{ answer: 'Michael Corleone', correct: false },
				{ answer: 'Vito Corleone', correct: true },
				{ answer: 'Sonny Corleone', correct: false },
				{ answer: 'Fredo Corleone', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do filme que ganhou o Oscar de Melhor Filme de 1997?',
			answers: [
				{ answer: 'Mente Brilhante', correct: false },
				{ answer: 'Titanic', correct: true },
				{ answer: 'O Paciente Inglês', correct: false },
				{ answer: 'A Lista de Schindler', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do filme que ganhou o Oscar de Melhor Filme de 2009?',
			answers: [
				{ answer: 'Avatar', correct: false },
				{ answer: 'O Lado Bom da Vida', correct: true },
				{ answer: 'A Rede Social', correct: false },
				{ answer: 'O Artista', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do filme que ganhou o Oscar de Melhor Filme de 2019?',
			answers: [
				{ answer: '1917', correct: false },
				{ answer: 'Parasita', correct: true },
				{ answer: 'O Irlandês', correct: false },
				{ answer: 'Coringa', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do filme que ganhou o Oscar de Melhor Filme de 2022?',
			answers: [
				{ answer: 'O Poder do Cão', correct: false },
				{ answer: 'Duna', correct: true },
				{ answer: 'No Ritmo do Coração', correct: false },
				{ answer: 'Elvis', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do filme que ganhou o Oscar de Melhor Filme de 2023?',
			answers: [
				{ answer: 'Top Gun: Maverick', correct: false },
				{ answer: 'Elvis', correct: true },
				{ answer: 'O Beco do Pesadelo', correct: false },
				{ answer: 'Tártaro', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do robô que se torna amigo de Will Smith no filme "Eu, Robô"?',
			answers: [
				{ answer: 'R2-D2', correct: false },
				{ answer: 'Sonny', correct: true },
				{ answer: 'Wall-E', correct: false },
				{ answer: 'HAL 9000', correct: false },
			],
		},
		{
			question:
				'Em que filme Leonardo DiCaprio finalmente ganhou seu primeiro Oscar de Melhor Ator?',
			answers: [
				{ answer: 'O Lobo de Wall Street', correct: false },
				{ answer: 'O Regresso', correct: true },
				{ answer: 'A Origem', correct: false },
				{ answer: 'Django Livre', correct: false },
			],
		},
		{
			question:
				'Qual filme de animação conta a história de um ratinho que sonha em se tornar um chef renomado em Paris?',
			answers: [
				{ answer: ' Procurando Nemo', correct: false },
				{ answer: 'Ratatouille', correct: true },
				{ answer: 'A Bela e a Fera', correct: false },
				{ answer: 'Moana', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do filme em que Tom Hanks interpreta um homem que vive preso em um aeroporto por meses?',
			answers: [
				{ answer: 'Terminal', correct: false },
				{ answer: 'O Terminal', correct: true },
				{ answer: 'Náufrago', correct: false },
				{ answer: 'Em Busca da Terra do Nunca', correct: false },
			],
		},
		{
			question: 'Quem dirigiu o filme de ficção científica "Interestelar"?',
			answers: [
				{ answer: 'Ridley Scott', correct: false },
				{ answer: 'Christopher Nolan', correct: true },
				{ answer: 'James Cameron', correct: false },
				{ answer: 'Denis Villeneuve', correct: false },
			],
		},
		{
			question:
				'Em que filme famoso Sylvester Stallone interpreta um boxeador que luta contra Apollo Creed?',
			answers: [
				{ answer: 'Rambo', correct: false },
				{ answer: 'Rocky', correct: true },
				{ answer: 'Cobra', correct: false },
				{ answer: 'Demolition Man', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do filme que ganhou o Oscar de Melhor Filme de Animação em 2021?',
			answers: [
				{ answer: 'Onward', correct: false },
				{ answer: 'Soul', correct: true },
				{ answer: 'Wolfwalkers', correct: false },
				{ answer: 'Raya e o Último Dragão', correct: false },
			],
		},
		{
			question: 'Qual o nome do filho do pateta?',
			answers: [
				{ answer: 'Tax', correct: false },
				{ answer: 'Max', correct: true },
				{ answer: 'Brax', correct: false },
				{ answer: 'Bartolomeu', correct: false },
			],
		},
		{
			question:
				'Em "De Volta para o Futuro", qual é o nome do cientista que inventa a máquina do tempo?',
			answers: [
				{ answer: 'Marty McFly', correct: false },
				{ answer: 'Doc Brown', correct: true },
				{ answer: 'Biff Tannen', correct: false },
				{ answer: 'George McFly', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do filme que apresenta um mundo onde as pessoas podem entrar nos sonhos dos outros?',
			answers: [
				{ answer: 'Matrix', correct: false },
				{ answer: 'A Origem', correct: true },
				{ answer: 'Brilho Eterno de uma Mente Sem Lembranças', correct: false },
				{ answer: 'O Show de Truman', correct: false },
			],
		},
		{
			question: 'Quem interpretou o papel principal no filme "Clube da Luta"?',
			answers: [
				{ answer: 'Edward Norton', correct: false },
				{ answer: 'Brad Pitt', correct: true },
				{ answer: 'Leonardo DiCaprio', correct: false },
				{ answer: 'Jake Gyllenhaal', correct: false },
			],
		},
		{
			question: 'Quem interpretou o papel de Heitor no filme "Troia"?',
			answers: [
				{ answer: 'Sean Bean', correct: false },
				{ answer: 'Eric Bana', correct: true },
				{ answer: 'Brad Pitt', correct: false },
				{ answer: 'Peter OToole', correct: false },
			],
		},
		{
			question:
				'Quem dirigiu o filme de terror "O Iluminado", baseado na obra de Stephen King?',
			answers: [
				{ answer: 'Wes Craven', correct: false },
				{ answer: 'Stanley Kubrick', correct: true },
				{ answer: 'John Carpenter', correct: false },
				{ answer: 'Alfred Hitchcock', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do palhaço assustador no filme "It: A Coisa", baseado na obra de Stephen King?',
			answers: [
				{ answer: 'Jigsaw', correct: false },
				{ answer: 'Pennywise', correct: true },
				{ answer: 'Freddy Krueger', correct: false },
				{ answer: 'Leatherface', correct: false },
			],
		},
		{
			question:
				'Em que filme de terror um casal se muda para uma casa assombrada em Amityville?',
			answers: [
				{ answer: 'Invocação do Mal', correct: false },
				{ answer: 'Horror em Amityville', correct: true },
				{ answer: 'Poltergeist', correct: false },
				{ answer: 'Atividade Paranormal', correct: false },
			],
		},
		{
			question: 'Qual é o nome do primeiro filme da Marvel Studios? ',
			answers: [
				{ answer: 'Homem de aço', correct: false },
				{ answer: 'Homem de Ferro', correct: true },
				{ answer: 'Thor', correct: false },
				{ answer: 'Capitão America', correct: false },
			],
		},
		{
			question:
				'Qual é o filme da Marvel com a maior bilheteria de todos os tempos? ',
			answers: [
				{ answer: 'Vingadores: Guerra civil', correct: false },
				{ answer: 'Vingadores: Ultimato', correct: true },
				{ answer: 'Vingadores 1', correct: false },
				{ answer: 'Vingadores Ultron', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do vilão principal do filme Vingadores: Ultimato? ',
			answers: [
				{ answer: 'Loki', correct: false },
				{ answer: 'Thanos', correct: true },
				{ answer: 'Ultron', correct: false },
				{ answer: 'Tocha humana', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do planeta natal de Anakin Skywalker e Luke Skywalker?',
			answers: [
				{ answer: 'Endor', correct: false },
				{ answer: 'Tatooine', correct: true },
				{ answer: 'Hoth', correct: false },
				{ answer: 'Naboo', correct: false },
			],
		},
		{
			question: 'Quem é o mestre Jedi de Obi-Wan Kenobi na trilogia original?',
			answers: [
				{ answer: 'Qui-Gon Jinn', correct: false },
				{ answer: 'Yoda', correct: true },
				{ answer: 'Mace Windu', correct: false },
				{ answer: 'Count Dooku', correct: false },
			],
		},
		{
			question: 'Qual é o título completo do Episódio V da saga Star Wars?',
			answers: [
				{ answer: 'A Ameaça Fantasma', correct: false },
				{ answer: 'O Império Contra-Ataca', correct: true },
				{ answer: 'A Vingança dos Sith', correct: false },
				{ answer: 'O Despertar da Força', correct: false },
			],
		},
		{
			question: 'Quem é o pai de Luke Skywalker?',
			answers: [
				{ answer: 'Obi-Wan Kenobi', correct: false },
				{ answer: 'Darth Vader', correct: true },
				{ answer: 'Han Solo', correct: false },
				{ answer: 'Yoda', correct: false },
			],
		},
		{
			question:
				'Qual é a nave espacial característica de Han Solo na trilogia original?',
			answers: [
				{ answer: 'TIE Fighter', correct: false },
				{ answer: 'Millennium Falcon', correct: true },
				{ answer: 'Star Destroyer', correct: false },
				{ answer: 'X-wing', correct: false },
			],
		},
		{
			question:
				'Qual é o filme com a maior bilheteria mundial de todos os tempos? ',
			answers: [
				{ answer: 'Avatar 2', correct: false },
				{ answer: 'Avatar', correct: true },
				{ answer: 'Titanic', correct: false },
				{ answer: 'Vingadores', correct: false },
			],
		},
		{
			question:
				'Qual é o filme com a maior bilheteria mundial na história do cinema, ajustado pela inflação? ',
			answers: [
				{ answer: 'O conde de monte cristo', correct: false },
				{ answer: 'Gone with the Wind', correct: true },
				{ answer: 'A novata rebelde', correct: false },
				{ answer: 'Dançando na chuva', correct: false },
			],
		},
		{
			question:
				'Qual é o filme com a maior bilheteria mundial de um filme de animação? ',
			answers: [
				{ answer: 'Frozen I', correct: false },
				{ answer: 'Frozen II', correct: true },
				{ answer: 'A bela e a fera', correct: false },
				{ answer: 'Divertidamente', correct: false },
			],
		},
		{
			question:
				'Qual filme de terror apresenta um serial killer que usa uma máscara de hockey?',
			answers: [
				{ answer: 'Halloween', correct: false },
				{ answer: 'Sexta-Feira 13', correct: true },
				{ answer: 'A Hora do Pesadelo', correct: false },
				{ answer: 'Pânico', correct: false },
			],
		},
		{
			question:
				'Em que filme de terror uma família é assombrada por espíritos em sua casa suburbana?',
			answers: [
				{ answer: 'Invocação do Mal', correct: false },
				{ answer: 'Poltergeist', correct: true },
				{ answer: 'O Exorcista', correct: false },
				{ answer: 'A Bruxa', correct: false },
			],
		},
		{
			question:
				'Qual é o título do filme de terror sobre um vírus que transforma as pessoas em zumbis?',
			answers: [
				{ answer: 'O Hospedeiro', correct: false },
				{ answer: '28 Dias Depois', correct: true },
				{ answer: 'O ultimo dia na terra', correct: false },
				{ answer: 'Procurando Nemo', correct: false },
			],
		},
		{
			question: 'Quem é o assassino misterioso na franquia de filmes "Pânico"?',
			answers: [
				{ answer: 'Michael Myers', correct: false },
				{ answer: 'Ghostface', correct: true },
				{ answer: 'Leatherface', correct: false },
				{ answer: 'Jason Voorhees', correct: false },
			],
		},
		{
			question:
				'Qual é o filme de terror sobre um palhaço que aterroriza crianças em uma pequena cidade?',
			answers: [
				{ answer: 'Annabelle', correct: false },
				{ answer: 'A Coisa', correct: true },
				{ answer: 'Hereditário', correct: false },
				{ answer: 'Corra!', correct: false },
			],
		},
		{
			question:
				'Qual filme retrata a história real de um treinador de futebol americano em uma escola secundária texana e é estrelado por Sandra Bullock?',
			answers: [
				{ answer: 'Lembranças de um Sonho', correct: false },
				{ answer: 'Um Sonho Possível', correct: true },
				{ answer: 'Sexta-feira Muito Louca', correct: false },
				{ answer: 'Rudy: O Triunfo de um Espírito', correct: false },
			],
		},
		{
			question:
				'Em que filme um grupo de jovens jogadores de baseball constrói um campo de baseball em um campo de milho, onde fantasmas de jogadores lendários aparecem para jogar?',
			answers: [
				{ answer: 'Uma Equipe Muito Especial', correct: false },
				{ answer: 'Campo dos Sonhos', correct: true },
				{ answer: 'O Homem que Mudou o Jogo', correct: false },
				{ answer: 'Major League: A Revanche', correct: false },
			],
		},
		{
			question:
				'Qual é o filme que segue a jornada de um grupo de mulheres que formam uma liga de beisebol durante a Segunda Guerra Mundial?',
			answers: [
				{ answer: 'O Natural', correct: false },
				{ answer: 'Uma Equipe Muito Especial', correct: true },
				{ answer: 'Sorte no Amor', correct: false },
				{ answer: 'O Homem que Mudou o Jogo', correct: false },
			],
		},
		{
			question:
				'Em que filme o personagem interpretado por Denzel Washington treina um time de futebol universitário, enfrentando desafios relacionados à segregação racial?',
			answers: [
				{ answer: 'Um Sonho Possivel', correct: false },
				{ answer: 'Duelo de Titãs', correct: true },
				{ answer: 'O Homem que Mudou o Jogo', correct: false },
				{ answer: 'Uma Equipe Muito Especial', correct: false },
			],
		},
		{
			question:
				'Em que filme de ficção científica dirigido por Steven Spielberg, os humanos fazem contato com uma raça alienígena pacífica?',
			answers: [
				{ answer: 'E.T. - O Extraterrestre', correct: false },
				{ answer: 'Encontros Imediatos do Terceiro Grau', correct: true },
				{ answer: 'Contato', correct: false },
				{ answer: 'A Chegada', correct: false },
			],
		},
		{
			question:
				'Qual é o nome da inteligência artificial que se rebela contra os humanos no filme "2001: Uma Odisseia no Espaço"?',
			answers: [
				{ answer: 'Skynet', correct: false },
				{ answer: 'HAL 9000', correct: true },
				{ answer: 'Jarvis', correct: false },
				{ answer: 'GLaDOS', correct: false },
			],
		},
		{
			question: 'Qual é o nome da inteligência artificial do Homem de Ferro?',
			answers: [
				{ answer: 'Skynet', correct: false },
				{ answer: 'Jarvis', correct: true },
				{ answer: 'GLaDOS', correct: false },
				{ answer: 'HAL 9000', correct: false },
			],
		},
		{
			question:
				'Qual é o nome da inteligência artificial que destrói a humanidade em "o Exterminador do Fututo"?',
			answers: [
				{ answer: 'Skynet', correct: true },
				{ answer: 'Jarvis', correct: false },
				{ answer: 'GLaDOS', correct: false },
				{ answer: 'HAL 9000', correct: false },
			],
		},
		{
			question:
				'Em que filme de ficção científica dirigido por Christopher Nolan, os astronautas viajam por um buraco de minhoca em busca de um novo lar para a humanidade?',
			answers: [
				{ answer: 'A Origem', correct: false },
				{ answer: 'Interestelar', correct: true },
				{ answer: 'O Grande Truque', correct: false },
				{ answer: 'A Viagem', correct: false },
			],
		},
		{
			question:
				'Qual é o título do filme de ficção científica que se passa em um futuro pós-apocalíptico onde a humanidade luta contra máquinas inteligentes?',
			answers: [
				{ answer: 'Blade Runner', correct: false },
				{ answer: 'Matrix', correct: true },
				{ answer: 'O Livro de Eli', correct: false },
				{ answer: 'Mad Max: Estrada da Fúria', correct: false },
			],
		},
		{
			question:
				'Em que filme, baseado em uma obra de Philip K. Dick, um detetive do futuro caça replicantes em Los Angeles?',
			answers: [
				{ answer: 'Minority Report', correct: false },
				{ answer: 'Blade Runner', correct: true },
				{ answer: 'O Vingador do Futuro', correct: false },
				{ answer: 'O Pagamento', correct: false },
			],
		},
		{
			question:
				'Qual é o título do filme em que Tom Cruise repete o mesmo dia várias vezes em um loop temporal?',
			answers: [
				{ answer: 'Efeito Borboleta', correct: false },
				{ answer: 'No Limite do Amanhã', correct: true },
				{ answer: 'Contra o Tempo', correct: false },
				{ answer: 'Looper', correct: false },
			],
		},
		{
			question:
				'Em que filme, dirigido por Ridley Scott, uma tripulação encontra uma forma de vida alienígena hostil em uma lua distante?',
			answers: [
				{ answer: 'Alien: O Oitavo Passageiro', correct: false },
				{ answer: 'Prometheus', correct: true },
				{ answer: 'O Resgate do Soldado Ryan', correct: false },
				{ answer: 'Blade Runner', correct: false },
			],
		},
		{
			question:
				'Qual é o título do filme em que um astronauta fica preso em Marte e luta pela sobrevivência?',
			answers: [
				{ answer: 'Marte', correct: false },
				{ answer: 'Perdido em Marte', correct: true },
				{ answer: 'Gravidade', correct: false },
				{ answer: 'Interstellar', correct: false },
			],
		},
		{
			question: 'Quem vive o papel de Max Rockatansky?',
			answers: [
				{ answer: 'Will Smith', correct: false },
				{ answer: 'Mel Gibson', correct: true },
				{ answer: 'Keanu Reeves', correct: false },
				{ answer: 'Max Verstappen', correct: false },
			],
		},
		{
			question: 'Qual desse filmes foi dirigido por Mel Gibson',
			answers: [
				{ answer: 'Coração Covarde', correct: false },
				{ answer: 'Apocalypto', correct: true },
				{ answer: 'Mad Max', correct: false },
				{ answer: 'Maquina Mortifera', correct: false },
			],
		},
		{
			question:
				'Em que filme de ficção científica um hacker é recrutado para combater uma inteligência artificial que domina o mundo?',
			answers: [
				{ answer: 'O Homem Bicentenário', correct: false },
				{ answer: 'Matrix', correct: true },
				{ answer: 'O Exterminador do Futuro', correct: false },
				{ answer: 'O Quinto Elemento', correct: false },
			],
		},
		{
			question:
				'Qual é o título do filme em que Will Smith enfrenta um futuro distópico e uma inteligência artificial?',
			answers: [
				{ answer: 'Inteligência Artificial', correct: false },
				{ answer: 'Eu, Robô', correct: true },
				{ answer: 'O Homem Bicentenário', correct: false },
				{ answer: 'A.I. - Inteligência Artificial', correct: false },
			],
		},
		{
			question:
				'Qual é o título do filme que retrata a invasão do Dia D na Normandia durante a Segunda Guerra Mundial?',
			answers: [
				{ answer: 'Platoon', correct: false },
				{ answer: 'O Resgate do Soldado Ryan', correct: true },
				{ answer: 'Apocalypse Now', correct: false },
				{ answer: 'Nascido para Matar', correct: false },
			],
		},
		{
			question:
				'Em que filme um sargento treina seus recrutas com métodos rigorosos em um campo de treinamento militar?',
			answers: [
				{ answer: 'Band of Brothers', correct: false },
				{ answer: 'Nascido para Matar', correct: true },
				{ answer: 'Nascido em 4 de Julho', correct: false },
				{ answer: 'Dia de Treinamento', correct: false },
			],
		},
		{
			question:
				'Qual é o título do filme que narra a batalha de Stalingrado durante a Segunda Guerra Mundial?',
			answers: [
				{ answer: 'Dunkirk', correct: false },
				{ answer: 'Stalingrado', correct: true },
				{ answer: 'A Lista de Schindler', correct: false },
				{ answer: 'Cartas de Iwo Jima', correct: false },
			],
		},
		{
			question:
				'Em que filme um soldado norte-americano é capturado durante a Guerra do Vietnã e forçado a jogar roleta russa?',
			answers: [
				{ answer: 'Apocalypse Now', correct: false },
				{ answer: 'O Franco-Atirador', correct: true },
				{ answer: 'Platoon', correct: false },
				{ answer: 'O Franco-Atirador Russo', correct: false },
			],
		},
		{
			question:
				'Qual é o título do filme que aborda a evacuação de soldados britânicos de Dunkerque durante a Segunda Guerra Mundial?',
			answers: [
				{ answer: 'Resgate Abaixo de Zero', correct: false },
				{ answer: 'Dunkirk', correct: true },
				{ answer: 'O Último dos Moicanos', correct: false },
				{ answer: '1917', correct: false },
			],
		},
		{
			question:
				'Qual é o nome completo do personagem principal na saga Harry Potter?',
			answers: [
				{ answer: 'Harry Alvo Potter', correct: false },
				{ answer: 'Harry James Potter', correct: true },
				{ answer: 'Harry Severo Potter', correct: false },
				{ answer: 'Harry Sirius Potter', correct: false },
			],
		},
		{
			question: 'Quem é o melhor amigo de Harry Potter em Hogwarts?',
			answers: [
				{ answer: 'Draco Malfoy', correct: false },
				{ answer: 'Ron Weasley', correct: true },
				{ answer: 'Neville Longbottom', correct: false },
				{ answer: 'Hermione Granger', correct: false },
			],
		},
		{
			question:
				'Qual é a casa de Hogwarts à qual Harry originalmente pertence?',
			answers: [
				{ answer: 'Corvinal', correct: false },
				{ answer: 'Grifinória', correct: true },
				{ answer: 'Lufa-Lufa', correct: false },
				{ answer: 'Sonserina', correct: false },
			],
		},
		{
			question:
				'Qual é o nome da escola de magia frequentada por Harry Potter?',
			answers: [
				{ answer: 'Escola de Magia e Bruxaria de Beauxbatons', correct: false },
				{ answer: 'Escola de Magia e Bruxaria de Hogwarts', correct: true },
				{ answer: 'Escola de Magia e Bruxaria de Durmstrang', correct: false },
				{ answer: 'Escola de Magia e Bruxaria de Ilvermorny', correct: false },
			],
		},
		{
			question: 'Quem é o diretor de Hogwarts na maioria dos livros da série?',
			answers: [
				{ answer: 'Alastor Moody', correct: false },
				{ answer: 'Alvo Dumbledore', correct: true },
				{ answer: 'Severo Snape', correct: false },
				{ answer: 'Minerva McGonagall', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do animal de estimação de Harry, uma coruja inteligente?',
			answers: [
				{ answer: 'Escrúpulo', correct: false },
				{ answer: 'Edwiges', correct: true },
				{ answer: 'Crookshanks', correct: false },
				{ answer: 'Fawkes', correct: false },
			],
		},
		{
			question: 'Qual é o nome do vilão principal na série Harry Potter?',
			answers: [
				{ answer: 'Bellatrix Lestrange', correct: false },
				{ answer: 'Lorde Voldemort', correct: true },
				{ answer: 'Draco Malfoy', correct: false },
				{ answer: 'Tom Riddle', correct: false },
			],
		},
		{
			question: 'O que a cicatriz de Harry Potter representa?',
			answers: [
				{ answer: 'O símbolo da Grifinória', correct: false },
				{ answer: 'Um feitiço maldito por Voldemort', correct: true },
				{ answer: 'A marca de um Comensal da Morte', correct: false },
				{ answer: 'Uma lembrança de sua infância trouxa', correct: false },
			],
		},
		{
			question:
				'Qual é o nome completo do personagem principal nos filmes de Indiana Jones?',
			answers: [
				{ answer: 'Indiana Smith', correct: false },
				{ answer: 'Henry Jones Jr.', correct: true },
				{ answer: 'Marcus Brody', correct: false },
				{ answer: 'Sallah Mohammed Faisel el-Kahir', correct: false },
			],
		},
		{
			question:
				'Qual é o título do primeiro filme da série Indiana Jones, lançado em 1981?',
			answers: [
				{ answer: 'Indiana Jones e o Templo da Perdição', correct: false },
				{
					answer: 'Indiana Jones e os Caçadores da Arca Perdida',
					correct: true,
				},
				{ answer: 'Indiana Jones e a Última Cruzada', correct: false },
				{
					answer: 'Indiana Jones e o Reino da Caveira de Cristal',
					correct: false,
				},
			],
		},
		{
			question:
				'Qual é o nome do arqueólogo rival de Indiana Jones, que muitas vezes está em busca dos mesmos artefatos?',
			answers: [
				{ answer: 'Marcus Brody', correct: false },
				{ answer: 'Rene Belloq', correct: true },
				{ answer: 'Sallah', correct: false },
				{ answer: 'Mola Ram', correct: false },
			],
		},
		{
			question:
				'Em qual filme Indiana Jones enfrenta nazistas em busca do Santo Graal?',
			answers: [
				{ answer: 'Indiana Jones e a Caveira de Cristal', correct: false },
				{ answer: 'Indiana Jones e a Última Cruzada', correct: true },
				{
					answer: 'Indiana Jones e os Caçadores da Arca Perdida',
					correct: false,
				},
				{ answer: 'Indiana Jones e o Templo da Perdição', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do ator que interpreta Indiana Jones nos filmes?',
			answers: [
				{ answer: 'Sean Connery', correct: false },
				{ answer: 'Harrison Ford', correct: true },
				{ answer: 'Mark Hamill', correct: false },
				{ answer: 'George Lucas', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do ator de origem asiática que interpretou o personagem Short Round em "Indiana Jones e o Templo da Perdição" e que recentemente ganhou um Oscar?',
			answers: [
				{ answer: 'Jackie Chan', correct: false },
				{ answer: 'Ke Huy Quan', correct: true },
				{ answer: 'Jet Li', correct: false },
				{ answer: 'Bruce Lee', correct: false },
			],
		},
		{
			question:
				'Qual é o filme de comédia que se passa em um acampamento de verão e é estrelado por Bill Murray?',
			answers: [
				{ answer: 'Um Dia de Louco', correct: false },
				{ answer: 'Clube dos Pilantras', correct: true },
				{ answer: 'Grandes Esperanças', correct: false },
				{ answer: 'Feitiço do Tempo', correct: false },
			],
		},
		{
			question:
				'Em que filme de comédia Jim Carrey interpreta um advogado que é forçado a dizer apenas a verdade por 24 horas?',
			answers: [
				{ answer: 'O Show de Truman', correct: false },
				{ answer: 'O Mentiroso', correct: true },
				{ answer: 'Debi & Lóide', correct: false },
				{ answer: 'Todo Poderoso', correct: false },
			],
		},
		{
			question:
				'Qual é o título da comédia em que um jornalista de televisão, interpretado por Will Ferrell, é colocado em uma competição de notícias?',
			answers: [
				{ answer: 'Ricky Bobby: A Toda Velocidade', correct: false },
				{ answer: 'O Repórter: A Lenda de Ron Burgundy', correct: true },
				{ answer: 'Quase Irmãos', correct: false },
				{ answer: 'A Feiticeira', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do filme de comédia que apresenta um grupo de amigos tentando voltar para a faculdade para completar um desafio?',
			answers: [
				{ answer: 'A Ressaca', correct: false },
				{ answer: 'Projeto X', correct: true },
				{ answer: 'Superbad: É Hoje', correct: false },
				{ answer: 'O Virgem de 40 Anos', correct: false },
			],
		},
		{
			question:
				'Em qual comédia de ação Will Smith e Martin Lawrence interpretam detetives da polícia de Miami?',
			answers: [
				{ answer: 'Máquina Mortífera', correct: false },
				{ answer: 'Bad Boys', correct: true },
				{ answer: 'Dupla Explosiva', correct: false },
				{ answer: 'De Volta à Escola de Sargentos', correct: false },
			],
		},
		{
			question:
				'Qual é o título da comédia em que um jornalista interpretado por Sacha Baron Cohen viaja pelos Estados Unidos, encontrando personagens reais em situações constrangedoras?',
			answers: [
				{ answer: 'O Ditador', correct: false },
				{
					answer:
						'Borat: O Segundo Melhor Repórter do Glorioso País Cazaquistão',
					correct: true,
				},
				{ answer: 'Ali G Indahouse', correct: false },
				{ answer: 'Bruno', correct: false },
			],
		},
		{
			question:
				'Em qual filme de comédia um grupo de vampiros compartilha um apartamento na Nova Zelândia e lida com as complexidades da vida moderna?',
			answers: [
				{ answer: 'Hotel Transilvânia', correct: false },
				{ answer: 'O Que Fazemos nas Sombras', correct: true },
				{ answer: 'Os Garotos Perdidos', correct: false },
				{ answer: 'Um Lobisomem Americano em Londres', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do carro usado como máquina do tempo na trilogia "De Volta para o Futuro"?',
			answers: [
				{ answer: 'Chevrolet Camaro', correct: false },
				{ answer: 'DeLorean DMC-12', correct: true },
				{ answer: 'Ford Mustang', correct: false },
				{ answer: 'Pontiac Firebird', correct: false },
			],
		},
		{
			question:
				'Qual é o nome da namorada de Marty McFly na trilogia "De Volta para o Futuro"?',
			answers: [
				{ answer: 'Linda', correct: false },
				{ answer: 'Jennifer', correct: true },
				{ answer: 'Clara', correct: false },
				{ answer: 'Elaine', correct: false },
			],
		},
		{
			question:
				'Em "De Volta para o Futuro II", para qual ano Marty McFly e Doc viajam para resolver um problema com seus filhos?',
			answers: [
				{ answer: '2020', correct: false },
				{ answer: '2015', correct: true },
				{ answer: '1985', correct: false },
				{ answer: '2030', correct: false },
			],
		},
		{
			question:
				'Quem é o protagonista do filme "Curtindo a Vida Adoidado", que decide matar aula e aproveitar um dia em Chicago?',
			answers: [
				{ answer: 'Cameron Frye', correct: false },
				{ answer: 'Ferris Bueller', correct: true },
				{ answer: 'Jeanie Bueller', correct: false },
				{ answer: 'Sloane Peterson', correct: false },
			],
		},
		{
			question:
				'Como Ferris Bueller convence seus pais de que está doente e não pode ir à escola em "Curtindo a Vida Adoidado"?',
			answers: [
				{ answer: 'Fingindo ter febre alta', correct: false },
				{ answer: 'Simulando sintomas de gripe', correct: true },
				{ answer: 'Fingindo uma lesão esportiva', correct: false },
				{ answer: 'Criando um falso atestado médico', correct: false },
			],
		},
		{
			question:
				'Qual é o musical que se passa na França do século XIX e segue a história de Jean Valjean, um ex-prisioneiro?',
			answers: [
				{ answer: 'O Fantasma da Ópera', correct: false },
				{ answer: 'Les Misérables', correct: true },
				{ answer: 'Cats', correct: false },
				{ answer: 'Mamma Mia!', correct: false },
			],
		},
		{
			question:
				'Quem é o personagem principal no musical "O Fantasma da Ópera", que assombra a Ópera de Paris?',
			answers: [
				{ answer: 'Jean Valjean', correct: false },
				{ answer: 'Christine Daaé', correct: true },
				{ answer: 'Raoul', correct: false },
				{ answer: 'Javert', correct: false },
			],
		},
		{
			question:
				'Qual é o título do filme da DC que apresenta a heroina, interpretada por Gal Gadot, em sua história de origem?',
			answers: [
				{ answer: 'Liga da Justiça', correct: false },
				{ answer: 'Mulher-Maravilha', correct: true },
				{ answer: 'Aves de Rapina', correct: false },
				{ answer: 'Aquaman', correct: false },
			],
		},
		{
			question:
				'Quem interpreta o papel de Aquaman, também conhecido como Arthur Curry, nos filmes da DC?',
			answers: [
				{ answer: 'Henry Cavill', correct: false },
				{ answer: 'Jason Momoa', correct: true },
				{ answer: 'Ezra Miller', correct: false },
				{ answer: 'Ray Fisher', correct: false },
			],
		},
		{
			question:
				'Em que filme da DC o Coringa é interpretado por Joaquin Phoenix, explorando a história de origem do icônico vilão?',
			answers: [
				{ answer: 'Esquadrão Suicida', correct: false },
				{ answer: 'Coringa', correct: true },
				{ answer: 'Batman vs Superman: A Origem da Justiça', correct: false },
				{ answer: 'Liga da Justiça', correct: false },
			],
		},
	];
	const anime = [
		{
			question:
				'Qual anime ganhou o prêmio de Melhor Anime no Crunchyroll Anime Awards 2022?',
			answers: [
				{ answer: 'Jujutsu Kaisen', correct: false },
				{ answer: 'Demon Slayer: Kimetsu no Yaiba', correct: true },
				{ answer: 'Attack on Titan', correct: false },
				{ answer: 'My Hero Academia', correct: false },
			],
		},
		{
			question: 'Quem é o criador do famoso anime "One Piece"?',
			answers: [
				{ answer: 'Masashi Kishimoto', correct: false },
				{ answer: 'Hajime Isayama', correct: false },
				{ answer: 'Eiichiro Oda', correct: true },
				{ answer: 'Akira Toriyama', correct: false },
			],
		},
		{
			question:
				'Qual anime foi adaptado de uma série de light novels escrita por Reki Kawahara?',
			answers: [
				{ answer: 'Naruto', correct: false },
				{ answer: 'Sword Art Online', correct: true },
				{ answer: 'One Punch Man', correct: false },
				{ answer: 'Death Note', correct: false },
			],
		},
		{
			question:
				'Quem é o protagonista principal da série "Cavaleiros do Zodíaco"?',
			answers: [
				{ answer: 'Shiryu', correct: false },
				{ answer: 'Seiya', correct: true },
				{ answer: 'Hyoga', correct: false },
				{ answer: 'Ikki', correct: false },
			],
		},
		{
			question: 'Qual é a constelação de Shun, o Cavaleiro de ...?',
			answers: [
				{ answer: 'Leão', correct: false },
				{ answer: 'Andrômeda', correct: true },
				{ answer: 'Pégaso', correct: false },
				{ answer: 'Cisne', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do mestre que treina os Cavaleiros de Bronze no Santuário em "Os cavalheiros do Zodiaco"?',
			answers: [
				{ answer: 'Aiolia', correct: false },
				{ answer: 'Shion', correct: true },
				{ answer: 'Saga', correct: false },
				{ answer: 'Ares', correct: false },
			],
		},
		{
			question:
				'Quem é o irmão mais velho de Shun em os cavaleiros do zodiaco?',
			answers: [
				{ answer: 'Shiryu', correct: false },
				{ answer: 'Ikki', correct: true },
				{ answer: 'Hyoga', correct: false },
				{ answer: 'Seiya ', correct: false },
			],
		},
		{
			question:
				'Em que saga os Cavaleiros de Ouro se sacrificam para permitir que Seiya e seus amigos alcancem o Santuário?',
			answers: [
				{ answer: 'Saga de Asgard', correct: false },
				{ answer: 'Saga de Hades', correct: true },
				{ answer: 'Saga do Santuário', correct: false },
				{ answer: 'Saga de Poseidon', correct: false },
			],
		},
		{
			question:
				'Qual é o nome da técnica secreta de Ikki, o Cavaleiro de Fênix, que cria uma ilusão de morte no adversário?',
			answers: [
				{ answer: 'Ave Fênix', correct: false },
				{ answer: 'Golpe Fantasma', correct: true },
				{ answer: 'Ilusão de Fênix', correct: false },
				{ answer: 'Ilusão da Morte', correct: false },
			],
		},
		{
			question: 'Qual é o elemento associado a Hyoga, o Cavaleiro de Cisne?',
			answers: [
				{ answer: 'Fogo', correct: false },
				{ answer: 'Gelo', correct: true },
				{ answer: 'Água', correct: false },
				{ answer: 'Vento', correct: false },
			],
		},
		{
			question:
				'Quem é o Cavaleiro de Ouro de Gêmeos, que tem uma personalidade dupla?',
			answers: [
				{ answer: 'Aiolia', correct: false },
				{ answer: 'Saga', correct: true },
				{ answer: 'Shura', correct: false },
				{ answer: 'Camus', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do inimigo divino enfrentado pelos Cavaleiros de Bronze na saga dos campos elisios em "Os cavalheiros do Zodiaco"?',
			answers: [
				{ answer: 'Poseidon', correct: false },
				{ answer: 'Hades', correct: true },
				{ answer: 'Ares', correct: false },
				{ answer: 'Zeus', correct: false },
			],
		},
		{
			question:
				'Na saga de Asgard, os Cavaleiros de Bronze enfrentam os guerreiros de Asgard, liderados por ...?',
			answers: [
				{ answer: 'Odin', correct: false },
				{ answer: 'Hilda', correct: true },
				{ answer: 'Freyja', correct: false },
				{ answer: 'Loki', correct: false },
			],
		},
		{
			question: 'Qual é o nome do protagonista de Hunter x Hunter?',
			answers: [
				{ answer: 'Killua Zoldyck', correct: false },
				{ answer: 'Gon Freecss', correct: true },
				{ answer: 'Kurapika', correct: false },
				{ answer: 'Leorio Paradinight', correct: false },
			],
		},
		{
			question:
				'Qual é a habilidade especial de Killua Zoldyck em "Hunter x Hunter?',
			answers: [
				{ answer: 'Nen', correct: false },
				{ answer: 'Eletricidade', correct: true },
				{ answer: 'Zetsu', correct: false },
				{ answer: 'Ren', correct: false },
			],
		},
		{
			question:
				'Quem é o antagonista principal na saga "Chimera Ant" de Hunter x Hunter?',
			answers: [
				{ answer: 'Hisoka', correct: false },
				{ answer: 'Meruem', correct: true },
				{ answer: 'Illumi Zoldyck', correct: false },
				{ answer: 'Chrollo Lucilfer', correct: false },
			],
		},
		{
			question:
				'Qual é a motivação principal de Kurapika ao se tornar um Caçador em "Hunter x Hunter?',
			answers: [
				{ answer: 'Encontrar o pai desaparecido', correct: false },
				{ answer: 'Vingar seu clã', correct: true },
				{ answer: 'Tornar-se o Caçador mais forte', correct: false },
				{ answer: 'Proteger a Vila da Folha', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do exame que os personagens principais fazem para se tornarem Caçadores em "Hunter x Hunter?',
			answers: [
				{ answer: 'Exame do Nen', correct: false },
				{ answer: 'Exame Hunter', correct: true },
				{ answer: 'Exame da Associação', correct: false },
				{ answer: 'Exame de Seleção de Caçadores', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do protagonista de One Punch Man, conhecido por derrotar seus inimigos com um único soco?',
			answers: [
				{ answer: 'Genos', correct: false },
				{ answer: 'Saitama', correct: true },
				{ answer: 'Sonic', correct: false },
				{ answer: 'Mumen Rider', correct: false },
			],
		},
		{
			question:
				'Quem é o ciborgue que se torna discípulo de Saitama e busca vingança contra o monstro que destruiu sua vila em One Punch Man?',
			answers: [
				{ answer: 'Sonic', correct: false },
				{ answer: 'Genos', correct: true },
				{ answer: 'Mumen Rider', correct: false },
				{ answer: 'Bang', correct: false },
			],
		},
		{
			question:
				'Qual é o nome da associação que classifica os heróis em diferentes níveis com base em suas habilidades em One Punch Man?',
			answers: [
				{ answer: 'Liga dos Heróis', correct: false },
				{ answer: 'Associação dos Heróis', correct: true },
				{ answer: 'Sindicato dos Heróis', correct: false },
				{ answer: 'Sociedade Heróica', correct: false },
			],
		},
		{
			question:
				'Quem é o herói conhecido como "Silver Fang" ou "Bang" em One Punch Man?',
			answers: [
				{ answer: 'King', correct: false },
				{ answer: 'Atomic Samurai', correct: true },
				{ answer: 'Puri-Puri Prisoner', correct: false },
				{ answer: 'Metal Bat', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do vilão alienígena que lidera a invasão à Terra na primeira temporada de One Punch Man?',
			answers: [
				{ answer: 'Garou', correct: false },
				{ answer: 'Boros', correct: true },
				{ answer: 'Deep Sea King', correct: false },
				{ answer: 'Carnage Kabuto', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do protagonista de Death Note, que encontra um caderno capaz de matar qualquer pessoa cujo nome seja escrito nele?',
			answers: [
				{ answer: 'L', correct: false },
				{ answer: 'Light Yagami', correct: true },
				{ answer: 'Near', correct: false },
				{ answer: 'Misa Amane', correct: false },
			],
		},
		{
			question:
				'Quem é o detetive conhecido por suas peculiaridades e que se torna o principal rival de Light Yagami na tentativa de capturar Kira em Death Note?',
			answers: [
				{ answer: 'Near', correct: false },
				{ answer: 'L', correct: true },
				{ answer: 'Mello', correct: false },
				{ answer: 'Ryuk', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do shinigami que originalmente possui o Death Note que Light encontra?',
			answers: [
				{ answer: 'Rem', correct: false },
				{ answer: 'Ryuk', correct: true },
				{ answer: 'Kira', correct: false },
				{ answer: 'Shinigami', correct: false },
			],
		},
		{
			question:
				'O que acontece quando alguém escreve o nome de uma pessoa no Death Note?',
			answers: [
				{ answer: 'A pessoa se torna imortal', correct: false },
				{ answer: 'A pessoa morre', correct: true },
				{ answer: 'A pessoa vira um shinigami', correct: false },
				{ answer: 'A pessoa perde a memória', correct: false },
			],
		},
		{
			question:
				'Qual é o nome da organização secreta de detetives criada para capturar Kira em Death Note?',
			answers: [
				{ answer: 'SPK', correct: false },
				{ answer: 'Kira Task Force', correct: true },
				{ answer: 'Task Force Alpha', correct: false },
				{ answer: 'Liga Anti-Kira', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do protagonista de Jujutsu Kaisen, um estudante do ensino médio que se envolve com maldições e jujutsu?',
			answers: [
				{ answer: 'Megumi Fushiguro', correct: false },
				{ answer: 'Yuji Itadori', correct: true },
				{ answer: 'Satoru Gojo', correct: false },
				{ answer: 'Nobara Kugisaki', correct: false },
			],
		},
		{
			question: 'O que é o "Sukuna Ryomen Cursed Object" em Jujutsu Kaisen?',
			answers: [
				{ answer: 'Uma escola de jujutsu', correct: false },
				{ answer: 'Um objeto amaldiçoado', correct: true },
				{ answer: 'Um feitiço proibido', correct: false },
				{ answer: 'Uma maldição amaldiçoada', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do mentor de Yuji Itadori e um dos professores da Escola Técnica Metropolitana de Jujutsu?',
			answers: [
				{ answer: 'Kento Nanami', correct: false },
				{ answer: 'Satoru Gojo', correct: true },
				{ answer: 'Masamichi Yaga', correct: false },
				{ answer: 'Suguru Geto', correct: false },
			],
		},
		{
			question:
				'Quem é o líder da organização maligna conhecida como "Olho da Maldição" em Jujutsu Kaisen?',
			answers: [
				{ answer: 'Sukuna Ryomen', correct: false },
				{ answer: 'Mahito', correct: true },
				{ answer: 'Toji Fushiguro', correct: false },
				{ answer: 'Jogo Hanami', correct: false },
			],
		},
		{
			question:
				'Qual é a habilidade especial de Megumi Fushiguro em Jujutsu Kaisen?',
			answers: [
				{ answer: 'Transmutação', correct: false },
				{ answer: 'Controle de Besta', correct: true },
				{ answer: 'Manipulação de Terra', correct: false },
				{ answer: 'Técnica de Sombra', correct: false },
			],
		},
		{
			question: 'Qual é o nome do protagonista principal de Dragon Ball?',
			answers: [
				{ answer: 'Vegeta', correct: false },
				{ answer: 'Goku', correct: true },
				{ answer: 'Gohan', correct: false },
				{ answer: 'Piccolo', correct: false },
			],
		},
		{
			question: 'Qual é a técnica especial usada por Goku em Dragon Ball?',
			answers: [
				{ answer: 'Solar Flare', correct: false },
				{ answer: 'Kamehameha', correct: true },
				{ answer: 'Instant Transmission', correct: false },
				{ answer: 'Spirit Bomb', correct: false },
			],
		},
		{
			question: 'Quem é o príncipe da raça Saiyajin em Dragon Ball?',
			answers: [
				{ answer: 'Goku', correct: false },
				{ answer: 'Vegeta', correct: true },
				{ answer: 'Raditz', correct: false },
				{ answer: 'Nappa', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do mentor de Goku que o ensina a usar o Kamehameha?',
			answers: [
				{ answer: 'Kami', correct: false },
				{ answer: 'Mestre Roshi', correct: true },
				{ answer: 'King Kai', correct: false },
				{ answer: 'Korin', correct: false },
			],
		},
		{
			question: 'Quem é o vilão principal na Saga Freeza de Dragon Ball Z?',
			answers: [
				{ answer: 'Cell', correct: false },
				{ answer: 'Freeza', correct: true },
				{ answer: 'Cooler', correct: false },
				{ answer: 'Majin Buu', correct: false },
			],
		},
		{
			question:
				'Qual é o nome da técnica de fusão que Goku e Vegeta usam para se tornar um guerreiro mais poderoso?',
			answers: [
				{ answer: 'Spirit Fusion', correct: false },
				{ answer: 'Potara Fusion', correct: true },
				{ answer: 'Fusion Dance', correct: false },
				{ answer: 'Fusion Reborn', correct: false },
			],
		},
		{
			question:
				'Quem é o androide criado pelo Dr. Gero para destruir Goku em Dragon Ball Z?',
			answers: [
				{ answer: 'Android 16', correct: false },
				{ answer: 'Android 19', correct: true },
				{ answer: 'Android 18', correct: false },
				{ answer: 'Android 17', correct: false },
			],
		},
		{
			question: 'Qual é o nome do planeta natal dos Saiyajins em Dragon Ball?',
			answers: [
				{ answer: 'Namek', correct: false },
				{ answer: 'Vegeta', correct: true },
				{ answer: 'Earth', correct: false },
				{ answer: 'Frieza', correct: false },
			],
		},
		{
			question:
				'Qual é o nome da técnica de Piccolo que se torna uma das mais icônicas em Dragon Ball?',
			answers: [
				{ answer: 'Destructo Disc', correct: false },
				{ answer: 'Special Beam Cannon', correct: true },
				{ answer: 'Hellzone Grenade', correct: false },
				{ answer: 'Makankosappo', correct: false },
			],
		},
		{
			question: 'Quem é o filho mais velho de Goku em Dragon Ball Z?',
			answers: [
				{ answer: 'Goten', correct: false },
				{ answer: 'Gohan', correct: true },
				{ answer: 'Trunks', correct: false },
				{ answer: 'Raditz', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do protagonista de Attack on Titan que busca vingança contra os Titãs após testemunhar a destruição de sua cidade?',
			answers: [
				{ answer: 'Mikasa Ackerman', correct: false },
				{ answer: 'Eren Yeager', correct: true },
				{ answer: 'Armin Arlert', correct: false },
				{ answer: 'Levi Ackerman', correct: false },
			],
		},
		{
			question:
				'Qual é o nome da cidade cercada por enormes muralhas para proteger os humanos dos Titãs em Attack on Titan?',
			answers: [
				{ answer: 'Marley', correct: false },
				{ answer: 'Paradis', correct: true },
				{ answer: 'Trost', correct: false },
				{ answer: 'Shiganshina', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do esquadrão de elite especializado em matar Titãs, liderado por Captain Levi?',
			answers: [
				{ answer: 'Esquadrão Antititã', correct: false },
				{ answer: 'Esquadrão de Reconhecimento', correct: true },
				{ answer: 'Tropa de Guerra', correct: false },
				{ answer: 'Esquadrão de Limpeza', correct: false },
			],
		},
		{
			question:
				'Quem é a Titã Encouraçada, um dos soldados transformados em Titãs durante a invasão inicial em Attack on Titan?',
			answers: [
				{ answer: 'Annie Leonhart', correct: false },
				{ answer: 'Reiner Braun', correct: true },
				{ answer: 'Bertolt Hoover', correct: false },
				{ answer: 'Historia Reiss', correct: false },
			],
		},
		{
			question:
				'Qual é o nome da cidade natal de Eren Yeager, que é destruída pelo Titã Colossal no início de Attack on Titan?',
			answers: [
				{ answer: 'Marley', correct: false },
				{ answer: 'Shiganshina', correct: true },
				{ answer: 'Trost', correct: false },
				{ answer: 'Liberio', correct: false },
			],
		},
		{
			question: 'Qual é a habilidade especial de Hinata Hyuga em Naruto?',
			answers: [
				{ answer: 'Sharingan', correct: false },
				{ answer: 'Byakugan', correct: true },
				{ answer: 'Rinnegan', correct: false },
				{ answer: 'Jūken', correct: false },
			],
		},
		{
			question:
				'Qual é o nome da aldeia oculta de Gaara, o Kazekage, em Naruto?',
			answers: [
				{ answer: 'Vila Oculta da Folha (Konoha)', correct: false },
				{ answer: 'Vila Oculta da Areia (Sunagakure)', correct: true },
				{ answer: 'Vila Oculta da Névoa (Kirigakure)', correct: false },
				{ answer: 'Vila Oculta da Pedra (Iwagakure)', correct: false },
			],
		},
		{
			question: 'Quem é o líder da Akatsuki em Naruto?',
			answers: [
				{ answer: 'Itachi Uchiha', correct: false },
				{ answer: 'Pain', correct: true },
				{ answer: 'Kisame Hoshigaki', correct: false },
				{ answer: 'Madara Uchiha', correct: false },
			],
		},
		{
			question:
				'Qual é a besta com cauda selada dentro de Naruto, concedendo-lhe o chakra da Kyuubi?',
			answers: [
				{ answer: 'Shukaku', correct: false },
				{ answer: 'Kurama', correct: true },
				{ answer: 'Son Goku', correct: false },
				{ answer: 'Matatabi', correct: false },
			],
		},
		{
			question: 'Quem é o mentor de Naruto e o ex-líder da Equipe 7?',
			answers: [
				{ answer: 'Jiraiya', correct: false },
				{ answer: 'Kakashi Hatake', correct: true },
				{ answer: 'Hiruzen Sarutobi', correct: false },
				{ answer: 'Minato Namikaze', correct: false },
			],
		},
		{
			question: 'Qual é a habilidade especial de Sasuke Uchiha em Naruto?',
			answers: [
				{ answer: 'Rasengan', correct: false },
				{ answer: 'Sharingan', correct: true },
				{ answer: 'Byakugan', correct: false },
				{ answer: 'Chidori', correct: false },
			],
		},
		{
			question: 'Qual é o nome do sensei de Kakashi Hatake em naruto',
			answers: [
				{ answer: 'Hiruzen Sarutobi', correct: false },
				{ answer: 'Minato Namikaze', correct: true },
				{ answer: 'Obito Uchiha', correct: false },
				{ answer: 'Itachi Uchiha', correct: false },
			],
		},
		{
			question: 'Qual é a aldeia ninja natal de Naruto?',
			answers: [
				{ answer: 'Vila Oculta da Folha (Konoha)', correct: true },
				{ answer: 'Vila Oculta da Areia (Sunagakure)', correct: false },
				{ answer: 'Vila Oculta da Névoa (Kirigakure)', correct: false },
				{ answer: 'Vila Oculta da Pedra (Iwagakure)', correct: false },
			],
		},
		{
			question:
				'Qual é a técnica de invocação de Naruto que permite que ele chame sapos gigantes para ajudá-lo em batalha?',
			answers: [
				{ answer: 'Kage Bunshin no Jutsu', correct: false },
				{ answer: 'Kuchiyose no Jutsu', correct: true },
				{ answer: 'Sennin Mode', correct: false },
				{ answer: 'Rasengan', correct: false },
			],
		},
		{
			question: 'Qual é o nome da espada de Zabuza Momochi em Naruto?',
			answers: [
				{ answer: 'Hiramekarei', correct: false },
				{ answer: 'Kubikiribōchō', correct: true },
				{ answer: 'Samehada', correct: false },
				{ answer: 'Kusanagi', correct: false },
			],
		},
		{
			question:
				'Qual é o nome da competição entre equipes de demônios na qual Yusuke Urameshi e seus amigos participam em Yu Yu Hakusho?',
			answers: [
				{ answer: 'Torneio das sombras', correct: false },
				{ answer: 'Torneio das trevas', correct: true },
				{ answer: 'Torneio da morte', correct: false },
				{ answer: 'Torneio dos zumbis', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do protagonista de Yu Yu Hakusho, um adolescente que morre ao salvar uma criança e depois é ressuscitado como um Detetive Sobrenatural?',
			answers: [
				{ answer: 'Hiei', correct: false },
				{ answer: 'Yusuke Urameshi', correct: true },
				{ answer: 'Kurama', correct: false },
				{ answer: 'Kuwabara', correct: false },
			],
		},
		{
			question:
				'Quem é o mestre espiritual de Yusuke Urameshi que o orienta no Mundo Espiritual?',
			answers: [
				{ answer: 'Genkai', correct: false },
				{ answer: 'Koenma', correct: true },
				{ answer: 'Botan', correct: false },
				{ answer: 'Puu', correct: false },
			],
		},
		{
			question:
				'Qual é a técnica especial de Hiei em Yu Yu Hakusho, que envolve a manipulação de chamas negras?',
			answers: [
				{ answer: 'Spirit Gun', correct: false },
				{ answer: 'Dragon of the Darkness Flame', correct: true },
				{ answer: 'Spirit Wave', correct: false },
				{ answer: 'Rose Whip', correct: false },
			],
		},
		{
			question:
				'Quem é o meio-demon Kurama em sua forma humana em Yu Yu Hakusho?',
			answers: [
				{ answer: 'Shishiwakamaru', correct: false },
				{ answer: 'Youko Kurama', correct: true },
				{ answer: 'Karasu', correct: false },
				{ answer: 'Kuronue', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do protagonista de Demon Slayer, cuja família é massacrada por demônios, e sua irmã Nezuko é transformada em um demônio?',
			answers: [
				{ answer: 'Zenitsu Agatsuma', correct: false },
				{ answer: 'Tanjiro Kamado', correct: true },
				{ answer: 'Inosuke Hashibira', correct: false },
				{ answer: 'Giyu Tomioka', correct: false },
			],
		},
		{
			question:
				'Qual é a respiração (estilo de luta) principal de Tanjiro Kamado em Demon Slayer?',
			answers: [
				{ answer: 'Respiração da Água', correct: false },
				{ answer: 'Respiração do Fogo', correct: true },
				{ answer: 'Respiração do Vento', correct: false },
				{ answer: 'Respiração do Trovão', correct: false },
			],
		},
		{
			question:
				'Quem é o Hashira (Pilar) que utiliza a Respiração da Água em Demon Slayer?',
			answers: [
				{ answer: 'Kanao Tsuyuri', correct: false },
				{ answer: 'Giyu Tomioka', correct: true },
				{ answer: 'Shinobu Kocho', correct: false },
				{ answer: 'Sanemi Shinazugawa', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do vilão principal, líder dos Onis, em Demon Slayer?',
			answers: [
				{ answer: 'Enmu', correct: false },
				{ answer: 'Muzan Kibutsuji', correct: true },
				{ answer: 'Akaza', correct: false },
				{ answer: 'Rui', correct: false },
			],
		},
		{
			question:
				'Qual é o nome da técnica especial de Zenitsu Agatsuma em Demon Slayer, que é uma das Doze Técnicas da Respiração do Trovão?',
			answers: [
				{ answer: 'Eleventh Form: Dead Calm', correct: false },
				{ answer: 'Third Form: Thunderclap and Flash', correct: true },
				{ answer: 'Twelfth Form: Thunderbolt', correct: false },
				{ answer: 'Fourth Form: Thunder Beast', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do protagonista de One Piece, que busca se tornar o Rei dos Piratas?',
			answers: [
				{ answer: 'Roronoa Zoro', correct: false },
				{ answer: 'Monkey D. Luffy', correct: true },
				{ answer: 'Nami', correct: false },
				{ answer: 'Sanji', correct: false },
			],
		},
		{
			question: 'Qual é o nome da tripulação de Monkey D. Luffy em One Piece?',
			answers: [
				{ answer: 'Os Revolucionários', correct: false },
				{ answer: 'Os Piratas do Sol', correct: false },
				{ answer: 'Os Chapéus de Palha', correct: true },
				{ answer: 'A Marinha', correct: false },
			],
		},
		{
			question:
				'Quem é o espadachim que sonha em se tornar o maior espadachim do mundo em One Piece?',
			answers: [
				{ answer: 'Usopp', correct: false },
				{ answer: 'Roronoa Zoro', correct: true },
				{ answer: 'Nico Robin', correct: false },
				{ answer: 'Franky', correct: false },
			],
		},
		{
			question: 'Qual é o nome do barco dos Chapéus de Palha em One Piece?',
			answers: [
				{ answer: 'Red Force', correct: false },
				{ answer: 'Thousand Sunny', correct: true },
				{ answer: 'Oro Jackson', correct: false },
				{ answer: 'Going Merry', correct: false },
			],
		},
		{
			question:
				'Quem é o arqueólogo da tripulação dos Chapéus de Palha em One Piece?',
			answers: [
				{ answer: 'Tony Tony Chopper', correct: false },
				{ answer: 'Nico Robin', correct: true },
				{ answer: 'Brook', correct: false },
				{ answer: 'Vinsmoke Sanji', correct: false },
			],
		},
		{
			question:
				'Qual é o nome do capitão dos Piratas do Barba Branca em One Piece?',
			answers: [
				{ answer: 'Gol D. Roger', correct: false },
				{ answer: 'Edward Newgate', correct: true },
				{ answer: 'Monkey D. Garp', correct: false },
				{ answer: 'Marshall D. Teach', correct: false },
			],
		},
		{
			question:
				'Quem é o cozinheiro da tripulação dos Chapéus de Palha em One Piece?',
			answers: [
				{ answer: 'Brook', correct: false },
				{ answer: 'Sanji', correct: true },
				{ answer: 'Franky', correct: false },
				{ answer: 'Jinbe', correct: false },
			],
		},
		{
			question: 'Qual é o nome da fruta do diabo que Luffy come em One Piece?',
			answers: [
				{ answer: 'Mera Mera no Mi', correct: false },
				{ answer: 'Gomu Gomu no Mi', correct: true },
				{ answer: 'Hito Hito no Mi', correct: false },
				{ answer: 'Ope Ope no Mi', correct: false },
			],
		},
		{
			question:
				'Quem é o arqueiro da tripulação dos Chapéus de Palha em One Piece?',
			answers: [
				{ answer: 'Nami', correct: false },
				{ answer: 'Usopp', correct: true },
				{ answer: 'Tony Tony Chopper', correct: false },
				{ answer: 'Vinsmoke Sanji', correct: false },
			],
		},
		{
			question:
				'Qual é o nome da ilha onde nasceu e foi executado Gol D. Roger em One Piece?',
			answers: [
				{ answer: 'Water 7', correct: false },
				{ answer: 'Loguetown', correct: true },
				{ answer: 'Marineford', correct: false },
				{ answer: 'Reverse Mountain', correct: false },
			],
		},
		{
			question: 'Qual é o nome do protagonista de Bleach?',
			answers: [
				{ answer: 'Ichigo Kurosaki', correct: true },
				{ answer: 'Rukia Kuchiki', correct: false },
				{ answer: 'Orihime Inoue', correct: false },
				{ answer: 'Uryu Ishida', correct: false },
			],
		},
		{
			question: 'Qual é o nome da espada de Ichigo Kurosaki?',
			answers: [
				{ answer: 'Zangetsu', correct: true },
				{ answer: 'Tensa Zangetsu', correct: false },
				{ answer: 'Hollow Ichigo', correct: false },
				{ answer: 'Mugetsu', correct: false },
			],
		},
		{
			question: 'Qual é o nome do capitão da 10ª Divisão do Gotei 13?',
			answers: [
				{ answer: 'Kenpachi Zaraki', correct: true },
				{ answer: 'Byakuya Kuchiki', correct: false },
				{ answer: 'Mayuri Kurotsuchi', correct: false },
				{ answer: 'Shunsui Kyōraku', correct: false },
			],
		},
		{
			question: 'Qual é o nome do líder dos Arrancars?',
			answers: [
				{ answer: 'Sōsuke Aizen', correct: true },
				{ answer: 'Yammy Llargo', correct: false },
				{ answer: 'Ulquiorra Cifer', correct: false },
				{ answer: 'Baraggan Louisenbairn', correct: false },
			],
		},
		{
			question: 'Qual é o nome do bankai de Ichigo Kurosaki?',
			answers: [
				{ answer: 'Tensa Zangetsu', correct: true },
				{ answer: 'Hollow Ichigo', correct: false },
				{ answer: 'Mugetsu', correct: false },
				{ answer: 'Fraccionar', correct: false },
			],
		},
		{
			question: 'Qual é o nome do personagem principal de Samurai X?',
			answers: [
				{ answer: 'Kenshin Himura', correct: true },
				{ answer: 'Shishio Makoto', correct: false },
				{ answer: 'Aoshi Shinomori', correct: false },
				{ answer: 'Makoto Shishio', correct: false },
			],
		},
		{
			question: 'O que Kenshin Himura jura fazer após a Guerra Boshin?',
			answers: [
				{ answer: 'Nunca mais matar', correct: true },
				{ answer: 'Vencer a Guerra Boshin', correct: false },
				{ answer: 'Proteger o Japão', correct: false },
				{ answer: 'Juntar-se a Shishio Makoto', correct: false },
			],
		},
		{
			question: 'Qual é o nome da espada de Kenshin Himura?',
			answers: [
				{ answer: 'Sakabatō', correct: true },
				{ answer: 'Himura', correct: false },
				{ answer: 'Hiten Mitsurugi-ryū', correct: false },
				{ answer: 'Juppongatana', correct: false },
			],
		},
		{
			question: 'Quem é o principal antagonista de Samurai X?',
			answers: [
				{ answer: 'Shishio Makoto', correct: true },
				{ answer: 'Kenshin Himura', correct: false },
				{ answer: 'Aoshi Shinomori', correct: false },
				{ answer: 'Makoto Shishio', correct: false },
			],
		},
		{
			question: 'Qual é o nome da organização que Shishio Makoto criou?',
			answers: [
				{ answer: 'Juppongatana', correct: true },
				{ answer: 'Hiten Mitsurugi-ryū', correct: false },
				{ answer: 'Sakabatō', correct: false },
				{ answer: 'Kenshin Himura', correct: false },
			],
		},
		{
			question:
				'Qual é o Pokémon inicial oferecido pelo Professor Carvalho em Kanto?',
			answers: [
				{ answer: 'Bulbasaur', correct: false },
				{ answer: 'Charmander', correct: false },
				{ answer: 'Squirtle', correct: true },
				{ answer: 'Pikachu', correct: false },
			],
		},
		{
			question: 'Quem é o líder da Equipe Rocket em Pokémon?',
			answers: [
				{ answer: 'Jessie', correct: false },
				{ answer: 'James', correct: false },
				{ answer: 'Meowth', correct: false },
				{ answer: 'Giovanni', correct: true },
			],
		},
		{
			question: 'Qual é o tipo principal do Pokémon Pikachu?',
			answers: [
				{ answer: 'Fogo', correct: false },
				{ answer: 'Água', correct: false },
				{ answer: 'Elétrico', correct: true },
				{ answer: 'Grama', correct: false },
			],
		},
		{
			question: 'Qual é a evolução final do Pokémon inicial Bulbasaur?',
			answers: [
				{ answer: 'Ivysaur', correct: false },
				{ answer: 'Venusaur', correct: true },
				{ answer: 'Charizard', correct: false },
				{ answer: 'Blastoise', correct: false },
			],
		},
		{
			question: 'Qual é o lendário mascote da versão Pokémon Red?',
			answers: [
				{ answer: 'Mew', correct: false },
				{ answer: 'Articuno', correct: false },
				{ answer: 'Zapdos', correct: false },
				{ answer: 'Mewtwo', correct: true },
			],
		},
		{
			question: 'Qual é a região explorada nos jogos Pokémon Ruby e Sapphire?',
			answers: [
				{ answer: 'Kanto', correct: false },
				{ answer: 'Johto', correct: false },
				{ answer: 'Hoenn', correct: true },
				{ answer: 'Sinnoh', correct: false },
			],
		},
		{
			question: 'Qual é o líder da Equipe Aqua em Pokémon Ruby e Sapphire?',
			answers: [
				{ answer: 'Archie', correct: true },
				{ answer: 'Maxie', correct: false },
				{ answer: 'Tabitha', correct: false },
				{ answer: 'Shelly', correct: false },
			],
		},
		{
			question: 'Qual é o lendário mascote da versão Pokémon Blue?',
			answers: [
				{ answer: 'Mew', correct: false },
				{ answer: 'Articuno', correct: true },
				{ answer: 'Zapdos', correct: false },
				{ answer: 'Mewtwo', correct: false },
			],
		},
		{
			question:
				'Qual é o Pokémon inicial oferecido pelo Professor Rowan em Sinnoh?',
			answers: [
				{ answer: 'Chimchar', correct: false },
				{ answer: 'Piplup', correct: true },
				{ answer: 'Turtwig', correct: false },
				{ answer: 'Buizel', correct: false },
			],
		},
		{
			question:
				'Quem é o campeão da Liga Pokémon em Kanto nos jogos originais?',
			answers: [
				{ answer: 'Blue', correct: false },
				{ answer: 'Lance', correct: false },
				{ answer: 'Red', correct: true },
				{ answer: 'Steven', correct: false },
			],
		},
		{
			question: 'Qual é o nome do protagonista de "Tokyo Revengers"?',
			answers: [
				{ answer: 'Takemichi Hanagaki', correct: true },
				{ answer: 'Draken', correct: false },
				{ answer: 'Takashi Mitsuya', correct: false },
				{ answer: 'Mikey', correct: false },
			],
		},
		{
			question: 'Qual é o nome do  lider da Tomam em "Tokyo Revengers"?',
			answers: [
				{ answer: 'Takemichi Hanagaki', correct: false },
				{ answer: 'Draken', correct: false },
				{ answer: 'Takashi Mitsuya', correct: false },
				{ answer: 'Mikey', correct: true },
			],
		},
		{
			question: 'Quem é conhecido como o "Ninja Cop" em "Cowboy Bebop"?',
			answers: [
				{ answer: 'Spike Spiegel', correct: true },
				{ answer: 'Edward Wong Hau Pepelu Tivrusky IV', correct: false },
				{ answer: 'Jet Black', correct: false },
				{ answer: 'Faye Valentine', correct: false },
			],
		},
		{
			question:
				'Qual é o título completo de "Fullmetal Alchemist: Brotherhood"?',
			answers: [
				{ answer: 'Fullmetal Alchemist: Resurrection', correct: false },
				{ answer: 'Fullmetal Alchemist: Redemption', correct: false },
				{ answer: 'Fullmetal Alchemist: Brotherhood', correct: true },
				{ answer: 'Fullmetal Alchemist: Evolution', correct: false },
			],
		},
		{
			question:
				'Em "Tokyo Revengers", qual é o nome da namorada do personagem principal?',
			answers: [
				{ answer: 'Sakura Haruno', correct: false },
				{ answer: 'Rukia Kuchiki', correct: false },
				{ answer: 'Hinata Tachibana', correct: true },
				{ answer: 'Orihime Inoue', correct: false },
			],
		},
	];
	const serie = [
		{
			question:
				'Qual série de TV ganhou o prêmio de Melhor Série Dramática no Emmy Awards 2021?',
			answers: [
				{ answer: 'Breaking Bad', correct: false },
				{ answer: 'The Crown', correct: true },
				{ answer: 'Stranger Things', correct: false },
				{ answer: 'Game of Thrones', correct: false },
			],
		},
		{
			question: 'Em qual série de TV os personagens visitam o Mundo Invertido?',
			answers: [
				{ answer: 'Westworld', correct: false },
				{ answer: 'The Walking Dead', correct: false },
				{ answer: 'Stranger Things', correct: true },
				{ answer: 'Black Mirror', correct: false },
			],
		},
		{
			question: 'Qual série de TV é baseada na obra de George R.R. Martin?',
			answers: [
				{ answer: 'Outlander', correct: false },
				{ answer: 'The Witcher', correct: false },
				{ answer: 'Game of Thrones', correct: true },
				{ answer: 'Vikings', correct: false },
			],
		},
		{
			question: '',
			answers: [
				{ answer: '', correct: false },
				{ answer: '', correct: true },
				{ answer: '', correct: false },
				{ answer: '', correct: false },
			],
		},
	];
	const esportes = [
		{
			question: 'Qual jogador de basquete é conhecido como "King James"?',
			answers: [
				{ answer: 'Stephen Curry', correct: false },
				{ answer: 'LeBron James', correct: true },
				{ answer: 'Kobe Bryant', correct: false },
				{ answer: 'Michael Jordan', correct: false },
			],
		},
		{
			question: 'Em que esporte o termo "hat-trick" é comumente usado?',
			answers: [
				{ answer: 'Futebol', correct: true },
				{ answer: 'Tênis', correct: false },
				{ answer: 'Golfe', correct: false },
				{ answer: 'Beisebol', correct: false },
			],
		},
		{
			question: 'Qual é o evento principal do decatlo?',
			answers: [
				{ answer: 'Lançamento de martelo', correct: false },
				{ answer: 'Salto com vara', correct: false },
				{ answer: 'Corrida de 1500 metros', correct: true },
				{ answer: 'Arremesso de peso', correct: false },
			],
		},
		{
			question: '',
			answers: [
				{ answer: '', correct: false },
				{ answer: '', correct: true },
				{ answer: '', correct: false },
				{ answer: '', correct: false },
			],
		},
	];

	/* {
		question:
			'',
		answers: [
			{ answer: '', correct: false },
			{ answer: '', correct: true },
			{ answer: '', correct: false },
			{ answer: '', correct: false },
		],
	}, 
	*/
	// substituição do quizz para a primeira pergunta
	function init() {
		// Limpar tela antes de iniciar um novo jogo
		const oldButtons = answersBox.querySelectorAll('button');
		oldButtons.forEach(function (btn) {
			btn.remove();
		});
		answersBox.innerHTML = '';
		themeBox.classList.remove('hide');
		questionContainer.classList.remove('hide');
		// Remover a última pergunta (se existir)
		const oldQuestion = document.querySelector('#question-text');
		const oldNumber = document.querySelector('#question-number');
		if (oldQuestion) {
			oldQuestion.textContent = '';
			oldNumber.textContent = '';
		}

		setTimeout(function () {
			chooseTheme();
			//criar a primeira pergunta

			createQuestion(0);
		}, 1800);
		quizzContainer.classList.toggle('hide');
	}

	// escolhe o tema das perguntas e atribui
	function chooseTheme(theme) {
		const themes = themeBox.querySelectorAll('button');
		themes.forEach(function (theme) {
			theme.addEventListener('click', function (event) {
				const themeId = event.target.id;

				if (themeId === 'cinema') {
					questions = randomQuestions(cinema, 10);
					showMessage();
					init();
					hideBegin();
				} else if (themeId === 'anime') {
					questions = randomQuestions(anime, 10);
					showMessage();
					init();
					hideBegin();
				} else if (themeId === 'serie') {
					questions = randomQuestions(serie, 10);
					showMessage();
					init();
					hideBegin();
				} else if (themeId === 'esportes') {
					questions = randomQuestions(esportes, 10);
					showMessage();
					init();
					hideBegin();
				}
			});
		});
	}
	function hideBegin() {
		themeBox.classList.add('hide');
		questionContainer.classList.add('hide');
		quizzContainer.classList.remove('hide');
	}
	function showBegin() {
		themeBox.classList.remove('hide');
		questionContainer.classList.remove('hide');
		quizzContainer.classList.add('hide');
	}
	// função para obter perguntas aleatorias
	function randomQuestions(arr, number) {
		const randomQuestions = [];
		const copyArr = [...arr];

		for (let i = 0; i < number; i++) {
			const indiceRamdom = Math.floor(Math.random() * copyArr.length);
			const questionSelect = copyArr.splice(indiceRamdom, 1)[0];
			randomQuestions.push(questionSelect);
		}
		return randomQuestions;
	}

	// cria uma pergunta
	function createQuestion(i) {
		if (i >= questions.length) {
			// Não há mais perguntas, encerrar o quizz ou tomar alguma ação desejada
			return;
		}
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
		questions = [];
		hideOrShowQuizz();
		showBegin();
		//init();
	});

	async function showMessage() {
		ready.classList.remove('hide');
		await new Promise((resolve) => setTimeout(resolve, 1700));
		ready.classList.add('hide');
	}

	// inicilaização do quizz

	init();
});
