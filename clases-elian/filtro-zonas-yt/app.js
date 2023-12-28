

let selectButtons = document.querySelectorAll(".item-link");

selectButtons.forEach( (button, index) =>{
    button.addEventListener('click', function(){
        
        selectButtons.forEach( (innerButton)=> {
            innerButton.classList.remove("menu-active");
        });
        button.classList.add("menu-active");
    })
    
});