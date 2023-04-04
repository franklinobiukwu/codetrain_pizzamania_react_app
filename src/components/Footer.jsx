const Footer = ({ imgSrc }) => {
  return (
    <>
      <footer className="bg-blend-lighten text-gray-600 text-center py-8 flex flex-col justify-center border-t">
        <div className="flex justify-center mb-2">
          <div className="w-16">
            <img src={imgSrc} alt="logo" />
          </div>
        </div>
        <p className="mb-10">
          <a href="/">&copy; 2023 Pizzamania Foods. All rights reserved.</a>
        </p>
        <p className="flex justify-center">
          <p className="px-2">
            <a href="/">Privacy policy</a>
          </p>
          <p className="px-2 border-l">
            {" "}
            <a href="/">Terms of use</a>
          </p>
        </p>
      </footer>
    </>
  );
};

export default Footer;
