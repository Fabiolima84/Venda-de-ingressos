function calcular(){
    if (validaquantidade() && validapreco() && validafilme() && validasessao() ){ 

                
        let valortotal = parseFloat(quantidade.value) * parseFloat (preco.value)
       
        valor_total.value = valortotal
       
            
        
    }
    function validaquantidade(){
        console.log(quantidade.value)
        if(quantidade.value.trim() === ""){
            quantidade.style.background = "red";
            mensagem.innerHTML = "Preencha a quantidade!";
            $('#alerta').modal('show');
            return false;
            } else {
                quantidade.style.background = "white";
                return true;
            }
        }
    function validapreco(){
        if(preco.value.trim() === ""){
            preco.style.background = "red";
            mensagem.innerHTML = "Preencha a preço!";
            $('#alerta').modal('show');
            return false;
            } else {
                preco.style.background = "white";
                return true;
            }
        }
    function validafilme(){
        if(filme.value.trim() === ""){
            filme.style.background = "red";
            mensagem.innerHTML = "Preencha o nome do filme!";
                $('#alerta').modal('show');
                return false;
                } else {
                    filme.style.background = "white";
                    return true;
                }
            }
    function validasessao(){
        if(sessao.value.trim() === ""){
            sessao.style.background = "red";
            mensagem.innerHTML = "Preencha a sessao!";
                 $('#alerta').modal('show');
                 return false;
                } else {
                    sessao.style.background = "white";
                    return true;
                }
            }
    
            }
            

    
       