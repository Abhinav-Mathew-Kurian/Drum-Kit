//Detecting Button press
    var s= document.querySelectorAll(".drum").length;
        for(var i=0;i<s;i++ ){
            document.querySelectorAll(".drum")[i].addEventListener("click", function(){
                var btnInnerHtml =this.innerHTML;
                 makeSound(btnInnerHtml);   
                 btnAnimation(btnInnerHtml);
                });
        };
//Detecting KeybOard press
    document.addEventListener("keydown", function (event) {
           makeSound(event.key);//event contains a property called key in default which gives us the typed in key as a return.
           btnAnimation(event.key);
  })
//making sound function!!
  function makeSound(key){//we take in the btnInnerhtml as a key parameter and pass to the switch for the accurate button pressing using mouse and keyboard as well as.
    switch(key){
        case "w": 
        var audio1 = new Audio("./sounds/tom-1.mp3");
        audio1.play();
        break;
        case "a": 
        var audio2 = new Audio("./sounds/tom-2.mp3");
        audio2.play();
        break;
        case "s": 
        var audio3 = new Audio("./sounds/tom-3.mp3");
        audio3.play();
        break;
        case "d": 
        var audio4 = new Audio("./sounds/tom-4.mp3");
        audio4.play();
        break;
        case "j": 
        var audio5 = new Audio("./sounds/crash.mp3");
        audio5.play();
        break;
        case "k": 
        var audio6 = 
        new Audio("./sounds/snare.mp3");
        audio6.play();
        break;
        case "l": var audio7 = 
        new Audio("./sounds/kick-bass.mp3");
        audio7.play();
        break;

        default:console.log(btnInnerHtml);
    }

  }

  function btnAnimation(currentKey){

    var press = document.querySelector("."+currentKey);
    press.classList.add("pressed");
    setTimeout(function(){
            press.classList.remove("pressed");
    },100);


  }