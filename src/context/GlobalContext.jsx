import { useEffect, useReducer } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const dataFromLocalStroge = () => {
  return JSON.parse(localStorage.getItem("likedImages")) || { likedImages: [] };
};

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LIKE":
      return { ...state, likedImages: [...state.likedImages, payload] };
    case "UNLIKE":
      return {
        ...state,
        likedImages: state.likedImages.filter((image) => {
          image.id !== payload;
        }),
      };
    default:
      state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, dataFromLocalStroge());

  useEffect(() => {
    localStorage.setItem("likedImages", JSON.stringify(state));
  }, [state]);

  console.log(state);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
