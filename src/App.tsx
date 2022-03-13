import React from 'react';
import styled from 'styled-components/macro';
import logo from './logo.svg';
import './App.css';
import Card from './component/Card';

const Wrapper = styled.div`
  position:relative;

  background-color: var(--dark-blue);
  height:100vh;
  width:100vw;
`;


const Container = styled.div`
  padding-left:30px;
  padding-right:30px;
  width: 100%;
  height: 100%;
  position: relative;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <Card />
      </Container>
    </Wrapper>
  );
}

export default App;
