import styled from "@emotion/styled";
import {ChangeEvent, FC, useEffect, useState} from "react";

type Props = {
  options: { label: string, value: any }[]
  defaultValue?: string | number | readonly string[] | undefined;
  setValue?: (value: string | number | readonly string[] | undefined) => void;
};

const CoreSelect: FC<Props> = (props) => {
  const [value, setValue] = useState(props.defaultValue);

  useEffect(() => {
    // Also update for defaultValue
    if(props.setValue) {
      props.setValue(value);
    }
  }, [props, value]);

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    let value = event.target.value || props.defaultValue;
    setValue(value);
  }

  return (
    <Styled>
      <select className="select" value={value} onChange={handleChange}>
        {props.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Styled>
  );
};

const Styled = styled.div`
  & > .select {
    width: 100%;
    padding: 4px;
    border-radius: 4px;
    display: block;
    box-sizing: border-box;
  }
`;
export default CoreSelect;
