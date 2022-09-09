import styled from "@emotion/styled";
import {CSSProperties, FC} from "react";

type Props = {
  text: string;
  click?: () => void;
  style?: CSSProperties | undefined;
};

const CoreButton: FC<Props> = (props) => {
  return (
    <Styled style={props.style}>
      <div onClick={props.click}>{props.text}</div>
    </Styled>
  );
};

const Styled = styled.div`
  cursor: pointer;
  background-color: #61dafb;
  color: #0c323c;
  padding: 5px 8px 7px 8px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 1.1em;
  // Center the text vertically
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  // Horizontal center the text
  text-align: center;
`;
export default CoreButton;
