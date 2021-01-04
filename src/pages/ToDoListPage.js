import { Checkbox, List, ListItem, ListItemIcon, ListItemText, TextField } from '@material-ui/core';
import { useState } from 'react';
import './ToDoListPage.css';

function ToDoListPage() {

    const todos = [
        {id: 0, txt: 'Buy milk', completed: false},
        {id: 1, txt: 'Call mom', completed: false},
        {id: 2, txt: 'Email Shay', completed: false},
    ];

    const [todolistData, setTodolistData] = useState(todos);

    function itemClicked(id) {
        const newList = [...todolistData];
        const item = newList.find(item => item.id === id);
        if (item) {
            item.completed = !item.completed;
        }
        setTodolistData(newList);
    }

    const todoListView = todolistData.map(item => 
        <ListItem dense button key={item.id} onClick={() => itemClicked(item.id)}>
            <ListItemIcon>
                <Checkbox
                edge="start"
                checked={item.completed}
                tabIndex={-1}
                disableRipple
                />
            </ListItemIcon>
            <ListItemText className={ item.completed ? "checked-txt" : ""} primary={item.txt} key={item.id} />
        </ListItem>
    );

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