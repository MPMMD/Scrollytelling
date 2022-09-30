// https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//         entry.target.classList.add('textEnter');
//         }
//     });
// });

// observer.observe(document.querySelector('.animateText'));

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//         entry.target.classList.add('textFade');
//       }
//     });
// });

// observer.observe(document.querySelector('.animateText'));


// https://css-tricks.com/scroll-triggered-animation-vanilla-javascript/ - this one works
function scrollTrigger(selector){
  let els = document.querySelectorAll(selector)
  els = Array.from(els)
  els.forEach(el => {
    addObserver(el)
  })
}
function addObserver(el){
    // We are creating a new IntersectionObserver instance
    let observer = new IntersectionObserver((entries, observer) => { // This takes a callback function that receives two arguments: the elements list and the observer instance.
      entries.forEach(entry => {
        // `entry.isIntersecting` will be true if the element is visible
      if(entry.isIntersecting) {
        entry.target.classList.add('textFade')
        // We are removing the observer from the element after adding the active class
        observer.unobserve(entry.target)
      }
    })
  })
  // Adding the observer to the element
  observer.observe(el)
}
// Example usage
scrollTrigger('.animateText')



// // From Jespers Template
// var frameNumber = 0, // start video at frame 0
// // lower numbers = faster playback

// playbackConst = 50, 
// // get page height from video duration

// vid = document.getElementById('bound-one'); 
// // var vid = $('#v0')[0]; // jquery option



// // Use requestAnimationFrame for smooth playback
// function scrollPlay(){  
// var frameNumber  = window.pageYOffset/playbackConst;
// vid.currentTime  = frameNumber;
// window.requestAnimationFrame(scrollPlay);
// }

// window.requestAnimationFrame(scrollPlay);