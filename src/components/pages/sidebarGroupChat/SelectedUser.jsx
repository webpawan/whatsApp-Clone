import React from 'react'

const SelectedUser = ({ user, handleFunction }) => {

  return (
    <>
      <div className="flex items-center m-2">
        <img src={user.pic} className="bg-white h-6 rounded-full" alt="" />
        <p className="text-xs mx-2">{user.name}</p>
        <span className="" onClick={ handleFunction}>
          <i className="fa-solid fa-xmark text-xs"></i>
          
        </span>
      </div>
    </>
  );
};

export default SelectedUser