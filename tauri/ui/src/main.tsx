import { LoaderCircle } from 'lucide-react';
import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { initI18n } from '~/i18n';

function Loading() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <LoaderCircle className="animate-spin size-8" />
    </div>
  );
}

const App = lazy(() => import('./app'));

function main() {
  const root = document.getElementById('root');

  if (!root) {
    throw new Error('no root element');
  }

  initI18n();

  createRoot(root).render(
    <StrictMode>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </StrictMode>,
  );
}

main();
