import { Link, useLocation } from 'react-router-dom';
import Seo from '../components/seo/Seo';

export default function NotFoundPage() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen items-center justify-center px-4 pt-20 text-center">
      <Seo
        title="Page Not Found"
        description="The page you are looking for does not exist."
        path={location.pathname || '/404'}
        noindex
      />
      <div className="max-w-xl rounded-2xl border border-border/70 bg-background/80 p-10 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Error 404</p>
        <h1 className="mt-3 text-4xl font-bold text-foreground">Page Not Found</h1>
        <p className="mt-3 text-muted-foreground">
          The URL may have changed or the page may have been removed.
        </p>
        <Link
          to="/"
          className="mt-7 inline-flex rounded-full border border-primary/25 bg-primary/10 px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
