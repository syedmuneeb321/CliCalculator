#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
import figlet from "figlet";
console.log(figlet.textSync("CLI CALCULATOR"));
async function main() {
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "enter a first Number:"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter a second Number:"
        },
        {
            type: "list",
            name: "opt",
            message: "select operator",
            choices: ["add", "sub", "mul", "div"]
        },
    ]);
    if (!isNaN(answer.num1) && !isNaN(answer.num2)) {
        if (answer.opt === "add") {
            console.log(chalk.bgBlueBright(`${answer.num1}+${answer.num2}=${answer.num1 + answer.num2}`));
        }
        else if (answer.opt === "sub") {
            console.log(chalk.bgGray(`${answer.num1}-${answer.num2}=${answer.num1 - answer.num2}`));
        }
        else if (answer.opt === "mul") {
            console.log(chalk.bgRed(`${answer.num1}X${answer.num2}=${answer.num1 * answer.num2}`));
        }
        else if (answer.opt === "div") {
            console.log(chalk.bgYellowBright(`${answer.num1}/${answer.num2}=${answer.num1 / answer.num2}`));
        }
        ;
    }
    else {
        console.log("enter a righ value");
    }
    ;
}
;
let again = true;
while (again) {
    await main();
    let playagain = await inquirer.prompt([
        {
            type: "confirm",
            name: "repeat",
            message: "play again the culculaton:"
        }
    ]);
    again = playagain.repeat;
}
;
