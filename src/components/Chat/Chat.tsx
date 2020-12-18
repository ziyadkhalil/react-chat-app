import React, { useLayoutEffect, useRef } from "react";
import Message, { MessageProps } from "../Message/Message";
import "./Chat.css";

const Chat: React.FC<{ messages: MessageProps[] }> = ({ messages }) => {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    ref.current?.scrollTo(0, ref.current.scrollHeight);
  }, [messages]);
  return (
    <div className="messenger__chat" ref={ref}>
      {messages.map((m, idx) => (
        <Message {...m} key={idx} />
      ))}
    </div>
  );
};
export default Chat;
