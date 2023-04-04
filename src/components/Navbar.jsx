const Navbar = (props) => {
  return (
    <div className="bg-pink-50 text-gray-800 flex border-b-2 justify-between py-2 px-28">
      <div id="logoWrapper" className="w-20">
        <img src={props.imgSrc} alt="logo" />
      </div>

      <nav className="flex list-none justify-between">
        <li className="mr-4 flex justify-center flex-col">
          <a href="/">Home</a>
        </li>
        <li className="mr-4 flex justify-center flex-col">
          <a href="/">Services</a>
        </li>
        <li className="mr-4 flex justify-center flex-col">
          <a href="/">About</a>
        </li>
        <li className="flex justify-center flex-col">
          <a href="/">Contact</a>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
