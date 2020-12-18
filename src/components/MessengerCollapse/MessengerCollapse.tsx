import React, { useState } from "react";
import { Card, Collapse } from "react-bootstrap";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const MessengerCollapse: React.FC<{ title: string }> = ({ title }) => {
  const [open, setOpen] = useState(false);
  return (
    <Card className="border-0 rounded mb-2">
      <Card.Body>
        <Card.Title>
          {title}
          {open ? (
            <MdKeyboardArrowUp
              onClick={() => setOpen(!open)}
              size={25}
              className="float-right"
            />
          ) : (
            <MdKeyboardArrowDown
              onClick={() => setOpen(!open)}
              size={25}
              className="float-right"
            />
          )}
        </Card.Title>
        <Collapse in={open}>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            auctor justo eget orci egestas, vitae auctor nisl viverra. Phasellus
            mollis leo in erat viverra, sit amet ultricies lorem ultrices. Nunc.
          </Card.Text>
        </Collapse>
      </Card.Body>
    </Card>
  );
};
export default MessengerCollapse;
