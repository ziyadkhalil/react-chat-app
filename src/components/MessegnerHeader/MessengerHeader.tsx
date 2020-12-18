import { Button } from "react-bootstrap";
import { MessengerListItem } from "../../types";
import "./MessengerHeader.css";
import { AiFillInfoCircle } from "react-icons/ai";
type MessengerHeaderProps = {
  user: MessengerListItem;
  toggleInfo: () => void;
};
const MessengerHeader: React.FC<MessengerHeaderProps> = ({
  user,
  toggleInfo,
}) => {
  return (
    <div className="messenger__header">
      <div className="header__user">
        <img src={user.avatar} alt="avatar" />
        <span className="font-weight-bold ml-3">{user.name}</span>
      </div>
      <div className="header__actions">
        <Button variant="outline" onClick={() => toggleInfo()}>
          <AiFillInfoCircle size={30} color="#4766f6" />
        </Button>
      </div>
    </div>
  );
};
export default MessengerHeader;
