
//starting point .accordion-item-header



// for(let i = 0; i < accordionItemHeaders.length; i++){
    //     const accordionItemBody = accordionItemHeaders[i].nextElementSibling;
    //     if(accordionItemHeaders[i].classList.contains('active')){
        //         accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        //     } else{
            //         accordionItemBody.style.maxHeight = 0;
            //     }
            // }





            // for(let i = 0; i < accordionItemHeaders.length; i++){
                //     accordionItemHeaders[i].addEventListener('click', function(){
                    //         accordionItemHeaders[i].classList.toggle('active');
                    //         const accordionItemBody = accordionItemHeaders[i].nextElementSibling;
                    //         if(accordionItemHeaders[i].classList.contains('active')){
                        //             accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                        //         } else{
                            //             accordionItemBody.style.maxHeight = 0;
                            //         }
                            //     })
                            
                            // }
                            
                            // Get all question elements
                            // var questions = document.getElementsByClassName('question');
                            
let accordionItemHeaders = document.querySelectorAll('.accordion-item');
  // Add click event listener to each question
  for (let i = 0; i < accordionItemHeaders.length; i++) {
    accordionItemHeaders[i].addEventListener('click', function() {
      // Toggle active class on the clicked question
      accordionItemHeaders[i].classList.toggle('active');
   
        // Close other open accordionItemHeaders
        for (let j = 0; j < accordionItemHeaders.length; j++) {
            if (accordionItemHeaders[j] !== accordionItemHeaders[i]) {
                accordionItemHeaders[j].classList.remove('active');
       
            }
            console.log(j);
        }
    });
  }

// console.log('start');
// let accordionItemHeaders = document.querySelectorAll('.accordion-item-header');
// accordionItemHeaders.forEach(accordionItemHeader => {
//     accordionItemHeader.addEventListener('click', function(){
//         accordionItemHeader.classList.toggle('active');
//     });

// });



// for(let i = 0; i < accordionItemHeaders.length; i++){
//     accordionItemHeaders[i].addEventListener('click', function(){
//         accordionItemHeaders[i].classList.toggle('active');
//         const accordionItemBody = accordionItemHeaders[i].nextElementSibling;
//         if(accordionItemHeaders[i].classList.contains('active')){
//             accordionItemBody.style.maxHeight = `${accordionItemBody.scrollHeight}px`;
//         } else{
//             accordionItemBody.style.maxHeight = 0;
//         }
//     });
// }
