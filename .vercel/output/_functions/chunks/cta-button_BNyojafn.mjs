import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_Df0hFhhn.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$CtaButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CtaButton;
  const className = `lb-btn ${Astro2.props.class || "mx-auto mt-8"}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(className, "class")} href="#Pricing"> <span class="text-2xl"> ¡Quiero la guía! </span> <span class="text-[#111]/80 text-[14px] block font-normal opacity-80">Solo usd $47 por tiempo limitado</span> </a>`;
}, "/home/tomas/sites/landing2025/src/pages/landingbuilderslab/components/cta-button.astro", void 0);

const $$file = "/home/tomas/sites/landing2025/src/pages/landingbuilderslab/components/cta-button.astro";
const $$url = "/landingbuilderslab/components/cta-button";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CtaButton,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CtaButton as $, _page as _ };
