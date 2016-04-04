import React from 'react';

export default ({task}) => <div>{task}</div>;

export default class Note extends React.Component {
  state = {
    editing: false
  }

  renderEdit = () => {
    return (
      <input
        type="text"
        ref={(e) => e ? e.selectionStart = this.props.task.length : null}
        autoFocus={true}
        defaultValue={this.props.task}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
      />
    );
  }

  renderNote = () => {
    // If the user clicks a normal note, trigger editing logic.
    const onDelete = this.props.onDelete;

    return (
      <div onClick={this.edit}>
        <span className="task">{this.props.task}</span>
        {onDelete ? this.renderDelete() : null}
      </div>
    );
  }

  renderDelete = () => {
    return (
      <button
        className="delete-note"
        onClick={this.props.onDelete}
      >x</button>
    );
  }

  edit = () => {
    // Enter edit mode
    this.setState({
      editing: true
    });
  }

  checkEnter = (e) => {
    // If user clicks enter exit editing mode
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  finishEdit = (e) => {
    const value = e.target.value;

    if (this.props.onEdit) {
      this.props.onEdit(value);
    }

    this.setState({
      editing: false
    });
  }

  render () {
    if (this.state.editing) {
      return this.renderEdit();
    }

    return this.renderNote();
  }
}
