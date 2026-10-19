function countdown(num) {
  let current = num;

  const timer = setInterval(() => {
    current -= 1;

    if (current > 0) {
      console.log(current);
      return;
    }

    console.log("DONE!");
    clearInterval(timer);
  }, 1000);
}

function randomGame() {
  let tries = 0;

  const timer = setInterval(() => {
    tries += 1;
    const randomNumber = Math.random();

    if (randomNumber > 0.75) {
      console.log(tries);
      clearInterval(timer);
    }
  }, 1000);
}

if (typeof module !== "undefined") {
  module.exports = {
    countdown,
    randomGame
  };
}
