import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMessengerBody from "../../api/useMessengerBody";
import useMessengerList from "../../api/useMessengerList";
import Loading from "../../components/Loading/Loading";
import MessengerBody from "../../components/MessengerBody/MessengerBody";
import MessengerInfo from "../../components/MessengerInfo/MessengerInfo";
import MessengerList from "../../components/MessengerList/MessengerList";

const isValidId = (id: string | undefined) => {
  return id && !isNaN(Number(id)) && Number(id) <= 20 && Number(id) > 0;
};
const Messenger = () => {
  //Info Menu Toggle
  const [infoOpen, setInfoOpen] = useState(false);
  const toggleInfo = () => setInfoOpen(!infoOpen);

  //API Calls
  const { loading, items } = useMessengerList();
  const { fetchBody, bodies, sendMessage } = useMessengerBody();

  const { id } = useParams<{ id: string | undefined }>();
  useEffect(() => {
    if (isValidId(id)) fetchBody(Number(id) - 1);
  }, [fetchBody, id]);

  if (loading) return <Loading />;
  return (
    <div className="messenger">
      <MessengerList items={items} />
      <MessengerBody
        toggleInfo={toggleInfo}
        sendMessage={sendMessage}
        body={isValidId(id) ? bodies[Number(id) - 1] : null}
        user={isValidId(id) ? items[Number(id) - 1] : null}
      />
      <MessengerInfo
        open={infoOpen}
        toggleInfo={toggleInfo}
        user={isValidId(id) ? items[Number(id) - 1] : null}
      />
    </div>
  );
};

export default Messenger;
