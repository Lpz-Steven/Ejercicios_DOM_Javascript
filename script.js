const btnMenu =document.querySelector(".panel-btn");
const menu=document.querySelector(".panel")
const seccions=document.querySelector(".menu")




btnMenu.addEventListener("click", function(){
    menu.classList.toggle("showMenu")
})
seccions.addEventListener("click", function(){
    menu.classList.remove("showMenu") 
})





import userDeviceInfo from "./deteccion_dispositivos.js";
import internet from "./internet.js";
import localization from "./localizacion.js"
import darkTheme, { digitalClock, responsiveMedia } from "./reloj.js"
import { moveTank } from "./reloj.js";
import responsiveTester from "./test.js";





const d = document;
d.addEventListener("DOMContentLoaded",(e)=>{

    digitalClock("#reloj","#boton1", "#boton2");
     responsiveMedia(
        "youtube", 
        "(min-width:1000px)",
        `<a href="https://www.youtube.com/watch?v=F5tSoaJ93ac">Ver video</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/F5tSoaJ93ac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    )
    responsiveMedia(
        "gmaps", 
        "(min-width:1000px)",
        `<a href="https://goo.gl/maps/ewH5XdA9svu5g4WcA">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.5164109633!2d-74.24789670340907!3d4.648283716770205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses-419!2sco!4v1674248357014!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );

    responsiveTester("responsive-tester")
        userDeviceInfo("user-device");
        internet("alert-conexion1", "alert-conexion2");
        localization()
    

});


darkTheme(".dark-theme-btn", "dark-mode");

d.addEventListener("keydown",(e)=>{
    moveTank(e,".tank",".field");
})

const $alarma=document.createElement("audio")
      $alarma.setAttribute("src", "assets/alarm.mp3")

const boton3= document.querySelector("#boton3");
boton3.addEventListener("click", function (){
    $alarma.play()
})

//cuenta regresiva

const tiempoFaltante= (tiempoFuturo) =>{
    let now = new Date(),
        remainTime = (new Date(tiempoFuturo)-now)/1000,
        remainSeconds =Math.floor(remainTime%60),
        remainMinutes= Math.floor(remainTime/60%60),
        remainHours=Math.floor(remainTime/3600%24),
        remainDays =Math.floor(remainTime/(3600*24));

    return{
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

console.log(tiempoFaltante('Jan 24 2023 16:11:55 GMT-0500'))

const cuentaregresiva=(tiempoFuturo)=>{
    const el=document.getElementById("clock");

    const timerUpdate=setInterval(()=>{
        let t=tiempoFaltante(tiempoFuturo);
        el.innerHTML=`${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;
        if( t.remainTime <= 1){
        clearInterval(timerUpdate);
        }
    },1000)   
};
cuentaregresiva('Jan 20 2023 17:27:33 GMT-0500', 'cuenta')

//boton flecha
let animado =document.querySelector(".animado");

function mostrarScroll(){
    let scrollTop=document.documentElement.scrollTop;
    //scrolltop es la cantidad de scroll que baja a medida
    //que vamos bajando
    let alturaAnimado = animado.offsetTop;
    //detecto la altura desde el inicio de la ventana
    //hasta el inicio del elemento
    if(alturaAnimado  < scrollTop){
        animado.style.opacity=1
    }
    else{
        animado.style.opacity=0;
    }
}
window.addEventListener('scroll', mostrarScroll);



const tank=document.getElementById("tiger")
const velocidad=50
const mTop=0
const mleft =0

document.addEventListener("keydown", (e)=>{
    if(KeyboardEvent=="ArrowRight"){
        moverDerecha();
        console.log("derecha")
    }
})

function moverDerecha(){
    mleft += velocidad;
    tank.mleft=mleft+ "px";
}


document.addEventListener('keyup', e=>{
    if (e.target.matches('#buscador')){
        document.querySelectorAll('.content').forEach(color=>{
            color.textContent.toLowerCase().includes(e.target.value)
            ? color.classList.remove('notShow')
            : color.classList.add('notShow')
        })
    }
})

      





