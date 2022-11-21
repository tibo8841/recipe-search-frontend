import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div className="app-footer">
      <div className="link-footer">
        <h5 style={{ marginBottom: "-10%", marginTop: "5%" }}>Github Repos</h5>
        <ul className="footer-links" style={{ marginTop: "15%" }}>
          <li>
            <a
              href="https://github.com/tibo8841/recipe-search-frontend"
              target="_blank"
              rel="noreferrer"
            >
              frontend repo
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tibo8841/recipe-search-backend"
              target="_blank"
              rel="noreferrer"
            >
              backend repo
            </a>
          </li>
        </ul>
      </div>
      <div className="social-footer">
        <h5 style={{ marginBottom: "5%" }}>Find Me At</h5>
        <SocialIcon
          url="https://github.com/tibo8841"
          style={{ marginRight: "1%" }}
          target="_blank"
          rel="noreferrer"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/thibaut-hucker/"
          style={{ marginLeft: "1%" }}
          target="_blank"
          rel="noreferrer"
        />
      </div>
    </div>
  );
}
