import logo from './logo.svg';
import './App.css';
import BlocklyComponent from './BlocklyComponent';

const toolbox = `
  <xml xmlns="https://developers.google.com/blockly/xml">
    <block type="controls_if"></block>
    <block type="logic_compare"></block>
    <block type="math_number"></block>
    <block type="math_arithmetic"></block>
    <block type="text"></block>
    <block type="text_print"></block>
  </xml>
`;

function App() {
  return (
    <div className="App">
          <BlocklyComponent toolboxConfig={toolbox} />
    </div>
  );
}

export default App;
