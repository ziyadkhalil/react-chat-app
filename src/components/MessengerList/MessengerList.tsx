import { MessengerListItem } from "../../types";
import ListItem from "../ListItem/ListItem";
import "./MessengerList.css";
interface MessengerListProps {
  items: MessengerListItem[];
}
const MessengerList: React.FC<MessengerListProps> = ({ items }) => {
  return (
    <div className="messenger__list">
      <h1 className="mb-4">Chats</h1>
      {items.map((item, idx) => (
        <ListItem item={item} key={idx + 1} itemId={`${idx + 1}`} />
      ))}
    </div>
  );
};
export default MessengerList;
