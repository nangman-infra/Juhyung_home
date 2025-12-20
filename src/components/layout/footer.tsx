import { site_info } from '@/constants/ui';

export const Footer = () => {
  return (
    <footer className="border-t mt-20 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm lowercase">
            © {new Date().getFullYear()} {site_info.owner}. all rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/Juuuuuuuh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors text-sm lowercase"
            >
              github
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors text-sm lowercase"
            >
              linkedin
            </a>
            <a
              href="mailto:kimjuhyung0320@gmail.com"
              className="text-gray-500 hover:text-blue-600 transition-colors text-sm lowercase"
            >
              email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
