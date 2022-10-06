
// const numbers = [1, 2, 3];
// console.log(numbers);
// // (3) [1, 2, 3]
// // or
// const moreNumbers = new Array(1, 2, 3);
// console.log(moreNumbers);
// // (4) [1, 2, 3], 4
// // or
// const evenMoreNumbers = Array(1, 2, 3, 4);
// console.log(evenMoreNumbers);
// // (4) [1, 2, 3, 4] 
// const yetEvenMoreNumbers = Array.of(1, 2, 3, 4, 5);
// console.log(yetEvenMoreNumbers);
// // (5) [1, 2, 3, 4, 5]
// const yetEvenMoreNumbers2 = Array.from("hi!");
// console.log(yetEvenMoreNumbers2);
// // (3) ['h', 'i', '!']

// const listItems = document.querySelectorAll('li');
// console.log(listItems);
// // node list

// const arrayList = Array.from(listItems);
// console.log(arrayList + "1");
// // array

// for(const data of arrayList){
//     console.log(data.innerHTML);
// }


// const hobbies = ['Sports', 'Cooking'];

// // push method adds data at the end
// hobbies.push('Lego');
// // pop() removes an item from the last part of an array, can also be stored in a variable
// hobbies.pop();

// // unshift method adds data at the beginning
// hobbies.unshift('School');
// // shift removes the first item of the array
// hobbies.shift(); 

// // direct index access replacement
// hobbies[1] = "coding";



// hobbies.splice(1, 0, "good food"); // first parameter is what index number to start on, the second parameter is the number of elements to remove from that starting point, if value is zero no values are deleted. The third and so on parameters are values that can be added to the array in the positions specified in the first parameter
// console.log(hobbies);
// // (3) ['Sports', 'good food', 'coding']

// const someArray = [1, 2, 3, 4];
// const removedElements = someArray.splice(2, 1, "extra thing" ); // splice also returns an array of the removed elements, the first parameter can aslo be negative, this will cause the starting point to be on the last element of the array
// console.log(removedElements); // [3]

// const testResultsOg = [1, 5.3, 1.5, 10.99, -5, 20];
// const testResultsCopyOg = testResultsOg; // what we store at these two variables is linked so if you modify one, you modify the other

// testResultsOg.push(22); // if you push a new value to the original testResultsOg it will also show up at testResultsCopyOg

// console.log(testResultsCopyOg);




// const testResults = [1, 5.3, 1.5, 10.99, -5, 20];
// const storedResults = testResults.concat([3.99, 2])

// testResults.push(5.91);

// console.log(testResults);
// console.log(storedResults);
// // (7) [1, 5.3, 1.5, 10.99, -5, 20, 5.91]
// // (8) [1, 5.3, 1.5, 10.99, -5, 20, 3.99, 2]

// console.log(`index of method ${testResults.indexOf(1.5, 2)}`); // first value is index to look for and the second, optional paramater is what index to start
// // index of method 2


// // const testResults = [1, 5.3, 1.5, 10.99, -5, 20];
// // const testResultsCopy = testResults.slice();

// const john = {
//     lastName: 'smith',
//     age: 23
// }

// const personData = [{name: "Max"}, {name: "Manuel"}];

// const manuel = personData.find((person, idx, persons) =>{
//     return person.name === "Manuel";
// });

// manuel.name = "Ana";

// console.log(manuel);
// // {name: 'Ana'}
// console.log(personData);

// console.log(personData[0].name);
// //0:  {name: 'Max'} 
// //1: {name: 'Ana'}


// const ages = [3, 10, 18, 20];

// const age = ages.find(function(number){
//     return number > 18;
// });

// console.log(age);
// // 20


// const exactNumber = otherNumbers.find((number) => {
//     return number > 1;
// })
// console.log(exactNumber);
// // 2



// const otherNumbers = [1, 2, 3, "hello"];

// const results = otherNumbers.indexOf("hello");
// const resultsIncludesIndexOf = (otherNumbers.indexOf("hello") !== -1);
// const resultsIncludes = otherNumbers.includes("hello");

// console.log(results);
// //3
// console.log(resultsIncludesIndexOf);
// // true
// console.log(resultsIncludes);
// // true



const button = document.querySelector(".press-me");
const input = document.querySelector("input");
button.addEventListener('click', function(){
    const li = document.createElement("li");
    const ul = document.querySelector("ul");
    if(input.value === ""){
        alert("Value cannot be empty");
    } else{
        li.innerHTML = input.value;
        ul.append(li);
        input.value = "";
    }
   
});


const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;


const taxAdjustedPrices = prices.map( function(price, idx, prices){
    const priceObj = {index: idx, taxAdjPrice: price * (tax +1)};
    return priceObj;
});


// console.log(taxAdjustedPrices);
// console.log(taxAdjustedPrices);

const sortedPrices = prices.sort(function(a, b){
    
});

console.log(sortedPrices);



// const values = [2, 14, 20, 50];
// const newValues = values.map( function(value){
//     value;
// });

// console.log(newValues);

const listItems = document.querySelectorAll('li');
const colors = ["blue", "green", "red", "orange"];

// for(const list of listItems){
//     list.style.background = colors;
// }
// for(let i = 0; i < listItems.length; i++){
//     listItems[i].style.background = colors[i];
// }

listItems.forEach(function(color, idx){
    color.style.background = colors[idx];
});








const buttonNote = document.querySelector('.click-me');

buttonNote.addEventListener('click', function(){
   Notification.requestPermission().then(function(perm) {
    alert(perm);
   })
})



let p = new Promise(function(resolve, reject){
    let a = 1 + 3;
    if(a == 2){
        resolve('Success');
    } else {
        reject('Failed');
    }
})


p.then(function(message){
    console.log("This is in the then " + message);
}).catch(function(message){
    console.log("This is the catch " + message);
})