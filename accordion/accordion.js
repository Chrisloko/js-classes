
//starting point .accordion-item-header
let accordionItemHeaders = document.querySelectorAll('.accordion-item-header');



for(let i = 0; i < accordionItemHeaders.length; i++){
    const accordionItemBody = accordionItemHeaders[i].nextElementSibling;
    if(accordionItemHeaders[i].classList.contains('active')){
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else{
        accordionItemBody.style.maxHeight = 0;
    }
}
for(let i = 0; i < accordionItemHeaders.length; i++){
    accordionItemHeaders[i].addEventListener('click', function(){
        accordionItemHeaders[i].classList.toggle('active');
        const accordionItemBody = accordionItemHeaders[i].nextElementSibling;
        if(accordionItemHeaders[i].classList.contains('active')){
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else{
            accordionItemBody.style.maxHeight = 0;
        }
    })
    
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
