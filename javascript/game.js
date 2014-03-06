// PLAN:
// nur sichtbare Karten selektierbar machen (checkselectable)
// Talonhälfte selektierbar
// Talonhälfte als Erweiterung der Karten über den Karten
// oder ganzer Talon in die Kartenerweiterung
// 3 oder 6 Karten in der Hand auswählbar
// Karten zurück in den Talon legen
//
// Namen Anzeigen und Anzeige welcher Spieler Vorhand ist
// Anzeige welcher Spieler an der Reihe ist
//

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

games = [
  { name: "Rufer",          valueWon: 1, valueLost: 1, lizitationOrder:  2, gameWithPartner: true,  firstHandGame: true,  negativeGame: false, soloGame: false, colorGame: false },
  { name: "Trischaken",     valueWon: 0, valueLost: 0, lizitationOrder:  1, gameWithPartner: false, firstHandGame: true,  negativeGame: true,  soloGame: true,  colorGame: false },
  { name: "Sechserdreier",  valueWon: 4, valueLost: 8, lizitationOrder:  7, gameWithPartner: false, firstHandGame: true,  negativeGame: false, soloGame: false, colorGame: false },
  { name: "Piccolo",        valueWon: 2, valueLost: 2, lizitationOrder:  3, gameWithPartner: false, firstHandGame: false, negativeGame: true,  soloGame: true,  colorGame: false },
  { name: "Bettler",        valueWon: 2, valueLost: 2, lizitationOrder:  4, gameWithPartner: false, firstHandGame: false, negativeGame: true,  soloGame: true,  colorGame: false },
  { name: "Solorufer",      valueWon: 2, valueLost: 2, lizitationOrder:  5, gameWithPartner: true,  firstHandGame: false, negativeGame: false, soloGame: true,  colorGame: false },
  { name: "Besserrufer",    valueWon: 1, valueLost: 1, lizitationOrder:  6, gameWithPartner: true,  firstHandGame: false, negativeGame: false, soloGame: false, colorGame: false },
  { name: "Dreier",         valueWon: 4, valueLost: 4, lizitationOrder:  8, gameWithPartner: false, firstHandGame: false, negativeGame: false, soloGame: false, colorGame: false },
  { name: "Farbensolo",     valueWon: 5, valueLost: 5, lizitationOrder:  9, gameWithPartner: false, firstHandGame: false, negativeGame: false, soloGame: true,  colorGame: true  },
  { name: "Piccolo Ouvert", valueWon: 6, valueLost: 6, lizitationOrder: 10, gameWithPartner: false, firstHandGame: false, negativeGame: true,  soloGame: true,  colorGame: false },
  { name: "Bettler Ouvert", valueWon: 7, valueLost: 7, lizitationOrder: 11, gameWithPartner: false, firstHandGame: false, negativeGame: true,  soloGame: true,  colorGame: false },
  { name: "Solodreier",     valueWon: 8, valueLost: 8, lizitationOrder: 12, gameWithPartner: false, firstHandGame: false, negativeGame: false, soloGame: true,  colorGame: false }
],

bonuses = [
  { name: "Pagat Ultimo", valueAnonnounced: 2, valueUnannounced: 1, multiplicator: false },
  { name: "Uhu",          valueAnonnounced: 4, valueUnannounced: 2, multiplicator: false },
  { name: "Kakadu",       valueAnonnounced: 6, valueUnannounced: 3, multiplicator: false },
  { name: "Marabu",       valueAnonnounced: 8, valueUnannounced: 4, multiplicator: false },
  { name: "Trull",        valueAnonnounced: 2, valueUnannounced: 1, multiplicator: false },
  { name: "4 Könige",     valueAnonnounced: 2, valueUnannounced: 1, multiplicator: false },
  { name: "König Ultimo", valueAnonnounced: 2, valueUnannounced: 1, multiplicator: false },
  { name: "Mondfang",     valueAnonnounced: 0, valueUnannounced: 1, multiplicator: false },
  { name: "Valat",        valueAnonnounced: 8, valueUnannounced: 4, multiplicator: true  }
];

players = [
  { name: "Christian",  index: 0, firstHand: true,  htmlObject:$(".player_0"), hand:$(".player_0 .hand") },
  { name: "Hubert",     index: 1, firstHand: false, htmlObject:$(".player_1"), hand:$(".player_1 .hand") },
  { name: "Wolfgang",   index: 2, firstHand: false, htmlObject:$(".player_2"), hand:$(".player_2 .hand") },
  { name: "Sepp",       index: 3, firstHand: false, htmlObject:$(".player_3"), hand:$(".player_3 .hand") }
];

var cardValue = 0;
var firstHand = 3;
var currentGame = games[0];
var currentPlayer = players[0];
var currentPartner = players[0];
var selectedCards = 0;

function alternateFirstHand() {
  if (firstHand < 3) {
    firstHand++;
  } else {
    firstHand = 0;
  }

  players.forEach(function(player) {
    player.htmlObject.removeClass("first-hand");
  });
  players[firstHand].htmlObject.addClass("first-hand");
}

function randomCard(cards) {
  return cards[Math.floor(Math.random() * (cards.length))];
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
  return $("<div class='card card_" + card.name + "'></div>");
}

function renderCards(cards, container) {
  if (cards != null) {
    cards.forEach(function(entry) {
      $(container).append(renderCard(entry));
    });
  }
}

function dealCards(cards, from, to, sorted) {
  newCards = new Array();
  for (var i = from; i <= to; i++) {
    newCards.push(cards[i]);
  }

  if(sorted == true) {
    newCards = _.sortBy(newCards, function(num){ return num.sortOrder });
  }
  return newCards;
}

function resetGame() {
  players.forEach(function(player) {
    player.hand.html("");
  });
  $(".stack .stack-half").html("");
}

function repeatGame() {
  startGame(stack);
}

function startGame(stack) {
  resetGame();
  i = 0;
  players.forEach(function(player) {
    player.cards = dealCards(stack, i, i + 11, true)
    i = i + 12;
    renderCards(player.cards, player.hand);
  });

  cardsStack0 = dealCards(stack, 48, 50, false);
  cardsStack1 = dealCards(stack, 51, 53, false);

  renderCards(cardsStack0, ".stack .stack-half_0");
  renderCards(cardsStack1, ".stack .stack-half_1");
}

function newGame() {
  selectedCards = 0;
  stack = randomCards(cards, 54);
  alternateFirstHand();
  startGame(stack);
}

newGame();
gameSelection();
bonusSelection();

function gameSelection() {
  if (games != null) {
    container = $(".game-selection ul");
    games.forEach(function(game) {
      container.append("<li><button class='btn btn-default btn-sm'>" + game.name + "</li>");
    });
    container.append("<li><button class='btn btn-default btn-sm'>Weiter</li>");
  }
}

function bonusSelection() {
  if (bonuses != null) {
    container = $(".bonus-selection ul");
    bonuses.forEach(function(bonus) {
      container.append("<li><button class='btn btn-default btn-sm'>" + bonus.name + "</li>");
    });
    container.append("<li><button class='btn btn-default btn-sm'>Weiter</li>");
  }
}

function toggleHand() {
  $(this).toggleClass("visible");
}

function toggleChecked() {
  $(this).toggleClass("checked");
}

function toggleStack() {
  stack = $(".stack .stack-half");
  stack.toggleClass("visible");
}

// $(".card").each(function() {
//   this.onclick = toggleChecked;
// })

$(".stack-half").each(function() {
  this.onclick = toggleChecked;
})

// $(".hand").each(function() {
//   this.onclick = toggleHand;
// });

// $(".stack-half").each(function() {
//   this.onclick = toggleHand;
// });

