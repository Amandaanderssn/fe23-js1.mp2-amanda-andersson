const startForm = document.querySelector(".nameForm");
const theGame = document.querySelector(".theWholeGame");

//
// const h3Els = document.querySelectorAll("h3");
// console.log(h3Els);

startForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const playerOne = document.querySelector("#namn").value;
  document.querySelector("#dittNamn").innerText = playerOne;
  startForm.style.display = "none";

  theGame.style.display = "block";
});

//Datorn svar på valet mellan sten, sax eller påse
const computerAnswers = ["STEN", "SAX", "PÅSE"];
const theAnswer = document.querySelector("#computerAnswer");

//Mitt svar på valet mellan sten, sax eller påse
const answerSten = document.querySelector("#sten");
const answerSax = document.querySelector("#sax");
const answerPåse = document.querySelector("#påse");

//Poängsystemet
let scorePlayer1 = 0;
let scorePlayer2 = 0;

//Text som visar hur omgången gick
const pEl = document.querySelector("#RightOrWrong");

//Clicks för att min if sats ska gälla alla gånger förutom den första
let clicks = 0;

//Om du och datorn svarar sten:
answerSten.addEventListener("click", () => {
  let randomAnswer = Math.floor(Math.random() * computerAnswers.length);
  //Denna if sats berättar att "klicket" ska nollställas när jag trycker nästa gång
  if (clicks == 0) {
    clicks++;
  } else {
    if (document.querySelector(".PlayerChoiceCorrect")) {
      document
        .querySelector(".PlayerChoiceCorrect")
        .classList.remove("PlayerChoiceCorrect");
      pEl.innerText = "";
    } else {
      document
        .querySelector(".PlayerChoiceWrong")
        .classList.remove("PlayerChoiceWrong");
      pEl.innerText = "";
    }
  }
  if (computerAnswers[randomAnswer] == "STEN") {
    answerSten.classList.add("PlayerChoiceWrong");
    theAnswer.innerText = computerAnswers[randomAnswer];

    theAnswer.style.backgroundColor = "grey";
    pEl.innerText = "Ni svarade båda sten. Prova igen.";
  }
  //Om du svarar sten men datorn svarar sax
  else if (computerAnswers[randomAnswer] == "SAX") {
    answerSten.classList.add("PlayerChoiceCorrect");
    theAnswer.innerText = computerAnswers[randomAnswer];

    theAnswer.style.backgroundColor = "grey";
    pEl.innerText = "Sten vinner över sax. Du vann omgången!";
    scorePlayer1++;
    document.querySelector(".scorePlayer1").innerText =
      "Dina poäng: " + scorePlayer1;

    if (scorePlayer1 == 3) {
      document.querySelector(".result").style.display = "block";
      document.querySelector(".result h2").innerText = "DU VANN";
      document.querySelector(
        ".result p"
      ).innerText = `${scorePlayer1} : ${scorePlayer2}`;
      theGame.style.display = "none";
    }
  }

  //Om du svarar sten men datorn svarar påse
  else {
    answerSten.classList.add("PlayerChoiceWrong");
    theAnswer.innerText = computerAnswers[randomAnswer];

    theAnswer.style.backgroundColor = "green";
    pEl.innerText = "Påse vinner över sten. Du förlorade omgången!";
    scorePlayer2++;
    document.querySelector(".scorePlayer2").innerText =
      "Dina poäng: " + scorePlayer2;

    if (scorePlayer2 == 3) {
      document.querySelector(".result").style.display = "block";
      document.querySelector(".result h2").innerText = "DU FÖRLORADE";
      document.querySelector(
        ".result p"
      ).innerText = `${scorePlayer1} : ${scorePlayer2}`;
      theGame.style.display = "none";
    }
  }
});

answerSax.addEventListener("click", () => {
  let randomAnswer = Math.floor(Math.random() * computerAnswers.length);
  if (clicks == 0) {
    clicks++;
  } else {
    if (document.querySelector(".PlayerChoiceCorrect")) {
      document
        .querySelector(".PlayerChoiceCorrect")
        .classList.remove("PlayerChoiceCorrect");
      pEl.innerText = "";
    } else {
      document
        .querySelector(".PlayerChoiceWrong")
        .classList.remove("PlayerChoiceWrong");
      pEl.innerText = "";
    }
  }
  //Om du och datorn svarar sax
  if (computerAnswers[randomAnswer] == "SAX") {
    answerSax.classList.add("PlayerChoiceWrong");
    theAnswer.innerText = computerAnswers[randomAnswer];

    theAnswer.style.backgroundColor = "grey";
    pEl.innerText = "Ni båda svarade sax. Prova igen.";
  }
  //Om du svarar sax men datorn svarar sax
  else if (computerAnswers[randomAnswer] == "PÅSE") {
    answerSax.classList.add("PlayerChoiceCorrect");
    theAnswer.innerText = computerAnswers[randomAnswer];

    theAnswer.style.backgroundColor = "grey";
    pEl.innerText = "Sax vinner över påse. Du vann omgången!";
    scorePlayer1++;
    document.querySelector(".scorePlayer1").innerText =
      "Dina poäng: " + scorePlayer1;
    if (scorePlayer1 == 3) {
      document.querySelector(".result").style.display = "block";
      document.querySelector(".result h2").innerText = "DU VANN";
      document.querySelector(
        ".result p"
      ).innerText = `${scorePlayer1} : ${scorePlayer2}`;
      theGame.style.display = "none";
    }
  }
  //Om du svarar sax men datorn svarar sten
  else {
    answerSax.classList.add("PlayerChoiceWrong");
    theAnswer.innerText = computerAnswers[randomAnswer];

    theAnswer.style.backgroundColor = "green";
    pEl.innerText = "Sten vinner över sax. Du förlorade omgången!";
    scorePlayer2++;
    document.querySelector(".scorePlayer2").innerText =
      "Dina poäng: " + scorePlayer2;

    if (scorePlayer2 == 3) {
      document.querySelector(".result").style.display = "block";
      document.querySelector(".result h2").innerText = "DU FÖRLORADE";
      document.querySelector(
        ".result p"
      ).innerText = `${scorePlayer1} : ${scorePlayer2}`;
      theGame.style.display = "none";
    }
  }
});

answerPåse.addEventListener("click", () => {
  let randomAnswer = Math.floor(Math.random() * computerAnswers.length);
  if (clicks == 0) {
    clicks++;
  } else {
    if (document.querySelector(".PlayerChoiceCorrect")) {
      document
        .querySelector(".PlayerChoiceCorrect")
        .classList.remove("PlayerChoiceCorrect");
      pEl.innerText = "";
    } else {
      document
        .querySelector(".PlayerChoiceWrong")
        .classList.remove("PlayerChoiceWrong");
      pEl.innerText = "";
    }
  }
  //Om du och datorn svarar påse
  if (computerAnswers[randomAnswer] == "PÅSE") {
    answerPåse.classList.add("PlayerChoiceWrong");
    theAnswer.innerText = computerAnswers[randomAnswer];

    theAnswer.style.backgroundColor = "grey";
    pEl.innerText = "Ni båda svarade påse. Prova igen.";
  }
  //Om du svarar påse men datorn svarar sten
  else if (computerAnswers[randomAnswer] == "STEN") {
    answerPåse.classList.add("PlayerChoiceCorrect");
    theAnswer.innerText = computerAnswers[randomAnswer];

    theAnswer.style.backgroundColor = "grey";
    pEl.innerText = "Påse vinner över sten. Du vann omgången!";
    scorePlayer1++;
    document.querySelector(".scorePlayer1").innerText =
      "Dina poäng: " + scorePlayer1;
    if (scorePlayer1 == 3) {
      document.querySelector(".result").style.display = "block";
      document.querySelector(".result h2").innerText = "DU VANN";
      document.querySelector(
        ".result p"
      ).innerText = `${scorePlayer1} : ${scorePlayer2}`;
      theGame.style.display = "none";
    }
  }
  //Om du svarar påse men datorn svarar sax
  else {
    answerPåse.classList.add("PlayerChoiceWrong");
    theAnswer.innerText = computerAnswers[randomAnswer];

    theAnswer.style.backgroundColor = "green";
    pEl.innerText = "Sax vinner över påse. Du förlorade omgången!";
    scorePlayer2++;
    document.querySelector(".scorePlayer2").innerText =
      "Dina poäng: " + scorePlayer2;

    if (scorePlayer2 == 3) {
      document.querySelector(".result").style.display = "block";
      document.querySelector(".result h2").innerText = "DU FÖRLORADE";
      document.querySelector(
        ".result p"
      ).innerText = `${scorePlayer1} : ${scorePlayer2}`;
      theGame.style.display = "none";
    }
  }
});

document.querySelector(".result button").addEventListener("click", () => {
  location.reload();
});
