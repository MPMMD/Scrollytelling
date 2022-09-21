// https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//         entry.target.classList.add('textEnter');
//         }
//     });
// });

// observer.observe(document.querySelector('.animateText'));

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.classList.add('textFade');
      }
    });
});
  
  observer.observe(document.querySelector('.animateText'));