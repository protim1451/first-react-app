// export default function Todo({task, isDone}){
    
//     return(
//         <li>Task: {task}</li>
//     )
// }
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }
// export default function Todo({task, isDone}){
//     return(
//         <li>{isDone ? '*': '#'} : {task}</li>
//     )
// }
// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }
// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone || ': Do it '}</li>
//     )
// }

export default function Todo({task, isDone}){
    let listItem;
    if(isDone){
        listItem = <li>Finished: {task}</li>
    }
    else{
        listItem = <li>Work on: {task}</li>
    }

    return listItem;
}