import styled from "styled-components";

export const StyledFlight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 1px dashed var(--brand04);

  & section:first-child {
    border-bottom: 1px solid var(--base);
  }

  & > section {
    display: grid !important;
    grid-template-columns: 20% 70%;
    grid-column-gap: 5%;
    padding: 22px 0;

    & h3 {
      font-size: 12px;
      font-weight: 400;
    }
    time {
      font-size: 12px;
      font-weight: 700;
    }
  }
`;

export const Subtotal = styled.div`
  display: grid;
  grid-template-columns: 30% 66%;
  grid-column-gap: 0%;
  align-items: flex-end;
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

export const Segments = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  & > span {
    position: relative;
    width: 35%;
    line-height: 1.2;
    text-align: center;
    font-size: 12px;

    &::before {
      content: "";
      display: inline-flex;
      width: 100%;
      margin-bottom: 12px;
      border-top: 1px solid var(--base);
    }
    &::after {
      content: "✈";
      top: 0;
      left: 0;
      position: absolute;
      font-size: 16px;
      font-weight: 600;
      color: var(--brand04);
      transform: translate(250%, 5%);
    }
  }

  & div {
    width: 30%;
    text-align: center;

    & span {
      display: block;
      line-height: 1;
      font-size: 22px;
      font-weight: 900;
      color: var(--text-dark);
    }
    & time {
      font-weight: 400;
      color: var(--brand04);
    }
  }
`;
