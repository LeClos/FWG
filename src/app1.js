window.onload = function() {
  let userScore = 0;
  let compScore = 0;

  const userScore_span = document.getElementById("user-score");
  const compScore_span = document.getElementById("comp-score");
  const scoreBoard_div = document.querySelector(".score-board");
  const result_div = document.querySelector(".result > p");
  const fire_div = document.getElementById("Fire");
  const water_div = document.getElementById("Water");
  const grass_div = document.getElementById("Grass");

  // function to generate random computer choice
  function getComputerChoice() {
    const choices = ["Fire", "Water", "Grass"];
    const randomNumber = Math.floor(Math.random() * 3);
    var choicee = choices[randomNumber];
    return choicee;
  }

  // win, lose, draw scenarios and actions
  function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    var winWord;
    if (userChoice === "Fire") {
      winWord = " burns ";
    } else if (userChoice === "Water") {
      winWord = " puts out ";
    } else if (userChoice === "Grass") {
      winWord = " absorbs ";
    }
    result_div.innerHTML =
      userChoice +
      smallUserWord +
      winWord +
      computerChoice +
      smallCompWord +
      " , you win! ";
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function() {
      document.getElementById(userChoice).classList.remove("green-glow");
    }, 500);
  }

  function lose(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    var loseWord;
    if (computerChoice === "Fire") {
      loseWord = " burns ";
    } else if (computerChoice === "Water") {
      loseWord = " puts out ";
    } else if (computerChoice === "Grass") {
      loseWord = " absorbs ";
    }
    result_div.innerHTML =
      computerChoice +
      smallCompWord +
      loseWord +
      userChoice +
      smallUserWord +
      " , you lost! ";
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() {
      document.getElementById(userChoice).classList.remove("red-glow");
    }, 500);
  }

  function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    result_div.innerHTML =
      userChoice +
      smallUserWord +
      " Is the same as " +
      computerChoice +
      smallCompWord +
      " , it's a draw. ";
    document.getElementById(userChoice).classList.add("yellow-glow");
    setTimeout(function() {
      document.getElementById(userChoice).classList.remove("yellow-glow");
    }, 500);
  }

  // game function
  function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
      case "FireGrass":
      case "WaterFire":
      case "GrassWater":
        win(userChoice, computerChoice);
        break;
      case "FireWater":
      case "WaterGrass":
      case "GrassFire":
        lose(userChoice, computerChoice);
        break;
      case "FireFire":
      case "WaterWater":
      case "GrassGrass":
        draw(userChoice, computerChoice);
        break;
    }
  }

  function main() {
    fire_div.addEventListener("click", function() {
      game("Fire");
    });

    water_div.addEventListener("click", function() {
      game("Water");
    });

    grass_div.addEventListener("click", function() {
      game("Grass");
    });
  }

  main();
};
