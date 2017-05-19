function checkIt() {
  // Initialize scores
  var prep = 0;
  var sporty = 0;
  var hippie = 0;
  var hipster = 0;
  var nerd = 0;
  var loser = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'Prep') {
        prep++;
      }
      else if (e.value == 'Sporty') {
        sporty++;
      }
      else if (e.value == 'Hippie') {
        hippie++;
      }
      else if (e.value == 'Hipster') {
        hipster++;
      }
      else if (e.value == 'Nerd') {
        nerd++;
      }
      else if (e.value == 'Loser') {
        loser++;
      }
    }

  }

  // Determine result
  var counts = "Prep: " + prep + ", " +
               "Sporty: " + sporty + ", " +
               "Hippie: " + hippie + ", " +
               "Hipster: " + hipster + ", " +
               "Nerd: " + nerd + ", " +
               "Loser: " + loser;

  // What is the highest value?
  var max = Math.max(loser, nerd, hipster, hippie, sporty, prep);

  // Form a message
  var message;

  if (max == prep) {
    message = "No one can arrest you because your dad’s a lawyer. Guess you’re a prep!";
  }
  else if (max == sporty) {
    message = "Don’t worry, you'll probably run off those calories, Sport!";
  }
  else if (max == hippie) {
    message = "Glad you took some time off from planting your plants in Colorado, you hippie";
  }
  else if (max == nerd) {
    message = "You nerd! Get your face out of that book and eat your cheeseburger!";
  }
  else if (max == hipster) {
    message = "Don’t drop your burger on your laptop while reading your horoscope and drinking your daily coffee, hipster. ";
  }
  else if (max == loser) {
    message = "Your buns suck, loser!";
  }

  // Display result
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result').innerHTML = message;
}
