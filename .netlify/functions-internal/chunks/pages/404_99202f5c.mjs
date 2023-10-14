import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot, m as maybeRenderHead } from '../astro_33b2da23.mjs';
/* empty css                              *//* empty css                         */
const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/todd/Repositories/Copus-Law/node_modules/.pnpm/astro@3.2.4/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$NotFound = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NotFound;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-w3vjowwd><head>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-w3vjowwd": true })}<meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head><body data-astro-cid-w3vjowwd><h1 data-astro-cid-w3vjowwd>404 Not Found</h1>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/Users/todd/Repositories/Copus-Law/src/layouts/NotFound.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$NotFound, { "title": "Not Found." }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1>404 SON!</h1>` })}`;
}, "/Users/todd/Repositories/Copus-Law/src/pages/404.astro", void 0);

const $$file = "/Users/todd/Repositories/Copus-Law/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ViewTransitions as $, _404 as _ };
