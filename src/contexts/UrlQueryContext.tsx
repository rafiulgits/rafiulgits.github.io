import React from "react";

type UrlQueryContextAction = {
  type: "SET_PAGE";
  payload: string;
};

type UrlQueryContextState = {
  page: string;
};

const reducer = (
  prevState: UrlQueryContextState,
  action: UrlQueryContextAction
): UrlQueryContextState => {
  switch (action.type) {
    case "SET_PAGE": {
      return {
        ...prevState,
        page: action.payload,
      };
    }
    default:
      return prevState;
  }
};

const initialState: UrlQueryContextState = {
  page: "",
};

export const UrlQueryContext = React.createContext<{
  state: UrlQueryContextState;
  dispatch: React.Dispatch<UrlQueryContextAction>;
}>({ state: initialState, dispatch: () => 0 });

export const useUrlQueryContext = () => React.useContext(UrlQueryContext);

export const UrlQueryContextProvider = (props: {
  children?: React.ReactNode;
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("page")) {
      dispatch({ type: "SET_PAGE", payload: params.get("page")! });
    }
  }, []);

  return (
    <UrlQueryContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UrlQueryContext.Provider>
  );
};
