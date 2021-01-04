import { List, ListItem, ListItemText, TextField } from '@material-ui/core';
import './ToDoListPage.css';

function ToDoListPage() {

    const todos = [
        {id: 0, txt: 'Buy milk', completed: false},
        {id: 1, txt: 'Call mom', completed: false},
        {id: 2, txt: 'Email Shay', completed: false},
    ];

    const todoListView = todos.map(item => 
        <ListItem button>
            <ListItemText primary={item.txt} key={item.id} />
        </ListItem>);

    return (
        <div className="p-todolist">
            <h1>ToDos</h1>
            <form className="input-form" noValidate autoComplete="off">
                <TextField id="standard-basic" label="What's next?" />
            </form>
            <List component="nav" aria-label="todolist items">
                { todoListView }
            </List>
        </div>
    )
}

export default ToDoListPage;