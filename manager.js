let tasks = ["Prepare lunch", "Learn Sass", "Learn Bootstraps"];
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const manageTasks = () => {
    console.log('Welcome to your task manager, Press:');
    console.log('1. to see all your tasks');
    console.log('2. to add a task');
    console.log('3. to delete a task');
    console.log('4. to mark a task as done');
    console.log('5. to Exit the task manager');

    rl.question('',function(answer){
        switch (answer) {
            case "1":
                console.log(tasks);
                manageTasks();
                break;
            case "2":
                rl.question('Enter a new task : ',function(task) {
                    tasks.push(task);
                    console.log(tasks); 
                    manageTasks();
                            
                })
                break;
            case "3":
                rl.question('Enter the number of the task you want to remove : ',function(removedTask) {
                    tasks.splice((parseInt(removedTask) - 1),1);
                    console.log(tasks);
                    manageTasks();
                            
                })
                break;
            case "4":
                rl.question('Enter the number of the done task: ',function(numOfTask){
                    tasks[parseInt(numOfTask)-1] += " : Done";
                    console.log(tasks);
                    manageTasks();
                });  
                break;
            case "5":  
                rl.close();
                break;
            default:
                console.log('You entered a wrong number, please try again!');
                manageTasks();

        }
    })
}
manageTasks();