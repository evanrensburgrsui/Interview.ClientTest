import styled from "@emotion/styled";
import {ChangeEvent, FC, useState} from "react";

type Props = {
  type?: string | undefined;
  setValue?: (value: any) => void;
};

const CoreInput: FC<Props> = (props) => {
  const [value, setValue] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    let value = event.target.value || "";
    setValue(value);
    if(props.setValue) {
      props.setValue(value);
    }
  }

  return (
    <Styled>
      <input className="input" type={props.type} value={value} onChange={handleChange}/>
    </Styled>
  );
};

const Styled = styled.div`
  & > .input {
    width: 100%;
    padding: 4px;
    border-radius: 4px;
    display: block;
    box-sizing: border-box;
  }
`;
export default CoreInput;
