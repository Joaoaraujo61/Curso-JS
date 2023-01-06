function contar(){
    let start = document.getElementById('txti')
    let end = document.getElementById('txtf')
    let jump = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if(start.value.length == 0 || end.value.length == 0 || jump.value.length == 0){
        window.alert('[ERRO  NUMEROS INVALIDOS]')
    }else{
        res.innerHTML =  "Contando ..."
        let s = Number(start.value)
        let e = Number(end.value)
        let j = Number(jump.value)


        if(j <= 0 || e <= 0 || s <= 0){
            window.alert('[ERRO] ALGUM NÚMERO INVÁLIDO')
        }

            
        for(c = s; c <= e; c += j){
            res.innerHTML += `${c} \u{1F449}`
        }
        
    }

}

