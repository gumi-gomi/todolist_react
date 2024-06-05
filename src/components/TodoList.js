import React, { useMemo, useState, useContext } from 'react';
import TodoItem from './TodoItem';
//기능을 가지고올떄는 { }안에 넣어줘야한다. -->객체구조분해
import { TodoStateContext } from '../App';


const TodoList = () => {
  
  const todo = useContext(TodoStateContext);


  const [search, setSearch] = useState('');
  const onChangeSearch = (event) => {
    setSearch(event.target.value)
  };





  const getSearchResult = () => {
    return search === '' ?
      todo : todo.filter(list => 
        list.content.toLowerCase().includes(search.toLowerCase()))
  };


   // use memo 사용법
  // const value = useMemo(callback, deps)
  // analyzeToDo = useMemo(()=>{},[])

  const analyzeTodo = useMemo(()=>{
    console.log('analyzeToDo 함수 호출');
    const totalCount = todo.length;
    const doneCount = todo.filter(list => list.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount
    }
  },[todo]);



  const{totalCount, doneCount, notDoneCount} = analyzeTodo;

  return (
    <div className='TodoList'>
      <h4>Todo List 📌</h4>
      <div className='listCount'>
        <p>총개수 : {totalCount}</p>
        <p>완료된 할 일 : {doneCount}</p>
        <p>완료하지 못한 일 : {notDoneCount}</p>
      </div>
      <input 
        value={search}
        onChange={onChangeSearch}
        className='searchbar' 
        placeholder='검색어를 입력해 주세요!' 
      />
      <div className='list_wrapper'>
        { 
          getSearchResult()
          .map(list => {
            return <TodoItem 
              key={list.id} {...list} 
            />
          })
        }
      </div>
    </div>
  )
}

export default TodoList;