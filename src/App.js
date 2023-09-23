import './App.css';
import SideBar from './Component/SideBar';
import ReaDME from './Component/ReaDME';
import { getData } from '../src/Firebase/data';
import { useState } from 'react';
// import { nanoid } from 'nanoid';

function App() {
  const [selectedNote,SetSelectedNote]=useState(null);
  const [notesData,setNotesData]=useState(getData())
  const updateSelectedNote=(selectedItem)=>{
    if(selectedItem){ 
      const selected=getData().find((item)=> item.id===selectedItem.id)
      SetSelectedNote(selected);
      return;
    }
    SetSelectedNote(null)
  }
  return (
    <div className="App flex-row">
      <SideBar updateSelectedNote={updateSelectedNote} setNotesData={setNotesData}  notesData={notesData}/>
      <ReaDME item={selectedNote} setNotesData={setNotesData}/>
    </div>
  );
}

export default App;
