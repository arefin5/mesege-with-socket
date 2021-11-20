const users=[]
const addUser=({name,room,id})=>{
  name=name.trim().toLowerCase();
  room=room.trim().toLowerCase();
 const existingUser=users.find(user=>user.name===name && user.room===room);
//   
    
if(existingUser){
return { error:"user alreday exist "}
}
const user={id,name,room}
users.push(user)
return user ;
}
const removeUser=()=>{
  const index=users.findIndex(user=>user.id===id)
  if(index !==-1){
    users.splice(index,1)[0]
  }
}

module.exports = {
	addUser,
	removeUser
};