import styled from "@emotion/styled";
import {FC} from "react";
import {mapProps} from "../engine/redux";
import AppNav from "./app.navbar";
import {BounceLoader} from "react-spinners";
import AddTaskForm from "./app.addTask.form";

const AddTask: FC = () => {
  const ready = mapProps((state) => state.user.isAuthenticated);

  return (
    <Styled>
      {/* Preferably placed in a layout */}
      <div className="navbar">
        <AppNav title={'ADD TASK'}/>
      </div>
      {/* Preferably the router would handle auth */}
      <div className="addTask">{ready ? <AddTaskForm /> : <BounceLoader color={'#61dafb'}/>}</div>
    </Styled>
  );
};

const Styled = styled.div`
  height: 100%;
  display: grid;
  grid-template:
    "navbar" 80px
    "tasks " 1fr
    / 1fr;
  & > .navbar {
    grid-area: navbar;
    width: 70%;
    justify-self: center;
  }
  & > .addTask {
    grid-area: tasks;
    width: 70%;
    justify-self: center;
  }
`;
export default AddTask;
