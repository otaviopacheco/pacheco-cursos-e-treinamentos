function formSign(){
    let nomeLogin = document.querySelector("form");
    if(nomeLogin.nomeClien.value == ""){
        window.alert("preencha o nome");
    }
    else if(nomeLogin.sobrenomeClien.value == ""){
        window.alert("preencha o sobrenome");
    }
    else if(nomeLogin.inputGroupSelect01.value == 0){
        window.alert("escolha o curso desejado");
    }
    else if(nomeLogin.email.value == ""){
        window.alert("preencha o email");
    }else{
        alert(`cadastro concluido com sucesso`)
    }
};
function formLogin(){
    let cadNome = document.querySelector("#formLogin")
    if(cadNome.cadNome.value == ""){
        window.alert("preencha o nome");
    }
    else if(cadNome.cadSobreNome.value == ""){
        window.alert("preencha o sobrenome");
    }
    else if(cadNome.senhaCad.value == ""){
        window.alert("insira a senha");
    }
    else if(cadNome.email.value == ""){
        window.alert("preencha o email");
    }
    else{
        alert(`bem vindo ${cadNome.cadNome.value} ${cadNome.cadSobreNome.value} `);
    }


}