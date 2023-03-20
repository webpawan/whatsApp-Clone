
import { useSelector } from 'react-redux';
import { getCount } from '../../../assets/logic/features/toggleSlice';


const UserListItem = ({ user, handleFunction }) => {
  const count = useSelector(getCount);
 
  return (
    <>
      <div className="flex flex-col w-full mx-auto  hover:bg-slate-800 hover:cursor-pointer active:cursor-progress focus:cursor-progress">
        <div
          className=" my-2 p-1 px-2   flex items-center h-10"
          onClick={handleFunction}
        >
          <div></div>
          <img
            src={user.pic}
            className="user h-[40px] w-[50px] bg-slate-500 rounded-full"
            alt=""
          />
          <div className="flex flex-col ml-5  text-slate-200 w-full border-slate-400">
            <p className="text-lg  ">{user.name} </p>
            <p className="text-xs text-slate-400">{user.email}</p>
          </div>
        </div>
        <hr className="h-px w-5/6 ml-auto bg-slate-800  border-0" />
      </div>
    </>
  );
};

export default UserListItem