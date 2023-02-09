const d=document;
const ls=localStorage;

export function digitalClock(clock,boton1,boton2){
    let tempo;
    d.addEventListener("click", e=>{
        if(e.target.matches(boton1)){
            tempo=setInterval(()=>{
                const tiempo= new Date();
                const hora = tiempo.getHours();
                var minutos= tiempo.getMinutes();
                var segundos= tiempo.getSeconds();
                d.querySelector(clock).innerHTML= `${hora}:${minutos}:${segundos}`;
            }, 1000);
        }
        if(e.target.matches(boton2)){
            clearInterval(tempo);
        }
    })

}
let x=0,
y=0;

export function moveTank(e,tank,field){
    const $tank=d.querySelector(tank),
    $field=d.querySelector(field);

    switch(e.keyCode){
        case 37:
            e.preventDefault();
            //move("left");
            x--;
            
            break;
        case 38:
            e.preventDefault();
            //move("up");
            y--;
            break;
        case 39:
            e.preventDefault();
            //move("right");
            x++;
            break;
        case 40 :
            e.preventDefault();
            //move("down");
            y++;
            break;

        default:
            break;
    }
    $tank.style.transform =`translate(${x*3}px,${y*3}px)`;
}

export function mostrarScroll (){
    const $scrollBtn =d.querySelector(arrow);

    window.addEventListener("scroll",(e)=>{
        let scrollTop=w.pageYOffset||d.documentElement.scrollTop;

        if(scrollTop>600){
            $scrollBtn.classList.add("animado");
        } else{
            $scrollBtn.classList.remove("animado")
        }
    })
}

export default function darkTheme(btn,classDark){
    const $themeBtn=document.querySelector(btn)
    const $selectors=document.querySelectorAll("[data-dark]")
    let moon ="🌙"
    let sun ="☀️";

    const lightMode=()=>{
        $selectors.forEach(el=>el.classList.remove(classDark));
        $themeBtn.textContent=moon;
        ls.setItem("theme","light")
    }
    const darkMode=()=>{
        $selectors.forEach(el=>el.classList.add(classDark));
        $themeBtn.textContent=sun;
        ls.setItem("theme","dark") 
    }

    document.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            if($themeBtn.textContent ===moon){
                darkMode();
            }else{
                lightMode();
            }
        }
    });

    d.addEventListener("DOMContentLoaded", (e)=>{
        if(ls.getItem("theme")===null){
            ls.setItem("theme","light");
        }
        if(ls.getItem("theme")==="light"){
            lightMode();
        }
        if(ls.getItem("theme")==="dark"){
            darkMode();
        }
    })
}

const w=window

export  function responsiveMedia(id,mq, mobileContent, desktopContent){
    let breakpoint =w.matchMedia(mq)
    const responsive =(e)=>{
        if(e.matches){
            d.getElementById(id).innerHTML=desktopContent

        }else{
            d.getElementById(id).innerHTML=mobileContent
        }
        
    }
    breakpoint.addListener(responsive)
    responsive(breakpoint);
}

