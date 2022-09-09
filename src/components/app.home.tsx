import styled from "@emotion/styled";
import {FC} from "react";
import {mapProps} from "../engine/redux";
import AppNav from "./app.navbar";
import AppTasks from "./app.tasks";
import {BounceLoader} from "react-spinners";

const AppHome: FC = () => {
  const ready = mapProps((state) => state.user.isAuthenticated);

  return (
    <Styled>
      <div className="navbar">
        <AppNav />
      </div>
      {/* Preferably we'd have the color in a theme */}
      <div className="tasks">{ready ? <AppTasks /> : <BounceLoader color={'#61dafb'}/>}</div>
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
  & > .tasks {
    grid-area: tasks;
    width: 70%;
    justify-self: center;
  }
`;
export default AppHome;
