import { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { cn } from '../../../../lib/utils';
import { speak } from './speak';

interface SpeakButtonProps {
  text: string;
  label?: string;
  className?: string;
}

/** A tap-to-hear pronunciation button for an Afrikaans word or phrase. */
const SpeakButton = ({ text, label, className }: SpeakButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await speak(text);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Hear "${text}" in Afrikaans`}
      className={cn(
        'inline-flex items-center justify-center rounded-full text-indigo-600 hover:bg-indigo-50 transition-colors p-1.5 align-middle',
        className,
      )}
    >
      {loading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
      {label ? <span className="ml-1 text-sm font-bold">{label}</span> : null}
    </button>
  );
};

export default SpeakButton;
