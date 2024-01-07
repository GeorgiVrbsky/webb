
  document.addEventListener("DOMContentLoaded", function() {
    var startButton = document.querySelector(".start_button");
    var welcomingScreen = document.querySelector(".WelcomingScreen");
    var chooseSection = document.querySelector("#choose");

    startButton.addEventListener("click", function() {
      welcomingScreen.classList.add("hide");
      chooseSection.classList.add("show");
    });
  });

  function NavigatePage(page) {
    switch(page){
        case "learn":
            setTimeout(function() {
            window.location.href = "learn.html";
            }, 150);
        break;

        case "level0_full":
            setTimeout(function() {
            window.location.href = "level0_full.html";
            }, 150);
        break;

        case "level0":
        setTimeout(function() {
            window.location.href = "level0.html";
            }, 150);
        break;

        case "level1":
        setTimeout(function() {
            window.location.href = "level1.html";
            }, 150);
        break;
        case "level1_array":
          setTimeout(function() {
            window.location.href = "level1_array.html";
            }, 150);
        break;
        case "ulohy":
          setTimeout(function() {
            window.location.href = "ulohy.html";
            }, 150);
        break;
        case "uloha1":
          setTimeout(function() {
            window.location.href = "uloha1.html";
            }, 150);
        break;
        
    }
    
    
  }

  function question_level_0(language, level){
    const buttons = [
        document.getElementById("1"),
        document.getElementById("2"),
        document.getElementById("3"),
        document.getElementById("4")
      ];
      if(level==0){ 
      for (let i = 0; i < buttons.length; i++) {
        if (i === 1) {
          buttons[i].style.backgroundColor = "green";
          buttons[i].style.color = "white";
        } else {
          buttons[i].style.backgroundColor = "red";
          buttons[i].style.color = "";
        }
      }
    }
    else if(level==1){ 
        for (let i = 0; i < buttons.length; i++) {
          if (i === 3) {
            buttons[i].style.backgroundColor = "green";
            buttons[i].style.color = "white";
          } else {
            buttons[i].style.backgroundColor = "red";
            buttons[i].style.color = "";
          }
        }
      }
     
    }
  

  