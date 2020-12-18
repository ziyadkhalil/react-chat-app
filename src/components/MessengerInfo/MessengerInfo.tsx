import { Button, Card, Collapse } from "react-bootstrap";
import { MessengerListItem } from "../../types";
import "./MessengerInfo.css";
import { AiFillCloseCircle } from "react-icons/ai";
import MessengerCollapse from "../MessengerCollapse/MessengerCollapse";
type MessengerInfoProps = {
  user: MessengerListItem | null;
  open: boolean;
  toggleInfo: () => void;
};
const MessengerInfo: React.FC<MessengerInfoProps> = ({
  user,
  open,
  toggleInfo,
}) => {
  if (!user) return null;
  return (
    <div
      className={
        open ? "messenger__info messenger__info--active" : "messenger__info"
      }
    >
      <Button variant="outline" className="info__close-button my-3">
        <AiFillCloseCircle
          size={30}
          color="#4b68ec"
          onClick={() => toggleInfo()}
        />
      </Button>
      <Card className="border-0 rounded mb-2">
        <Card.Body className="d-flex flex-column align-items-center mx-auto">
          <Card.Img src={user?.bigAvatar} className="mb-3" />
          <Card.Text as={"h5"} className="text-center">
            {user?.name}
          </Card.Text>
          <Card.Text className="text-muted">
            CEO & Founder at Highly Inc
          </Card.Text>
        </Card.Body>
      </Card>
      <MessengerCollapse title="Information" />
      <MessengerCollapse title="Images" />
      <MessengerCollapse title="Files" />
      <MessengerCollapse title="Pinned Items" />
    </div>
  );
};
export default MessengerInfo;
