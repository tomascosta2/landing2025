import { c as createComponent, m as maybeRenderHead, r as renderTemplate, b as addAttribute, a as createAstro, g as renderScript, f as renderComponent } from '../chunks/astro/server_Df0hFhhn.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout, a as $$Copy } from '../chunks/Layout_B6x3yIUb.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="pb-[100px] pt-[80px] relative overflow-clip"> <div class="absolute opacity-15 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div> <div class="tcp-container relative"> <div class="md:flex md:gap-8"> <div> <div class="relative w-fit mx-auto md:mx-0"> <img src="/images/hello-emoji.webp" class="--hello absolute bottom-0 left-0 bg-white border border-black/20 rounded-full size-[40px] p-2 flex items-center justify-center text-[20px]"> <img class="size-[100px] border-3 border-black/20 rounded-full mx-auto bg-gray-300" src="/images/tomas-costa-paginas-web.webp" alt="Tomas Costa ~ Paginas Web Personalizadas"> </div> <div class="mt-12 relative"> <!-- Particulas --> <div class="size-[10px] rounded-full bgPurple absolute -top-[60px] right-[40px] --move-down"></div> <div class="triangle --purple -rotate-15 absolute left-[20px] md:-left-[100px] top-[100px] --move-up"></div> <div class="triangle --yellow rotate-15 absolute right-[40px] bottom-[120px] --move-up"></div> <!-- Fin Particulas --> <h1 class="text-center md:text-start text-[32px] font-extrabold text-[#424242] leading-[110%] mb-4">
Hacemos las mejores páginas web para negocios online
</h1> <p class="text-center md:text-start text-[18px] font-normal max-w-[300px] mx-auto md:mx-0 text-[#111]/80 leading-[110%]">
Tu sitio web dice mucho de vos... Hagamos que <strong>Hable Bien</strong> </p> <a class="tcp-btn mt-12" href="#planes">
¡Ver Paquetes!
<br> <span class="--temblor font-medium text-[14px] text-white/80 block mt-1">*Solo 2 cupos por semana</span> </a> </div> </div> <div class="mt-14 appearFromBottom relative"> <img src="/images/hero-image-pc.webp" alt="Tomas Costa Landing Page Bio Founders"> <img class="w-[80px] absolute -bottom-0 right-0" src="/images/hero-image-phone.webp" alt="Tomas Costa Landing Page Bio Founders Mobile"> <img class="w-[80px] -left-[10px] absolute top-[140px] --move-up" src="/images/hero-image-analytics.webp" alt=""> <div class="--move-rotate w-[calc(100%-40px)] h-[200px] md:h-[330px] bgPurple rounded-lg absolute top-0 left-[10px] -rotate-5 -z-10"></div> <div class="--move-down absolute flex text-[18px] items-center justify-center font-bold text-[#00CC66] size-[70px] rounded-full bg-[#ECFFF6] border-4 border-[#00CC66] -top-[50px] left-[10px]">
100
</div> </div> </div> </div> </section>`;
}, "/home/tomas/sites/landing2025/src/components/Hero.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Testimonios = createComponent(($$result, $$props, $$slots) => {
  const TESTIMONIOS = [
    {
      nombre: "Matias Sanchez",
      cargo: "Coach Fitness",
      texto: "El salto de calidad que tuve en el dise\xF1o y calidad de mi Landing Page con Tomi fue incre\xEDble.",
      img: "tomas-costa-testimonio-2.jpg"
    },
    {
      nombre: "Alexis Mois",
      cargo: "Agencia de Marketing",
      texto: "La dedicaci\xF3n, el orden y el cuidado por los detalles hacen que trabajo de Tom\xE1s sea una excelente opci\xF3n para trabajar con nuestra agencia. Realmente un placer.",
      img: "tomas-costa-testimonio-1.jpg"
    },
    {
      nombre: "Vicente Calderon",
      cargo: "Agencia para consultores",
      texto: "Un gustazo trabajar con Tomas, la gran combinaci\xF3n de calidad y rapidez, en 7 d\xEDas logr\xF3 crear exactamente la idea que ten\xEDa en mi mente de mi p\xE1gina web. Destacando que estuvo 100% a disposici\xF3n para perfeccionar cada detalle que un \u201Ccliente exigente\u201D como yo le pod\xEDa pedir, un excelente servicio \u{1F44C}",
      img: "tomas-costa-testimonio-3.jpg"
    },
    {
      nombre: "Agustin Oroquieta",
      cargo: "Agencia de Marketing",
      texto: "Quer\xEDamos mejorar el dise\xF1o de nuestra web y en diez d\xEDas ya la ten\xEDamos funcionando. Adem\xE1s instal\xF3 Google Analytics y qued\xF3 s\xFAper disponible para todo lo que necesit\xE1bamos.",
      img: "tomas-costa-testimonio-4.jpg"
    },
    {
      nombre: "Lucas Reale",
      cargo: "Coach Fitness",
      texto: "Mi experiencia con tu servicio fue 10/10. Sinceramente desde el primer d\xEDa que comenzamos a trabajar vi mucho profesionalismo, compromiso y dedicaci\xF3n. Constantemente me ibas contando, preguntando, mostrando, etc. Eso me hac\xEDa tener mucha claridad. Muchas gracias por la buena onda y la atenci\xF3n \u{1F64C}\u{1F3FC}",
      img: "tomas-costa-testimonio-5.jpg"
    },
    {
      nombre: "Juampi Gardonio",
      cargo: "Coach Fitness",
      texto: "Tomi queridoo, te quer\xEDa agradecer por todo el laburo que hiciste con la web. Se nota que pusiste compromiso, siempre respondiste, estuviste presente y cumpliste con todo en tiempo y forma. Me encant\xF3 c\xF3mo qued\xF3 y representa exactamente lo que quer\xEDa transmitir. Mil gracias! Feliz con el resultado",
      img: "tomas-costa-testimonio-6.jpg"
    },
    {
      nombre: "Matias Rebozov",
      cargo: "Life Coach",
      texto: "Trabajar con Tom\xE1s fue un lujo impresionante. Expeditivo, atento, responsable y buena persona. Sin dudas es un placer trabajar con personas as\xED: atentas y enfoncadas en agregar valor a los dem\xE1s. Lo recomiendo!",
      img: "tomas-costa-testimonio-7.jpg"
    }
  ];
  return renderTemplate(_a || (_a = __template(["", '<section class="py-[90px] bg-[#111] rounded-tl-[60px] rounded-tr-[60px] overflow-clip"> <div class="tcp-container"> <h2 class="mb-8 font-bold text-[32px] text-white text-center leading-[110%]">\nPero... No son solo\n<br> <span class="--fade-up text-[#4F39F6]">P\xE1ginas Web</span> </h2> <div class="trigger --1"></div> <div class="swiper swiperTestimonios mt-8" style="overflow: visible !important;"> <div class="swiper-wrapper"> ', ' </div> <div class="swiper-pagination testimonios-pagination"></div> </div> <a class="tcp-btn to-animate mt-12 mx-auto" data-trigger="1" href="#planes"> <span>\xA1Ver Paquetes!</span> <span class="--temblor font-medium text-[14px] block mt-1">*Solo 2 cupos por semana</span> </a> </div> </section> <script>\n	document.addEventListener("DOMContentLoaded", () => {\n	  const btns = document.querySelectorAll(".tcp-btn.to-animate");\n  \n	  btns.forEach((btn) => {\n		const trigger = document.querySelector(".trigger.--" + btn.dataset.trigger);\n		if (!trigger) return;\n  \n		const observer = new IntersectionObserver(\n		  ([entry]) => {\n			if (entry.isIntersecting) {\n			  btn.classList.add("animate");\n			}\n		  },\n		  { threshold: 0.2 }\n		);\n  \n		observer.observe(trigger);\n	  });\n	});\n  <\/script>'])), maybeRenderHead(), TESTIMONIOS.map((testimonio) => renderTemplate`<div class="testimonio-card swiper-slide bg-[#2F2F2F] rounded-xl border border-white/20 p-8"> <div class="flex flex-col justify-between w-full min-h-[350px]"> <p class="text-white/80">
"${testimonio.texto}"
</p> <div class="flex items-center gap-4 mt-6"> <img class="size-[60px] rounded-full border border-white/20"${addAttribute(`/images/${testimonio.img}`, "src")}${addAttribute(`Testimonio de ${testimonio.nombre}`, "alt")}> <div class="text-white/80 text-sm"> <p class="font-bold"> ${testimonio.nombre} </p> <p>${testimonio.cargo}</p> </div> </div> </div> </div>`));
}, "/home/tomas/sites/landing2025/src/components/Testimonios.astro", void 0);

const $$Webs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-[40px] bg-[#111] overflow-clip"> <div class="tcp-container"> <div class="--slide-r grid grid-cols-6 gap-4 w-[1600px] md:w-[2000px] mb-4"> <img class="rounded-lg w-full aspect-square outline outline-white/10" src="/images/tomas-costa-webs-1.webp" alt="Tomas Costa Pagina Web 1"> <img class="rounded-lg w-full aspect-square outline outline-white/10" src="/images/tomas-costa-webs-2.webp" alt="Tomas Costa Pagina Web 1"> <img class="rounded-lg w-full aspect-square outline outline-white/10" src="/images/tomas-costa-webs-3.webp" alt="Tomas Costa Pagina Web 1"> <img class="bg-gray-300 rounded-lg w-full aspect-square outline outline-white/10" src="/images/tomas-costa-webs-1.webp" alt="Tomas Costa Pagina Web 1"> <img class="bg-gray-300 rounded-lg w-full aspect-square outline outline-white/10" src="/images/tomas-costa-webs-1.webp" alt="Tomas Costa Pagina Web 1"> <img class="bg-gray-300 rounded-lg w-full aspect-square outline outline-white/10" src="/images/tomas-costa-webs-1.webp" alt="Tomas Costa Pagina Web 1"> </div> <div class="--slide-l grid grid-cols-6 gap-4 w-[1600px] md:w-[2000px]"> <img class="rounded-lg w-full aspect-square outline outline-white/10" src="/images/tomas-costa-webs-4.webp" alt="Tomas Costa Pagina Web 1"> <img class="rounded-lg w-full aspect-square outline outline-white/10" src="/images/tomas-costa-webs-5.webp" alt="Tomas Costa Pagina Web 1"> <img class="rounded-lg w-full aspect-square outline outline-white/10" src="/images/tomas-costa-webs-6.webp" alt="Tomas Costa Pagina Web 1"> <img class="bg-gray-300 rounded-lg w-full aspect-square outline outline-white/10" src="/images/tomas-costa-webs-1.webp" alt="Tomas Costa Pagina Web 1"> <img class="bg-gray-300 rounded-lg w-full aspect-square outline outline-white/10" src="/images/tomas-costa-webs-1.webp" alt="Tomas Costa Pagina Web 1"> <img class="bg-gray-300 rounded-lg w-full aspect-square outline outline-white/10" src="/images/tomas-costa-webs-1.webp" alt="Tomas Costa Pagina Web 1"> </div> </div> </section>`;
}, "/home/tomas/sites/landing2025/src/components/Webs.astro", void 0);

const $$Astro = createAstro();
const $$Plans = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Plans;
  Astro2.url.pathname;
  const PLANES = [
    {
      icono: "/images/tomas-costa-landing-optin.svg",
      nombre: "Opt-In",
      descripcion: "Un embudo pensado para formar una base de datos con personas interesadas en tu producto o servicio.",
      precioDolar: "550",
      precioPesos: 550 * 1200,
      mensajeWpp: "Hola, me interesa la Landing Opt-In",
      incluye: [
        "Un a\xF1o de dominio pagado y su configuraci\xF3n",
        "Un a\xF1o de Hosting Gratis",
        "Certificado SSL",
        "Dise\xF1o enfocado en vender y transmitir autoridad",
        "Desarrollo profesional y optimizado",
        "Optimizaci\xF3n SEO B\xE1sica",
        "Versi\xF3n A/B para que te quedes con la mejor",
        "Integraci\xF3n con Pixel y API de Facebook para mejorar el rendimiento de tus campa\xF1as",
        "Integraci\xF3n con Google Analytics y HotJar",
        "1 mes Gratis de soporte",
        "Hasta 10 secciones incluidas",
        "Formulario automatizado y almacenamiento de datos en Google Sheets"
      ]
    },
    {
      icono: "/images/tomas-costa-landing-vsl.svg",
      nombre: "VSL",
      descripcion: "Ideal para vender servicios con un video que convence y convierte.",
      precioDolar: "450",
      precioPesos: 450 * 1200,
      mensajeWpp: "Hola, me interesa la Landing VSL",
      incluye: [
        "Un a\xF1o de dominio pagado y su configuraci\xF3n",
        "Un a\xF1o de Hosting Gratis",
        "Certificado SSL",
        "Dise\xF1o enfocado en vender y transmitir autoridad",
        "Desarrollo profesional y optimizado",
        "Optimizaci\xF3n SEO B\xE1sica",
        "Versi\xF3n A/B para que te quedes con la mejor",
        "Integraci\xF3n con Pixel de Facebook para mejorar el rendimiento de tus campa\xF1as",
        "Integraci\xF3n con Google Analytics y HotJar",
        "1 mes Gratis de soporte",
        "Hasta 6 secciones incluidas"
      ]
    },
    {
      icono: "/images/tomas-costa-landing-informativa.svg",
      nombre: "Informativa",
      descripcion: "Explic\xE1 qui\xE9n sos, qu\xE9 hac\xE9s y por qu\xE9 elegirte transmitiendo autoridad.",
      precioDolar: "500",
      precioPesos: 500 * 1200,
      mensajeWpp: "Hola, me interesa la Landing Informativa",
      incluye: [
        "Un a\xF1o de dominio pagado y su configuraci\xF3n",
        "Un a\xF1o de Hosting Gratis",
        "Certificado SSL",
        "Dise\xF1o enfocado en vender y transmitir autoridad",
        "Desarrollo profesional y optimizado",
        "Optimizaci\xF3n SEO B\xE1sica",
        "Versi\xF3n A/B para que te quedes con la mejor",
        "Integraci\xF3n con Pixel de Facebook para mejorar el rendimiento de tus campa\xF1as",
        "Integraci\xF3n con Google Analytics y HotJar",
        "1 mes Gratis de soporte",
        "Hasta 12 secciones incluidas"
      ]
    },
    {
      icono: "/images/tomas-costa-landing-venta-directa.svg",
      nombre: "Venta Directa",
      descripcion: "Ideal para productos Low-Ticket y Mid-Ticket como cursos o materiales pago.",
      precioDolar: "650",
      precioPesos: 650 * 1200,
      mensajeWpp: "Hola, me interesa la Landing Venta Directa",
      incluye: [
        "Un a\xF1o de dominio pagado y su configuraci\xF3n",
        "Un a\xF1o de Hosting Gratis",
        "Certificado SSL",
        "Dise\xF1o enfocado en vender y transmitir autoridad",
        "Desarrollo profesional y optimizado",
        "Optimizaci\xF3n SEO B\xE1sica",
        "Versi\xF3n A/B para que te quedes con la mejor",
        "Integraci\xF3n con pasarelas de pago como Stripe, Mercado Pago, etc",
        "1 mes Gratis de soporte",
        "Hasta 12 secciones incluidas"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-[80px] overflow-clip" id="planes"> <div class="tcp-container"> <h2 class="text-[32px] text-[#424242] font-extrabold text-center md:text-start leading-[110%]">
Encontremos
<br> <span class="textPurple"> Tu Landing Ideal </span> </h2> <div class="mt-8 grid gap-4"> ${PLANES.map((plan) => {
    return renderTemplate`<div class="testimonio-card swiper-slide bg-white rounded-xl shadow-[0px_0px_30px_0px_#00000010] px-8 py-12 md:px-8"> <div class="md:flex md:justify-between md:item gap-8"> <div> <img class="w-[65px] h-[55px] object-contain mx-auto md:mx-0"${addAttribute(plan.icono, "src")} alt="Landing Page VSL Tomas Costa"> <h2 class="text-[32px] text-[#424242] font-extrabold text-center md:text-start my-4 leading-[110%]">
Landing ${plan.nombre} </h2> <p class="text-center md:text-start max-w-[500px] md:px-0 text-[#1E1E1E]/80 px-4 leading-[120%]"> ${plan.descripcion} </p> </div> </div> <button class="tcp-btn --no-span --no-fixed mt-8 open-popup --plans-btn items-center"${addAttribute(plan.nombre, "data-plan")}> <div class="flex justify-between items-center w-full ps-4">
Quiero saber más
<span class="bg-[#ff8c3b] text-[#FFF] flex justify-center items-center size-[35px] p-2 rounded-full"> <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"></path></svg> </span> </div> </button> </div>`;
  })} </div> </div> </section>`;
}, "/home/tomas/sites/landing2025/src/components/Plans.astro", void 0);

const $$Popup = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="fixed bg-[#111]/40 top-0 left-0 w-full h-full z-50 hidden px-4" id="popup"> <div class="h-full flex items-center justify-center" id="popupContent"> <div class="bg-[#111] rounded-[20px] px-[32px] py-[64px] md:p-[72px] overflow-clip relative max-w-full"> <div class="md:w-[380px] max-w-full mx-auto relative"> <form action="" id="webhookForm"> <label for="email" class="text-[#fff] font-medium mb-4 block">
Tu correo electronico
<input required type="email" name="email" placeholder="hormozi@gmail.com" class="w-full p-[16px] rounded-[6px] bg-[#fff] mt-2 text-[#111]/60 placeholder:text-[14px] font-normal"> </label> <label for="phone" class="text-[#fff] font-medium block">
Tu número de WhatsApp
<div class="flex gap-2 mt-2"> <select name="countryCode" id="countryCode" class="p-[16px] rounded-[6px] bg-[#fff] text-[#111]/80 font-normal"> <option value="+54">🇦🇷 AR</option> <option value="+56">🇨🇱 CL</option> <option value="+57">🇨🇴 CO</option> <option value="+52">🇲🇽 MX</option> </select> <input required type="tel" name="phone" id="phoneInput" placeholder="2616841853" class="w-full p-[16px] rounded-[6px] bg-[#fff] text-[#111]/60 placeholder:text-[14px] font-normal"> </div> </label> <label for="presupuesto" class="text-[#fff] font-medium mt-6 block">
¿Cuánto estarías dispuesto a invertir en que tu Página
						Web Transmita Autoridad y Confianza a quienes entran?
<div class="mt-2 flex flex-col gap-3 text-[#fff]/90 text-[14px]"> <label class="flex items-center gap-2"> <input required type="radio" name="presupuesto" value="<350" class="accent-[#3B4FFF]" required>
Menos de usd350
</label> <label class="flex items-center gap-2"> <input required type="radio" name="presupuesto" value="400-700" class="accent-[#3B4FFF]">
Entre usd400 y usd700
</label> <label class="flex items-center gap-2"> <input required type="radio" name="presupuesto" value=">700" class="accent-[#3B4FFF]">
Más de usd700
</label> </div> </label> <button type="submit" class="tcp-btn mt-6 cursor-pointer"> <span id="agenda-text">¡Consultar!</span> <span id="agenda-loading" class="hidden"> <svg class="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> </span> </button> </form> </div> </div> </div> </section> ${renderScript($$result, "/home/tomas/sites/landing2025/src/components/Popup.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/tomas/sites/landing2025/src/components/Popup.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="md:hidden"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Testimonios", $$Testimonios, {})} ${renderComponent($$result2, "Copy", $$Copy, {})} ${renderComponent($$result2, "Webs", $$Webs, {})} ${renderComponent($$result2, "Plans", $$Plans, {})} <p class="text-center text-[14px] text-[#111]/40 px-4 pb-8">
© Tomás Costa Páginas Web 2025. Todos los derechos reservados.
</p> </div>  ${renderComponent($$result2, "Popup", $$Popup, {})}  <div class="hidden md:block"> <div class="max-w-[700px] mx-auto py-[100px]"> <div class="relative w-fit mx-auto"> <img src="/images/hello-emoji.webp" class="--hello absolute bottom-0 left-0 bg-white border border-black/20 rounded-full size-[40px] p-2 flex items-center justify-center text-[20px]"> <img class="size-[100px] border-3 border-black/20 rounded-full mx-auto bg-gray-300" src="/images/tomas-costa-paginas-web.webp" alt="Tomas Costa ~ Paginas Web Personalizadas"> </div> <div class="mt-12 relative"> <h1 class="text-center max-w-[500px] mx-auto text-[32px] font-extrabold text-[#424242] leading-[110%] mb-4">
Hacemos las mejores páginas web para negocios online
</h1> <p class="text-center text-[18px] font-normal max-w-[300px] mx-auto text-[#111]/80 leading-[110%]">
Tu sitio web dice mucho de vos... Hagamos que <strong>Hable Bien</strong> </p> <a class="tcp-btn mt-12 mx-auto open-popup" href="#planes">
Agendar llamada »
<br> <span class="--temblor font-medium text-[14px] text-white/80 block mt-1">*Solo 2 cupos por semana</span> </a> </div> </div> <p class="text-center text-[14px] text-[#111]/60 px-4">© Tomás Costa Páginas Web 2025. Todos los derechos reservados.</p> </div> ` })}`;
}, "/home/tomas/sites/landing2025/src/pages/b/index.astro", void 0);

const $$file = "/home/tomas/sites/landing2025/src/pages/b/index.astro";
const $$url = "/b";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
