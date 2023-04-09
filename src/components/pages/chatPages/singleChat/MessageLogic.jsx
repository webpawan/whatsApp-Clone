export const isSameSender = (messages, m, i, userId) => {
  return (
// message last bala hona chiya && last message me send ke id aur current user ke id dono ke equal na ho || jis user na send kiya bo undefine dho && last message jisna send kiya ha bo current user na ho
    i < messages.length - 1 && (messages[i + 1].sender._id !== m.sender._id ||
 messages[i + 1].sender._id === undefined) && messages[i].sender._id !== userId
  );
};

export const isLastMessage = (messages, i, userId) => {
// last message dhko && current message jisna send kiya ha bo login user na ho && 

  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId &&
    messages[messages.length - 1].sender._id
  );
};



export const isSameUser = (messages, m, i) => {
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};
