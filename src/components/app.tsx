import styled from "@emotion/styled";
import {FC} from "react";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from "../engine/redux";
import AppHome from "./app.home";
import AddTask from "./app.addTask";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Styled>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppHome />} />
            <Route path="/task" element={<AddTask />} />
          </Routes>
        </BrowserRouter>
      </Styled>
    </Provider>
  );
};

const Styled = styled.div`
  height: 100%;
`;

export default App;
