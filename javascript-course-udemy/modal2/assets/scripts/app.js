const addMovieBtn = document.querySelector('.add-movie');
const modal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const cancel = document.querySelector('.btn--passive');
const confirmAddMovieButton = document.querySelector('.btn--success');
const userInputs = modal.querySelectorAll('input');
const entryText = document.getElementById('entry-text');



const movies = [];

const updateUI = () =>{
    if(movies.length === 0){
        entryText.style.display = "block";
    } else{
        entryText.style.display = "none";
    }
}

const deleteMovieHandler = function(movieId){
    let movieIndex = 0;
    // for(let i = 0; i < movies.length; i++){
    //     if(movies[i].id === movieId){
    //         break;
    //     }
    //     movieIndex++;
    // }
    for (const movie of movies){
        if(movie.id === movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
}

const renderNewMovieElement = (id, title, imageUrl, rating) =>{
    const newMovieElement = document.createElement('li');
    newMovieElement.classList.add('movie-element');
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
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
}

const addMovieFunction = () =>{
    modal.classList.toggle("visible");
    backdrop.classList.toggle("visible");
   
}
const backdropClickHandler = () => {
    addMovieFunction();
 }

const cancelAddMovieHandler = () => {
    addMovieFunction();
    clearInputs();
}

const clearInputs = () =>{
    for(let i = 0; i < userInputs.length; i++){
        userInputs[i].value = "";
    }
}

const addMovieHandler = () =>{
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(titleValue.trim() === '' ||
     imageUrlValue.trim() === "" ||
     ratingValue.trim() === "" ||
     +ratingValue < 1 ||
     +ratingValue > 5){
        alert('invalid values');
    }
    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };
    movies.push(newMovie);
    clearInputs();
    addMovieFunction();
    updateUI();
    // renderNewMovieElement(titleValue, imageUrlValue, ratingValue); // or
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
}

addMovieBtn.addEventListener('click', addMovieFunction);
backdrop.addEventListener('click', backdropClickHandler);
cancel.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);


const movies2 = [];