cards = [
  { name: "HK", value: 5, suit: "h",  strength:  7, label: "Herz König" },
  { name: "HD", value: 4, suit: "h",  strength:  6, label: "Herz Dame" },
  { name: "HC", value: 3, suit: "h",  strength:  5, label: "Herz Cavall" },
  { name: "HB", value: 2, suit: "h",  strength:  4, label: "Herz Bube" },
  { name: "H1", value: 1, suit: "h",  strength:  3, label: "Herz 1" },
  { name: "H2", value: 1, suit: "h",  strength:  2, label: "Herz 2" },
  { name: "H3", value: 1, suit: "h",  strength:  1, label: "Herz 3" },
  { name: "H4", value: 1, suit: "h",  strength:  0, label: "Herz 4" },
  { name: "TK", value: 5, suit: "t",  strength:  7, label: "Treff König" },
  { name: "TD", value: 4, suit: "t",  strength:  6, label: "Treff Dame" },
  { name: "TC", value: 3, suit: "t",  strength:  5, label: "Treff Cavall" },
  { name: "TB", value: 2, suit: "t",  strength:  4, label: "Treff Bube" },
  { name: "TX", value: 1, suit: "t",  strength:  3, label: "Treff 10" },
  { name: "T9", value: 1, suit: "t",  strength:  2, label: "Treff 9" },
  { name: "T8", value: 1, suit: "t",  strength:  1, label: "Treff 8" },
  { name: "T7", value: 1, suit: "t",  strength:  0, label: "Treff 7" },
  { name: "KK", value: 5, suit: "k",  strength:  7, label: "Karo König" },
  { name: "KD", value: 4, suit: "k",  strength:  6, label: "Karo Dame" },
  { name: "KC", value: 3, suit: "k",  strength:  5, label: "Karo Cavall" },
  { name: "KB", value: 2, suit: "k",  strength:  4, label: "Karo Bube" },
  { name: "K1", value: 1, suit: "k",  strength:  3, label: "Karo 1" },
  { name: "K2", value: 1, suit: "k",  strength:  2, label: "Karo 2" },
  { name: "K3", value: 1, suit: "k",  strength:  1, label: "Karo 3" },
  { name: "K4", value: 1, suit: "k",  strength:  0, label: "Karo 4" },
  { name: "PK", value: 5, suit: "p",  strength:  7, label: "Pik König" },
  { name: "PD", value: 4, suit: "p",  strength:  6, label: "Pik Dame" },
  { name: "PC", value: 3, suit: "p",  strength:  5, label: "Pik Cavall" },
  { name: "PB", value: 2, suit: "p",  strength:  4, label: "Pik Bube" },
  { name: "PX", value: 1, suit: "p",  strength:  3, label: "Pik 10" },
  { name: "P9", value: 1, suit: "p",  strength:  2, label: "Pik 9" },
  { name: "P8", value: 1, suit: "p",  strength:  1, label: "Pik 8" },
  { name: "P7", value: 1, suit: "p",  strength:  0, label: "Pik 7" },
  { name: "20", value: 1, suit: "tk", strength: 27, label: "Tarock XX" },
  { name: "19", value: 1, suit: "tk", strength: 26, label: "Tarock XIX" },
  { name: "18", value: 1, suit: "tk", strength: 25, label: "Tarock XVIII" },
  { name: "17", value: 1, suit: "tk", strength: 24, label: "Tarock XVII" },
  { name: "16", value: 1, suit: "tk", strength: 23, label: "Tarock XVI" },
  { name: "15", value: 1, suit: "tk", strength: 22, label: "Tarock XV" },
  { name: "14", value: 1, suit: "tk", strength: 21, label: "Tarock XIV" },
  { name: "13", value: 1, suit: "tk", strength: 20, label: "Tarock XIII" },
  { name: "12", value: 1, suit: "tk", strength: 19, label: "Tarock XII" },
  { name: "11", value: 1, suit: "tk", strength: 18, label: "Tarock XI" },
  { name: "10", value: 1, suit: "tk", strength: 17, label: "Tarock X" },
  { name: "09", value: 1, suit: "tk", strength: 16, label: "Tarock IX" },
  { name: "08", value: 1, suit: "tk", strength: 15, label: "Tarock VIII" },
  { name: "07", value: 1, suit: "tk", strength: 14, label: "Tarock VII" },
  { name: "06", value: 1, suit: "tk", strength: 13, label: "Tarock VI" },
  { name: "05", value: 1, suit: "tk", strength: 12, label: "Tarock V" },
  { name: "04", value: 1, suit: "tk", strength: 11, label: "Tarock IIII (Quapil)" },
  { name: "03", value: 1, suit: "tk", strength: 10, label: "Tarock III (Kakadu)" },
  { name: "02", value: 1, suit: "tk", strength:  9, label: "Tarock II (Uhu)" },
  { name: "01", value: 5, suit: "tk", strength:  8, label: "Tarock I (Pagat)" },
  { name: "21", value: 5, suit: "tk", strength: 28, label: "Tarock XXI (Mond)" },
  { name: "22", value: 5, suit: "tk", strength: 29, label: "Sküs" }
];

var cardValue = 0;

function randomCard(cards) {
  return cards[Math.floor(Math.random() * (cards.length - 1))];
};

function sumUp(cards) {
  var sum = 0;
  if (cards != null) {
    cards.forEach(function(entry) {
      sum = sum + entry.value - (2/3);
    });
  }
  return Math.floor(sum);
}

function randomCards(cards, n) {
  var newStack = new Array();
  for (var i = n - 1; i >= 0; i--) {
    singleCard = randomCard(cards);
    newStack.push(singleCard);
    cards = _.without(cards, singleCard);
  }
  return newStack;
}

function renderCard(card) {
  return $("<img src='stylesheets/card-icons/" + card.name + "@2x.png' width='40' height='60' alt='" + card.label + "' />");
}

function renderCards(cards, container) {
  if (cards != null) {
    cards.forEach(function(entry) {
      $(container).append(renderCard(entry));
    });
  }
}

function setQuestion01() {
  resetQuestion01();
  card = randomCards(cards, 1);
  renderCards(card, ".lessons-game");
  cardValue = card[0].value;
}

function resetQuestion01() {
  $(".lessons-game").html("");
}

function showAnswer01() {
  $(".lessons-game").append($("<p>" + cardValue + "</p>"));
  this.hide();
}
