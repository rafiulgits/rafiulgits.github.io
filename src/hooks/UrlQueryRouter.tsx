import { useUrlQueryContext } from "contexts/UrlQueryContext";

interface UrlQueryRouter {
  currentPage: string;
  route: (name: string) => void;
}

export const useUrlQueryRouter = (): UrlQueryRouter => {
  const { state, dispatch } = useUrlQueryContext();

  const route = (name: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", name);
    dispatch({ type: "SET_PAGE", payload: name });
    window.history.pushState({}, name, "?" + params.toString());
  };

  return {
    currentPage: state.page,
    route: route,
  };
};
