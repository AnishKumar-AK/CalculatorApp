const Sun = document.querySelector('.sun-icon')
const moon = document.querySelector('.moon-icon')
const number = document.querySelectorAll('.numbers-symbols')
const output = document.querySelector('.output')
const finalExpression = document.querySelector('.total-output')
const topSymbols  = document.querySelectorAll('.numbers-symbols0')
let array = []
let symbolArray = []
// let total = 0
// let num = 1

Sun.addEventListener('click' , ()=> {
    document.querySelector('.app-bg').classList.add('top-bg-color')
    document.querySelector('.theme-button').classList.add('bottom-bg-color')
    document.querySelector('.app-inside-bg').classList.add('bottom-bg-color')
    
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
// console.log(array);
// console.log(symbolArray);

// function calcualation(string) {
//     let list = []
//     let total = 0
//     for(i=0;i<=string.length;i++){
//         if(string[i] == 1 || string[i] == 2 || string[i] == 3 || string[i] == 4 || string[i] == 5 || string[i] == 6){
//             list[i] = string[i]
//             string[i].pop
//         }else if(string[i] == '+'){
//             total = list[i] + string[i+1]
//             i+=2
//         }
//     }
// }



array.forEach((e) => {
    e.addEventListener('click', () => {
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
                    // console.log('hello');
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
        // num = 0
        // total = 0
    })       // if(output.innerText[num] === '+') {
        //     return}
        // else{
        // output.innerText = output.innerText + '+'
        // // total += parseFloat(output.innerText)
        // console.log(output.innerText);
        // num += 1
        // console.log(num);
        // return
        // if (e.innerText == '1') {
        //     // num += 1
        //     console.log(num);
            
        //     output.innerText = output.innerText + e.innerText
        // }

        // if(e.innerText !== '+' || e.innerText !== '-' || e.innerText !== '/' || e.innerText !== '*'){
        //     // output.innerText = parseFloat(output.innerText) + parseFloat(e.innerText)
        //     console.log(output.innerText);
        // }
    // if(e.innerText == '-'){
    //     output.innerText = output.innerText + '-'
    // }
    // if(e.innerText == '*'){
    //     output.innerText = output.innerText + '*'
    // }
    // if(e.innerText == '/'){
    //     output.innerText = output.innerText + '/'
    // }
    // if(e.innerText == '='){
    //     // output.innerText = output.innerText + '/'
    //     // total = parseFloat(output.innerText);
    //     console.log(total);
    // }
    // if(e.innerText == '1'){
    //     output.innerText += parseFloat(e.innerText)
    //     console.log(output.innerText);
        
    // }

        // console.log(e.innerText);
        // if(e.innerText == '+'){
        //     // total = parseFloat(total) + parseFloat(num)
        //     // output.innerText = output.innerText + '+' + num
        //     total += num + '+' 
        //     console.log(total);
        //     output.innerText = total
        // }
        // else if(e.innerText !== '+' || e.innerText !== '-' || e.innerText !== '/' || e.innerText !== '*'){
        //     num = e.innerText
        //     output.innerText += '+' + e.innerText 
        //     // output.innerText = output.innerText + e.innerText
        //     // console.log(output.innerText);
        //     // console.log(num);

        // }
        // else if(e.innerText == '&#x21bb;'){
        //     output.innerText = ''
        //     num = 0
        //     total = 0
        // }
        
        // console.log(total);
        // if(e.innerText == '+'){
        //     total = total + e.innerText
        // }
        // total = e.innerText
        // console.log(total);
        // if(e.innerText == '+'){
        //     total += parseFloat(e.innerText)
        // }


// array[0].addEventListener('click' , ()=> {
//     console.log(array[0]);
// })

