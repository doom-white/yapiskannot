import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export const useMouse = () => useContext(MainContext);

const MainProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  const [boxVisible, setBoxVisible] = useState(false);
  const [notes, setNotes] = useState(
    (localStorage.notes && JSON.parse(localStorage.notes)) || [
      {
        number: 0,
        description: "",
        color: "",
        position: {
          x: 0,
          y: 0,
        },
      },
    ]
  );
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
    boxVisible,
    setBoxVisible,
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export default MainProvider;
