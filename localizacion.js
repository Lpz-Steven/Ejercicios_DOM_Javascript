const d = document,
n = navigator;
export default function localization(){
    const $id= d.getElementById("localizacion")
    console.log(n.geolocation)
    n.geolocation.getCurrentPosition(position => {
        let c = position.coords;
        console.log(c.latitude);
        console.log(c.longitude);
        console.log(c.accuracy);

        $id.innerHTML=`
    <ul>
        <li>Latitud: <br>${c.latitude}</b></li>
        <li>Longitud: <br>${c.longitude}</b></li>
        <li>Acercamiento: <br>${c.accuracy}</b></li>
    </ul>
    <a href="https://www.google.com/maps/@${c.latitude}, ${c.longitude},20z" target="_blank" rel="noopener"> ver en google maps</a>`; 
    });
}