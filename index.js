let container= document.querySelector(".container")
let celciusInput= document.querySelector(".celceius")
let faranheitInput= document.querySelector(".faranheait")
let kelvinInput= document.querySelector(".kelvin")

let btnCelcius= document.querySelector(".btnCelcius");
let btnFaranheit= document.querySelector(".btnFaranheit")
let btnKelvin= document.querySelector(".btnKelvin")





btnCelcius.addEventListener("click", ()=>{



    if(celciusInput.value===""){
        celciusInput.classList.add("mm")
        return
    }else{
        let celValue= Number(celciusInput.value);

        let faranheait= (celValue*9/5)+32
        let kelvin= (celValue)+273.15

       faranheitInput.value= faranheait+ "c°"
       kelvinInput.value= kelvin+ "c°"
       celciusInput.classList.remove("mm")
    }



       
})




btnFaranheit.addEventListener("click", ()=>{
    
    if(faranheitInput.value===""){
        faranheitInput.classList.add("mm")
    return
    }else{
        let farValue= faranheitInput.value;

        let celceius= (farValue-32)*5/9
        let kelvin= (farValue-32)/1.8+273.15
    
       celciusInput.value= celceius+ "c°"
       kelvinInput.value= kelvin+ "c°"
       faranheitInput.classList.remove("mm")
    }

})





btnKelvin.addEventListener("click", ()=>{

    if(kelvinInput.value===""){
        kelvinInput.classList.add("mm")
        return
    }else{
        let kelvalue= kelvinInput.value


        let faranheait= kelvalue*1.8-459.67
        let celceius= kelvalue-273.15
    
        faranheitInput.value= faranheait+ "c°"
        celciusInput.value= celceius+ "c°"
        kelvinInput.classList.remove("mm")
    }

})


