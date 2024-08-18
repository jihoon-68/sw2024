import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Nav from "./page/nav";
import Home from "./page/home";
import LeftSidebar from "./page/Left-sidebar";
import NoSidebar from "./page/No-sideber";
import RightSidebar from "./page/Right-sidebar";

function App() {
  const [todoListArr, setTodoList] = React.useState([
    { no: 101, title: "운동하기", done: false },
    { no: 102, title: "운동하기2", done: false },
    { no: 103, title: "운동하기3", done: false },
  ]);
  const [noCnt, setNoCnt] = React.useState(104);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="/LeftSidebar" element={<LeftSidebar />} />
            <Route
              path="/NoSidebar"
              element={<NoSidebar todoListArr={todoListArr} noCnt={noCnt} />}
            />
            <Route path="/RightSidebar" element={<RightSidebar />} />
          </Route>
        </Routes>
        <Outlet />
      </BrowserRouter>
    </>
  );
}

export default App;
