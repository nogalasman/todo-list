import { AppBar, Button, Checkbox, List, ListItem, ListItemIcon, ListItemText, TextField, Toolbar } from '@material-ui/core';
import { useState } from 'react';
import ToDoItem from '../model/ToDoItem';
import './ToDoListPage.css';

function ToDoListPage() {

    const todos = [
        {id: 0, txt: 'Buy milk', completed: false},
        {id: 1, txt: 'Call mom', completed: false},
        {id: 2, txt: 'Email Shay', completed: false},
    ];

    const [todolistData, setTodolistData] = useState([]);
    const [filter, setFilter] = useState("all");

    function itemClicked(id) {
        const newList = [...todolistData];
        const item = newList.find(item => item.id === id);
        if (item) {
            item.completed = !item.completed;
        }
        setTodolistData(newList);
    }

    function addItem(event) {
        if ((event.keyCode === 13) && (event.target.value !== "")){
           
            let maxId = 0;
            if (todolistData.length > 0) {
                maxId = Math.max(...todolistData.map(o => o.id));
            }
            const txt = event.target.value;
            const newItem = new ToDoItem(maxId + 1,txt,false);
            const newList = [...todolistData];
            newList.push(newItem);
            event.target.value = "";
            setTodolistData(newList);
        }
    }

    const todoListView = () => {
        let list = [...todolistData];
        if (filter === "completed") {
            list = list.filter(item => item.completed);
        } else if (filter === "active") {
            list = list.filter(item => !item.completed);
        } 

        return list.map(item => 
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
            </ListItem>);
    };
    
    const getOpenTasksNum = todolistData.map(element => !element.completed).reduce((a, b) => a + b, 0);

    return (
        <div className="p-todolist">
            <h1>ToDos</h1>
            <form className="input-form" noValidate autoComplete="off"  onSubmit={e => { e.preventDefault(); }}>
                <TextField id="standard-basic" label="What's next?"  onKeyDown={(e) => addItem(e) } />
            </form>
            <List component="nav" aria-label="todolist items">
                { todoListView() }
            </List>
            <h4 className="items-left-txt">{ getOpenTasksNum } items left</h4>
            <AppBar position="static">
                <Toolbar className="filter-btns-container">
                    <Button variant="contained" onClick={() => setFilter("all")} disabled={filter === "all"}>All</Button>
                    <Button variant="contained" onClick={() => setFilter("active")} disabled={filter === "active"}>Active</Button>
                    <Button variant="contained" onClick={() => setFilter("completed")} disabled={filter === "completed"}>Completed</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default ToDoListPage;