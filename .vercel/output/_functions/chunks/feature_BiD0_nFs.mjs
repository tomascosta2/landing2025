import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate } from './astro/server_Df0hFhhn.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Feature = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Feature;
  const { feature } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="p-4 rounded-lg border border-neutral-200 bg-neutral-50 flex flex-col gap-2 trasition-all duration-300 hover:shadow-lg hover:bg-neutral-100"> <h5 class="font-semibold">✅ ${feature?.titulo}</h5> <span class="font-light text-sm"> ${feature?.descripcion} </span> </li>`;
}, "/home/tomas/sites/landing2025/src/pages/landingbuilderslab/components/feature.astro", void 0);

const $$file = "/home/tomas/sites/landing2025/src/pages/landingbuilderslab/components/feature.astro";
const $$url = "/landingbuilderslab/components/feature";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Feature,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Feature as $, _page as _ };
