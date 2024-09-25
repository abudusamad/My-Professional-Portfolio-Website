"use client";

import { useEffect, useState } from "react";
import { CheckCircleIcon } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  const [visible, setVisible] = useState(!!message);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 5000); // 5000ms = 5s

      return () => {
        clearTimeout(timer);
      };
    }
  }, [message]);

  if (!visible) return null;
  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2  text-sm text-emerald-500 border-l-8 border-emerald-500">
      <CheckCircleIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
