const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Asusuigboamaka</h3>
            <p className="text-secondary-foreground/80">
              Preserving and celebrating the beauty of Asụsụ Igbo for generations to come.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Mission</h4>
            <p className="text-secondary-foreground/80">
              Reconnecting the Igbo diaspora with their linguistic heritage through education and community.
            </p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Asusuigboamaka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
