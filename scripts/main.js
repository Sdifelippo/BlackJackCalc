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
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === "K" || hand[i] === "Q" || hand[i] === "J") {
      output += 10;
    } else if (hand[i] === "A") {
      output += 1;
    }
    if (parseInt(hand[i]) > 1 || parseInt(hand[i]) < 11) {
      output += parseInt(hand);
    } else if (parseInt(hand[i]) <= 10) {
      output += parseInt(hand[i]);
    }
    if (hand[i] === "A" && output <= 11) {
      output += 10;
    }

 }
  return output;
}
