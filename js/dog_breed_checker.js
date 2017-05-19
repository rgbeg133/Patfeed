function checkIt() {
  // Initialize scores
  var yorkie = 0;
  var labrador = 0;
  var mini = 0;
  var pomeranian = 0;
  var poodle = 0;
  var english = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'Yorkie-Poo') {
        yorkie++;
      }
      else if (e.value == 'Labrador Retriever') {
        labrador++;
      }
      else if (e.value == 'Mini Husky') {
        mini++;
      }
      else if (e.value == 'Pomeranian') {
        pomeranian++;
      }
      else if (e.value == 'Poodle') {
        poodle++;
      }
      else if (e.value == 'English Setter') {
        english++;
      }
    }

  }

  // Determine result
  var counts = "Yorkie-Poo: " + yorkie + ", " +
               "Labrador Retriever: " + labrador + ", " +
               "Mini Husky: " + mini + ", " +
               "Pomeranian: " + pomeranian + ", " +
               "Poodle: " + poodle + ", " +
               "English Setter: " + english;

  // What is the highest value?
  var max = Math.max(yorkie, labrador, mini, pomeranian, poodle, english);

  // Form a message
  var message;

  if (max == yorkie) {
    message = "Aww! yorkie-poos are great dogs, small and bunches of fun!";
  }
  else if (max == labrador) {
    message = "Fetch! The Labrador Retriever, also Labrador, is a type of retriever-gun dog. The Labrador is one of the most popular breeds of dog in the United Kingdom and the United States.";
  }
  else if (max == mini) {
    message = "Cozy and small, Mini Huskies are great for cuddling up with on a cold winter day!";
  }
  else if (max == pomeranian) {
    message = "You can make this pup into a lion if you wanna! Pomeranians love people and love being pampered.";
  }
  else if (max == poodle) {
    message = "Fluffy, Big, and Smart, Poodles you can take wherever you go. ";
  }
  else if (max == english) {
    message = "English setters are great dogs, and pretty too.";
  }

  // Display result
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result').innerHTML = message;
}
