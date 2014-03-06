
// fuu = new Stack(cards, minAmount, maxAmount, fixedCards, sorted) // thats the way it should be, eigene klasse fuer einen kartenstack

function Quiz(container, quizType) {
  cards = [
    { name: "HK", value: 5, suit: "h",  strength:  7, sortOrder: 23, label: "Herz König" },
    { name: "HD", value: 4, suit: "h",  strength:  6, sortOrder: 24, label: "Herz Dame" },
    { name: "HC", value: 3, suit: "h",  strength:  5, sortOrder: 25, label: "Herz Cavall" },
    { name: "HB", value: 2, suit: "h",  strength:  4, sortOrder: 26, label: "Herz Bube" },
    { name: "H1", value: 1, suit: "h",  strength:  3, sortOrder: 27, label: "Herz 1" },
    { name: "H2", value: 1, suit: "h",  strength:  2, sortOrder: 28, label: "Herz 2" },
    { name: "H3", value: 1, suit: "h",  strength:  1, sortOrder: 29, label: "Herz 3" },
    { name: "H4", value: 1, suit: "h",  strength:  0, sortOrder: 30, label: "Herz 4" },
    { name: "TK", value: 5, suit: "t",  strength:  7, sortOrder: 31, label: "Treff König" },
    { name: "TD", value: 4, suit: "t",  strength:  6, sortOrder: 32, label: "Treff Dame" },
    { name: "TC", value: 3, suit: "t",  strength:  5, sortOrder: 33, label: "Treff Cavall" },
    { name: "TB", value: 2, suit: "t",  strength:  4, sortOrder: 34, label: "Treff Bube" },
    { name: "TX", value: 1, suit: "t",  strength:  3, sortOrder: 35, label: "Treff 10" },
    { name: "T9", value: 1, suit: "t",  strength:  2, sortOrder: 36, label: "Treff 9" },
    { name: "T8", value: 1, suit: "t",  strength:  1, sortOrder: 37, label: "Treff 8" },
    { name: "T7", value: 1, suit: "t",  strength:  0, sortOrder: 38, label: "Treff 7" },
    { name: "KK", value: 5, suit: "k",  strength:  7, sortOrder: 39, label: "Karo König" },
    { name: "KD", value: 4, suit: "k",  strength:  6, sortOrder: 40, label: "Karo Dame" },
    { name: "KC", value: 3, suit: "k",  strength:  5, sortOrder: 41, label: "Karo Cavall" },
    { name: "KB", value: 2, suit: "k",  strength:  4, sortOrder: 42, label: "Karo Bube" },
    { name: "K1", value: 1, suit: "k",  strength:  3, sortOrder: 43, label: "Karo 1" },
    { name: "K2", value: 1, suit: "k",  strength:  2, sortOrder: 44, label: "Karo 2" },
    { name: "K3", value: 1, suit: "k",  strength:  1, sortOrder: 45, label: "Karo 3" },
    { name: "K4", value: 1, suit: "k",  strength:  0, sortOrder: 46, label: "Karo 4" },
    { name: "PK", value: 5, suit: "p",  strength:  7, sortOrder: 47, label: "Pik König" },
    { name: "PD", value: 4, suit: "p",  strength:  6, sortOrder: 48, label: "Pik Dame" },
    { name: "PC", value: 3, suit: "p",  strength:  5, sortOrder: 49, label: "Pik Cavall" },
    { name: "PB", value: 2, suit: "p",  strength:  4, sortOrder: 50, label: "Pik Bube" },
    { name: "PX", value: 1, suit: "p",  strength:  3, sortOrder: 51, label: "Pik 10" },
    { name: "P9", value: 1, suit: "p",  strength:  2, sortOrder: 52, label: "Pik 9" },
    { name: "P8", value: 1, suit: "p",  strength:  1, sortOrder: 53, label: "Pik 8" },
    { name: "P7", value: 1, suit: "p",  strength:  0, sortOrder: 54, label: "Pik 7" },
    { name: "20", value: 1, suit: "tk", strength: 27, sortOrder:  3, label: "Tarock XX" },
    { name: "19", value: 1, suit: "tk", strength: 26, sortOrder:  4, label: "Tarock XIX" },
    { name: "18", value: 1, suit: "tk", strength: 25, sortOrder:  5, label: "Tarock XVIII" },
    { name: "17", value: 1, suit: "tk", strength: 24, sortOrder:  6, label: "Tarock XVII" },
    { name: "16", value: 1, suit: "tk", strength: 23, sortOrder:  7, label: "Tarock XVI" },
    { name: "15", value: 1, suit: "tk", strength: 22, sortOrder:  8, label: "Tarock XV" },
    { name: "14", value: 1, suit: "tk", strength: 21, sortOrder:  9, label: "Tarock XIV" },
    { name: "13", value: 1, suit: "tk", strength: 20, sortOrder: 10, label: "Tarock XIII" },
    { name: "12", value: 1, suit: "tk", strength: 19, sortOrder: 11, label: "Tarock XII" },
    { name: "11", value: 1, suit: "tk", strength: 18, sortOrder: 12, label: "Tarock XI" },
    { name: "10", value: 1, suit: "tk", strength: 17, sortOrder: 13, label: "Tarock X" },
    { name: "09", value: 1, suit: "tk", strength: 16, sortOrder: 14, label: "Tarock IX" },
    { name: "08", value: 1, suit: "tk", strength: 15, sortOrder: 15, label: "Tarock VIII" },
    { name: "07", value: 1, suit: "tk", strength: 14, sortOrder: 16, label: "Tarock VII" },
    { name: "06", value: 1, suit: "tk", strength: 13, sortOrder: 17, label: "Tarock VI" },
    { name: "05", value: 1, suit: "tk", strength: 12, sortOrder: 18, label: "Tarock V" },
    { name: "04", value: 1, suit: "tk", strength: 11, sortOrder: 19, label: "Tarock IIII (Quapil)" },
    { name: "03", value: 1, suit: "tk", strength: 10, sortOrder: 20, label: "Tarock III (Kakadu)" },
    { name: "02", value: 1, suit: "tk", strength:  9, sortOrder: 21, label: "Tarock II (Uhu)" },
    { name: "01", value: 5, suit: "tk", strength:  8, sortOrder: 22, label: "Tarock I (Pagat)" },
    { name: "21", value: 5, suit: "tk", strength: 28, sortOrder:  2, label: "Tarock XXI (Mond)" },
    { name: "22", value: 5, suit: "tk", strength: 29, sortOrder:  1, label: "Sküs" }
  ];

  var allCards = 0;
  var namedCards = 0;
  var farbensoloCards = 0;
  var emperorTrickCards = 0;

  quizQuestion = [
    { index: 0, sorted: false, minAmount: 1,  maxAmount: 1,  cards: allCards,          question: "Welchen Wert hat diese Karte?" },
    { index: 1, sorted: false, minAmount: 1,  maxAmount: 1,  cards: namedCards,        question: "Welchen Wert hat diese Karte?" },
    { index: 2, sorted: false, minAmount: 2,  maxAmount: 4,  cards: allCards,          question: "Welche Karte hat den höheren Wert?" },
    { index: 3, sorted: false, minAmount: 4,  maxAmount: 4,  cards: allCards,          question: "Erste Karte wurde ausgespielt. Welche Karte macht den Stich?" },
    { index: 4, sorted: false, minAmount: 4,  maxAmount: 4,  cards: emperorTrickCards, question: "Erste Karte wurde ausgespielt. Welche Karte macht den Stich?" },
    { index: 5, sorted: false, minAmount: 4,  maxAmount: 4,  cards: farbensoloCards,   question: "Farbensolo: Erste Karte wurde ausgespielt. Welche Karte macht den Stich?" },
    { index: 6, sorted: false, minAmount: 20, maxAmount: 34, cards: allCards,          question: "Wieviele Punkte sind in den Stichen?" },
    { index: 7, sorted: false, minAmount: 20, maxAmount: 34, cards: allCards,          question: "Welche Prämien sind in den Stichen?" }
  ];

  container = $(container);
  var cardValue = 0;
  var sorted = true;

  function initialize() {
    container.append("<div class='content'></div><button class='btn btn-default btn-show'>Antwort anzeigen</button><button class='btn btn-default btn-new'>Neue Frage</button>");
    setQuiz(quizType);
  }

  initialize();

  function setQuiz(quizType) {
    if (quizType == 0) {
      amount = 12;
      sorted = false;
    } else {
      amount = 12;
      sorted = true;
    }


    cardsToRender = randomCards(cards, amount);
    if(sorted == true) {
      cardsToRender = _.sortBy(cardsToRender, function(num){ return num.sortOrder });
    }
    renderCards(cardsToRender);
  }

  function randomCard(cards) {
    return cards[Math.floor(Math.random() * (cards.length - 1))];
  };

  function randomCards(cards, amount) {
    var newStack = new Array();
    for (var i = amount - 1; i >= 0; i--) {
      singleCard = randomCard(cards);
      newStack.push(singleCard);
      cards = _.without(cards, singleCard);
    }
    return newStack;
  }

  function renderCards(cards) {
    if (cards != null) {
      cards.forEach(function(entry) {
        $(container).append(renderCard(entry));
      });
    }
  }

  function renderCard(card) {
    return $("<img src='stylesheets/card-icons/" + card.name + "@2x.png' width='40' height='60' alt='" + card.label + "' />");
  }
}

var Quiz01 = new Quiz($(".quiz-01"), 0);
var Quiz02 = new Quiz($(".quiz-02"), 1);

