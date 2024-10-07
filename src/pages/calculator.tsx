import { useState } from "react"

export default function Calculator() {
    const [value, setValue] = useState('');
    const [first, setFirst] = useState<number | null>(null);
    const [second, setSecond] = useState<number | null>(null);
    const [operator, setOperator] = useState<string | null>(null);

    const handleClick = (input: string | number) => {
        switch (input) {
            case 'C':
                // Clear everything
                setValue('');
                setFirst(null);
                setSecond(null);
                setOperator(null);
                break;
            case '+/-':
                // Toggle between positive and negative values
                setValue((prevInput) => prevInput.startsWith('-') ? prevInput.slice(1) : '-' + prevInput);
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                if (value) {
                    setFirst(Number(value)); // Store the first operand
                    setOperator(input); // Store the operator (+, -, *, /)
                    setValue(''); // Clear the input for the second number
                }
                break;
            case '=':
                if (first !== null && operator && value) {
                    const secondValue = Number(value); // Get the second operand
                    let result: number = 0;

                    // Perform the calculation based on the operator
                    switch (operator) {
                        case '+':
                            result = first + secondValue;
                            break;
                        case '-':
                            result = first - secondValue;
                            break;
                        case '*':
                            result = first * secondValue;
                            break;
                        case '/':
                            result = secondValue !== 0 ? first / secondValue : 0; // Avoid division by 0
                            break;
                        default:
                            break;
                    }

                    setValue(result.toString()); // Display the result
                    setFirst(result); // Store result for potential further calculations
                    setSecond(secondValue); // Store second operand
                    setOperator(null); // Clear operator
                }
                break;
            default:
                // Handle number inputs and concatenate them
                if (typeof input === 'number' || !isNaN(Number(input))) {
                    setValue((prevInput) => prevInput + input.toString()); // Append the number
                }
                break;
        }

        // For debugging
        console.log("FIRST: " + first);
        console.log("SECOND: " + second);
        console.log("operator: " + operator);
    };



    return (
        <>
            <div className="flex w-full h-screen justify-center items-center bg-[#2f2f2f]">
                <div className="flex flex-col h-[600px] w-[350px] bg-black rounded-xl">
                    <div className="flex flex-col justify-between items-end text-5xl h-1/4 text-white">
                        <div className="flex  w-full justify-end text-2xl text-[#505050] pr-5 pt-5">
                            {first}
                        </div>
                        <div className="flex pr-5">

                            {value}
                        </div>
                    </div>
                    <div className="flex w-full h-full">
                        <div className="grid grid-cols-4 h-full w-full gap-3 p-7 text-white text-2xl">
                            <button onClick={() => handleClick('C')} className="flex text-black justify-center items-center rounded-full h-16 w-16 bg-[#505050] hover:bg-white">C</button>
                            <button onClick={() => handleClick('+/-')} className="flex text-black justify-center items-center rounded-full h-16 w-16 bg-[#505050] hover:bg-white">+/-</button>
                            <button onClick={() => handleClick('%')} className="flex text-black justify-center items-center rounded-full h-16 w-16 bg-[#505050] hover:bg-white">%</button>
                            <button onClick={() => handleClick('/')} className="flex justify-center items-center rounded-full h-16 w-16 bg-[#ff9500] hover:bg-[#ffb143]">÷</button>

                            <button onClick={() => handleClick(7)} className="flex justify-center items-center rounded-full h-16 w-16 bg-[#1c1c1c] hover:bg-white">7</button>
                            <button onClick={() => handleClick(8)} className="flex justify-center items-center rounded-full h-16 w-16 bg-[#1c1c1c] hover:bg-white">8</button>
                            <button onClick={() => handleClick(9)} className="flex justify-center items-center rounded-full h-16 w-16 bg-[#1c1c1c] hover:bg-white">9</button>
                            <button onClick={() => handleClick('*')} className="flex justify-center items-center rounded-full h-16 w-16 bg-[#ff9500] hover:bg-[#ffb143]">×</button>

                            <button onClick={() => handleClick(4)} className="flex justify-center items-center rounded-full h-16 w-16 bg-[#1c1c1c] hover:bg-white">4</button>
                            <button onClick={() => handleClick(5)} className="flex justify-center items-center rounded-full h-16 w-16 bg-[#1c1c1c] hover:bg-white">5</button>
                            <button onClick={() => handleClick(6)} className="flex justify-center items-center rounded-full h-16 w-16 bg-[#1c1c1c] hover:bg-white">6</button>
                            <button onClick={() => handleClick('-')} className="flex justify-center items-center rounded-full h-16 w-16 bg-[#ff9500] hover:bg-[#ffb143]">-</button>

                            <button onClick={() => handleClick(1)} className="flex justify-center items-center rounded-full h-16 w-16 bg-[#1c1c1c] hover:bg-white">1</button>
                            <button onClick={() => handleClick(2)} className="flex justify-center items-center rounded-full h-16 w-16 bg-[#1c1c1c] hover:bg-white">2</button>
                            <button onClick={() => handleClick(3)} className="flex justify-center items-center rounded-full h-16 w-16 bg-[#1c1c1c] hover:bg-white">3</button>
                            <button onClick={() => handleClick('+')} className="flex justify-center items-center rounded-full h-16 w-16 bg-[#ff9500] hover:bg-[#ffb143]">+</button>

                            <button onClick={() => handleClick(0)} className="flex justify-center items-center rounded-full h-16 col-span-2 bg-[#1c1c1c] hover:bg-white">0</button>
                            <button onClick={() => handleClick('.')} className="flex justify-center items-center rounded-full h-16 w-16 bg-[#1c1c1c] hover:bg-white">.</button>
                            <button onClick={() => handleClick('=')} className="flex justify-center items-center rounded-full h-16 w-16 bg-[#ff9500] hover:bg-[#ffb143]">=</button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}