document.querySelector('.hamburguer').addEventListener("click", () => document.querySelector(".container").classList.toggle("show-menu"));


document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)


document.querySelector("#prazo").addEventListener("change", function(){
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
    const temJs = document.querySelector("#js").checked 
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

     
    let preco = qtde * 250;

    if(temJs) preco *= 1.1
    if (incluiLayout)preco += 500
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}

function enviars() {
  var txt = document.querySelector(".anime")
   
    if (txt.value.length == 0 ) {
        window.alert("preencha os dados")
    }else{
        window.alert(`OBRIGADO pela preferência, Seu formulario foi enviado com sucesso. Em breve iremos responde-lo.`) } }

        function enviarr() {
            var txt1 = document.querySelector(".animees")
             
              if (txt1.value.length == 0 ) {
                  window.alert("preencha os dados")
              }else{
                  window.alert(`OBRIGADO pela preferência, Seu formulario foi enviado com sucesso. Em breve iremos responde-lo.`) } }
          
