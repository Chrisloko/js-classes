// const h1 = document.getElementById('main-title');
// h1.classList.add('hello');


// // const ul = document.querySelector('ul');
// // const ul = document.querySelector('ul');
// // ul.lastElementChild =
// // let newLi = document.createElement('li');
// // newLi.textContent = "heya";
// // ul.append(newLi);


// const ul = document.querySelector('ul');
// const lastElemewnt = ul.lastElementChild;
// let newLi = document.createElement('li');


// newLi.textContent = "heya";

// ul.append(newLi);

const list = document.querySelector("ul");

const lastListItem = list.lastElementChild;

const newLi = document.createElement('li');
newLi.innerHTML = "heyu";
lastListItem.before(newLi); // before() doesnt work on safari

const secondLi = list.children[1]; // use children(i) for selecting specific place in DOM

list.insertAdjacentHTML("afterend", "<p>hello2</p>"); // or this will do the trick

const newLi2 = newLi.cloneNode(true); // clones the node and accecpts a boolean to determine if it is a deep clone or not

list.append(newLi2);


const anotherList = document.querySelector("li"); // will crete a static node list 

const anotherList2 = list.getElementsByTagName("li"); // will crete a live HTML collection

// getElementsBy whatever always gets you a live list

list.children[3].remove();

console.dir(list);