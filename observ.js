const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entrie => {
        if(entrie.isIntersecting){
            const section = entrie.target
            entrie.target.style.transform = "scale(1)" 
            observer.unobserve(section)
        }
    })
}, {
    rootMargin: "50px"
})
const sectionRev = document.querySelectorAll(".observ")
sectionRev.forEach(item => sectionObserver.observe(item))