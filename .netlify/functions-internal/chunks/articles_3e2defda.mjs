export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/articles_fea3ce3e.mjs').then(n => n.b);

export { page };
