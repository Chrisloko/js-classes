const removeCartItemButtons = document.getElementsByClassName('btn-danger');
const cartRow = document.querySelectorAll(".cart-row");

// for (const buttons of removeCartItemButtons ){
//     buttons.addEventListener('click', function(){
//         const cartRow = document.querySelector
        
//     });
// }

// removeCartItemButtons.forEach(function(button, idx){
//     const cartRow = document.querySelectorAll("")
// });



for(let i = 0; i<removeCartItemButtons.length; i++){
    removeCartItemButtons[i].addEventListener('click', function(e){
        // var buttonClicked = e.target;
       e.target.parentElement.parentElement.remove();
       updateCartTotal();
    })
}

function updateCartTotal(){
    let cartItemContainer = document.getElementsByClassName('cart-items' )[0];
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');
    // using the getElementsByClassName method on the cartItemContainer object will only get the elements inside the object
    for(let i = 0; i < cartRows.length; i++){
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0];
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        console.log(priceElement, quantityElement);
    }
}

