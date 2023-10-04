export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/generic_b47a39ba.mjs').then(n => n.g);

export { page };
