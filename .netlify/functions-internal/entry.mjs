import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_ab325b19.mjs';
import './chunks/astro_33b2da23.mjs';
import './chunks/pages/generic_b792b8b0.mjs';
import './chunks/astro-assets-services_a97ce412.mjs';
import './chunks/pages/articles_a414bf84.mjs';
import 'os';
import 'fs';
import 'url';
import 'path';
import './chunks/pages/404_99202f5c.mjs';
/* empty css                                    *//* empty css                               *//* empty css                                    */
const _page0  = () => import('./chunks/generic_944e8900.mjs');
const _page1  = () => import('./chunks/index_6e505cde.mjs');
const _page2  = () => import('./chunks/attorney-profiles_fae89373.mjs');
const _page3  = () => import('./chunks/practice-areas_392770f9.mjs');
const _page4  = () => import('./chunks/contact-us_2d8754aa.mjs');
const _page5  = () => import('./chunks/articles_7089e258.mjs');
const _page6  = () => import('./chunks/404_b9691a3a.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.2.4/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/attorney-profiles.astro", _page2],["src/pages/practice-areas.astro", _page3],["src/pages/contact-us.astro", _page4],["src/pages/articles.astro", _page5],["src/pages/404.astro", _page6]]);
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
