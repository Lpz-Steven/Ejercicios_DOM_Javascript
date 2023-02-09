const d= document,
n=navigator,
ua=navigator.userAgent;

export default function userDeviceInfo(id){
    const $id=d.getElementById(id),
    isMobile = {
        android:()=>ua.match(/android/i),
        ios:()=>ua.match(/iphone|ipad|ipod/i),
        windows:()=>ua.match(/windows phone/i),
        any:function(){
            return this.android()||this.windows();
        },
    },

    isDesktop = {
        linux:()=>ua.match(/linux/i),
        mac:()=>ua.match(/mac os/i),
        windows:()=>ua.match(/windows nt/i),
        any:function(){
            return this.linux()||this.mac()||this.windows();
        },
    },

    isBrowser={
        chrome:()=> ua.match(/chrome/i),
        safari:()=>ua.match(/safari/i),
        firefox:()=>ua.match(/firefox/i),
        opera:()=>ua.match(/opera|operamini/i),
        any:function(){
            return(
                this.chrome()|| this.safari()|| this.firefox()|| this.opera()
            );
        }
    };



    console.log(isBrowser.chrome());
    console.log(ua);
    console.log(isMobile.android())
    console.log(isBrowser.any())


    $id.innerHTML=`
    <ul>
        <li>User Agent: <br>${ua}</b></li>
        <li>Plataforma:<b>${
            isMobile.any()? isMobile.any():isDesktop.any()
        }</b></li> 
        <li>Navegador:<b>${isBrowser.any()}</b></li>
    </ul>`;
}