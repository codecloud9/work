const mmenu=document.querySelector(".open_menu");
const pannel=document.querySelector(".menu_wrap");
const body=document.querySelector("body");

mmenu.addEventListener("click", (e)=>{
    if(!mmenu.classList.contains("active")){
        mmenu.classList.add("active")
        pannel.style.display="block"
    }else{
        mmenu.classList.remove("active")
        pannel.style.display="none"
    }
   
})

//모바일 메뉴를 클릭하여 자바스크립트 실행 후 .menu_wrap이 안보이는 경우
let w=window.innerWidth;
window.addEventListener("resize",()=>{
    w=window.innerWidth
    if(w>320 && pannel.hasAttribute("style")){
        pannel.removeAttribute("style")
    }
})

//부드럽게 이동
const btnLinks=document.querySelectorAll(".link");
btnLinks.forEach((link)=>{
    link.addEventListener("click", (e)=>{
        e.preventDefault();
        let target=e.currentTarget.getAttribute("href")
        let targetPox=document.querySelector(target).offsetTop;
        mmenu.classList.remove("active")
        pannel.removeAttribute("style")
        window.scrollTo({top:targetPox-100, behavior:"smooth"});
    })
})

//header에 배경색 적용, animation
const header=document.querySelector("#header");
const webPort=document.querySelectorAll(".web_port_thum")
const secTit=document.querySelectorAll(".sec_tit")
const webTxt=document.querySelectorAll(".web_port_txt")
// document.querySelector(".head_txt h1").classList.add("ani_bigSize")

window.addEventListener("scroll", ()=>{
    let top=window.scrollY;
    if(top>header.offsetHeight && w>=1025){
        header.classList.add("fixed")
    }else{
        header.classList.remove("fixed")
    }

    //animation
    webPort.forEach((web)=>{
        if(top>web.offsetTop-500){
            web.classList.add("ani_slideUp")
        }
    })
    webTxt.forEach((web)=>{
        if(top>web.offsetTop-500){
            web.classList.add("ani_slideUp_delay")
        }
    })
    secTit.forEach((tit)=>{
        if(top>tit.offsetTop-600){
            tit.classList.add("ani_slideUp")
        }
    })
})

//headline
let text=document.querySelector(".head_tit");
let splitText=text.textContent;
let splitWrap=splitText.split("").join("</span><span>");
splitWrap=`<span>${splitWrap}</span>`;
text.innerHTML=splitWrap;
//console.log(splitWrap)
function textEffect(){
    let scroll=window.scrollY
    if(scroll>=0){
        text.classList.add("show")
        document.querySelector(".head_txt p").classList.add("ani_fadeIn")
    }
    requestAnimationFrame(textEffect)
}
textEffect()

//web popup
const btnGuide=document.querySelectorAll(".btn_guide");
const asideThum=document.querySelector("#aside_thum");
const asideWin=document.querySelector("#web_popup_wrap");
const btnClose=document.querySelector(".btn_close")
btnGuide.forEach((guide)=>{
    guide.style.cursor="pointer";
    guide.addEventListener("click", (e)=>{
        let num=e.currentTarget.getAttribute("data-idx");
        asideThum.setAttribute("src",`./images/web${num}.jpeg`);
        asideWin.style.display="block"
        body.style.overflow="hidden"
    })
})
btnClose.addEventListener("click", ()=>{
    asideWin.style.display="none"
    body.style.overflow="auto"
})


