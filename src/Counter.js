import {React,useState,useReducer} from 'react';
// useState() Hooks 예제
// 사용선언
// const [상태명,Set상태명] = useState([초기값]); // set상태명 --Setter함수
// 상태는 Setter함수로만 변경 가능
const calculate = (state,action) => {
// 틀만 만들어놓고 다른바깥에서 연산을 하는게 더 깔끔해지고 보기가 좋아진다.
  switch(action.type){
    case "더하기": return { value: state.value + 1};
    case "빼기": return { value: state.value - 1};
    default: return state;
  }

};

const Counter = () => {
  const [cnt,setCntAction] = useReducer(calculate,{value:0});
    return (
        <>
          <p>현 카운터의 값: <b>{ cnt.value }</b></p>
            <button 
            onClick={(e)=>{
              setCntAction({type:"더하기"})
              }}
              >
                +1
                </button>
            <button 
            onClick={(e)=>{
              setCntAction({type:"빼기"})
              }}
              >
                -1
            </button>
           
        </>
    );
};

export default Counter;