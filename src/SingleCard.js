import React from 'react';

export const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <div className="p-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <a href={titleHref} className="text-primary hover:underline">
          <span className="font-semibold">{CardTitle}</span>
        </a>
        <div className="mt-4">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-gray-800"></div>
            <img
              src={image}
              alt={CardTitle}
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
          <p className="mt-2 text-center text-gray-700">{CardDescription}</p>
          {Button && (
            <a
              href={btnHref}
              className="inline-block mt-2 px-4 py-2 text-sm font-medium text-white bg-primary rounded-full transition hover:bg-primary-dark"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
