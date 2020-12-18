import { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { MdSend, MdAdd, MdInsertEmoticon } from "react-icons/md";
import { useParams } from "react-router-dom";
import "./MessengerTextArea.css";
interface TextAreaProps {
  sendMessage: (id: number, message: string) => void;
}
const MessengerTextArea: React.FC<TextAreaProps> = ({ sendMessage }) => {
  const { id } = useParams<{ id: string }>();
  const [text, setText] = useState("");
  const _onClick = () => {
    if (text.trim() === "") return;
    sendMessage(Number(id) - 1, text);
    setText("");
  };
  return (
    <div className="text-area__wrapper d-flex align-items-center">
      <InputGroup className="d-flex text-area">
        <Button
          variant="primary"
          disabled
          style={{ zIndex: 1, backgroundColor: "#4b68ec" }}
        >
          <MdAdd />
        </Button>
        <FormControl
          className="border-0"
          style={{ flex: 1 }}
          placeholder="Type a message here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="outline" disabled>
          <MdInsertEmoticon size={20} />
        </Button>
        <Button
          onClick={_onClick}
          variant="primary"
          style={{ zIndex: 1, backgroundColor: "#4b68ec" }}
        >
          <MdSend />
        </Button>
      </InputGroup>
    </div>
  );
};
export default MessengerTextArea;
