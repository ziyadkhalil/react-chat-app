import { useEffect, useState } from "react";
import { MessengerListItem } from "../types";
import randomDate from "./randomDate";

const useMessengerList = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<MessengerListItem[]>();
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20").then((res) =>
      console.log(
        res.json().then((res) => {
          setItems(
            res.results.map((r: any) => {
              return {
                name: r.name.first + " " + r.name.last,
                avatar: r.picture.thumbnail,
                bigAvatar: r.picture.large,
                lastSeen: randomDate(),
              };
            })
          );
          setLoading(false);
        })
      )
    );
  }, []);
  return { items: items as MessengerListItem[], loading };
};
export default useMessengerList;
