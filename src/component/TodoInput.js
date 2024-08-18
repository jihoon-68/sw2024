import React from "react";
import $ from "jquery";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  let appendItem = props.appendItem;
  let emendText = props.emendText;
  let EmendValue = props.EmendValue;

  console.log(EmendValue);

  //밑에 표에서 수정 버튼 누르면 그내용 들고 입력창 값에 넣기
  $("#content").find("input").val(EmendValue);

// React.useState(EmendValue) 여기에 초깃값으로 EmendValue이 걸을 넣어는 고
// inputValue 불러왔는데 null 값 나옴 그냥 콘솔에 EmendValue 이거 출력하면 값 잘 나옴
// 그래서 그냥 제이쿼리로 사용해서 값 들고 와서 사용함
// 그래도 여기 나중에 useState로 변경할 예정

  //const [inputValue, setInputValue] = React.useState(EmendValue);
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="할 일 추가" />
      <div className="input-group-append">
        <button
          onClick={() => {
            appendItem($("#content").find("input").val());
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
