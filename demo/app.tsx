import React, { useEffect } from "react";
import { Editor, basicSetup } from "dgmjs";

let editor: Editor | null = null;

function App() {
  useEffect(() => {
    if (!editor) {
      const options = basicSetup();
      editor = new Editor(
        document.querySelector("#editor-holder") as HTMLElement,
        options
      );
      editor.setActiveHandler("Select");
      editor.fit();
      editor.repaint();
    }
  }, []);

  return (
    <div className="absolute inset-0 h-[calc(100dvh)] select-none">
      <div className="absolute inset-0" id="editor-holder" />
    </div>
  );
}

export default App;