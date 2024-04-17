#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        message: "Enter your first number", type: "number", name: "firstNumber"
    },
    {
        message: "Enter your second number", type: "number", name: "secondNumber"
    },
    {
        message: "Select any operator to perform the action", type: "list", name: "operator",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Modulus"
        ]
    }
]);
//conditional statement
if (answer.operator === "Addition") {
    console.log(chalk.bgBlackBright(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.bgRed(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.bgGreen(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Division") {
    console.log(chalk.bgBlue(answer.firstNumber / answer.secondNumber));
}
else if (answer.operator === "Modulus") {
    console.log(chalk.bgMagenta(answer.firstNumber % answer.secondNumber));
}
else {
    console.log("Please select valid operator");
}
