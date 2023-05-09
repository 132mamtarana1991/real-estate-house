import React from 'react';

export default function Error() {
  return (
    <div
      className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <span className="font-medium">Request Failed</span>
    </div>
  );
}
