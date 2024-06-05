import React, {/*  useReducer, */ useState} from 'react'




const TestComp = () => {

  const reducer = (state,action)=>{ 

    switch(action.type){
      case 'INCREASE' : return state + action.data;
      case 'DECREASE' : return state - action.data;
      case 'ALERT' : return (alert(action.date), (state + action.data)*2)
      default : return state
    }
  }

  //count는 변수, dispatch는 촉발함수 , reducer는 생성자 상태변화함수 0은 초기값
 /*  const [count, dispatch] = useReducer(reducer,0); */

  /* const [count, setCount] = useState(0);
  const onIncrease = ()=>{
    setCount(count +1)
  }
  const onDecrease =()=>{
    setCount(count-1)
  }
  const onAlert =()=>{
    alert('action.data : 2')
    setCount(count + count *2)
  }
 */
  return (
    <div>
      <h4>테스트 컴포넌트</h4>  
      <div>
        <strong style={{fontSize:'30px'}}>{count}</strong>
        <div>
          <button onClick={(()=>dispatch({type : 'INCREASE', data : 1}))}>+1</button>
          <button onClick={()=>dispatch({type : 'DECREASE', data: 1})}>-1</button>
          <button onClick={()=>dispatch({type : 'ALERT', data: 1})}>ALERT</button>
{/* 
          <button onClick={onIncrease}>+1</button>
          <button onClick={onDecrease}>-1</button>
          <button onClick={onAlert}>ALERT</button> */}
        </div>
      </div>
    </div>
  )
}

export default TestComp;