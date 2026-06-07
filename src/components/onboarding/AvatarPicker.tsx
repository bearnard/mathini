'use client';

const AVATARS = [
  '/avatars/avatar-1.webp',
  '/avatars/avatar-2.webp',
  '/avatars/avatar-3.webp',
  '/avatars/avatar-4.webp',
  '/avatars/avatar-5.webp',
  '/avatars/avatar-6.webp',
  '/avatars/avatar-7.webp',
  '/avatars/avatar-8.webp',
];

interface AvatarPickerProps {
  value: string;
  onChange: (path: string) => void;
}

export default function AvatarPicker({ value, onChange }: AvatarPickerProps) {
  return (
    <div>
      <p className="text-sm font-medium text-slate-700 mb-2">Choose your mascot</p>
      <div className="flex flex-wrap gap-3 justify-center">
        {AVATARS.map((path) => (
          <button
            key={path}
            type="button"
            onClick={() => onChange(path)}
            className={[
              'rounded-full focus:outline-none transition-transform hover:scale-110',
              value === path
                ? 'ring-2 ring-indigo-500 ring-offset-2 scale-110'
                : 'ring-2 ring-transparent',
            ].join(' ')}
          >
            <img
              src={path}
              alt={path}
              className="w-14 h-14 rounded-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
