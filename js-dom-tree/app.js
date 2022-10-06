//function toggList() {
//  var element = document.getElementById("list");
//  element.classList.toggle("mystyle");
//}

//document.querySelector(".btn-toggle").addEventListener("click", function(){
//  let list = document.querySelector(".list-container");
//  list.classList.toggle("d-none");
//});
const topBtn = document.querySelector('#top-btn');


  
const growBtn = function(){
    const headline = document.getElementById('headline');
    if(headline.classList.contains('grow')){
      headline.classList.remove('grow');
      headline.classList.add('shrink');
    } else if (headline.classList.contains('shrink')){
      headline.classList.add('grow');
      headline.classList.remove('shrink');
    } else{
      headline.classList.add('grow');
    }
  }
function toggList(){
    console.log("hello");
  }
  
  
  let hideBtn = document.querySelector(".btn-toggle");
  
  hideBtn.addEventListener("click", function(){
    let list = document.querySelector(".list-container");
    list.classList.toggle('active');
    if(list.classList.contains('active')){
      
      list.style.maxHeight = list.scrollHeight + "px";
      hideBtn.innerHTML = "Hide list";
    } else{
      
      list.style.maxHeight = 0;
      hideBtn.innerHTML = "Show list";
    }
    growBtn();
  });

//   hideBtn.addEventListener("click", function(){
//     let list = document.querySelector(".list-container");
//     list.classList.toggle('active');
//     if(list.style.display === "none"){
//       list.style.display = "block";
//       document.querySelector(".btn-toggle").innerHTML = "Hide list";
//     } else{
//       list.style.display = "none";
//       document.querySelector(".btn-toggle").innerHTML = "Show list";
//     }
//   });
  
  const colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];
  const listItems = document.getElementsByTagName("li");
  console.log(listItems);
  
  for(let i = 0; i< listItems.length; i++){
    listItems[i].addEventListener("click", function(){
      listItems[i].style.color= colors[i];
      });
  }
  
  
  //listItems.addEventListener("click", function(){
  //  listItems.style.color= 'red';
  //});
  
  const btnCreate = document.querySelector('#btn-main');
  
  btnCreate.addEventListener("click", function(){
    const input = document.querySelector("#main");
    if(input.value === ''){
      alert("You need to input a value in the field");
    } else{
      
      const list = document.querySelector("ul");
      list.insertAdjacentHTML(
        "afterbegin", 
        `<li>${input.value}</li>`
      );
      
      input.value = "";
    }
  });
  
  
  //btnCreate.addEventListener("click", function(){
  //  let headline = document.querySelector("#headline");
  //  let input = document.querySelector("#main");
  //  headline.classList = "grow";
  //  console.log(input.value);
  //  headline.innerHTML = input.value;
  //  input.value = "";
  //});
  
  
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
  
  
  
  

    
    topBtn.addEventListener('click', growBtn);

  
  const btnRemove = document.querySelector('.btn-remove')
  
  btnRemove.addEventListener('click', function(){
    const lastItem = document.querySelector('li:last-child');
    lastItem.remove();
    console.log('hi');
  });
  

  const blueBtns = document.querySelectorAll('.press-me');

  for(const button of blueBtns){
    button.addEventListener('click', function(){
        console.log(button + " pressed");
        const current = document.querySelector('.press-me.active');
        if(button.classList.contains("active")){
            button.classList.add('active');
        } else {
            button.classList.add('active');
        }
            current.classList.remove('active');
    })
    
  }



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
  
  
  
  
  
  
  //btnMain.addEventListener("click", function(){
  //  const headline = document.querySelector('#headline'); // selects ID to modify
  //  const input = document.querySelector('.input-main'); // selects input field class
  // headline.classList = "grow"; // adds class grow to selected ID
  //  headline.innerHTML = input.value; // adds text user typed text to ID
  //  input.value = ''; // erases the input field
  //});
  



// grow btn
    
//   topBtn.addEventListener('click', function(){
//     let headline = document.querySelector('#headline');
//     if(headline.classList.value === 'grow'){
//       console.log('grow exists');
//       headline.classList.remove('grow');
//       headline.classList.add('shrink');
//       topBtn.innerHTML = "Grow text"; 
      
//     } else {
//       console.log('grow isnt there');
//       headline.classList.remove('shrink');
//       headline.classList.add('grow');
//       topBtn.innerHTML = "Shrink text"; 
//     }
//   });
  