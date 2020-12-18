import { format, formatDistance } from "date-fns";
import "./message.css";
export interface MessageProps {
  sender: "me" | "notme";
  content: string;
  timestamp: Date;
  seen: Date;
}
const Message: React.FC<MessageProps> = ({
  content,
  sender,
  timestamp,
  seen,
}) => {
  return (
    // <div style={{ width: "100%" }}>
    <div className={sender === "me" ? "message me" : "message"}>
      <div className="message__text">
        <p className="mb-0">{content}</p>
      </div>
      <div className="message__timestamp align-bottom">
        <small>{formatDistance(timestamp, new Date())}</small>
        <small className="message__seen float-right">
          {format(seen, "'Seen' p")}
        </small>
      </div>
    </div>
    // </div>
  );
};
export default Message;
