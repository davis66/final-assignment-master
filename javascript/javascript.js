
function section_5ButtonClick(x){
    var section5Buttons = document.getElementsByClassName('section_5_info_buttons')[0].getElementsByClassName('section_5_button');
    var activeSection5Button = document.getElementsByClassName('section_5_button_active')[0]
    var section5All = document.getElementsByClassName('section_5_all')[0].getElementsByClassName('tab');
    // console.log(section5All);
    event.preventDefault();
    section5Buttons[x].className += " section_5_button_active";
    activeSection5Button.className = activeSection5Button.className.replace("section_5_button_active"," ");
    console.log(section5All.length);
    for (let iterator = 0; iterator<section5All.length; iterator++) {
        if ( iterator === x){
            section5All[iterator].style.visibility = "visible";
            // console.log(iterator);
        }
        else{
            section5All[iterator].style.visibility = "hidden";
        }
    }
    
}

// section5Buttons[3].className += " section_5_button_active";

// console.log(section5Buttons);