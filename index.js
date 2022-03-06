document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });
    });
});

var nonFiction=document.getElementById("non-fic")
var ficNonSection = document.getElementById("non-fiction");
var ficSection = document.getElementById("fiction");
nonFiction.addEventListener('click',()=>{
    ficNonSection.style.display="block";
    ficSection.style.display="none";
    ficNonSection.style.transform="scale(1.3)"
})

var fiction=document.getElementById("fic");
console.log(fiction);
fiction.addEventListener('click',()=>{
    ficSection.style.display="block";
    ficNonSection.style.display="none";
    ficSection.style.transform="scale(1.3)"
})

// var body1=document.getElementsByTagName('section')
// body1.addEventListener('click',()=>{
//     e.preventDefault();
//     ficNonSection.style.display="none";
//     ficSection.style.display="none";
// })
