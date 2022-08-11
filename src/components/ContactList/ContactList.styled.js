import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 12px;
`;

export const ListItem = styled.li`
  max-width: 350px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 5px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const ContactName = styled.span`
  font-weight: 500;
`;

export const Button = styled.button`
  width: 70px;
  padding: 7px;
  font-family: inherit;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.3;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: #1976d2;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #1565c0;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;
