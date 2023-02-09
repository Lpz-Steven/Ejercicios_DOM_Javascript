

export default function internet (div, alert2){
    const $div= document.getElementById(div)
    const $alert2 =document.getElementById(alert2)

    if (navigator.onLine){
        $div.classList.add("showAlert")
    } else{
        $alert2.classList.add("showAlert")
    }

    setTimeout(()=>{
        $div.classList.remove("showAlert"),
        $alert2.classList.remove("showAlert")
    },"3000")
}