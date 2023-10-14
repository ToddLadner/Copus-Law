import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_33b2da23.mjs';
import { $ as $$Layout } from './articles_a414bf84.mjs';
import 'os';
import 'fs';
import 'url';
import 'path';
import './404_99202f5c.mjs';
/* empty css                              *//* empty css                         *//* empty css                              */
const $$Astro = createAstro();
const $$PracticeAreas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PracticeAreas;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Attorney Profiles" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1>Attorney Profiles</h1>` })}`;
}, "/Users/todd/Repositories/Copus-Law/src/pages/practice-areas.astro", void 0);

const $$file = "/Users/todd/Repositories/Copus-Law/src/pages/practice-areas.astro";
const $$url = "/practice-areas";

export { $$PracticeAreas as default, $$file as file, $$url as url };
