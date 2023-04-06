const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-3 gap-y-10 px-32 py-14 bg-gray-100 text-gray-800">
      <div className="space-y-3 text-xs text-gray-800">
        <h4 className="font-bold">ABOUT</h4>
        <p>Contact</p>
        <p>About Us</p>
        <p>Our Services</p>
        <p>Privacy Policy</p>
        <p>Affiliate Program</p>
      </div>
      <div className="space-y-3 text-xs text-gray-800">
        <h4 className="font-bold">SUPPORT</h4>
        <p>Help & FAQ</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
        <p>Login</p>
      </div>
      <div className="space-y-3 text-xs text-gray-800">
        <h4 className="font-bold">EXPLORE</h4>
        <p>Write a review</p>
        <p>Add a Place</p>
        <p>Join </p>
        <p>Travelers' Choice</p>
        <p>GreenLeaders</p>
      </div>
    </footer>
  );
};

export default Footer;
