  function rowClick() {
    var myWindow = window.open("img/Mercury.jpg");
  }

  function rowClick1() {
    var myWindow = window.open("img/Venus.jpg");
  }

  function rowClick2() {
    var myWindow = window.open("img/Earth.jpg");
  }

  function rowClick3() {
    var myWindow = window.open("img/Mars.jpg");
  }

  function rowClick4() {
    var myWindow = window.open("img/Jupiter.jpg");
  }

  function rowClick5() {
    var myWindow = window.open("img/Saturn.jpg");
  }

  function rowClick6() {
    var myWindow = window.open("img/Uranus.jpg");
  }

  function rowClick7() {
    var myWindow = window.open("img/Neptune.jpg");
  }

  function quizSlider() {
      $(document).ready(function(){
        $(".quizheader").click(function(){
            $("#slideinfo").slideDown("slow");
      })});
    }

   function inputChoice() {
        document.getElementById('submit-button').addEventListener('click', function() {
            let input = document.getElementById('planets');
            if (input.value === 'venus') {
                   document.location.href = "answer.html";
            } else {
                input.style.backgroundColor = 'red';
                document.querySelector('.notif').innerHTML = 'Wrong Answer! :(';
                document.location.href = "quiz.html";
            }
        });
    }

inputChoice();
