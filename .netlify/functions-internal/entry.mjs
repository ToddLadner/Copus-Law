import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_66778ad0.mjs';
import './chunks/astro_4ee3d657.mjs';
import './chunks/pages/generic_b47a39ba.mjs';
import './chunks/astro-assets-services_f249fae9.mjs';

const _page0  = () => import('./chunks/generic_f7be376d.mjs');
const _page1  = () => import('./chunks/index_7719e353.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.2.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1]]);
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
