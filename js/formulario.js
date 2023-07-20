const formulario = document.querySelector(".medidas");
const quantiaDeMedidas = document.querySelector(".quantia_de_medidas")
const comprimento = formulario.querySelector("#Comprimento");
const Circunferencia1 = formulario.querySelector("#Medida1");
const Circunferencia2 = formulario.querySelector("#Medida2");
const Circunferencia3 = formulario.querySelector("#Medida3");
const Circunferencia4 = formulario.querySelector("#Medida4");
const botao = document.querySelector(".botao_calcular")
const resultadoM3DaTora = document.querySelector("#M3")
const resultadoraioMedioDaTora = document.querySelector("#raio-medio")
const resultadoalturaDaTora = document.querySelector("#altura")
const pi = 3.14
let media_do_raio = 0
let metros_cubicos_da_tora = 0 
let circunferencia1 = 0
let circunferencia2 = 0
let circunferencia3 = 0
let circunferencia4 = 0
let altura

botao.addEventListener("click",(event)=>{
    event.preventDefault();
    CalculaM3()
});

function CalculaM3(){
    altura = parseFloat(comprimento.value);
    divisor_de_medias = parseFloat(quantiaDeMedidas.value);
    circunferencia1 = parseFloat(Circunferencia1.value);
    circunferencia2 = parseFloat(Circunferencia2.value);
    circunferencia3 = parseFloat(Circunferencia3.value);
    circunferencia4 = parseFloat(Circunferencia4.value);
    let media = calculaMedia
    (circunferencia1,circunferencia2,circunferencia3,circunferencia4,divisor_de_medias);
    media_do_raio= calculaRaio(media,pi);
    metros_cubicos_da_tora = calculaMetros3(media_do_raio,pi,altura);

    resultadoM3DaTora.textContent = `A tora possui ${metros_cubicos_da_tora} Metros Cubicos`;
    resultadoalturaDaTora.textContent = `O comprimento da tora é ${altura} Metros`;
    resultadoraioMedioDaTora.textContent = `A media do raio da tora é de ${media_do_raio} cm`;



}
function calculaMedia(v1,v2,v3,v4,d){
    let soma = 0;
    let resultado = 0;
    if(d == 2 || d == "2"){
        soma = v1 + v2 
        
    }
    if(d == 3 || d == "3"){
        soma = v1 + v2 + v3     
        
    }
    if(d == 4 || d == "4"){
        soma = v1 + v2 + v3 + v4        
    }
    resultado = soma / d
    return resultado.toFixed(2)
}
function calculaRaio(m,pi){
    let comprimento = m;
    let raio = comprimento/(2*pi);
  
    return raio.toFixed(2)    
}
function calculaMetros3(r,pi,h){
    let raio_em_metros = (r / 100)
    let altura_em_metros = h
    let metros_Cubicos = ((pi * (raio_em_metros * raio_em_metros)) * altura_em_metros)
    return metros_Cubicos.toFixed(2)
}