/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue(hand) {
  let output = 0;
  let result = hand.reduce((acc, val) => {
    if (val === 'K' || val === 'Q' || val === 'J') {
      return acc + 10;
    } else if (val === 'A') {
      output++;
      return acc + 11;
    }
    return acc + parseInt(val);
  }, 0);
  for (output; output > 0 && result > 21; output--) {
    result -= 10;
  }
  return result;
};
