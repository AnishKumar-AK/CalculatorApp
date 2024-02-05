const Sun = document.querySelector('.sun-icon')
const moon = document.querySelector('.moon-icon')
const number = document.querySelectorAll('.numbers-symbols')
const output = document.querySelector('.output')
const finalExpression = document.querySelector('.total-output')
const topSymbols  = document.querySelectorAll('.numbers-symbols0')
let array = []
let symbolArray = []

Sun.addEventListener('click' , ()=> {
    document.querySelector('.app-bg').classList.add('top-bg-color')
    document.querySelector('.theme-button').classList.add('bottom-bg-color')
    document.querySelector('.app-inside-bg').classList.add('bottom-bg-color')
    finalExpression.style.color = 'black'
    number.forEach((e) => {
        e.classList.add('ns-bg-light')
    })
    moon.style.color = '#e2e2e2'
})
moon.addEventListener('click' , ()=> {
    document.querySelector('.app-bg').classList.remove('top-bg-color')
    document.querySelector('.theme-button').classList.remove('bottom-bg-color')
    document.querySelector('.app-inside-bg').classList.remove('bottom-bg-color')
    Sun.style.color = 'white'
})

for (let i = 0; i < number.length; i++) {
        array[i] = number[i]
}
for (let i = 0; i < topSymbols.length; i++) {
        symbolArray[i] = topSymbols[i]
}

array.forEach((e) => {
    e.addEventListener('click', () => {
        e.classList.add('background-animation')
        setTimeout(() => {
            e.classList.remove('background-animation')
        }, 200);
        // if(e.innerText !== '+' || e.innerText !== '-' || e.innerText !== '/' || e.innerText !== '*'){
            if(output.innerText.length < 11){
                if(output.innerText == 0){
                    if(e.innerText == '+'){return
                    }
                    else if(e.innerText == '='){return
                    }
                    else if(e.innerText == 'x'){return
                    }
                    else if(e.innerText == array[12].innerText){
                        output.innerText.slice(0,-1)
                        finalExpression.innerText = output.innerText
                        return
                    }
                    else{
                        output.innerText += e.innerText
                    }
                    finalExpression.innerText = output.innerText
                }else if(e.innerText =='1' || e.innerText =='2' || e.innerText =='3' || e.innerText =='4' || e.innerText =='5' || e.innerText =='6' || e.innerText =='7' || e.innerText =='8' || e.innerText =='9' || e.innerText == '0'){
                    output.innerText = output.innerText + e.innerText
                    finalExpression.innerText = eval(output.innerText)
                }else if(e.innerText == '+'){
                    if(output.innerText[output.innerText.length-1] == '+' || output.innerText[output.innerText.length-1] == '-'){
                        return
                    }else{
                        output.innerText = output.innerText + e.innerText
                    }
                }else if(e.innerText == '-'){
                    if(output.innerText[output.innerText.length-1] == '+' || output.innerText[output.innerText.length-1] == '-' || output.innerText[output.innerText.length-1] == '=' || output.innerText[output.innerText.length-1] == '*'){
                        return
                    }else{
                        output.innerText = output.innerText + e.innerText
                    }
                }else if(e.innerText == 'x'){
                    if(output.innerText[output.innerText.length-1] == '+' || output.innerText[output.innerText.length-1] == '-' || output.innerText[output.innerText.length-1] == '=' || output.innerText[output.innerText.length-1] == '*'){
                        return
                    }else{
                        output.innerText = output.innerText + '*'
                    }
                }else if(e.innerText == '.'){
                    if(output.innerText[output.innerText.length-1] == '+' || output.innerText[output.innerText.length-1] == '-' || output.innerText[output.innerText.length-1] == '=' || output.innerText[output.innerText.length-1] == '*'){
                        return
                    }else{
                        output.innerText = output.innerText + e.innerText
                    }
                }else if(e.innerText == '='){
                    if(output.innerText[output.innerText.length-1] == '-' || output.innerText[output.innerText.length-1] == '+' || output.innerText[output.innerText.length-1] == '=' || output.innerText[output.innerText.length-1] == '*'){
                        output.innerText = 0
                        return
                    }else if(output.innerText == ''){
                        output.innerText = 0
                    }
                    finalExpression.innerText = eval(output.innerText)
                    output.innerText = ''
                }
            }
        })
    })
symbolArray.forEach((es) => {
        es.addEventListener('click', () => {
            es.classList.add('background-animation')
        setTimeout(() => {
            es.classList.remove('background-animation')
        }, 200);
            if(output.innerText.length < 12){
                if(output.innerText == 0){
                    if(es.innerText == 'AC'){console.log('AC clicked    ');
                    finalExpression.innerText = ''
                    output.innerText = ''
                    return
                    }
                    else if(es.innerText == '%'){console.log('% added');
                    return
                    }
                    else if(es.innerText == '/'){console.log('/ added');
                    return
                    }
                    else if(es.innerText == '^'){console.log('^ added');
                    return
                    }
                    else{
                        console.log('pressed');
                        return
                    }
                }
                else if(es.innerText == 'AC'){
                    finalExpression.innerText ='='
                    output.innerText = ''
                }
                else if(es.innerText == '%'){
                    output.innerText += es.innerText
                }
                else if(es.innerText == '/'){
                    output.innerText += es.innerText
                    
                }
                else if(es.innerText == '^'){
                    output.innerText += '**'
                }
            }
             })})
    array[12].addEventListener('click',() => {
        output.innerText = output.innerText.slice(0,-1)
    })  