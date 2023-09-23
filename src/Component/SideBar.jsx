import React, { useEffect, useState } from 'react';
import deleteBtn from '../Assets/delete.png';
import { addNewNote,getData,deleteNote } from '../Firebase/data';
import { nanoid } from 'nanoid';

const SideBar = (props) => {
  const { updateSelectedNote,notesData,setNotesData } = props;
    
    

  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector('.delete-icon').style.display = 'block';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector('.delete-icon').style.display = 'none';
  };
    const handleOnClick=(item)=>{
        deleteNote(item.id);
        setNotesData(getData())
    }
    const handleNewItemOnClick=()=>{
        let id=nanoid();
        addNewNote(id)
        setNotesData(getData())
    }
  return (
    <div>
      <div className='slideBar flex-row centerItem'>
        <h1 className='heading'>Notes</h1>
        <button className='add-btn' onClick={handleNewItemOnClick}>+</button>
      </div>
      <div className='noteLst'>
        {notesData &&
          notesData.length > 0 &&
          notesData.map((item) => (
            <div
              className='noteItems flex-row centerItem'
              key={item.id}
              onClick={() => updateSelectedNote(item)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {item.body.split('\n')[0].length > 15
                ? item.body.split('\n')[0].slice(0, 15) + '....'
                : item.body.split('\n')[0]}
              <img
                src={deleteBtn}
                className='delete-icon'
                onClick={()=>{handleOnClick(item)}}
                style={{ position: 'inherit', right: '10px', width: '20px', height: '20px', display: 'none' }}
                alt=''
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SideBar;
