import styled from "styled-components";

export const FormWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
color: red;
`;
export const Button = styled.button`
  padding: 0.7rem;
  border: 0.1rem #FFFFFF solid;
  border-radius: 20px;
  color: #FFFFFF;
  cursor: pointer;
  background-color: #02c8cc;
  &:hover {
    border: 0.1rem #17202a solid;
    color: #17202a;
  }
`;
export const CloseButton = styled(Button)`
  padding: 0.2rem 0.4rem 0.2rem 0.4rem;
  position: absolute;
  right: 1%;
  top: 1%;
`;

export const FormItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: 0.3rem;
`;