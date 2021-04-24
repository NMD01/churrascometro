//Carne - 400gr por pessoa   +de 6 horas - 650gr
//Cerveja - 1200ml por pessoa  +de 6 horas - 2000ml
//Refrigerante/agua 1000ml por pessoa  +de 6 horas 1500ml

//Crianças valem por 0,5

let duração = document.getElementById("duração")






pessoaCriança = function(){
    let criança = Number(document.getElementById("criança").value)

    
        let custoCriança = criança / 2

        return custoCriança

    
}



total = function(){
    let adulto = Number(document.getElementById("adulto").value)
    

    if(duração.value >= 6){
        let carne = 650
        let pessoas = adulto + pessoaCriança()
        let cerveja = Math.ceil((2000 * adulto) / 350)
        let bebida = Math.ceil((1500 * pessoas) / 2000)

        if(carne * pessoas < 1000){
            return `<p><strong>Carne: </strong>${pessoas * carne}gr</p> <p><strong>Cerveja: </strong>${cerveja} latas de cerveja</p><p><strong>Bebidas: </strong>${bebida} garrafas de 2L</p>`
        }else{
            return `<p><strong>Carne: </strong>${(pessoas * carne) / 1000}Kg</p><p><strong>Cerveja: </strong>${cerveja} latas de cerveja</p> <p><strong>Bebidas: </strong>${bebida} garrafas de 2L</p>`

        }
        
        //return ` carne: ${pessoas * carne}  cerveja: ${cerveja} latas de cerveja   bebidas:${bebida} garrafas de 2L`
    }else{
        let carne = 400
        let pessoas = adulto + pessoaCriança()
        let cerveja = Math.ceil((1200 * adulto) / 350)
        let bebida = Math.ceil((1000 * pessoas) / 2000)
        
        if(carne * pessoas < 1000){
            return `<p><strong>Carne: </strong>${pessoas * carne}gr<br><strong></p><p>Cerveja: </strong>${cerveja} latas de cerveja</p><p><strong>Bebidas: </strong>${bebida} garrafas de 2L</p>`

        }else{
            return `<p><strong>Carne: </strong>${(pessoas * carne) / 1000}Kg</p><p><strong>Cerveja: </strong>${cerveja} latas de cerveja</p><strong><p>Bebidas: </strong>${bebida} garrafas de 2L</p>`

        }

        //return ` carne: ${pessoas * carne}  cerveja: ${cerveja} latas de cerveja   bebidas:${bebida} garrafas de 2L`
    }
    

}




let calcular = document.getElementById("calcular")
calcular.addEventListener("click", botãoCalcular = function(){
    let res = document.getElementById("res")
    
    res.innerHTML = total()
})