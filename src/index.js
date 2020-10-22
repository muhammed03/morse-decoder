const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let result = '';
    let letter = '';
    for (let i = 0; i < expr.length; i += 10){
        arr.push(expr.slice(i, i+10));
    }

    for (let i = 0; i< arr.length; i++){
        if (arr[i]=="**********"){
            result +=" "; 
        } else {
            for(let j = 0; j < arr[i].length; j+=2){
                if(arr[i].substr(j, 2) == '11'){
                    letter += '-';
                }
                else if(arr[i].substr(j, 2) == '10'){
                    letter += '.';
                } 
            }
            result += MORSE_TABLE[letter];
            letter = '';
            
        }
    }
    return result; 
}

module.exports = {
    decode
}