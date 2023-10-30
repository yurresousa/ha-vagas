let tecnologias = ['JAVA','PHP','MOBILE','WEB','.NET','PYTHON','GO'];

let tecnologia = document.getElementById("banner-h1-tecnologias");

let contador = 0;
setInterval(()=>{
    tecnologia.classList = "efeito"
    tecnologia.innerHTML = tecnologias[contador++];
    if(contador == tecnologias.length){
        contador = 0
    }
},3000)