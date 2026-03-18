import useTheme from '../../hooks/useTheme';

const iconClassName = 'h-5 w-5';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-full p-2 text-brand-purple transition-all duration-200 hover:bg-brand-purple-light dark:text-brand-orange-light dark:hover:bg-brand-purple-light/20"
    >
      {isDark ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClassName}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2.5v2.25" />
          <path d="M12 19.25v2.25" />
          <path d="M4.93 4.93l1.6 1.6" />
          <path d="M17.47 17.47l1.6 1.6" />
          <path d="M2.5 12h2.25" />
          <path d="M19.25 12h2.25" />
          <path d="M4.93 19.07l1.6-1.6" />
          <path d="M17.47 6.53l1.6-1.6" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClassName}
          aria-hidden="true"
        >
          <path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a6.9 6.9 0 1 0 10.7 10.7Z" />
        </svg>
      )}
    </button>
  );
}
