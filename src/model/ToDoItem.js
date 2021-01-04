import './ToDoItem.css'


class ToDoItem {

    constructor(id, txt, completed) {
        this.id = id;
        this.txt = txt;
        this.competed = completed;
    }
}

export default ToDoItem;