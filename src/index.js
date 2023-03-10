const result = document.querySelector('.result');
const list = document.querySelector('.results-list');
const waiting = document.querySelector('.waiting');
let num1;
let num2;
let operation;
let operator;
let neutro = '+';

window.addEventListener('keydown', insertFromBoard);

const calculator = {
    sum() {
        operation = num1 + num2;
        result.textContent = operation;
        const textResult = `${num1} + ${num2} = ${operation}`;
        writeOperations(textResult);
    },
    res() {
        operation = num1 - num2;
        result.textContent = operation;
        const textResult = `${num1} - ${num2} = ${operation}`;
        writeOperations(textResult);
    },
    mul() {
        operation = num1 * num2;
        result.textContent = operation;
        const textResult = `${num1} x ${num2} = ${operation}`;
        writeOperations(textResult);
    },
    div() {
        operation = num1 / num2;
        result.textContent = operation;
        const textResult = `${num1} ÷ ${num2} = ${operation}`;
        writeOperations(textResult);
    },
    pow2() {
        operation = Math.pow(num1, 2);
        result.textContent = operation;
        const textResult = `${num1} ^ 2 = ${operation}`;
        writeOperations(textResult);
    },
    sqrt2() {
        operation = Math.sqrt(num1);
        result.textContent = operation;
        const textResult = `√${num1} = ${operation}`;
        writeOperations(textResult);
    },
    percent() {
        operation = num1 / 100;
        result.textContent = operation;
        const textResult = `%${num1} = ${operation}`;
        writeOperations(textResult);
    },
    pow3() {
        operation = Math.pow(num1, 3);
        result.textContent = operation;
        const textResult = `${num1} ^ 3 = ${operation}`;
        writeOperations(textResult);
    },
    powAll() {
        operation = Math.pow(num1, num2);
        result.textContent = operation;
        const textResult = `${num1} ^ ${num2} = ${operation}`;
        writeOperations(textResult);
    },
    sqrtAll() {
        operation = Math.pow(num1,  1/num2);
        result.textContent = operation;
        const textResult = `${num2}√${num1} = ${operation}`;
        writeOperations(textResult);
    },
    log() {
        operation = Math.log10(num1);
        result.textContent = operation;
        const textResult = `log10(${num1}) = ${operation}`;
        writeOperations(textResult);
    },
    pi() {
        operation = Math.PI;
        result.textContent = operation;
    },
    sinf() {
        operation = Math.sin(num1);
        result.textContent = operation;
        const textResult = `sin(${num1}) = ${operation}`;
        writeOperations(textResult);
    },
    cosf() {
        operation = Math.cos(num1);
        result.textContent = operation;
        const textResult = `cos(${num1}) = ${operation}`;
        writeOperations(textResult);
    },
    tanf() {
        operation = Math.tan(num1);
        result.textContent = operation;
        const textResult = `tan(${num1}) = ${operation}`;
        writeOperations(textResult);
    },
    nf() {
        operation = 1;
        for (let i = 1; i <= num1; i++) {
            operation *= i;
        }
        result.textContent = operation;
        const textResult = `!${num1} = ${operation}`;
        writeOperations(textResult);
    }
}
const insert = () => {
    const currentButton = event.target;
    result.textContent += currentButton.textContent;
}

function insertFromBoard(event) {
    console.log(event.key)
    switch(event.key) {
        case '0':
            result.textContent += `${event.key}`;
            break; 
        case '1':
            result.textContent += `${event.key}`;
            break;
        case '2':
            result.textContent += `${event.key}`;
            break;
        case '3':
            result.textContent += `${event.key}`;
            break;
        case '4':
            result.textContent += `${event.key}`;
            break;
        case '5':
            result.textContent += `${event.key}`;
            break;
        case '6':
            result.textContent += `${event.key}`;
            break;
        case '7':
            result.textContent += `${event.key}`;
            break;
        case '8':
            result.textContent += `${event.key}`;
            break;
        case '9':
            result.textContent += `${event.key}`;
            break;
        case ',':
            result.textContent += `.`;
            break;
        case '.':
            result.textContent += `${event.key}`;
            break;
        case '+':
            setOperation(event.key);
            break;
        case '-':
            setOperation(event.key);
        case '*':
            setOperation(event.key);
            break;
        case '/':
            setOperation(event.key);
            break;
        case 'Backspace':
            deleted();
            break;
        case 'Enter':
            calcular();
            break;
    }
}

const setOperation = (op) => {
    num1 = Number(result.textContent);
    result.textContent = '';
    operator = op;
    if (operator == '**' || operator == 'sqrt' || operator == '%' || operator == '!' || operator == 'log' || operator == '***' || operator == 'pi' || operator == 'sin' || operator == 'cos' || operator == 'tan') {
        calcular();
    } else {
        waiting.textContent = `${num1} ${operator}`;
    }
} 

const calcular = () => {
    num2 = Number(result.textContent);
    switch(operator) {
        case '+':
            waiting.textContent = '';
            calculator.sum()
            break;
        case '-':
            waiting.textContent = '';
            calculator.res()
            break;
        case '*':
            waiting.textContent = '';
            calculator.mul()
            break;
        case '/':
            waiting.textContent = '';
            calculator.div()
            break;
        case '**':
            calculator.pow2()
            break;
        case 'sqrt':
            calculator.sqrt2()
            break;
        case '%':
            calculator.percent()
            break;
        case '***':
            calculator.pow3()
            break;
        case 'pow':
            waiting.textContent = '';
            calculator.powAll()
            break;
        case 'sqrtAll':
            waiting.textContent = '';
            calculator.sqrtAll()
            break;
        case 'log':
            calculator.log();
            break;
        case 'pi':
            calculator.pi();
            break;
        case 'sin':
            calculator.sinf();
            break;
        case 'sin':
            calculator.sinf();
            break;
        case 'cos':
            calculator.cosf();
            break;
        case 'tan':
            calculator.tanf();
            break;
        case '!':
            calculator.nf();
            break;
    }
}

const deleted = () => {
    result.textContent = result.textContent.slice(0, -1);
}

const reset = () => {
    result.textContent = '';
    list.innerHTML = '';
}

const plusMinus = () => {
    if (neutro == '+') {
        result.textContent = `-${result.textContent}`;
        neutro = '-'
    } else {
        result.textContent = result.textContent.slice(1);
        neutro = '+'
    }   
}

const writeOperations = (w) => {
    const para = document.createElement('p');
    para.textContent = w;
    list.appendChild(para);
}