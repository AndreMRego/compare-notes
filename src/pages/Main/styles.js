import styled from 'styled-components';

import { breakpoints } from '~/constants';

export const Container = styled.div`
  display: flex;
  height: 100%;

  flex-direction: column;
  padding-top: 50px;
  align-items: center;
  flex: 1;

  margin: 0 120px;

  @media (min-width: ${breakpoints.sm}) {
    margin: 0 60px;

    justify-content: center;
  }

  @media (max-width: ${breakpoints.sm}) {
    margin: 0 40px;
  }

  @media (max-width: ${breakpoints.xs}) {
    margin: 0 20px;
  }
`;

export const TopHeader = styled.div`
  display: flex;
  /* margin-top: 100px; */

  align-items: center;
  justify-content: space-between;

  > h2 {
    font-size: 1.3rem;
    text-align: center;
  }
`;

export const Row = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.sm}) {
    display: block;
    margin-bottom: 10px;
  }

  @media (min-width: ${breakpoints.sm}) {
    margin-bottom: 15px;
  }
`;

export const Column = styled.div`
  display: flex;

  flex-direction: column;
  flex: 1;

  @media (max-width: ${breakpoints.sm}) {
    margin-bottom: 10px;
  }

  & + & {
    @media (min-width: ${breakpoints.sm}) {
      margin-left: 25px;
    }
  }

  @media (min-width: ${breakpoints.sm}) {
    height: 100%;
  }

  > span {
    color: #ee4d64;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  flex-direction: column;
  flex: 1;
  align-items: center;

  @media (max-width: ${breakpoints.xxs}) {
    margin-top: 20px;
  }
`;
