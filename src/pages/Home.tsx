import { Layout } from "components/Layout";

export const HomePage = () => {
  return (
    <Layout>
      <strong>Find me</strong>
      <ul>
        <li>
          <a
            href="https://github.com/rafiulgits"
            target="_blank"
            rel="noreferrer"
          >
            Github @rafiulgits
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/rafiul15"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin @rafiul15
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/rafiultweets"
            target="_blank"
            rel="noreferrer"
          >
            Twitter @rafiultweets
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/rafiulphotos"
            target="_blank"
            rel="noreferrer"
          >
            Instagram @rafiulphotos
          </a>
        </li>
      </ul>
    </Layout>
  );
};
