import React from 'react';
import getTimePassed from './getTimePassed';
import style from './note.module.css';
import transferNote from './transferNote';

class Note extends React.Component {
  transfer = (e, state) => {
    transferNote(e, state, this.props.login);
    this.props.setNewNotesState(state)
  }

  timePassed = () => {
    return getTimePassed(this.props.name, this.props.notesState, this.props.login)
  }

  render() {
    return (
      <div className={style.note}>
        <div className={style.nameAndTime}>
          <span> {this.props.name} </span>
          <span>{this.props.timeCreate}</span>
        </div>
        <div className={style.description}>{this.props.description}</div>
        <div className={style.timePassed} value={this.props.notesState}>{this.timePassed()}</div>
        {this.props.notesState === 'during' &&
          <div className={style.btns}>
            <button onClick={(e) => { this.transfer(e, 'completed') }}>Done</button>
            <button onClick={(e) => { this.transfer(e, 'failed') }}>Fail</button>
          </div>
        }
      </div>
    )
  }
};

export default Note;