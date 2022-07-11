import React, {useEffect, useRef,useState} from 'react';

const RefTest = () => {
  const [push,setPush] = useState(0);
  const id = useRef(1);
  const setId = (num) => {
    id.current = num;
  }
  const printId = ()=>{
    console.log(id.current);
  };

  const onChange = (e) => {
    setPush(e.target.value);
  }
  useEffect(()=>{
    console.log(push);
  },[onChange]);

  const onClick = (e) => {
    if(e.key === 'Enter'){
      onChange();
    }
    
  }
  return (
    <div>
      <input ref={id} placeholder = "입력" onChange={onChange}/>
      <button onClick={onClick}>추가</button>
    </div>
  );
};

export default RefTest;