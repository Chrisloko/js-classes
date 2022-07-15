const prevBtns = document.querySelectorAll('.btn-prev');
const nextBtns = document.querySelectorAll('.btn-next');
const progress = document.getElementById('progress');
const formSteps = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.progress-step');

let formStepsNum = 0;
// next btn functionality
for(var i = 0; i < nextBtns.length; i++){
    nextBtns[i].addEventListener('click', function(){
        formStepsNum ++;
        updateFormSteps();
        updateProgressBar();
    })
}
// prev btn functionality
for(var i = 0; i < prevBtns.length; i++){
    prevBtns[i].addEventListener('click', function(){
        formStepsNum --;
        updateFormSteps();
        updateProgressBar();
    })
}

function updateFormSteps(){
    for(var i = 0; i<formSteps.length; i++){
        if(formSteps[i].classList.contains('form-step-active')){
            formSteps[i].classList.remove('form-step-active');

            // above equivalent
            // formSteps[i].classList.contains('form-step-active') &&
            // formSteps[i].classList.remove('form-step-active');
         }
        }
    formSteps[formStepsNum].classList.add('form-step-active');
}

let updateProgressBar = () => {
    for(var i = 0; i < progressSteps.length; i++){
        if(i < formStepsNum + 1){
            progressSteps[i].classList.add('progress-step-active');
        } else{
            progressSteps[i].classList.remove('progress-step-active');
        }
    }

    const progressActive = document.querySelectorAll('.progress-step-active');

    progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

