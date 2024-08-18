import React from "react";
import $ from "jquery";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  let appendItem = props.appendItem;
  let emendText = props.emendText;
  let EmendValue = props.EmendValue;

  console.log(EmendValue);
  // 구조분해 할당 기호: 배열은 [], 객체는 {}
  $("#content").find("input").val(EmendValue);

  //const [inputValue, setInputValue] = React.useState(EmendValue);
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="할 일 추가" />
      <div className="input-group-append">
        <button
          onClick={() => {
            appendItem($("#content").find("input").val());
            $("#content").find("input").val("");
            //setInputValue("");
          }}
          className="btn btn-primary"
          type="button"
        >
          OK
        </button>
        <button
          //버튼 누르면 todo title 변경하는 함수에 inputValue전달
          onClick={() => {
            emendText($("#content").find("input").val());
          }}
          className="btn btn-primary"
          type="button"
        >
          emend
        </button>
        <button className="btn btn-danger" type="button">
          Cancel
        </button>
      </div>
    </div>
  );
};
