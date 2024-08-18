import React, { useState } from "react";
import TodoInput from "../component/TodoInput";
import TodoOutput from "../component/TodoOutput";
export default ({ todoListArr, noCnt }) => {
  const [TodoListArr, setTodoList] = React.useState(todoListArr);
  const [NoCnt, setNoCnt] = React.useState(noCnt);
  const [EmendItem, setEmendItem] = React.useState("");
  const [EmendValue, setEmendValue] = React.useState("");

  function appendItem(title) {
    // setTodoList 함수를 이용해서 데이터 갱신
    const newItem = { no: noCnt, title: title, done: false };
    setNoCnt(NoCnt + 1);
    setTodoList([...TodoListArr, newItem]);
    console.log("저장");
  }

  //todo no 들고 왔어 필터로 no만 걸러낸뒤 저장
  function deleteItem(e) {
    console.log(e);
    setTodoList(TodoListArr.filter((todo) => todo.no !== e));
  }

  //수정할 todo no 불러 왔어 State에 저장후
  //emendText함수에서 todoListArr인덱스로 사용됨
  function emendItemNo(no, title) {
    setEmendValue(title);
    let idx = TodoListArr.findIndex((todo) => {
      return todo.no === no;
    });
    setEmendItem(idx);
  }

  function emendText(title) {
    //새로 배열 만들고 저장하면 바로 변경됨
    let newArr = [...TodoListArr];
    newArr[EmendItem].title = title;
    setTodoList(newArr);
    setEmendValue("");
  }

  //체크 박스 값 변경
  function changeCkBox(no) {
    let idx = TodoListArr.findIndex((todo) => {
      return todo.no === no;
    });
    let newdone = [...TodoListArr];
    newdone[idx].done = !newdone[idx].done;
    setTodoList(newdone);
  }
  return (
    <section id="main">
      <div className="container">
        <div id="content">
          <TodoInput
            appendItem={appendItem}
            emendText={emendText}
            EmendValue={EmendValue}
          />
          <TodoOutput
            TodoListArr={TodoListArr}
            deleteItem={deleteItem}
            emendItemNo={emendItemNo}
            changeCkBox={changeCkBox}
          />
        </div>
      </div>
    </section>
  );
};
