// const otherAddMovieBtn = document.querySelector('header').lastElementChild; // yet another wat to traverse the DOM

// addMovie.addEventListener("click", function(){
//     modal.classList.toggle('visible');
//     backdrop.classList.toggle('visible');
    
// });
// backdrop.addEventListener('click', function(event) {
//     if (event.target == backdrop) {
//         backdrop.classList.remove('visible');
//         modal.classList.remove('visible');
//     }

//   });
//   const backdropDismiss = function(event){
   //       if (event.target == backdrop) {
      //          backdrop.classList.remove('visible');
      //          modal.classList.remove('visible');
      //    }
      //   }

const addMovieBtn = document.querySelector('.addMovie');
const backdrop = document.getElementById("backdrop");
const modal = document.querySelector(".modal");
const cancel = document.querySelector(".btn--passive");
const add = cancel.nextElementSibling;
const entryTextSection = document.getElementById('entry-text');

const userInputs = document.querySelectorAll('input');

const movies = [];

const updateUi = () => {
   if(movies.length === 0){
      entryTextSection.style.display = "block";
   } else{
      entryTextSection.style.display = "none";
   }
};

const deleteMovieHandler = function(movieId){

}

const addNewMovieElement = function(id, title, imageUrl, rating){
   const newMovieElement = document.createElement('li');
   newMovieElement.className = "movie-element";
   newMovieElement.innerHTML = `
      <div class="movie-elemment__image">
         <img src="${imageUrl}" alt="${title}">
      </div>
      <div class="movie-element__info">
         <h2>${title}</h2>
         <p>${rating}/5 stars</p>
      </div>
   `;

   newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
   const listRoot = document.getElementById('movie-list');
   listRoot.append(newMovieElement);

   // alternative function
   // const listRoot = document.getElementById('movie-list');
   // listRoot.insertAdjacentHTML('afterbegin', `
   // <li class="movie-element">
   //    <div class="movie-elemment__image">
   //        <img src="${imageUrl}" alt="${title}">
   //     </div>
   //     <div class="movie-element__info">
   //        <h2>${title}</h2>
   //        <p>${rating}/5 stars</p>
   //    </div>
   // </li>`
   // )
}
      
const toggleBackdrop = function(){
   backdrop.classList.toggle('visible');
};
const toggleMovieFunction = function() {
   modal.classList.toggle('visible');
   toggleBackdrop();
};

const cancelButton = () => {
   toggleMovieFunction();
   clearMovieInputs();
}

const backdropClickHandler = () => {
   toggleMovieFunction();
}


   const clearMovieInputs = () => {
      // userInputs[0].value = "";
      // userInputs[1].value = "";
      // userInputs[2].value = "";
      for( let i = 0; i < userInputs.length; i++){ // a more dynamic solution
         userInputs[i].value = "";
      }
   }

   const addMovieHandler = () => {
      let title = userInputs[0].value;
      let imageUrlValue = userInputs[1].value;
      let ratingValue = userInputs[2].value;
      console.log(title);
      if(title.trim() === "" || imageUrlValue.trim() === "" || ratingValue.trim() === "" || +ratingValue < 1 || +ratingValue > 5){
         alert('please enter valid values');
         return;
      } 
      const newMovie = {
         id: Math.random().toString(),
         title: title,
         image: imageUrlValue,
         rating: ratingValue
      }
      movies.push(newMovie);
      toggleMovieFunction();
      clearMovieInputs();
      updateUi();
      addNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
   }



   // const addMovie

  addMovieBtn.addEventListener("click", toggleMovieFunction);
  backdrop.addEventListener('click', backdropClickHandler);

  // cancel button
  cancel.addEventListener("click", cancelButton);

   // add btn within modal
   add.addEventListener('click', addMovieHandler);



