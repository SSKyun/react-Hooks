import React, { useEffect, useState, useReducer } from 'react';
import useInputs from './useInputs';

const uInfoUp = (state,action)=>{
  return {
    ...state,
    [action.name]:action.value, //action === e.target, 
  }
};

const Info = () => {
  const [name,setName] = useState("");
  const [nickname,setNickName] = useState("");
  const [rObj,setRObjAction] = useReducer(uInfoUp,{
    name1:"",
    nickname1:"",
  });
  const [myHoosStates,onChangeMyHook] = useInputs({
    name2:"",
    nickname2:"",
  });
  const onChangeName = (e)=>{
    setName(e.target.value);
  };
  const onChangeNickName = (e) =>{
    setNickName(e.target.value);
  };
  const onChange = (e) => {
    setRObjAction(e.target);
  };
  const {name1,nickname1} = rObj;
  const {name2,nickname2} = rObj
  useEffect(()=>{
    console.log("렌더링 완료");
    console.log({name,nickname});
    return (()=>{
      console.log("언마운트");
      console.log({name,nickname});
    });
  },[]);
  

    return (
        <>
        <div>
          <input type="text" name="name" value={name} onChange={onChangeName} />
          <input type="text" name="nickname" value={nickname} onChange={onChangeNickName}/>
          <div><b>이름:</b>{name}</div>
          <div><b>닉네임:</b>{nickname}</div>

          <input type="text" name="name1" value={name1} onChange={onChange} />
          <input type="text" name="nickname1" value={nickname1} onChange={onChange}/>
          </div>
          <div><b>이름:</b>{name1}</div>
          <div><b>닉네임:</b>{nickname1}</div>

          <input type="text" name="name2" value={name2} onChange={onChangeMyHook} />
          <input type="text" name="nickname2" value={nickname2} onChange={onChangeMyHook}/>

        </>
    );
};

export default Info;