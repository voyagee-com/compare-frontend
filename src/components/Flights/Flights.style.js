import styled from "styled-components";

export const StyledFlight = styled.article`
  display: grid;
  grid-template-rows: 90%;
  grid-gap: 16px;

  & section:first-child {
    border-bottom: 1px solid var(--base);
  }
  /* & section:last-child {
    padding-top: 12px;
  } */

  & section {
    display: grid;
    grid-template-columns: 20% 65%;
    grid-column-gap: 5%;
    padding-bottom: 12px;

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

export const Subtotal = styled.section`
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
