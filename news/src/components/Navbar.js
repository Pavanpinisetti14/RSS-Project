

function Navbar() {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
            <div>Logo</div>
            <div className=" flex gap-4">
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Contact Us</a>
                <a href="#">About Us</a>
            </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
