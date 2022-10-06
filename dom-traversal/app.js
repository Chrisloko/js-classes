
// // adding a list item
// const addTask = document.querySelector('#btn-main');
// let input = document.querySelector('.input-main');

// addTask.addEventListener('click', function(){
   
//     let input = document.querySelector('.input-main');
//     if(input.value === ""){
//         alert('input fueld cannot be empty');
//     } else{
//         let li = document.createElement('li');
//         let list = document.querySelector('ul');
//         li.innerHTML = input.value;
//         list.prepend(li);
//         input.value = "";
//     }
    
// });

// // remove list item

// const removeBtn = document.querySelector('.btn-remove');


// removeBtn.addEventListener('click', function(){
//     const lastLi = document.querySelector('ul li:last-child');
//     if(lastLi === null){
//         alert("No more tasks to remove")
//     } else{
//         lastLi.remove();
//     }
    
// });



function sayHi(){
    console.log('plas');
};


let sayHi2 = () => {
    console.log('hello2');
};

let sayHi3 = function(){
    console.log('hello3');
}

function hiBye(plas, func2, func3){
    plas();
    func2();
    func3();
    console.log("bye");
}

hiBye(sayHi, sayHi2, sayHi3);


// event handler

// document.addEventListener('click', function(e){
//     console.log(e.target);
//     if(e.target.tagName === "LI"){
//         console.log('clicked on li')
//     }
// })


// grow text

const growItem =  document.getElementById('top-btn');
const headline =  document.getElementById('headline');

growItem.addEventListener('click', function(){
    if(headline.classList.value === ""){
        headline.classList.add('grow');
    } else if(headline.classList.value === "grow"){
        headline.classList.remove('grow');
        headline.classList.add('shrink');
    } else{
        headline.classList.add('grow');
        headline.classList.remove('shrink');
    }  
});


// document.addEventListener('scroll', function(e) {
//     let hsLand = document.querySelector('.hs-landing-page');
//     const myTimeout = setTimeout(myGreeting, 5000);
//     function myGreeting() {
//         if (hsLand.classList.contains('small-header')) {
//         hsLand.classList.remove('small-header');
//           console.log('has small header');
//       }
// }

// });


// select active btns

const selectBtn = document.querySelectorAll('.select-me');

// for(let i = 0; i < selectBtn.length; i++){
//     selectBtn[i].addEventListener('click', function(){
//        let current = document.querySelector('.active');
//        current.className = current.className.replace(' active', '');
 
//        selectBtn[i].classList.add('active');
//     })
    
// }



for(let i= 0; i < selectBtn.length; i++){
    selectBtn[i].addEventListener('click', function(){
        let current = document.querySelector('.active');
        current.className = current.className.replace(' active', '');

        selectBtn[i].classList.add('active');
    })
    
}


//adding a list item

const mainBtn = document.getElementById('btn-main');

mainBtn.addEventListener('click', function(){
    const list = document.querySelector('ul');
    const input = document.getElementById('main');
    // const li = document.createElement('li');
    // li.innerHTML = input.value;
    if(input.value === ""){
        alert("value cannot be empty");
    } else{
        list.insertAdjacentHTML('afterbegin', 
        `<li>${input.value}</li>`); 
        // list.prepend(li);
        input.value = "";
    }
    
});


const removeBtn = document.querySelector(".btn-remove");

removeBtn.addEventListener('click', function(){
    const list = document.querySelector('ul');
    console.log('clicked');
    list.lastElementChild.remove();
});



















// mainBtn.addEventListener('click', function(){
//     const input = document.querySelector('.input-main');
//     const list = document.querySelector('ul');
//     if(input.value === ''){
//         alert('You need to add text')
//     } else{
//         const li = document.createElement('li');
//         li.innerHTML = input.value;
//         console.log(li);
//         list.prepend(li);
//         input.value = '';
//     }
// });

// removing list item

// const removeBtn = document.querySelector('.btn-remove');

// removeBtn.addEventListener('click', function(){
//     const lastItem = document.querySelector('li:last-child');
//     lastItem.remove();
// });




let btnHide = document.querySelector('.btn-toggle');

btnHide.addEventListener('click', function(){
    const listCont = document.querySelector('.list-container');
    listCont.classList.toggle('open');
    listCont.classList.toggle('close');
    if(listCont.classList.contains('open')){
        listCont.style.height = listCont.scrollHeight + 'px';
        btnHide.innerHTML = "hide List";
    } else{
        listCont.style.height = 0;
        btnHide.innerHTML = "Show List";
    }
})