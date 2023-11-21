jQuery("#carousel").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 4
      }
    }
  });

const startBtn =document.querySelector("#startBtn"),
endBtn =document.querySelector("#endBtn"),
prevNext =document.querySelectorAll(".prevNext"),
numbers =document.querySelectorAll(".link");

let currentStep = 0 ;

// Update Button Function 

const updateBtn = () => {
    if (currentStep === 4 ) {
        endBtn.disabled = true ;
        prevNext[1].disabled = true ;
    } else if (currentStep === 0 ) {
        startBtn.disabled = true ;
        prevNext[0].disabled = true ;
    } else {
        endBtn.disabled = false ;
        prevNext[1].disabled = false ;
        startBtn.disabled = false ;
        prevNext[0].disabled = false ;
    }
}

// Numbers Button Function 

numbers.forEach((number , numIndex) =>{
    number.addEventListener("click" , (e) =>{
        e.preventDefault() ;
        currentStep = numIndex ;
        
        document.querySelector(".active").classList.remove("active") ;
        number.classList.add("active") ;
        updateBtn() ;
    });
});

// Previous Button Function 

prevNext.forEach((button) => {
    button.addEventListener("click" , (e) => {

        currentStep += e.target.id === "next"  ? 1 : -1 ;
        numbers.forEach((number , numIndex) => {
           number.classList.toggle("active" , numIndex === currentStep) ;
           updateBtn() ;
        }) ;
    }) ;
}) ;

// Start Button Function 

startBtn.addEventListener("click" , () => {
    document.querySelector(".active").classList.remove("active") ;

    numbers[0].classList.add("active");
    currentStep = 0 ;
    updateBtn() ;
    endBtn.disabled = false ;
    prevNext[1].disabled = false ;
}) ;

// End Button Function

endBtn.addEventListener("click" , () => {
    document.querySelector(".active").classList.remove("active") ;

    numbers[4].classList.add("active");
    currentStep = 4 ;
    updateBtn() ;
    startBtn.disabled = false ;
    prevNext[0].disabled = false ;
}) ;

