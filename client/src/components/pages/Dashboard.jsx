import React from 'react';
import styled from 'styled-components';
import { counts } from "../../utils/data";
import CountsCard from '../cards/CountsCard';
import WeeklyStatCard from '../cards/WeeklyStatCard';

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  gap: 22px;
  flex-direction: column;

  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Title = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; 
  gap: 22px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const Dashboard = () => {
  const data ={
    
  }
  return (
    <Container>
      <Wrapper>
        <Title>Dashboard</Title>
        <FlexWrap>
          {counts.map((item) => (
            <CountsCard key={item.id} item={item} />
          ))}
        </FlexWrap>
        <FlexWrap>
          <WeeklyStatCard data={data}/>
        </FlexWrap>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
