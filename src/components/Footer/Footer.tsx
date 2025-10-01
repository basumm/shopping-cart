import { Container } from "react-bootstrap";
import { FooterStyles } from "../Footer/styles";
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <FooterStyles>
      <Container>
        <div className="footer-container">
          <p>
            Lorem ipsum dolor sit amet. Sit quas deleniti et ipsam consequuntur
            aut exercitationem esse est architecto sequi sed molestiae illo quo
            harum numquam. Nam alias iure eos dolorem repellat eum eius sunt a
            fugiat quod. Est quasi ipsum ea vero quae id quia consectetur qui
            fugit quod aut facilis dolores aut dolor voluptates. Est quos rerum
            qui esse quia et quia excepturi ut minima rerum non porro ipsa.
          </p>
          <div className="footer-Links pb-3">
            <Link to="/">Privacy-Policy</Link>
            <Link to="/">Legal Notice</Link>
            <Link to="/">Cookie Policy</Link>
          </div>
          <div>
            <p>Last updated 09/25</p>
          </div>
        </div>
      </Container>
    </FooterStyles>
  );
};
