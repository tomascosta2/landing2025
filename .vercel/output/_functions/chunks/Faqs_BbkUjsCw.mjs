import { c as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead } from './astro/server_Df0hFhhn.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Faqs = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      pregunta: "\xBFY si reci\xE9n estoy aprendiendo a hacer p\xE1ginas?",
      respuesta: "No te preocupes. Te damos un m\xE9todo paso a paso para conseguir tus primeros clientes y las bases de c\xF3mo armamos nuestras landings. El objetivo es que puedas vender, incluso mientras perfeccion\xE1s tus habilidades, y atraigas clientes de calidad."
    },
    {
      pregunta: "\xBFEsto funciona si reci\xE9n estoy empezando como freelancer?",
      respuesta: "S\xED, y de hecho es ideal si est\xE1s empezando. Vender landings es uno de los servicios m\xE1s sencillos de ofrecer: la mayor\xEDa de los negocios la necesitan y no saben por d\xF3nde empezar. Te muestro c\xF3mo posicionarte aunque a\xFAn no tengas clientes."
    },
    {
      pregunta: "\xBFVoy a poder cobrar bien por este servicio?",
      respuesta: "Definitivamente. Las landings bien hechas generan ventas, y los negocios est\xE1n dispuestos a pagar por ello. Te ense\xF1o a presentar tu oferta, comunicar el valor y cerrar ventas, incluso si nunca vendiste servicios antes."
    },
    {
      pregunta: "\xBFNecesito invertir en herramientas pagas?",
      respuesta: "No. Te muestro c\xF3mo empezar con herramientas gratuitas para que no gastes un peso al principio. Primero vend\xE9s; despu\xE9s decid\xEDs si quer\xE9s invertir en algo m\xE1s avanzado."
    },
    {
      pregunta: "\xBFQu\xE9 pasa si ya intent\xE9 vender otros servicios y no funcion\xF3?",
      respuesta: "Por eso mismo cre\xE9 este m\xE9todo. Yo tambi\xE9n prob\xE9 varios servicios antes de encontrar algo que se venda pr\xE1cticamente solo. Las landings resuelven un problema urgente\u2014generar ventas\u2014y por eso son mucho m\xE1s f\xE1ciles de ofrecer."
    }
  ];
  return renderTemplate(_a || (_a = __template(["", '<section id="faqs" class="relative py-[80px] md:py-[60px] px-4"> <h2 class="text-[32px] text-[#111] md:text-[42px] font-semibold mb-4 text-center">\nPreguntas Frecuentes\n</h2> <div class="max-w-[800px] mx-auto" id="faq-container"> ', ' </div> </section> <script>\n  const faqItems = document.querySelectorAll(".faq-item");\n\n  faqItems.forEach((item) => {\n    const question = item.querySelector(".faq-question");\n    const answer = item.querySelector(".faq-answer");\n    const icon = item.querySelector(".faq-icon");\n\n    question.addEventListener("click", () => {\n      const isOpen = answer.classList.contains("max-h-[2000px]");\n\n      document\n        .querySelectorAll(".faq-answer")\n        .forEach((ans) => ans.classList.remove("max-h-[2000px]"));\n      document\n        .querySelectorAll(".faq-icon")\n        .forEach((i) => i.classList.remove("rotate-45"));\n\n      if (!isOpen) {\n        answer.classList.add("max-h-[2000px]");\n        icon.classList.add("rotate-45");\n      }\n    });\n  });\n<\/script>'])), maybeRenderHead(), faqs.map((item, index) => renderTemplate`<div class="faq-item w-full cursor-pointer p-[20px] border-b border-b-[#111]/50 last:border-b-0"${addAttribute(index, "data-index")}> <h3 class="faq-question font-semibold text-[18px] md:text-[20px] text-[#111] flex justify-between items-center"> ${item.pregunta} <svg class="faq-icon min-w-[18px] size-[18px] transition-all duration-300" fill="#111" viewBox="0 0 448 512"> <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path> </svg> </h3> <div class="faq-answer normal-case overflow-hidden duration-500 transition-all max-h-0"> <p class="text-[#111]/80 md:text-[18px] pt-[10px]"> ${item.respuesta} </p> </div> </div>`));
}, "/home/tomas/sites/landing2025/src/pages/landingbuilderslab/components/Faqs.astro", void 0);

const $$file = "/home/tomas/sites/landing2025/src/pages/landingbuilderslab/components/Faqs.astro";
const $$url = "/landingbuilderslab/components/Faqs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faqs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Faqs as $, _page as _ };
