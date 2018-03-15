import React, {Component} from 'react';
import NoteInput from './note_input';
import NoteDisplay from './nd';

class NoteSection extends Component {
  constructor(props){
    super(props);
    this.state={notes:[]}
  }
  render(){

    //这个该在这里吗？
    const addNote=(note)=>{
      console.log(this)
      let allNotes=this.state.notes.concat(note)
      this.setState({notes:allNotes})
    }


    return(
      <div>
        this is notes section
        <NoteDisplay notes={this.state.notes} />
        <NoteInput addNote={addNote} />
      </div>
    )
  }
}
export default NoteSection;
