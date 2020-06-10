var button=document.querySelectorAll(".drum");
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
       
        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "a":
                var tom2 = new Audio('sounds/tom-2.mpe');
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "j":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case "j":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "l":
                var kickBase = new Audio('sounds/kick-base.mp3');
                kickBase.play();
    
            default:console.log(buttonInnerHTML);
            

          }
          
          
    }, false);
}

