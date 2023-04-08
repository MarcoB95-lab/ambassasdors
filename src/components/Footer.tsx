import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from 'next-themes';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  return (
    <footer className={theme === 'light' ? 'bg-white' : 'bg-gray-900'}>
      <div className="mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between">
        <div className={theme === 'light' ? 'bg-white' : 'bg-gray-900'}>
          © 2023 Web3-Ambassadors
        </div>
        <div className="flex items-center justify-center space-x-6">
          <a href="https://twitter.com/">
            <FontAwesomeIcon icon={faTwitter} className="text-blue-500 hover:text-blue-600 transition-colors duration-300" />
          </a>
          <a href="https://instagram.com/">
            <FontAwesomeIcon icon={faInstagram} className="text-pink-500 hover:text-pink-600 transition-colors duration-300" />
          </a>
          <a href="https://github.com/">
            <FontAwesomeIcon icon={faGithub} className="text-gray-500 hover:text-gray-600 transition-colors duration-300" />
          </a>
        </div>
      </div>
      <style jsx>{`
        footer {
          position: fixed;
          bottom: 0;
          width: 100%;
        }
        .main-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
