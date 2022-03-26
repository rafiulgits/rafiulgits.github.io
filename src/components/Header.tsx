import { BsCircleFill } from "react-icons/bs";

export const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <BsCircleFill style={{ color: "red" }} />{" "}
          <strong>Rafiul Islam</strong>
        </a>
      </div>
    </nav>
  );
};
