
const createTitle = ()=>{
    const title = document.createElement('h1')
    title.classList.add('title')
    title.innerText = "Hello Gamer!!! \n the first move 'X"
    
    return title
}

const stateBox = []
const createBoxes = () =>{
    for(let i=0; i<9; i++){  
        stateBox.push({
            ind:i,
            state:false,
            text:''
        })
    }

    let fieldState = false

    const createElementsForDom = ()=>{
        const field = document.createElement('div')
        field.classList.add('field')
        stateBox.map(el=>{
            const box = document.createElement('div')
                box.classList.add('box')
                box.addEventListener('click', ()=>{
                    if(fieldState===false && el.state===false){
                        title.innerText= "Atantion, now the step is for 'O"
                        box.classList.remove('box')
                        box.classList.add('boxX')  
                        box.innerText = 'X'
                        el.state = true
                        el.text = 'X'
                        fieldState = true
                        win()
                    } else if (fieldState===true && el.state===false){
                        title.innerText= "Atantion, now the step is for 'X"
                        box.classList.remove('box')
                        box.classList.add('boxO')
                        box.innerText = 'O'
                        el.state = true
                        el.text = 'O'
                        fieldState = false
                        win()
                    } 
                })
                field.append(box)
        })
        return field
    }
    return createElementsForDom()

}

const win = ()=>{
    if (stateBox[0].state && stateBox[0].text === stateBox[1].text && stateBox[1].text === stateBox[2].text) { 
    
        title.innerText = `The winner is ${stateBox[0].text}`
        }
        if (stateBox[3].state && stateBox[3].text === stateBox[4].text && stateBox[4].text === stateBox[5].text) {
        
            title.innerText = `The winner is ${stateBox[3].text}`
        }
        if (stateBox[6].state && stateBox[6].text === stateBox[7].text && stateBox[7].text === stateBox[8].text) {
        
        title.innerText = `The winner is ${stateBox[6].text}`
        }

        //!------

        if (stateBox[0].state && stateBox[0].text === stateBox[3].text && stateBox[3].text === stateBox[6].text) { 
        
        title.innerText = `The winner is ${stateBox[0].text}`
        }
        if (stateBox[1].state && stateBox[1].text === stateBox[4].text && stateBox[4].text === stateBox[7].text) {
        
        title.innerText = `The winner is ${stateBox[1].text}`
        }
        if (stateBox[2].state && stateBox[2].text === stateBox[5].text && stateBox[5].text === stateBox[8].text) {
        
        title.innerText = `the winner is ${stateBox[2].text}`
        }

//!------

        if (stateBox[0].state && stateBox[0].text === stateBox[4].text && stateBox[4].text === stateBox[8].text) { 
        
        title.innerText = `the winner is ${stateBox[0].text}`
        }


        if (stateBox[2].state && stateBox[2].text === stateBox[4].text && stateBox[4].text === stateBox[6].text) {
        
        title.innerText = `the winner is ${stateBox[2].text}`
        
        }
//!------
    if (stateBox[0].state && stateBox[0].text === stateBox[2].text 
        && stateBox[2].text === stateBox[3].text 
        && stateBox[3].text === stateBox[4].text 
        && stateBox[4].text === stateBox[7].text) {
        
    title.innerText = `the is no winner`
    }

    if (stateBox[0].state && stateBox[0].text === stateBox[4].text 
        && stateBox[4].text === stateBox[5].text 
        && stateBox[5].text === stateBox[6].text 
        && stateBox[6].text === stateBox[7].text) {
        
    title.innerText = `the is no winner`
        }
}
const createRestart = ()=>{
    const restart = document.createElement('button')
    restart.textContent = 'Restart'
    restart.addEventListener('click', ()=>{
        location.reload()
    })
    return restart
}

const title = createTitle()
const field = createBoxes()
const restart = createRestart()
const root = document.querySelector('#root')
root.append(title,field, restart)
