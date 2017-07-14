/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  // function scoreHand(cards){

  let container = [];
  let total = 0;
  let faceCard = ["J","Q","K"];
  let sorted = hand.concat.apply(hand, aceOnly)
  let aceOnly = [];
  
  for (i=0; i < sorted.length; i++){
    if (sorted[i] <= 10) {
      container.push(parseInt(sorted[i]));
    }
    else if (faceCard.indexOf(sorted[i]) >= 0) {
      container.push(10);
    }

    function getTotal(container){
      total = 0;
      for (x = 0; x < container.length; x++) {
        total = total + container[x];
      }
    }
    console.log("Final: " + total);
    return total;
  }
}
