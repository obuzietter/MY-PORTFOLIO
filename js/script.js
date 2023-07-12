const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("swipe", entry.isIntersecting);
      
    })
  },
  {
    threshold: 1,
  }
) 

cards.forEach(card => {
  observer.observe(card);
})

