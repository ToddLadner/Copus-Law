import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_15c40f5f.mjs';
import './chunks/astro_66e502e3.mjs';
import './chunks/pages/image-endpoint_7b651bf1.mjs';
import './chunks/astro-assets-services_90a31e4d.mjs';

const _page0  = () => import('./chunks/image-endpoint_3e181179.mjs');
const _page1  = () => import('./chunks/index_0fa30f96.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.2.0/node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
