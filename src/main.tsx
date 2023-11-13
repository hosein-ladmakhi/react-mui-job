import { createRoot } from 'react-dom/client';
import Root from './root';

const rootElement = document.getElementById('root')!;

createRoot(rootElement).render(<Root />);
