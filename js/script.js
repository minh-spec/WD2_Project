$(document).ready(function () {
  var answers = $(".answer");
  var submitButton = $("#submitButton");
  var retryButton = $("#retryButton");
  var quizQuestions = $(".quizQuestion");
  var results = $(".result");
  function highlightSelected() {
    var answerDiv = $(this);
    answerDiv.siblings().addClass("muted");
    answerDiv.siblings().removeClass("selected");
    // Add the "selected" class to answerDiv:
    answerDiv.addClass("selected");
    // Remove the "muted" class from answerDiv:
    answerDiv.removeClass("muted");
  }
  answers.on("click", highlightSelected);
  function submitAnswers() {
    var aCount = $(".selected[data-value='A']").length;
    var bCount = $(".selected[data-value='B']").length;
    // Create 2 more variables for C/D counts:
    var cCount = $(".selected[data-value='C']").length;
    var dCount = $(".selected[data-value='D']").length;
    if (aCount > 1) {
      $("#a-personality").show();
    } else if (bCount > 1) {
      // Show the element with id b-personality:
      $("#b-personality").show();
    }
    // Add more if-statements to cover C/D answers:
    else if (cCount > 1) {
      $("#c-personality").show();
    } else if (dCount > 1) {
      $("#d-personality").show();
    } else {
      $("#no-personality").show();
    }
    quizQuestions.hide();
    retryButton.show();
    submitButton.hide();
  }
  submitButton.on("click", submitAnswers);
  function resetPage() {
    quizQuestions.show();
    answers.removeClass("muted");
    answers.removeClass("selected");
    submitButton.show();
    retryButton.hide();
    results.hide();
  }
  retryButton.on("click", resetPage);
});
