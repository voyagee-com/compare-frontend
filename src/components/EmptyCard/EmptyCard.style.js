import styled from 'styled-components'

export const StyledEmptyCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  margin: 8px;
  border: thin solid var(--base);
  border-radius: 7px;

  & h3 {
    margin-bottom: 16px;
  }

  & p {
    text-align: center;
    color: var(--text-base);
  }

`;