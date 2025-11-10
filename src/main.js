export function createTodo(title, description, priority, dueDate, completed, id) {
    return {
        title,
        description,
        priority,
        dueDate,
        completed,
        id
    }
}

export const todoManager = () => {
    const todos = [];

    function addTodo(todo){
        todos.push(todo);
    }

    function markCompleted(id){
        todos.forEach(todo => {
            if (todo.id === id){
                todo.completed = true;
            }
        });
    }

    function changePriority(id, newPriority){
        todos.forEach(todo => {
            if (todo.id === id){
                todo.priority = newPriority;
            };
        });
    }

    function deleteTodo(id){
        const index = todos.findIndex(todo => todo.id === id);
        if (index == -1){
            return;
        }

        todos.splice(index, 1);
        
    }

    function getTodos(){
        return [...todos];
    }

    return {addTodo, changePriority, markCompleted, deleteTodo, getTodos};
}