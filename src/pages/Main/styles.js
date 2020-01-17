import styled from 'styled-components';

import Form from '~/components/Form';

export const Container = styled.div`
  display: flex;
  height: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  flex: 1;

  margin: 0 120px;
`;

export const TopHeader = styled.div`
  display: flex;
  margin: 34px 0 24px 0;

  align-items: center;
  justify-content: space-between;

  > h2 {
    /*  color: #7159c1; */
    font-size: 1.3rem;
  }
`;

export const CustomForm = styled(Form)``;

export const Row = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;

  flex-direction: column;
  flex: 1;

  & + & {
    margin-left: 25px;
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
`;
