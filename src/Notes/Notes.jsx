import React from 'react';
import style from './notes.module.css';
import { Collapse, Form, Button, Input } from 'antd';
import getNotes from './getNotes';
import setNotes, { testNote } from './setNotes';
import Note from './Note/Note';
const { Panel } = Collapse;
const { TextArea } = Input;

class Notes extends React.Component {
  state = {
    notesState: 'during',
    notification: '',
    rerenderMinute: 0
  }

  componentDidMount() {
    let timer = setInterval(() => {
      this.setState({
        rerenderMinute: ++this.state.rerenderMinute
      })
    }, 30000);
    window.timer = timer;
  }

  componentWillUnmount() {
    window.clearInterval(window.timer)
  }

  setNewNotesState = (newState) => {
    this.setState({ notesState: newState })
  }

  addNote = (values) => {
    let resultTest = testNote(values, this.state.notesState, this.props.login);
    if (resultTest) {
      this.setState({ notification: resultTest })
    } else {
      setNotes(values, this.state.notesState, this.props.login);
      this.setState({ notification: '' })
    }
  }

  getButtonName = (state) => {
    return state === this.state.notesState ? 'activeBtn' : 'notActivBtn'
  }

  render() {
    let arr = getNotes(this.state.notesState, this.props.login);

    return (
      <div className={style.commonBlock}>
        <div className={style.btns}>
          <button name={this.getButtonName('during')} onClick={() => this.setState({ notesState: 'during' })}>
            During
          </button>
          <button name={this.getButtonName('completed')} onClick={() => this.setState({ notesState: 'completed' })}>
            Completed
          </button>
          <button name={this.getButtonName('failed')} onClick={() => this.setState({ notesState: 'failed' })}>
            Failed
          </button>
        </div>

        <div>
          {(this.state.notesState === 'during') && <Collapse className={style.addNotes}>
            <Panel header="Add note" key="1">
              {this.state.notification &&
                <div className={style.notification}>{this.state.notification}</div>
              }
              <Form onFinish={this.addNote}>
                <Form.Item name='name'>
                  <Input placeholder='note name' />
                </Form.Item>
                <Form.Item name='description' initialValue=''>
                  <TextArea allowClear='true' placeholder='Description' maxLength='100' />
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit">add</Button>
                </Form.Item>
              </Form>
            </Panel>
          </Collapse>
          }
        </div>

        <div className={style.notes}>
          <div>{arr.map(a => {
            return <Note name={a.name} description={a.description} key={a.name} notesState={this.state.notesState}
              timeCreate={a.timeCreate && a.timeCreate.common} login={this.props.login} setNewNotesState={this.setNewNotesState} />
          })}</div>
        </div>
      </div>
    )
  }
};

export default Notes;