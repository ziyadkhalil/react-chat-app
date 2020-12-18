import { MessengerListItem } from "../../types";
import { formatDistanceToNow } from "date-fns";
import "./ListItem.css";
import { useParams, useHistory } from "react-router-dom";
const ListItem: React.FC<{
  item: MessengerListItem;
  key: number;
  itemId: string;
}> = ({ item, itemId }) => {
  const { id } = useParams<{ id: string | undefined }>();
  const { replace } = useHistory();
  return (
    <div
      onClick={() => replace(`/messenger/${itemId}`)}
      className={
        itemId === id
          ? "messenger__list-item messenger__list-item--selected"
          : "messenger__list-item"
      }
    >
      <img src={item.avatar} alt="avatar" />
      <div className="d-flex flex-column">
        <span className="font-weight-bold">{item.name}</span>
        <small className="text-muted">
          {formatDistanceToNow(item.lastSeen)}
        </small>
      </div>
    </div>
  );
};
export default ListItem;
