import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export const useMouse = () => useContext(MainContext);

const MainProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "test note!",
      description: "bu bir deneme notudur",
      color: "red",
      position: {
        x: 350,
        y: 300,
      },
    },
  ]);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [boxPosition, setBoxPosition] = useState({
    x: 0,
    y: 0,
  });

  const data = {
    mode,
    setMode,
    position,
    setPosition,
    notes,
    setNotes,
    boxPosition,
    setBoxPosition,
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export default MainProvider;
