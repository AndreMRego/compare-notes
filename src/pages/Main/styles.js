import styled from 'styled-components';

import { breakpoints } from '~/constants';

export const Container = styled.div`
  display: flex;
  height: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  margin: 0 120px;

  @media (max-width: ${breakpoints.md}) {
    margin: 0 60px;
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
  margin-top: 100px;

  align-items: center;
  justify-content: space-between;

  > h2 {
    font-size: 1.3rem;
    text-align: center;
  }

  @media (max-width: ${breakpoints.xxs}) {
    margin: 50px 0;
  }
`;

export const Row = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.xxs}) {
    margin: 0 0 144px 0;
  }
`;

export const Column = styled.div`
  display: flex;

  flex-direction: column;
  flex: 1;

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
    min-height: 80px;
  }

  & + & {
    @media (min-width: ${breakpoints.sm}) {
      margin-left: 25px;
    }
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
