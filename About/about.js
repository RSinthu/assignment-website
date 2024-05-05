document.addEventListener('DOMContentLoaded', function() {
    const questionHeaders = document.querySelectorAll('.question-header');
  
    questionHeaders.forEach(function(questionHeader) {
      questionHeader.addEventListener('click', function() {
        const answer = questionHeader.nextElementSibling;
  
        const allAnswers = document.querySelectorAll('.answer');
        allAnswers.forEach(function(a) {
          if (a !== answer) {
            a.classList.remove('show');
          }
        });
  
        answer.classList.toggle('show');
      });
    });
  });