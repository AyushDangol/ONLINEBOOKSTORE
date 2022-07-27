import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      Hello World I am Header. Lets go to contact page from{" "}
      <Link to="contact">Here</Link>
    </div>
  );
}

export default Header;
