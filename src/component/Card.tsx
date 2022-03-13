import React from 'react';
import styled from 'styled-components/macro';
import { advices } from '../advice';
import { useState } from 'react';

const AdviceCard = styled.div`
  background-color: var(--dark-grayish-blue);
  position:absolute;
  top:50%;
  left:50%;

  transform: translate(-50%, -50%);
  border-radius:10px;
`;

const Title = styled.div`
  color:var(--neon-green);
  text-align:center;
  padding:30px;
  font-size:14px;
  letter-spacing: 3px;
`;

const Sentences = styled.div`
  color:var(--light-cyan);
  font-size:30px;
  text-align:center;
  
`;

const Image = styled.div`
  height:20px;
  background:url(static/pattern-divider-desktop.svg) center no-repeat;
  padding:30px 0px 100px 0px;

`;

const CircleBorder = styled.div`
  background-color:var(--neon-green);
  width: 50px;
  height: 50px;
  border: 1px solid var(--neon-green);
  border-radius:50%;
  transform: translateX(-50%) translateY(-50%);
  position:absolute;
  left:50%; 

  &:hover {
      cursor:pointer;
      box-shadow: 0 0 10px 3px var(--neon-green);
  }
`;

const Icon = styled.div`
  background:url(static/icon-dice.svg) center no-repeat;
  height:50px;
`;

// ""

function Card() {
    function random(): number {
        return Math.round(Math.random() * (advices.length - 1));
    }

    const [value, setValue] = useState<number>(random());

    const onClick = () => { setValue(random()) };


    return (
        <AdviceCard>
            <Title>
                ADVICE #117
            </Title>
            <Sentences>
                {advices[value]}
            </Sentences>
            <Image></Image>
            <CircleBorder>
                <Icon onClick={onClick}></Icon>
            </CircleBorder>
        </AdviceCard>
    );
}

export default Card;