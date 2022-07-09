import React from 'react';

type ErrorProps = {
  type?: 'invalidAddress' | 'noData';
};

export const Error = ({ type = 'noData' }: ErrorProps) => {
  switch (type) {
    case 'invalidAddress':
      return <span className='text-red-500'>Invalid Wallet Address</span>;
    case 'noData':
      return <span>No content found</span>;
  }
};
