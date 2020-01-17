import styled from 'styled-components';

import { breakpoints } from '~/constants';

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-wrap: wrap;

  margin: 50px 0;
`;
export const Table = styled.table`
  display: flex;
  flex: 1;
  flex-direction: column;

  background: #fff;

  @media (max-width: 991px) {
    display: none;
  }

  tr {
    display: flex;
    width: 100%;
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th {
    display: flex;
    flex: 1;
    padding: 30px 0 20px 0px;
    text-align: left;

    :first-child {
      padding-left: 30px;
    }
  }

  td {
    display: flex;
    flex: 1;
    margin: 0;
    padding: 16px 0;
    border-bottom: 1px solid rgba(224, 224, 224, 1);

    :first-child {
      padding-left: 30px;
    }

    button {
      border: 0;
      color: #4d85ee;
      font-size: 0.9rem;
      background: transparent;

      &:last-child {
        color: #de3b3b;
        margin-left: 20px;
      }
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-wrap: wrap;
  padding: 10px;
  margin: 20px 5px;
  border-radius: 4px;

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }

  background: #fff;

  span {
    font-size: 0.8rem;
    margin: 5px 0;
  }

  button {
    border: 0;
    color: #4d85ee;
    font-size: 0.9rem;
    background: transparent;

    &:last-child {
      color: #de3b3b;
      margin-left: 20px;
    }
  }
`;
export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-wrap: wrap;

  h2 {
    font-size: 0.9rem;
    margin: 5px 0;
  }
`;
export const CardBody = styled.div`
  div {
    display: flex;
    margin: 10px 0;
    justify-content: space-between;
  }
`;
