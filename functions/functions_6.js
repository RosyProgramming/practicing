// callback function 
// callback é uma função que passa como paramentro outra função .chamar de volta

function sayMyname(name) {
    console.log('antes de executar a função callback')
    
    name()

    console.log('depois de executar a callback')
}

sayMyname(

    () => {
        console.log('estou em uma callback')
    }
)


// outra forma de criar função 

// function sayMyName() {
//     console.log('antes de executar a função callback')
    
//     function name() {
//         console.log('estou em uma callback')
//     }

//     name()

//     console.log('depois de executar a callback')
    
// }

// sayMyname()