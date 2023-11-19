var len = document.querySelectorAll(".drum").length;

// site to respond for icons on screen
for (var i = 0 ; i < len ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHtml = this.innerHTML;
    sound(buttonInnerHtml);
    buttonanimation(buttonInnerHtml);
    } );
}

// site to respond to key presses 
document.addEventListener('keypress',function(event){
    sound(event.key);
    buttonanimation(event.key);
});
    





    function sound(key) {
        {

            switch(key) {
                case "a":
                    var tom1 = new Audio("sounds/tom-1.mp3")
                    tom1.play();
                break;
                case "s":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                break;
                case "d": 
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                break;
                case "f": 
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                break;
                case "j": 
                    var crash = new Audio("sounds/snare.mp3");
                    crash.play();
                break;
                case "k": 
                    var kcik = new Audio("sounds/crash.mp3");
                    kcik.play();
                break;
                case "l": 
                    var snare = new Audio("sounds/kick-bass.mp3");
                    snare.play();
                break;
            }
        }
    }

    function buttonanimation(currentkey){
       var activebutton = document.querySelector('.'+currentkey);
       activebutton.classList.add('pressed');
       setTimeout(function(){
         activebutton.classList.remove('pressed');
        },
        100
       );
    }