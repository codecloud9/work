let mmenu=document.querySelector(".open_wrap")
let gnb=document.querySelector(".gnb")
let close=document.querySelector(".close_menu")
let tits=document.querySelectorAll(".tit")

 tits.forEach(function(tit){
    tit.addEventListener("click", function(){
        mobileMenu(this)
    })
 })

mmenu.addEventListener("click", function(){
    gnb.classList.add("open")
})
close.addEventListener("click", function(){
    gnb.classList.remove("open")
})

function mobileMenu(el){
    let before=document.querySelector(".active")
    if(before&&document.querySelector(".active")!==el){
     before.classList.remove("active")
     before.nextElementSibling.style.maxHeight=null;
    }
    el.classList.toggle("active")  
    let sub=el.nextElementSibling;
    let subH=Number(sub.style.maxHeight)
    if(subH!==0){
     sub.style.maxHeight=null
    }else{
     sub.style.maxHeight=sub.scrollHeight+"px"
    }
}
