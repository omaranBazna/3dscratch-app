import React, { useEffect, useRef ,useState } from "react";
import * as Blockly from "blockly"; // Import everything from Blockly
import "blockly/blocks"; // Default blocks
import "blockly/javascript"; // JavaScript generator
import { javascriptGenerator } from 'blockly/javascript';

const BlocklyComponent = ({ toolboxConfig }) => {
  const blocklyDiv = useRef(null);
  const blocklyWorkspace = useRef(null);
  const [generatedCode, setGeneratedCode] = useState("");

  useEffect(() => {
    if (blocklyDiv.current) {
      blocklyWorkspace.current = Blockly.inject(blocklyDiv.current, {
        toolbox: toolboxConfig,
      });
    }

    return () => {
      if (blocklyWorkspace.current) {
        blocklyWorkspace.current.dispose();
      }
    };
  }, [toolboxConfig]);


  const handleGenerateCode = () => {
    if (blocklyWorkspace.current) {
      const code = Blockly.JavaScript.workspaceToCode(blocklyWorkspace.current);
      setGeneratedCode(code);
    }
  };

  return <div ref={blocklyDiv} style={{ height: "500px", width: "100%" }}>
    

    <button onClick={handleGenerateCode}>Generate Code</button>
    {generatedCode && <pre>{generatedCode}</pre>}
  </div>;
};

export default BlocklyComponent;
