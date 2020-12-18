import React from "react";
import { MessengerListItem } from "../../types";
import Chat from "../Chat/Chat";
import Loading from "../Loading/Loading";
import { MessageProps } from "../Message/Message";
import MessengerHeader from "../MessegnerHeader/MessengerHeader";
import MessengerTextArea from "../MessengerTextArea/MessengerTextArea";
import "./MessengerBody.css";
type MessengerBodyProps = {
  body: MessageProps[] | null;
  user: MessengerListItem | null;
  sendMessage: (id: number, message: string) => void;
  toggleInfo: () => void;
};
const MessengerBody: React.FC<MessengerBodyProps> = ({
  body,
  user,
  sendMessage,
  toggleInfo,
}) => {
  if (!body) return <Loading />;
  return (
    <div className="messenger__body">
      <MessengerHeader user={user!} toggleInfo={toggleInfo} />
      <Chat messages={body} />
      <div className="messenger__footer">
        <MessengerTextArea sendMessage={sendMessage} />
      </div>
    </div>
  );
};
export default MessengerBody;
