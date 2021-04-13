import styled from 'styled-components'

export const StyledTotalValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* align-items: flex-end; */
`;

export const Button = styled.button`
  align-self: flex-end;

  width: max-content;
  padding: 8px 24px;
  line-height: 1.5em;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  border: 0;
  border-radius: 24px;
  color: var(--lightest);
  background: var(--primary);
  cursor: pointer;
`;

export const Subtotal = styled.div`
  display: grid;
  grid-template-columns: 16% 80%;
  grid-column-gap: 0%;
  align-items: flex-end;
  margin: 12px 0;

  & span {
    position: relative;
    text-align: right;
    font-size: 22px;
    font-weight: 800;
    &::before {
      content: "";
      bottom: 4px;
      left: 12px;
      position: absolute;
      width: 50%;
      display: inline-block;
      border-bottom: 2px dotted var(--text-dark);
    }
  }
`;