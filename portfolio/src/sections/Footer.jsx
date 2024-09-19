const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <a target="_blank" href="https://github.com/leodefarias" className="social-icon cursor-pointer">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
          <a target="_blank" href="https://linkedin.com/in/leonardodefarias" className="social-icon cursor-pointer">
            <img src="/assets/linkedin.svg" alt="linkedIn" className="w-1/2 h-1/2" />
          </a>
          <a target="_blank" href="https://instagram.com/leodefarias_" className="social-icon cursor-pointer">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </a>
        </div>
  
        <p className="text-white-500">© 2024 Leonardo de Farias. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;