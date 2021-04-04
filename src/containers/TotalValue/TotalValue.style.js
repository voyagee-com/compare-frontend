import styled from 'styled-components'

export const StyledTotalValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Button = styled.button`
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