import React, { FC, ReactElement, useState } from 'react';

interface AnnouncementBannerProps {
  message: string;
  linkUrl: string;
  linkText: string;
}

const AnnouncementBanner: FC<AnnouncementBannerProps> = ({
  message,
  linkUrl,
  linkText
}): ReactElement | null => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-r from-orange-600 to-orange-500 text-white py-3 px-4 text-center">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap pr-8">
        <span className="text-sm font-medium">{message}</span>
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold underline hover:no-underline"
        >
          {linkText}
        </a>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors"
        aria-label="Close announcement"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  );
};

export default AnnouncementBanner;
