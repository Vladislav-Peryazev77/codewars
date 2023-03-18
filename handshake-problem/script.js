'use strict';

// Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

// Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

// However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

// Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).

function getParticipants(handshakes) {
  const b = -1;
  const a = 1;
  const c = -2 * handshakes;
  const d = b ** 2 - 4 * a * c;
  const x1 = ((-b + Math.sqrt(d)) / 2) * a;
  const x2 = ((-b - Math.sqrt(d)) / 2) * a;
  if (x1 > 0 && x2 > 0) {
    return Math.ceil(Math.min(x1, x2));
  } else if (x1 > 0) {
    return Math.ceil(x1);
  } else if (x2 > 0) {
    return Math.ceil(x2);
  } else {
    return 0;
  }
}
console.log(getParticipants(7));
