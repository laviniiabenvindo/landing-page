import React, { ReactNode } from 'react';
import { FiMail } from 'react-icons/fi';

interface ItemFeatureProps {
  icons: ReactNode;
  title: string;
  text: string;
}
export function ItemFeature({icons, title, text}: ItemFeatureProps) {
  return (
    <div className="text-center w-full max-w-96">
      <div className="w-12 h-12 bg-brand-100 rounded-full mx-auto border-8 border-brand-50 mb-5 flex items-center justify-center">
       {icons}
      </div>
      <h3 className="text-gray-900 text-lg/6 font-medium mb-2">
        {title}
      </h3>
      <p className="text-gray-600 leading-6">
        {text}
      </p>
    </div>
  );
}
