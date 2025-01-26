import '../Navbar.css';

function Navbar() {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <p className="title">Code Playground</p>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
