import styled from "@emotion/styled";
import {FC, useEffect} from "react";
import {mapDispatch, mapProps} from "../engine/redux";
import {$getTaskGroups, $getTasks, setDisplayTasks, setTaskGroupSelected} from "../engine/slices/tasking.slice";
import AppTasksTile from "./app.tasks.tile";
import AppTasksGroup from "./app.tasks.group";

const AppTasks: FC = () => {
  const tasks = mapProps((state) => state.tasking.activeTasks);
  const displayTasks = mapProps((state) => state.tasking.displayTasks);
  const groups = mapProps((state) => state.tasking.taskGroups);
  const dispatch = mapDispatch();

  // Networking
  useEffect((): void => {
    dispatch($getTaskGroups());
    dispatch($getTasks());
  }, [dispatch]);

  // Filtering
  useEffect(() => {
    // Get currently displayed tasks
    const displayGroups = groups
      .filter((group) => group.selected)
      .map((inst) => inst.id);

    if(displayGroups.length > 0) {
      const filteredTasks = tasks.filter((task) => {
        if(!task.groupId) return false;
        // Group must be selected in order to display
        return displayGroups.includes(task.groupId);
      });

      dispatch(setDisplayTasks(filteredTasks));
    } else {
      dispatch(setDisplayTasks(tasks));
    }
  }, [dispatch, groups, tasks]);

  function onGroupSelect(id : number, selected : boolean) {
    // Update display tasks
    dispatch(setTaskGroupSelected({id, selected}))
  }

  if (displayTasks && displayTasks.length) {
    const tasktiles = displayTasks.map((task) => <AppTasksTile key={task.id} task={task} />);
    const taskgroups = groups.map((group) =>
      <AppTasksGroup
        key={group.id}
        taskGroup={group}
        select={(selected) => onGroupSelect(group.id, selected)}
      />);

    return (
      <Styled>
        <div className="groups">{taskgroups}</div>
        <div className="tasks">{tasktiles}</div>
      </Styled>
    );
  }
  return <h3>No Tasks</h3>;
};

const Styled = styled.div`
  height: 100%;
  display: grid;
  grid-template:
    "groups" auto
    "tasks" 1fr
    / 1fr;
  & > .groups {
    grid-area: groups;
    display: flex;
    flex-direction: row;
    column-gap: 4px;
  }
  & > .tasks {
    grid-area: tasks;
    & > div {
      margin: 10px 0;
    }
  }
`;
export default AppTasks;
