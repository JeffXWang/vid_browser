import React from "react";

const VideoList = props => {
  const videoItems = props.notes.map(item => {
    return (
      <li>
        {item}
      </li>
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;



// import React,{Component} from 'react';
// const NoteDisplay = (notes) =>{
//   console.log(notes)
//   render(
//     return(
//       {notes}
//     )
//   )
// };
//
// export default NoteDisplay;
