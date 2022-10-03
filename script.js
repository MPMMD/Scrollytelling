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
 var frameNumber = 0, // start video at frame 0
// // lower numbers = faster playback

playbackConst = 1000, 
// // get page height from video duration

 vid = document.getElementById('bound-one'); 
// // var vid = $('#v0')[0]; // jquery option

// // Use requestAnimationFrame for smooth playback
 function scrollPlay(){  
 var frameNumber  = window.pageYOffset/playbackConst;
 vid.currentTime  = frameNumber;
 window.requestAnimationFrame(scrollPlay);
 }

 window.requestAnimationFrame(scrollPlay);
//

 
 playbackConst2 = 50, 
 // // get page height from video duration
 
  vid2 = document.getElementById('bound-two'); 
 // // var vid = $('#v0')[0]; // jquery option
 
 // // Use requestAnimationFrame for smooth playback
  function scrollPlay2(){  
  var frameNumber  = window.pageYOffset/playbackConst2;
  vid2.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlay2);
  }
 
  window.requestAnimationFrame(scrollPlay2);


     /* Video Player */
     const registerVideo = (bound, video) => {
      bound = document.querySelector(bound);
      video = document.querySelector(video);
      
      const scrollVideo = ()=>{
          if(video.duration) { // Hvis videoen kører 
              // window.scrollY = scroll på y-axen, altså om vi scroller op eller ned
              const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;

              // Udregning af hvor langt vi har scrollet i procent
              const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
              const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
              
              video.currentTime = video.duration * percentScrolled;
          }
          requestAnimationFrame(scrollVideo);
      }

      requestAnimationFrame(scrollVideo);
  }

  // Registrer alle video elementer på siden som skal kunne scrolles.
  // Første variable er det div-id som videoen er en del af.
  // Anden varaible er egentlig bare at finde selve video tagget inden for div id.
  registerVideo("#bound-one", "#bound-one video");
  registerVideo("#bound-two", "#bound-two video")
  registerVideo("#bound-three", "#bound-three video")