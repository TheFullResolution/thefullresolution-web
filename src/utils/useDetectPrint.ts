import { useEffect, useState } from 'react';

export function useDetectPrint() {
  const [isPrinting, setIsPrinting] = useState(false);
  const handleBeforeprint = () => setIsPrinting(true);
  const handleAfterprint = () => setIsPrinting(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeprint', handleBeforeprint);
      window.addEventListener('afterprint', handleAfterprint);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('beforeprint', handleBeforeprint);
        window.removeEventListener('afterprint', handleAfterprint);
      }
    };
  });

  return isPrinting;
}
