'use strict';

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pices of apple and ${orangePieces} pices of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3))

