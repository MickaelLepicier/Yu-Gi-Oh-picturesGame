"use script";

// Greet - Welcome to YuGiOh picture game!!

// Do you believe in the heart of the cards ?!

// show pictures and if all correct you believe (kiss from Mai) and if you are wrong you are going to the shadowRealm (exodia oblidirate)

// TODO snippets - for i, for j,  script Js , link Css , console.log, console.table
// https://www.youtube.com/watch?v=TGh2NpCIDlc

// In the game you have life if all of them are gone you loose!
// In the begging build something simple then put YuGiOh :)

// Q.A :

// 1. Yugi     yygui.jpeg
// Who is he ?
// 1. Yami 😏, Yugi
// 2. Atem The sexiest men alive!! ~
// 3. A man with 3 gods!
// 4. Just another looser... (-2)

// 2. Dark magician     dm.jpeg
//  Who is he ?
// 1. A simple magician
// 2. A man with a stick...
// 3. Dark Magician! ~
// 4. A terrible monster... (-2)

// 3. Obelisk obliterate     fofO.jpeg
// What the name of the attack?
// 1. Punch Of Obelisk (-2)
// 2. Obelisk The Tormentor
// 3. Fist Of Fate! ~
// 4. Obliterate!

// 4. Gods    gods.jpeg
// What are the names of the gods?
// 1. Blue, Red, and Gold Gods!
// 2. What The Fu..?! (-2)
// 3. Obelisk, Slifer and Ra! ~
// 4. Karibu, Koribu, Kiriribu.

// 5. Dark magician Girl    dmg.jpeg
// Who is she?
// 1. A sexy girl 😍
// 2. I am not into her... (-2)
// 3. A special magician
// 4. Dark Magician! ~

// 6. Exodia is the King!   exodia.jpeg
// How did this happened?
// 1. I can't talk about it...
// 2. I don't know..
// 3. Exodia broke free!
// 4. Exodia became King Of Games!

// 7. Joey Wheeler    j.jpeg
// What's his name?
// 1. Joey Wheeler ~
// 2. Kaiba
// 3. Tea (-2)
// 4. Bakura

// 8. Red Eyes Black Dragon     redb.jpeg
// What the name of this monster?
// 1. Blue Eyes White Dragon!
// 2. Red Eyes Black Dragon ~
// 3. Karibu (-2)
// 4. Baby Dragon

// 9. Medabot    med.jpeg
// Who is he?
// 1. Not from YuGiOh... ~
// 2. Medabot!!
// 3. Pikachu
// 4. Exodia (-2)

// 10. Seto Kaiba  sk.jpeg
// What's his name?
// 1. Seto Kaiba ~
// 2. Yugi Moto
// 3. Joey Wheeler
// 4. Tea (-2)

// If a man wins = sexy.jpeg - I can see that we will be together tonight
// If a woman wins = yugi.jpeg - Lets have a "duel" tonight

// If you lose - vegi.jpeg , veg.jpeg , obl.jpeg , eaxOb.jpeg ,

// ---------------------------------------------------------------------------------------------------------

let gMsgs;
let gQuests;
let gId;
let gLife;
let gGender;

function initGame() {
  gMsgs = [];
  gQuests = [];
  gId = 0;
  gLife = 5;
  gGender = "";

  createGame();
  renderMsg(0);
  renderQuest();
}

// --------------------------------------------------------------------------------------------------------------------------------------------
// CREATE Functions

function createGame() {
  createGMsgs();
  createGQuests();
}

function createGMsgs() {
  gMsgs = [
    {
      id: 101,
      msg: "Welcome to Yu-Gi-Oh pictures game!",
      msgImg: "img/welcome.jpeg",
      extraMsg:
        "This game will test if you truly Believe in the HEART OF THE CARDS",
    },
    {
      id: 102,
      msg: "You Won!",
      win: [
        {
          manImg: "img/menWin.jpeg",
          manExtraMsg: '"I can see that we will be together tonight"',
        },
        {
          womanImg: "img/womanWin.jpeg",
          womanExtraMsg: `"Lets have a “duel“ tonight"`,
        },
      ],
    },
    {
      id: 103,
      msg: "You Lost!",
      msgImg: "img/lost.jpeg",
      extraMsg: `"I'm sending you to the shadow realm, EXODIA OBLITERATE!"`,
    },
  ];
}

function createGQuests() {
  gQuests = [
    {
      id: 101,
      quest: "Who is he?",
      img: "img/101.jpeg",
      opts: [
        "Yami 😏, Yugi.",
        "Atem The sexiest men alive!!",
        "A man with 3 gods!",
        "Just another looser...",
      ],
      correctOptIdx: 1,
      penaltyOpt: 3,
    },

    {
      id: 102,
      quest: "Who is he?",
      img: "img/102.jpeg",
      opts: [
        "A simple magician.",
        "A man with a stick...",
        "Dark Magician!",
        "A terrible monster...",
      ],
      correctOptIdx: 2,
      penaltyOpt: 3,
    },

    {
      id: 103,
      quest: "What the name of his attack?",
      img: "img/103.jpeg",
      opts: [
        "Punch Of Obelisk.",
        "Obelisk The Tormentor.",
        "Fist Of Fate!",
        "Obliterate!",
      ],
      correctOptIdx: 2,
      penaltyOpt: 0,
    },
    {
      id: 104,
      quest: "What are the names of those gods?",
      img: "img/104.jpeg",
      opts: [
        "Blue, Red, and Gold Gods!",
        "What The F...?!",
        "Obelisk, Slifer and Ra!",
        "Karibu, Koribu, Kiriribu.",
      ],
      correctOptIdx: 2,
      penaltyOpt: 1,
    },
    {
      id: 105,
      quest: "Who is she?",
      img: "img/105.jpeg",
      opts: [
        "A sexy girl 😍",
        "I am not into her...",
        "A special magician.",
        "Dark Magician Girl!",
      ],
      correctOptIdx: 3,
      penaltyOpt: 1,
    },
    {
      id: 106,
      quest: "How did this happened?",
      img: "img/106.jpeg",
      opts: [
        "I can't talk about it...",
        "I don't know..",
        "Exodia broke free!",
        "Exodia became King Of Games!",
      ],
      correctOptIdx: 2,
      penaltyOpt: 1,
    },
    {
      id: 107,
      quest: "What's his name?",
      img: "img/107.jpeg",
      opts: ["Joey Wheeler", "Kaiba", "Tea", "Bakura"],
      correctOptIdx: 0,
      penaltyOpt: 2,
    },
    {
      id: 108,
      quest: "What the name of this dragon?",
      img: "img/108.jpeg",
      opts: [
        "Blue Eyes White Dragon!",
        "Red Eyes Black Dragon",
        "Karibu",
        "Baby Dragon",
      ],
      correctOptIdx: 1,
      penaltyOpt: 2,
    },
    {
      id: 109,
      quest: "Who is he?",
      img: "img/109.jpeg",
      opts: ["Not from Yu-Gi-Oh...", "Medabot!!", "Pikachu", "Exodia"],
      correctOptIdx: 0,
      penaltyOpt: 3,
    },
    {
      id: 110,
      quest: "What's his name?",
      img: "img/110.jpeg",
      opts: ["Seto Kaiba", "Yugi Moto", "Joey Wheeler", "Tea"],
      correctOptIdx: 0,
      penaltyOpt: 3,
    },
  ];
}

// ------------------------------------------------------------------------------------------------------------------------

// RENDER Functions

function renderMsg(idx) {
  const isWin = gId === gQuests.length;
  const isLose = gLife <= 0;
  const elMsgCont = document.querySelector(".msg-container");

  const msg = gMsgs[idx].msg;
  let msgImg = gMsgs[idx].msgImg;
  let extraMsg = gMsgs[idx].extraMsg;

  if (isWin) {
    msgImg =
      gGender === "Man" ? gMsgs[idx].win[0].manImg : gMsgs[idx].win[1].womanImg;

    extraMsg =
      gGender === "Man"
        ? gMsgs[1].win[0].manExtraMsg
        : gMsgs[1].win[1].womanExtraMsg;
  }

  const restartOrGender =
    isLose || isWin
      ? `<button class="restart-btn" onclick="restartGame()">Restart</button>`
      : `      <div class="gender-msg">
     <div> Before we begin, are you a Man or a Woman?</div>
      <button class="gender-btn" onclick="gender(this)">Man</button>
      <button class="gender-btn" onclick="gender(this)">Woman</button>
      </div>
      <div class="gender-chosen"></div>
      
      <button class="startGame" onclick="startGame()">Start</button>`;

  elMsgCont.innerHTML = `<div class="msg">${msg}</div>
      <img alt="image" src="${msgImg}" class="msg-img"></img>
      <div class="extra-msg">${extraMsg}</div> 
      ${restartOrGender}`;
}

function renderQuest(id = 0) {
  const gQuest = gQuests[id];
  const question = gQuest.quest;
  const questImg = gQuest.img;
  const elQuestCont = document.querySelector(".question-container");

  let ansBtns = "";

  for (let i = 0; i < gQuest.opts.length; i++) {
    ansBtns += `<button class="opt-btn" data-id=${i} onclick="checkOption(this)">${gQuest.opts[i]}</button> `;
  }

  elQuestCont.innerHTML = `<div class="life"></div>
    <div class="question">${question}</div>
    <img alt="image" src=${questImg} class="question-img"></img>
    <div class="wrong-option"></div>
    <div class="answers-option">${ansBtns} </div>`;

  renderLife(gLife);
}

function renderLife(lifeAmount) {
  const elLife = document.querySelector(".life");
  let life = "";

  for (let i = 0; i < lifeAmount; i++) {
    life += "🩷";
  }

  elLife.innerText = life;
}

// ------------------------------------------------------------------------------------------------------------------------

function startGame() {
  const elMsgCont = document.querySelector(".msg-container");
  const elQuestCont = document.querySelector(".question-container");
  const elGenderChosen = document.querySelector(".gender-chosen");

  if (!gGender) {
    elGenderChosen.innerText = "Please choose gender";
    return;
  }

  if (gId === 0) {
    playSound("sound/startGame.mp3");
  }

  elMsgCont.classList.toggle("hidden");
  elQuestCont.classList.toggle("hidden");
}

function checkOption(elBtn) {
  const correctOpt = gQuests[gId].correctOptIdx;
  const currOpt = +elBtn.getAttribute("data-id");
  const wrongOpt = document.querySelector(".wrong-option");
  const penaltyOpt = gQuests[gId].penaltyOpt;

  if (currOpt === correctOpt) {
    gId++;
    if (gId === gQuests.length) {
      checkWin();
      return;
    }
    renderQuest(gId);
    checkWin();
    playSound("sound/correctOpt.mp3");
    return;
  } else if (currOpt === penaltyOpt) {
    gLife -= 2;
    renderLife(gLife);
    checkWin();
    wrongOpt.innerText = "Come on... Wrong answer.";
    return;
  }
  gLife--;
  renderLife(gLife);
  wrongOpt.innerText = "Wrong answer...";

  checkWin();
}

function checkWin() {
  if (gLife <= 0) {
    // Lose condition
    renderMsg(2);
    playSound("sound/loseGame.mp3");
    startGame();
  } else if (gId === gQuests.length) {
    // Win condition
    renderMsg(1);
    playSound("sound/winGame.mp3");
    startGame();
  }
}

function restartGame() {
  initGame();
}

function gender(elGender) {
  const elGenderMsg = document.querySelector(".gender-msg");
  const elGenderChosen = document.querySelector(".gender-chosen");

  gGender = elGender.textContent;
  elGenderMsg.innerText = `Great, Lets Go!`;
  elGenderChosen.innerText = "";
}

function playSound(path) {
  const sound = new Audio(path);
  sound.play();
}
