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
    if (incluiLayout)preco += 700
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}

function enviarr() {
    document.getElementById("vai")
    window.alert("Obrigado pela preferência, Seu formulario foi enviado com sucesso.    Em breve iremos responde-lo.");
}
