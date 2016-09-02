import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class App extends Component {

    onKeyDown = (e) => {
      if(e.keyCode === 13) {
        this.props.store.addTodo({
          title: e.currentTarget.value
        });

        e.currentTarget.value = '';
      }
    }

    toggleCompleted = (todo) => {
      todo.toggleCompleted();
    }

    render() {
        return (
          <div>
            <input type="text" onKeyDown={this.onKeyDown}/>
            <ul>
              {this.props.store.todos.map(todo => (
                <li key={todo.id}>
                  <input type="checkbox" checked={todo.completed} onChange={this.toggleCompleted.bind(this, todo)}/>
                  <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.title}
                  </span>
                </li>
              ))}
            </ul>
            <div>completed: {this.props.store.totalCompleted}</div>
          </div>
        );
    }
}

export default App;
