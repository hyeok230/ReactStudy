import styled from 'styled-components'
import './App.css';

const SimpleButton = styled.button`
  color:white;
  background-color:green;
`;

const LargeButton = styled(SimpleButton)`
  font-size:30px;
`;

const ReactButton = props => {
  return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
  font-size:30px;
`;

const PrimaryButton = styled.button`
  color: ${ props => props.primary ? 'whithe' : 'black' };
  background-color: ${props => props.primary ? 'blue' : 'gray'};
`;

function App() {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>React Large</ReactLargeButton>
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary>Primary</PrimaryButton>
    </div>
  );
}

export default App;
