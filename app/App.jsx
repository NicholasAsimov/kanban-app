import React from 'react';
import Note from './Note.jsx';
import uuid from 'node-uuid';

export default class App extends React.Component {
  state = {
    notes: [
      {
        id: uuid.v4(),
        task: 'Learn Webpack'
      },
      {
        id: uuid.v4(),
        task: 'Learn React'
      },
      {
        id: uuid.v4(),
        task: 'Do laundry'
      }
    ]
  }

  addNote = () => {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id: uuid.v4(),
          task: 'New Task'
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <ul>
          {this.state.notes.map(note => <li key={note.id}>{note.task}</li>)}
        </ul>
      </div>
    );
  }
}
