import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_33b2da23.mjs';
import { a as $$Icon, $ as $$Layout } from './articles_a414bf84.mjs';
/* empty css                           */import { $ as $$Image } from './generic_b792b8b0.mjs';
import 'os';
import 'fs';
import 'url';
import 'path';
import './404_99202f5c.mjs';
/* empty css                              *//* empty css                         *//* empty css                              */import '../astro-assets-services_a97ce412.mjs';

const $$Astro$3 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-dohjnao5><a${addAttribute(href, "href")} data-astro-cid-dohjnao5><h2 data-astro-cid-dohjnao5>${title}<span data-astro-cid-dohjnao5>&rarr;</span></h2><p data-astro-cid-dohjnao5>${body}</p></a></li>`;
}, "/Users/todd/Repositories/Copus-Law/src/components/Card.astro", void 0);

const ladyJustice = {"src":"/_astro/lady-justice.347f30ab.png","width":1500,"height":1500,"format":"png"};

const $$Astro$2 = createAstro();
const $$HeroSwiper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeroSwiper;
  const slides = [
    {
      title: "Title one",
      image: ladyJustice,
      description: "Description one"
    },
    {
      title: "Title two",
      image: ladyJustice,
      description: "Description one"
    },
    {
      title: "Title three",
      image: ladyJustice,
      description: "Description one"
    }
  ];
  return renderTemplate`${renderComponent($$result, "swiper-container", "swiper-container", { "class": "swiper", "slides-per-view": "1", "speed": "500", "loop": "true", "css-mode": "true", "pagination": "true", "pagination-clickable": "true", "space-between": "30", "mousewheel": "true", "data-astro-cid-xyhqzi2j": true }, { "default": () => renderTemplate`${slides.map((slide) => renderTemplate`${renderComponent($$result, "swiper-slide", "swiper-slide", { "class": "container", "data-astro-cid-xyhqzi2j": true }, { "default": () => renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 100 100" class="years-experience" width="100" height="100" data-astro-cid-xyhqzi2j><defs data-astro-cid-xyhqzi2j><path id="circle" d="M 50, 50m -37, 0a 37,37 0 1,1 74,0a 37,37 0 1,1 -74,0" data-astro-cid-xyhqzi2j></path></defs><text font-size="30" class="years" transform="matrix(1 0 0 1 32 57)" data-astro-cid-xyhqzi2j>
40
</text><text font-size="12" data-astro-cid-xyhqzi2j><textPath href="#circle" data-astro-cid-xyhqzi2j>
years of combined legal practice
</textPath></text></svg><p class="tagline" data-astro-cid-xyhqzi2j>Accomplished. Experienced. Thorough.</p><h1 class="heading" data-astro-cid-xyhqzi2j>${slide.title}</h1>${renderComponent($$result, "Image", $$Image, { "src": slide.image, "alt": "a statue of the lady justice holding scales", "data-astro-cid-xyhqzi2j": true })}<p class="description" data-astro-cid-xyhqzi2j>${slide.description}</p>` })}`)}` })}`;
}, "/Users/todd/Repositories/Copus-Law/src/components/HeroSwiper.astro", void 0);

const $$Astro$1 = createAstro();
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Firstname Lastname",
      color: "white"
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Firstname Lastname",
      color: "white"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Firstname Lastname",
      color: "white"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Firstname Lastname",
      color: "white"
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Firstname Lastname",
      color: "white"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Firstname Lastname",
      color: "white"
    }
  ];
  return renderTemplate`${renderComponent($$result, "swiper-container", "swiper-container", { "class": "swiper", "slides-per-view": "3", "slides-per-group": "3", "speed": "500", "loop": "true", "css-mode": "true", "pagination": "true", "pagination-clickable": "true", "space-between": "30", "mousewheel": "true", "data-astro-cid-aadlzisc": true }, { "default": () => renderTemplate`${testimonials.map((testimonial) => renderTemplate`${renderComponent($$result, "swiper-slide", "swiper-slide", { "data-astro-cid-aadlzisc": true }, { "default": () => renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "quote-left-solid", "class": "icon", "data-astro-cid-aadlzisc": true })}${maybeRenderHead()}<p class="testimonial" data-astro-cid-aadlzisc>${testimonial.text}</p><span class="author" data-astro-cid-aadlzisc>${testimonial.author}</span>` })}`)}` })}`;
}, "/Users/todd/Repositories/Copus-Law/src/components/Testimonials.astro", void 0);

const monalisa = {"src":"/_astro/monalisa.628adf3c.jpg","width":1400,"height":892,"format":"jpg"};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const practices = [
    {
      icon: "family-light",
      title: "Family Law",
      description: "Representation in civil family law.",
      link: "/custom.vue",
      linkText: "learn more"
    },
    {
      icon: "house-heart-light",
      title: "Estate Planning",
      description: "Representation in Estate Planning.",
      link: "/",
      linkText: "learn more"
    },
    {
      icon: "scale-balanced-light",
      title: "Cilvil Litigation",
      description: "Representation in civil litigation cases.",
      link: "/",
      linkText: "learn more"
    },
    {
      icon: "gavel-light",
      title: "Mediation",
      description: "Representation in civil Mediation cases.",
      link: "/",
      linkText: "learn more"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "HeroSwiper", $$HeroSwiper, { "data-astro-cid-j7pv25f6": true })}${maybeRenderHead()}<main id="main" data-astro-cid-j7pv25f6><!-- Intro --><article class="intro container" data-astro-cid-j7pv25f6><header class="flow" data-astro-cid-j7pv25f6><span class="subhead color-brand" data-astro-cid-j7pv25f6>About us</span><h1 data-astro-cid-j7pv25f6>
Welcome to <br data-astro-cid-j7pv25f6>
Coups &amp; Copus
</h1></header><div class="description" data-astro-cid-j7pv25f6><p data-astro-cid-j7pv25f6>
Welcome to [Law Firm Name], where justice is our cornerstone. With a
					legacy of excellence and a relentless pursuit of truth, our
					distinguished law firm stands as a pillar of trust and advocacy in the
					legal landscape.
</p><p data-astro-cid-j7pv25f6>
At [Law Firm Name], we understand that every client deserves unwavering
					dedication and personalized attention. Our team of experienced attorneys
					combines expertise, integrity, and a deep understanding of the law to
					provide comprehensive legal solutions tailored to meet your unique
					needs.
</p><p data-astro-cid-j7pv25f6>
Whether you require guidance in corporate law, civil litigation,
					criminal defense, family law, or any other legal matter, our firm offers
					a wide range of practice areas, ensuring that we can effectively
					navigate the complexities of your case. We are committed to protecting
					your rights, achieving favorable outcomes, and delivering justice with
					compassion and professionalism.
</p></div></article><!-- practice-areas --><article class="practice-areas container flow" data-astro-cid-j7pv25f6><header class="flow" data-astro-cid-j7pv25f6><span class="subhead color-brand" data-astro-cid-j7pv25f6>Our Services</span><h2 class="heading" data-astro-cid-j7pv25f6>Areas of practice</h2></header><ul class="practices" data-astro-cid-j7pv25f6>${practices.map((practice) => renderTemplate`<li class="flow" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Icon", $$Icon, { "name": practice.icon, "class": "icon", "data-astro-cid-j7pv25f6": true })}<strong class="title" data-astro-cid-j7pv25f6>${practice.title}</strong><p class="description" data-astro-cid-j7pv25f6>${practice.description}</p><a href="/" data-astro-cid-j7pv25f6>${practice.linkText}</a></li>`)}</ul></article><!-- practice-areas --><article class="the-team" data-astro-cid-j7pv25f6><div class="image" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Image", $$Image, { "src": monalisa, "alt": "The team of Copus law", "data-astro-cid-j7pv25f6": true })}</div><div class="content flow" data-astro-cid-j7pv25f6><header class="flow" data-astro-cid-j7pv25f6><span class="subhead" data-astro-cid-j7pv25f6>Our Team</span><h2 data-astro-cid-j7pv25f6>Meet Our Professional Team</h2></header><p data-astro-cid-j7pv25f6>
Whether you require guidance in corporate law, civil litigation,
					criminal defense, family law, or any other legal matter, our firm offers
					a wide range of practice areas, ensuring that we can effectively
					navigate the complexities of your case. We are committed to protecting
					your rights, achieving favorable outcomes, and delivering justice with
					compassion and professionalism.
</p><button data-astro-cid-j7pv25f6>Learn more</button></div></article><!-- practice-areas --><article class="testimonials container" data-astro-cid-j7pv25f6><header class="flow" data-astro-cid-j7pv25f6><span class="subhead" data-astro-cid-j7pv25f6>Testimonials</span><h2 data-astro-cid-j7pv25f6>Our Happy Clients</h2></header>${renderComponent($$result2, "Testimonials", $$Testimonials, { "data-astro-cid-j7pv25f6": true })}</article><!-- --><!-- --><ul role="list" class="link-card-grid" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Card", $$Card, { "href": "https://docs.astro.build/", "title": "Documentation", "body": "Learn how Astro works and explore the official API docs.", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/integrations/", "title": "Integrations", "body": "Supercharge your project with new frameworks and libraries.", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/themes/", "title": "Themes", "body": "Explore a galaxy of community-built starter themes.", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/chat/", "title": "Community", "body": "Come say hi to our amazing Discord community. \u2764\uFE0F", "data-astro-cid-j7pv25f6": true })}</ul></main>` })}`;
}, "/Users/todd/Repositories/Copus-Law/src/pages/index.astro", void 0);

const $$file = "/Users/todd/Repositories/Copus-Law/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
