let slider;

show = (filterClass) => {
	let filteredGallery = document.getElementById('filteredGallery');
	let gallery = document.getElementById('gallery');

	if(filteredGallery.hasChildNodes()){
		let images = document.querySelectorAll('div#filteredGallery img');
		images.forEach(image => {
			image.classList.remove('show');
			gallery.append(image);
		});
	}

	if (filterClass){
		filteredGallery.classList.remove('d-none');
		gallery.classList.add('d-none');

		let filteredImages = document.querySelectorAll(`div#gallery img.${filterClass}`);
		filteredImages.forEach(image => {
			filteredGallery.append(image);
			image.classList.add('hidden');
			setTimeout(function () {
				image.classList.remove('hidden');
				image.classList.add('show');
			}, 200)
		});
	} else {
		gallery.classList.remove('d-none');
		filteredGallery.classList.add('d-none');
	}
}

showBody = (filterClass) => {
	let filteredGallery = document.getElementById('filteredGallery-body');
	let gallery = document.getElementById('gallery-body');

	if(filteredGallery.hasChildNodes()){
		let images = document.querySelectorAll('div#filteredGallery-body img');
		images.forEach(image => {
			image.classList.remove('show');
			gallery.append(image);
		});
	}

	if (filterClass){
		filteredGallery.classList.remove('d-none');
		gallery.classList.add('d-none');

		let filteredImages = document.querySelectorAll(`div#gallery-body img.${filterClass}`);
		filteredImages.forEach(image => {
			filteredGallery.append(image);
			image.classList.add('hidden');
			setTimeout(function () {
				image.classList.remove('hidden');
				image.classList.add('show');
			}, 200)
		});
	} else {
		gallery.classList.remove('d-none');
		filteredGallery.classList.add('d-none');
	}
}

showBreast = (filterClass) => {
	let filteredGallery = document.getElementById('filteredGallery-breast');
	console.log(filteredGallery);
	let gallery = document.getElementById('gallery-breast');

	if(filteredGallery.hasChildNodes()){
		let images = document.querySelectorAll('div#filteredGallery-breast img');
		images.forEach(image => {
			image.classList.remove('show');
			gallery.append(image);
		});
	}

	if (filterClass){
		filteredGallery.classList.remove('d-none');
		gallery.classList.add('d-none');

		let filteredImages = document.querySelectorAll(`div#gallery-breast img.${filterClass}`);
		filteredImages.forEach(image => {
			filteredGallery.append(image);
			image.classList.add('hidden');
			setTimeout(function () {
				image.classList.remove('hidden');
				image.classList.add('show');
			}, 200)
		});
	} else {
		gallery.classList.remove('d-none');
		filteredGallery.classList.add('d-none');
	}
}
showmens = (filterClass) => {
	let filteredGallery = document.getElementById('filteredGallery-mens');
	let gallery = document.getElementById('gallery-mens');

	if(filteredGallery.hasChildNodes()){
		let images = document.querySelectorAll('div#filteredGallery-mens img');
		images.forEach(image => {
			image.classList.remove('show');
			gallery.append(image);
		});
	}

	if (filterClass){
		filteredGallery.classList.remove('d-none');
		gallery.classList.add('d-none');

		let filteredImages = document.querySelectorAll(`div#gallery-mens img.${filterClass}`);
		filteredImages.forEach(image => {
			filteredGallery.append(image);
			image.classList.add('hidden');
			setTimeout(function () {
				image.classList.remove('hidden');
				image.classList.add('show');
			}, 200)
		});
	} else {
		gallery.classList.remove('d-none');
		filteredGallery.classList.add('d-none');
	}
}

shownon = (filterClass) => {
	let filteredGallery = document.getElementById('filteredGallery-non');
	let gallery = document.getElementById('gallery-non');

	if(filteredGallery.hasChildNodes()){
		let images = document.querySelectorAll('div#filteredGallery-non img');
		images.forEach(image => {
			image.classList.remove('show');
			gallery.append(image);
		});
	}

	if (filterClass){
		filteredGallery.classList.remove('d-none');
		gallery.classList.add('d-none');

		let filteredImages = document.querySelectorAll(`div#gallery-non img.${filterClass}`);
		filteredImages.forEach(image => {
			filteredGallery.append(image);
			image.classList.add('hidden');
			setTimeout(function () {
				image.classList.remove('hidden');
				image.classList.add('show');
			}, 200)
		});
	} else {
		gallery.classList.remove('d-none');
		filteredGallery.classList.add('d-none');
	}
}



let btns = document.getElementsByClassName("pressme");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
	let current = document.getElementsByClassName("active");
	current[0].className = current[0].className.replace(" active", "");
	this.className += " active";
  });
}
let btnsBody = document.getElementsByClassName("pressme2");
for (let i = 0; i < btnsBody.length; i++) {
  btnsBody[i].addEventListener("click", function() {
	let current = document.getElementsByClassName("active-body");
	current[0].className = current[0].className.replace(" active-body", "");
	this.className += " active-body";
  });
}
let btnsBreast = document.getElementsByClassName("pressme3");
for (let i = 0; i < btnsBreast.length; i++) {
  btnsBreast[i].addEventListener("click", function() {
	let current = document.getElementsByClassName("active-breast");
	current[0].className = current[0].className.replace(" active-breast", "");
	this.className += " active-breast";
  });
}
let btnsMens = document.getElementsByClassName("pressme4");
for (let i = 0; i < btnsMens.length; i++) {
  btnsMens[i].addEventListener("click", function() {
	let current = document.getElementsByClassName("active-mens");
	current[0].className = current[0].className.replace(" active-mens", "");
	this.className += " active-mens";
  });
}
let btnsNon = document.getElementsByClassName("pressme5");
for (let i = 0; i < btnsNon.length; i++) {
  btnsNon[i].addEventListener("click", function() {
	let current = document.getElementsByClassName("active-non");
	current[0].className = current[0].className.replace(" active-non", "");
	this.className += " active-non";
  });
}

showFilteredModal = (filter, modalName) => {
	console.log(`Should filter ${filter}`);
	//Muestras el modal con la función que necesites 
	//$('#modal').venobox();

	//filtras el slick carousel
	$('.slider').slick('slickUnfilter');
	$('.slider').slick('slickFilter', filter);
	// nombre de la clase que identifica al modal
	$('.modal').toggleClass('is-visible');

}
$('.modal-toggle').on('click', function(e) {
	// $('.slider').slick('slickUnfilter');
  	e.preventDefault();
  	$('.modal').toggleClass('is-visible');
});



$(document).ready(function(){
  slider = $('.slider').slick({
	  dots: false,
	  infinite: false,
	  arrows: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
});

