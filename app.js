const textInput = document.querySelector('.text-input');
const button = document.querySelector('.button');


button.addEventListener('click',countVowel);


function countVowel(event){
    event.preventDefault();
    const textValue = textInput.value

    if(textInput.value === ''){
        alert('Empty input...enter a text!')
        return
    }
    if(textInput.value.includes(Number)){
        alert('Number values not allowed.');
        return
    }
    const textArray = textValue.split('');
    const vowels = ['a','e','i','o','u'];

    alert(`your text has ${getMatch(textArray,vowels)} vowels`)
    
    textInput.value = '';
}

function getMatch(arry1,arry2){
    let foundVowels = [];
    arry1.forEach(element1 => {
        arry2.forEach(element2 => {
            if(element1 === element2){
                foundVowels.push(element1);
            }
        });
    });
    return foundVowels.length;
    // for(let i = 0; i < arry1.length;i++){
    //     for(let j = 0; j < arry2.length; j++){
    //         if(arry1[i] === arry2[j]){
    //             foundVowels.push(arry1[i]);
    //         }
    //     }
    // return foundVowels.length;
    // }
    
}