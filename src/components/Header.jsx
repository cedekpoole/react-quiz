import Logo from "../assets/logos_react.svg";

function Header() {
  return (
    <header className="flex justify-center items-center p-4 gap-8">
      <h1 className="text-4xl font-bold">REACT QUIZ</h1>
      <img src={Logo} alt="React Logo" width="100" />
    </header>
  );
}

export default Header;
