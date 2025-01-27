import { Facebook, Instagram } from "lucide-react";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-around gap-10 items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">News Articles Provider</h2>
            <p className="mt-2">Your trusted source for the latest news and information.</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 ml-2">
              <a href="https://instagram.com" className="hover:text-primary">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" className="hover:text-primary">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 News Articles Provider. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;