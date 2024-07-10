function kuyla(val){
    document.querySelector(`.${val}`).classList.add("pressed");
    setTimeout(function(){
 document.querySelector(`.${val}`).classList.remove("pressed");
    },100);
    switch(val){
        case "w":
            let tom1 =new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
            case "a":
                
    }
}