
function toggleMobileMenu(menu){
    menu.classList.toggle("open")

}

let resumeBtn1=document.getElementById("resume-link-1")
resumeBtn1.addEventListener("click",resume)

function resume(){
    window.open("https://drive.google.com/file/d/1gnuqP28KUlnifpn3hQP6eJJ1wnwk7q-8/view?usp=share_link","_blank")
}