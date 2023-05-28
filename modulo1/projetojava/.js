function onEmailBlur(e) {
    activeElement = null;
    setTimeout(function() {
        if(activeElement == "email") {
        } else {
        if(e.target.value == "") {
            e.target.parentElement.classList.remove("FocusWithText") ;
        }
        //startBlinking();
        resetFace();
        } 
    }, 100);
}

function onEmailLabelClick(e) {
    activeElement = "email";
}

function onPasswordFocus(e) {
    activeElement = "password" ;
    if(!eyesCovered) {
        coverEyes();
    }
}