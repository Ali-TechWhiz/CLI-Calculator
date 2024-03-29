#! /user/bin/env node
import inquirer from 'inquirer'
let Input=await inquirer.prompt([
{
type:"list",
name:"Option",
message:"please enter one option",
choices:["addition", "multiplication", "subtraction", "division"]

},
{
    type:"number",
    name:"n1",
    message:"please enter first number",
    },
    {
        type:"number",
        name:"n2",
        message:"please enter second number",
        }
    ]
)
let selection=Input.Option
let n1=Input.n1
let n2=Input.n2
let num
if(selection=="addition")
{
num=n1+n2
}
else if(selection=="subtraction")
{
num=n1-n2
}
else if(selection=="multiplication")
{
num=n1*n2
}
else if(selection=="division")
{
num=n1/n2
}
console.log('the answer for', Input.Option, `is ${num}`)
