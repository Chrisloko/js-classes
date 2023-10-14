//function toggList() {
//  var element = document.getElementById("list");
//  element.classList.toggle("mystyle");
//}

//document.querySelector(".btn-toggle").addEventListener("click", function(){
//  let list = document.querySelector(".list-container");
//  list.classList.toggle("d-none");
//});



//list.addEventListener('click', (event)=>{
//  if(event.target.tagName === 'BUTTON'){ // a tag name property always returns in capital letters
//      const button = event.target;
//      const li = button.parentNode;
//      li.remove();
//  }
//  
//})


// save code below --------------------------------------------

// let list = document.querySelector(".list-container ul");
// const allListItems = list.children;

// let attachRemoveButton = function(li) {
//   let remove = document.createElement('button');
//   // remove.className = 'remove';
//   remove.classList.add('remove');
//   remove.textContent = 'Remove';
//   li.appendChild(remove);
// }

// for(let i = 0; i < allListItems.length; i++){
//   attachRemoveButton(allListItems[i]);
// }

// const btnCreate = document.querySelector('#btn-main');
// const input = document.querySelector('.input-main');
// btnCreate.addEventListener('click', function(){
//   if( input.value === ""){
//     alert("input field empty");
//   } else{
  
//     let listItem = document.createElement('li');
    
//     listItem.innerHTML = input.value;
//     attachRemoveButton(listItem);
//     list.prepend(listItem);
//     input.value = "";
//   }
  
  
// });


// let remBtn = document.querySelectorAll('.remove');  
//   for(let i = 0; i < remBtn.length; i++){
//       remBtn[i].addEventListener('click', function(){
//       console.log(remBtn[i]);
//       remBtn[i].parentNode.remove();
//     });
//   }



// save code above--------------------------------------------------------------------

const mainBtn = document.getElementById('btn-main');
const mainInput = document.getElementById('main');
const unorderedList = document.querySelector('#list ul');

// adding a new list item

    mainBtn.addEventListener('click', function(){
        if(mainInput.value === ""){
            alert('input is empty');
        } else{
            let newListItem = document.createElement('li');
            newListItem.innerHTML = mainInput.value;
            attachRemoveButton(newListItem);
            unorderedList.append(newListItem);
        }
    });
    
// add remove button when creating new list item

let attachRemoveButton = function(li){
  let removeBtn = document.createElement('button');
  removeBtn.innerHTML = 'Remove row';
  removeBtn.classList.add('remove');
  li.append(removeBtn);
}

// appending remove buttons to original list items

const unorderedListItems = document.querySelectorAll('.unordered-list li');

for(let i = 0; i < unorderedListItems.length; i++){
  attachRemoveButton(unorderedListItems[i]);
}


// clicking on the remove now button deletes the row
const anotherAllList = document.querySelector('.list-container');
anotherAllList.addEventListener('click', function(e){

  if(e.target.className === "remove"){
      e.target.parentNode.remove();
    }    
  })
  

// document.addEventListener('click', function(e){
//   console.log(e.target.className);
// })
// hovering over the row makes the text transform to uppercase letters
// anotherAllList.addEventListener('mouseover', function(e){

//   if(e.target.tagName === "LI"){
//       e.target.style.textTransform = "uppercase";
//   }    

// });


// grow btn

const growBtn = document.querySelector('#top-btn');

growBtn.addEventListener('click', function(){
  let headline = document.querySelector('#headline');
  if(headline.classList.value === ''){
    headline.classList.add('grow');
  } else if(headline.classList.value === 'grow'){
    headline.classList.remove('grow');
    headline.classList.add('shrink');
   } else{
      headline.classList.add('grow');
      headline.classList.remove('shrink');
   }
});
         
    
 

function toggList(){
  console.log("hello");
}


let hideBtn = document.querySelector(".btn-toggle");

hideBtn.addEventListener("click", function(){
  let list = document.querySelector(".list-container");
  if(list.style.display === "none"){
    list.style.display = "block";
    document.querySelector(".btn-toggle").innerHTML = "Hide list";
  } else{
    list.style.display = "none";
    document.querySelector(".btn-toggle").innerHTML = "Show list";
  }
});


//remove me button bottom

const takeMeOut = document.querySelector('.remove-me');
takeMeOut.addEventListener('click', function(){
    takeMeOut.innerHTML = 'clicked';
    setTimeout(function(){
        takeMeOut.remove();
    }, 2000);
    
});


let john = {
  lastName:"Smith",
  age: "33",
  height:"1.8m"
}

for (let prop in john){
  console.log(`${john[prop]}`);
} 


let highlights = document.getElementsByClassName("highlight");
console.log(highlights);

for(const highlight of highlights){
  highlight.style.background= "yellow";
}

// cant figure out whats wrong down here

// const btnRemove = document.querySelector('.btn-remove')

// btnRemove.addEventListener('click', function(){
//   const removeList = document.querySelector('li:last-child');
//   console.log(removeList); 
//   setTimeout(function(){
//     removeList.remove();
    
//     console.log('delayed 2s'); 
//   }, 2000);
  
// });


function hello(greeting) {
  console.log(`${greeting} my name is Jonas`);
}

hello("Greetings!");

const teacher = {
  firstName: "Ashley",
  lastName: "Boucher",
  printName: function() {
    console.log(`${this.firstName} and ${this.lastName}`);
  },
};






























// const anotherAllListItems = document.querySelectorAll('.list-container li');



// anotherAllList.addEventListener('mouseover', function(e){
//     e.target.style.color = 'red';
// })




//const btnCreate = document.querySelector('#btn-main');
//
//btnCreate.addEventListener("click", function(){
//  const input = document.querySelector("#main");
//  if(input.value === ''){
//    alert("You need to input a value in the field");
//  } else{
//    
//    const list = document.querySelector("ul");
//    const item = document.createElement("li");
//    item.textContent = input.value;
//    
//    list.prepend(item);  
//    input.value = "";
//  }
//});





//btnRemove.addEventListener('click', function(){
//  const lastItem = document.querySelector('li:last-child');
//  lastItem.remove();
//  console.log('hi');
//});


//btnMain.addEventListener("click", function(){
//  const headline = document.querySelector('#headline'); // selects ID to modify
//  const input = document.querySelector('.input-main'); // selects input field class
// headline.classList = "grow"; // adds class grow to selected ID
//  headline.innerHTML = input.value; // adds text user typed text to ID
//  input.value = ''; // erases the input field
//});

//const topBtn = document.querySelector('#top-btn');
//
//topBtn.addEventListener('click', function(){
//  let headline = document.querySelector('#headline');
//  if(headline.classList.value === 'grow'){
//    console.log('grow exists');
//    headline.classList.remove('grow');
//    headline.classList.add('shrink');
//    topBtn.innerHTML = "Grow text"; 
//    
//  } else {
//    console.log('grow isnt there');
//    headline.classList.remove('shrink');
//    headline.classList.add('grow');
//    topBtn.innerHTML = "Shrink text"; 
//  }
//});

// anotherAllListItems.forEach((listItem, index) => {
//     listItem.addEventListener('mouseover', function(e){
//         e.target.style.textTransform = "uppercase";
//     })
    
    
// });


//list.addEventListener('mouseover', (event)=>{
//  console.log(event);
//  console.log(event.target);
//  if(event.target.className === 'highlight'){ // a tag name property always returns in capital letters
//      
//      event.target.textContent = event.target.textContent.toUpperCase(); 
//  }
//  
//})
