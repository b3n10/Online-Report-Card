(function() {

  //initialize all input with 0
  var allInput = document.getElementsByTagName('input');
  for (var i = 0; i < allInput.length; i++) {
    allInput[i].value = 0;
    //console.log(i);
  }

  //all subjects
  var subjects = ['math', 'science', 'filipino', 'english', 'gmrc'];

  for (var i = 0; i < subjects.length; i++) {
    //loop to all subjects and just append specific text for classname and input id
    addKeyUp(document.getElementsByClassName(subjects[i] + '_subject'), 'ave_' + subjects[i]);
  }

  //add keyup event listener to all input with same classnames only
  function addKeyUp(ArrayElement, aveSubject) {
    for (var i = 0; i < ArrayElement.length;i++) {
      ArrayElement[i].addEventListener("keyup", function() {
        document.getElementById(aveSubject).value = (getSum(ArrayElement) / 4).toFixed(2);
      });
    }
  }

  //add all scores in specific subject (classname) and return sum
  function getSum(ArrayElement) {
    var inputSum = 0;
    for (var i = 0; i < ArrayElement.length;i++) {
      inputSum += Number(ArrayElement[i].value);
    }

    //check if incorrect input e.g. NaN
    if (isNaN(inputSum)) {
      alert("Error on input!");
      return 0;
    } else {
      return inputSum;
    }
  }
})();
