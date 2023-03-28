import styled from "styled-components";

export const Item = styled.li`
 font-weight: 500;
  font-size: 20px;
  line-height: calc(22 / 20);
  letter-spacing: 0.02em;
 margin-bottom: 10px;
 
`
export const ButtonDelete = styled.button`
  /* padding: 10px 23px; */
  margin: 0;
  margin-left: 15px;
  text-transform: capitalize;
  width: 80px;
  font-size: 14px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  cursor: pointer;
  background-color: #C3C1C1;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #00CCCC;
  }
`;
