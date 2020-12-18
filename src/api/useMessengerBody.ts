import { useState } from "react";
import { MessageProps } from "../components/Message/Message";
import randomDate from "./randomDate";

const useMessengerBody = () => {
  const [bodies, setBodies] = useState<(MessageProps[] | null)[]>(
    new Array(20).fill(null)
  );
  const fetchBody: (id: number) => void = (id) => {
    if (id < 20 && id >= 0 && bodies[id] === null)
      fetch("https://www.randomtext.me/api/gibberish/p-20/7-30/").then((res) =>
        res.json().then((res) => {
          const body: MessageProps[] = [
            ...res.text_out.matchAll(/<p>(.*?)<\/p>/g),
          ].map((entry) => {
            return {
              content: entry[1],
              timestamp: randomDate(),
              seen: randomDate(),
              sender: Math.random() > 0.5 ? "me" : "notme",
            };
          });
          setBodies([...bodies.slice(0, id), body, ...bodies.slice(id + 1)]);
        })
      );
  };

  const sendMessage = (id: number, message: string) => {
    setBodies([
      ...bodies.slice(0, id),
      [
        ...bodies[id]!,
        {
          content: message,
          seen: randomDate(),
          sender: "me",
          timestamp: new Date(),
        },
      ],
      ...bodies.slice(id + 1),
    ]);
  };
  return { fetchBody, bodies, sendMessage };
};
export default useMessengerBody;
