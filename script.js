let countDownDate = new Date("June 01, 2024 00:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

//FIre base store
document.addEventListener("DOMContentLoaded", () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBSfWojBiBg4Zg8zzXOaw1S5D57_YwjLHA",
    authDomain: "landing-soon.firebaseapp.com",
    databaseURL: "https://landing-soon-default-rtdb.firebaseio.com",
    projectId: "landing-soon",
    storageBucket: "landing-soon.appspot.com",
    messagingSenderId: "570968170174",
    appId: "1:570968170174:web:4cd529561ab4b62fcec8ef",
    measurementId: "G-FE21TXGHR7",
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const email = document.getElementById("email");
  const submit = document.getElementById("submit");
  const errorMessage = document.getElementById("error-message");

  submit.addEventListener("click", (event) => {
    event.preventDefault();
    const text = email.value;

    if (!isValidEmail(text)) {
      errorMessage.style.display = "block";
      return;
    } else {
      errorMessage.style.display = "none";
    }

    db.collection("eeeeGmailll")
      .add({
        text: text,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log("success");
        email.value = "";
      })
      .catch((error) => {
        console.log("error", error);
      });
  });
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
