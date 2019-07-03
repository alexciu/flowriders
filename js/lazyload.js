const images = document.querySelectorAll("[data-src]")

function preloadImage(img){
  const src = img.getAttribute("data-src")
  if(!src){
    return
  }
  img.src = src;
  img.style.opacity = "1";
  img.style.filter  = 'alpha(opacity=100)'; // IE fallback
}

const imgOptions = {
  treshhold:0,
  rootMargin: "0px 0px 300px 0px"
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting){
      return
    }
    else{
      preloadImage(entry.target)
      imgObserver.unobserve(entry.target)
    }
  })
}, imgOptions)

images.forEach(image => {
  imgObserver.observe(image)
})