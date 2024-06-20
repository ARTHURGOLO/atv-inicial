let botao = document.getElementById("botao")

botao.addEventListener("click", function()  {
    let nome = document.getElementById("nome").value
    console.log(nome)
    document.getElementById("saudacao").innerText
        = "olá "  + nome + ", este é meu site"
        
})       

    