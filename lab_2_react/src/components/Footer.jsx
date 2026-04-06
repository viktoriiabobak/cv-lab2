import { useState, useEffect } from 'react';

const Footer = () => {
  const [systemInfo, setSystemInfo] = useState({ os: '', browser: '' });

  useEffect(() => {
    const currentOS = navigator.platform;
    const currentBrowser = navigator.userAgent;

    localStorage.setItem('os', currentOS);
    localStorage.setItem('browser', currentBrowser);

    const savedOS = localStorage.getItem('os');
    const savedBrowser = localStorage.getItem('browser');

    setSystemInfo({ os: savedOS, browser: savedBrowser });
  }, []); 

  return (
    <footer className="text-center py-8 mt-10 border-t border-gray-200 dark:border-gray-700">
      <p className="text-gray-600 dark:text-[#e0e0e0] text-sm">
        2026 Viktoriia Bobak | Lviv, Ukraine
      </p>
      
      {systemInfo.os && systemInfo.browser && (
        <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
          OS: {systemInfo.os} | Browser: {systemInfo.browser}
        </p>
      )}
    </footer>
  );
};

export default Footer;