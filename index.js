window.onload = function () {
  var text1 = "Hello There";
  var text2 = "I have something to show you";
  playSound();
  animateText(text1, "text1");
  setTimeout(function () {
    animateText(text2, "text2");
  }, text1.length * speed);

  setTimeout(function () {
    errorDispay();
  }, 9000);
};

const speed = 180;
var characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`><?|}{[]";

function animateText(text = "", docId = "") {
  var i = 0;
  function write() {
    if (i < text.length) {
      document.getElementById(docId).innerHTML += text.charAt(i);
      i++;
      setTimeout(write, speed);
    }
  }
  write();
}

function playSound() {
  var audio = document.getElementById("effectaudio").play();
  if (audio !== undefined) {
    audio
      .then((_) => {
        // Autoplay started!
      })
      .catch((error) => {});
  }
}

function errorDispay() {
  document.getElementById("screen").hidden = true;
  function writeRandomCharacters() {
    setInterval(function () {
      document.getElementById("error").innerHTML += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      window.scrollTo(0, document.body.scrollHeight);
    }, 10);
  }
  writeRandomCharacters();
}
