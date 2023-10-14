import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_992cd7c2.mjs';
import './chunks/astro_33b2da23.mjs';
import './chunks/pages/generic_716de27d.mjs';
import './chunks/astro-assets-services_a97ce412.mjs';
import './chunks/pages/articles_fea3ce3e.mjs';
import 'os';
import 'fs';
import 'url';
import 'path';
import './chunks/pages/404_7bf33b48.mjs';
/* empty css                                    *//* empty css                               *//* empty css                                    */
const _page0  = () => import('./chunks/generic_e9685524.mjs');
const _page1  = () => import('./chunks/index_0a85a683.mjs');
const _page2  = () => import('./chunks/attorney-profiles_4ea08717.mjs');
const _page3  = () => import('./chunks/practice-areas_693463b5.mjs');
const _page4  = () => import('./chunks/contact-us_8c475cb7.mjs');
const _page5  = () => import('./chunks/articles_3e2defda.mjs');
const _page6  = () => import('./chunks/404_a09b3fee.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.2.4/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/attorney-profiles.astro", _page2],["src/pages/practice-areas.astro", _page3],["src/pages/contact-us.astro", _page4],["src/pages/articles.astro", _page5],["src/pages/404.astro", _page6]]);
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
