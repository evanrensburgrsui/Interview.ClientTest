import styled from "@emotion/styled";
import {FC, useEffect, useState} from "react";
import CoreButton from "./controls/button";
import CoreInput from "./controls/input";
import {useNavigate} from "react-router-dom";
import CoreSelect from "./controls/select";
import {mapDispatch, mapProps} from "../engine/redux";
import {$getTaskGroups, setTasksLoading} from "../engine/slices/tasking.slice";
import {setDescription, setGroupId} from "../engine/slices/addTask.slice";
import {saveTask, TaskGroupModel} from "../engine/proxies/task.proxy";
import Spinner from "./loaders/spinner";

const AddTaskForm: FC = () => {
  const dispatch = mapDispatch();
  const navigate = useNavigate();
  const groups = mapProps((state) => state.tasking.taskGroups);
  const description = mapProps((state) => state.addTask.description);
  const selectedGroupId = mapProps((state) => state.addTask.selectedGroupId);
  const tasksLoading = mapProps((state) => state.tasking.tasksLoading);

  // Error state
  const [descriptionError, setDescriptionError] = useState(false);
  const [groupError, setGroupError] = useState(false);

  let groupOptions = groups.map(groupToOption);

  // Fetch the latest task groups
  useEffect((): void => {
    dispatch($getTaskGroups());
  }, [dispatch]);

  function onClickCancel() {
    // Anonymous function would also be fine
    // TODO: Add a prompt to confirm
    navigate('/');
  }

  function onClickSubmit() {
    // Field validation
    let isValidDescription = description?.length > 0;
    let isValidGroup = selectedGroupId > 0;

    // console.log("Valid description: " + isValidDescription, description);
    // console.log("Valid group: " + isValidGroup, selectedGroupId);

    if(isValidDescription && isValidGroup) {
      setGroupError(false);
      setDescriptionError(false);
      dispatch(setTasksLoading(true));

      saveTask({
        // Auto-increments server-side
        id: 0,
        description,
        groupId: selectedGroupId
      })
        .then(res => {
          console.log("Saved task: ", res);
          navigate('/');
        })
        .catch(err => {
          // Ideally capture the exception
          console.error(err);
          // TODO: Display an error to the user
        })
        .finally(() => {
          dispatch(setTasksLoading(false));
        });
    } else {
       // Highlight invalid field labels
      setGroupError(!isValidGroup);
      setDescriptionError(!isValidDescription);
    }
  }

  if(tasksLoading) {
    return <Styled>
      <Spinner/>
    </Styled>
  }

  return (
    <Styled>
      <div className="form">
        <span style={descriptionError ? {color: 'lightcoral'} : undefined}>
          Description
        </span>
        <CoreInput
          setValue={(value) => dispatch(setDescription(value))}
        />
        <span style={groupError ? {color: 'lightcoral'} : undefined}>
          Group
        </span>
        <CoreSelect
          defaultValue={1}
          setValue={value => dispatch(setGroupId(value))}
          options={groupOptions}
        />
        <div className="actions">
          <CoreButton style={{flexGrow: 1}} text={'Cancel'} click={onClickCancel}/>
          <CoreButton style={{flexGrow: 1}} text={'Submit'} click={onClickSubmit}/>
        </div>
      </div>
    </Styled>
  );
};

function groupToOption(group: TaskGroupModel) {
  return {
    label: group.name,
    value: group.id,
  };
}

const Styled = styled.div`
  width: 100%;
  & > .form {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    & > .actions {
      display: flex;
      flex-direction: row;
      column-gap: 4px;
    }
  }
`;
export default AddTaskForm;
