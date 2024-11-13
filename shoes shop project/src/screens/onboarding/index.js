import {containerLoading , containerWellcome , startSlider} from "../../layout/index"
export const onBoarding = ()=>{

    setTimeout(()=>{
        const getStarted = document.getElementById('get-started');
        getStarted.classList.add('-translate-x-full');
        getStarted.innerHTML =''
        getStarted.append(Welcome());
        setTimeout(()=>{
        // const welcome = document.getElementById('welcome');
        // welcome.classList.toggle('translate-x-full');
        getStarted.classList.remove('-translate-x-full');
        getStarted.innerHTML =''
        getStarted.append(startSlider());
        },2000)
    },2000)
    return El({
        element:'div',
        className:'h-full transition ease-linear duration-500 transform',
        id:'get-started',
        children:[Loading()]
    });
    }