
// const cells = document.querySelectorAll('.cell');

// for (const cell of cells) {
//   cell.addEventListener('click', clickHandle);
// }
const popup = document.querySelector('.popup');
const message_el = popup.querySelector('.message');
const board = document.querySelector('.game_board');
const cells = board.children;
board.addEventListener('click', boardClickHandle);

function boardClickHandle(event) {
  if (!event.target.classList.contains('cell')) {
    return;
  }

  clickHandle.bind(event.target)();
}

let symbol = 'x';
let referee = new Referee();
let storage = new Storage('tictactoe');
let moves = {};

function clickHandle() {
  if (this.textContent !== '') {
    return;
  }
  this.textContent = symbol;
  const id = this.dataset.id;
  moves[id] = symbol;
  storage.add(
    id,
    {symbol: symbol}
  );
  if (referee.checkWinner(moves, symbol)) {
    showMessage("Player " + symbol + ' has won the game!');
  }

  symbol = (symbol === 'x') ? 'o' : 'x';

  // console.log(moves);
}

document.querySelector('.reset').addEventListener('click', resetHandle);
document.querySelector('.reset_game').addEventListener('click', resetHandle);

popup.addEventListener('click', function (event) {
  if (event.target.classList.contains('popup')) {
    hideMessage();
  }
})

function resetHandle () {
  for (const cell of cells) {
    cell.textContent = '';
  }
  symbol = 'x';
  moves = {};
  hideMessage();
}

function showMessage(message) {
  popup.classList.add('open');
  message_el.textContent = message;
}

function hideMessage() {
  popup.classList.remove('open');
}


