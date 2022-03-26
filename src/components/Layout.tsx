import { Header } from "./Header";
import { Helmet } from "react-helmet";

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
}

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{`Rafiul Islam ${props.title}`}</title>
      </Helmet>
      <div style={{ minHeight: "100vh" }} className="bg-light">
        <Header />
        <div style={{ padding: "2rem" }}>{props.children}</div>
      </div>
    </>
  );
};
