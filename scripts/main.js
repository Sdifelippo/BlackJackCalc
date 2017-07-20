/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(hand) {
  return hand.reduce((acc, val) => {
    if (val === 'A') {
      if (acc > 21 || (acc + 11) > 21) {
        return acc + 1;
      } else {
        return acc + 11;
      }
    } else if (val === 'K' || val === 'Q' || val === 'J') {
      if (acc > 21 || (acc + 10) > 21) {
        acc -= 10;
      }
      return acc + 10;
    } else {
      if (acc > 21) {
        acc -= 10;
      }
      return acc + parseInt(val);
    }
  }, 0);
};
