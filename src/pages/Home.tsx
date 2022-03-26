import { Layout } from "components/Layout";
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";

const SocialItem = (props: {
  name: string;
  url: string;
  icon: React.ReactNode;
}) => {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none", fontSize: "30px" }}
    >
      {props.icon} <span style={{ fontSize: "25px" }}>{props.name}</span>
    </a>
  );
};

export const HomePage = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <h1 className="home-greet">Hello,</h1>
            <h1 className="home-greet">World</h1>
          </div>
          <div className="col-md-4">
            <h1 className="tex-center">Find @</h1>
            <ul className="list-group" style={{ listStyle: "none" }}>
              <li>
                <SocialItem
                  name="@rafiulgits"
                  url="https://github.com/rafiulgits"
                  icon={<BsGithub />}
                />
              </li>
              <li>
                <SocialItem
                  name="@rafiul15"
                  url="https://linkedin.com/in/rafiul15"
                  icon={<BsLinkedin />}
                />
              </li>
              <li>
                <SocialItem
                  name="@rafiultweets"
                  url="https://twitter.com/rafiultweets"
                  icon={<BsTwitter />}
                />
              </li>
              <li>
                <SocialItem
                  name="@rafiulphotos"
                  url="https://instagram.com/rafiulphotos"
                  icon={<BsInstagram />}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};
