import {FC} from "react";
import {BounceLoader} from "react-spinners";
import styled from "@emotion/styled";

const Spinner: FC = () => {
  return (
    <Styled>
      <BounceLoader color={'#61dafb'}/>
    </Styled>
  );
};

const Styled = styled.div`
  padding: 16px;
  // Center
  display: flex;
  justify-content: center;
  align-content: center;
`;

export default Spinner;
