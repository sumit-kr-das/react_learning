import "./nav.css";

const NavBar = () => {
  const navStyle = {
    background: "blue",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 2rem",
  };

  return (
    <section style={navStyle}>
      <img src="/assets/vite.svg" alt="my logo" />
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Product</a>
        </li>
      </ul>
    </section>
  );
};

export default NavBar;
