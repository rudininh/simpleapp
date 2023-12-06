const TodoItem = ({todo}) => {
    return ( 
        <li>{todo.title} <span class="close">x</span></li>
    );
}
 
export default TodoItem;