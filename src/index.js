const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let morse = [];
    for (let i = 0; i < expr.length; i = i + 10) {
        let char = [];
        for (let j = i; j < i + 10; j = j + 2) {
            if (expr[j] + expr[j + 1] === '10') {
                char.push('.')
            } else if (expr[j] + expr[j + 1] === '11') {
                char.push('-');
            } else if (expr[j] === '*') {
                char.push('**');
            }
        }
        morse.push(char);
    }
    
    let res = [];
    morse.forEach(char => {
        if (char.join('') === '**********') {
            res.push(' ');
        }
        for (key in MORSE_TABLE) {
            if (char.join('') == key) {
                res.push(MORSE_TABLE[key]);
            }
        };
    })
    return res.join('');
}

module.exports = {
    decode
}