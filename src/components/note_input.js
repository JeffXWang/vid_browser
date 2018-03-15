import React, {Component} from 'react';

class NoteInput extends Component{
  constructor(props){
    super (props);
    this.state={note:'init value'}
  }
  render(){
    return (
      <div>
        <input
          id = 'newNote'
          value = {this.state.value}
          onChange={event=>this.onInputChange(event.target.value)}
          onKeyPress={event=>this.onEnter(event)}
        />
      </div>
    )
  }


  //附件
  onInputChange(note){
    this.setState({note})
    //别的动作
  }

  onEnter(event){
    if (event.key ==='Enter'){
      this.props.addNote(event.target.value);
      event.target.value = '';
    }
    // if (event.key ===']'){
    //
    // }

  }
}

export default NoteInput;
