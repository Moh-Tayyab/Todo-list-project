import inquirer from "inquirer";
let todoApp = [];
async function todo() {
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'select',
        message: 'Please select an option? ',
        choices: ['Add Tasks', 'View Tasks', 'Remove Tasks', 'Exit']
    });
    switch (answer.select) {
        case 'Add Tasks':
            addTask();
            break;
        case 'View Tasks':
            viewTask();
            break;
        case 'Remove Tasks':
            removeTask();
            break;
        default:
            "Exit";
            console.log('Good Byee!!');
            break;
    }
}
async function addTask() {
    const answer = await inquirer.prompt({
        type: 'input',
        name: 'Add',
        message: 'What would you want Add in TODO: '
    });
    let task = answer.Add;
    todoApp.push(task);
    console.log("Task Successfully Added");
    todo();
}
function viewTask() {
    if (todoApp.length === 0) {
        console.log('Not Found');
    }
    else {
        console.log(todoApp);
    }
    todo();
}
async function removeTask() {
    viewTask();
    const answer = await inquirer.prompt({
        message: "Enter the task number you would like to remove: ",
        type: "input",
        name: "Remove",
        validate: function (value) {
            if (value > 0 && value <= todoApp.length) {
                return true;
            }
            else {
                return 'Please enter a valid task number';
            }
        }
    });
    todoApp.splice(answer.Remove - 1, 1);
    console.log("Task Successfully Removed");
    todo();
}
todo();
