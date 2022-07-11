import React, {useState,useMemo,useCallback,useRef} from 'react';

const calculateAvg = (arr) => {
    if(arr.length === 0) return 0;
    const sum = arr.reduce((acc,cur)=>{
      return acc + cur; // acc 누적값, cur : 현재값
    });
    return sum / arr.length;
    
};
//평균값 계산 이벤트
const Average = () => {
  const [numArr,setNumArr] = useState([]);
  const [num,setNum] = useState('');
  const inputTag = useRef(null);

  const onChange = useCallback((e) => {
    setNum(e.target.value);
  },[]);//컴포넌트가 처음 렌더링될 때 이벤트핸들러가 생성

  // 입력 이벤트
  const onInsert = useCallback((e) => {
    const newNumArr = numArr.concat(parseInt(num));
    setNumArr(newNumArr);
    setNum("");
    inputTag.current.focus();
  },[num,numArr]);

  const avg = useMemo(()=>{ //numArr 값이 바뀔때만 리렌더링 해라
    return calculateAvg(numArr);
  },[numArr]);
  // Enter 입력
  const onKeyPress = (e) =>{
    if(e.key === 'Enter'){
      onInsert();
    }
  }
  return (
    <>
      <input 
      onKeyPress={onKeyPress} 
      type="text" 
      value = {num} 
      onChange={onChange}
      ref={inputTag}
      />
      <button onClick={onInsert}>등록</button>
      <ul>
        {numArr.map((val,idx)=> {
          return <li key={idx}>{val}</li>
        })}
      </ul>
      <div>
        {/* <b>평균값 : </b>{calculateAvg(numArr)} */}
        <b>평균값: </b>{avg}
      </div>
    </>
  );
};

export default Average;