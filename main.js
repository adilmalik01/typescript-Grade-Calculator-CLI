import inquirer from 'inquirer';
import chalk from 'chalk';
const prompt = await inquirer.prompt([
    {
        type: "number",
        name: "englishMarks",
        message: "Enter your English marks ?"
    },
    {
        type: "number",
        name: "mathMarks",
        message: "Enter your Math marks ?"
    },
    {
        type: "number",
        name: "UrduMarks",
        message: "Enter your Urdu marks ?"
    },
    {
        type: "number",
        name: "IslamiatMarks",
        message: "Enter your Islamiat marks ?"
    },
    {
        type: "number",
        name: "SSTMarks",
        message: "Enter your Socail Studies marks ?"
    }
]);
if (prompt.mathMarks < 0 || prompt.mathMarks > 100 ||
    prompt.englishMarks < 0 || prompt.englishMarks > 100 ||
    prompt.SSTMarks < 0 || prompt.SSTMarks > 100 ||
    prompt.IslamiatMarks < 0 || prompt.IslamiatMarks > 100 ||
    prompt.UrduMarks < 0 || prompt.UrduMarks > 100) {
    console.log(chalk.red.bold.bgCyan("Please Enter greter then 0 and less then 100 numbers"));
}
else {
    let obtainMarks = prompt.mathMarks + prompt.englishMarks + prompt.UrduMarks + prompt.SSTMarks + prompt.IslamiatMarks;
    let totalMarks = 500;
    let percentage = obtainMarks / totalMarks * 100;
    console.log(chalk.blue.bold.italic("\nTotal Marks :" + totalMarks));
    console.log(chalk.green.bold.italic("Obtain Marks :" + obtainMarks));
    if (percentage >= 90 && percentage <= 100) {
        console.log(chalk.green.bold.italic(`percentage :${percentage.toFixed(2)}% \nGrade : A1`));
    }
    else if (percentage >= 80 && percentage <= 90) {
        console.log(chalk.green.bold.italic(`percentage :${percentage.toFixed(2)}% \nGrade : A+`));
    }
    else if (percentage >= 70 && percentage <= 80) {
        console.log(chalk.green.bold.italic(`percentage :${percentage.toFixed(2)}% \nGrade : A`));
    }
    else if (percentage >= 60 && percentage <= 70) {
        console.log(chalk.green.bold.italic(`percentage :${percentage.toFixed(2)}% \nGrade :  B`));
    }
    else if (percentage >= 50 && percentage <= 60) {
        console.log(chalk.green.bold.italic(`percentage :${percentage.toFixed(2)}%  \nGrade :  C`));
    }
    else if (percentage >= 40 && percentage <= 50) {
        console.log(chalk.red.bold.italic(`percentage :${percentage.toFixed(2)}%  \nGrade :  D`));
    }
    else {
        console.log(chalk.bgRed(`percentage :${percentage.toFixed(2)}%  YOU ARE FAIL`));
    }
}
