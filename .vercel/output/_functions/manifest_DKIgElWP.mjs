import 'kleur/colors';
import { g as decodeKey } from './chunks/astro/server_BLE4Oc2Z.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CpGIefgi.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/tomas/sites/landing2025/","cacheDir":"file:///home/tomas/sites/landing2025/node_modules/.astro/","outDir":"file:///home/tomas/sites/landing2025/dist/","srcDir":"file:///home/tomas/sites/landing2025/src/","publicDir":"file:///home/tomas/sites/landing2025/public/","buildClientDir":"file:///home/tomas/sites/landing2025/dist/client/","buildServerDir":"file:///home/tomas/sites/landing2025/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"b/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/b","isIndex":true,"type":"page","pattern":"^\\/b\\/?$","segments":[[{"content":"b","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/b/index.astro","pathname":"/b","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"landingbuilderslab/components/Faqs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/landingbuilderslab/components/faqs","isIndex":false,"type":"page","pattern":"^\\/landingbuilderslab\\/components\\/Faqs\\/?$","segments":[[{"content":"landingbuilderslab","dynamic":false,"spread":false}],[{"content":"components","dynamic":false,"spread":false}],[{"content":"Faqs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landingbuilderslab/components/Faqs.astro","pathname":"/landingbuilderslab/components/Faqs","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"landingbuilderslab/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/landingbuilderslab","isIndex":true,"type":"page","pattern":"^\\/landingbuilderslab\\/?$","segments":[[{"content":"landingbuilderslab","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landingbuilderslab/index.astro","pathname":"/landingbuilderslab","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/track/lead","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/track\\/lead\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"track","dynamic":false,"spread":false}],[{"content":"lead","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/track/lead.ts","pathname":"/api/track/lead","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/tomas/sites/landing2025/src/pages/landingbuilderslab/index.astro",{"propagation":"none","containsHead":true}],["/home/tomas/sites/landing2025/src/pages/b/index.astro",{"propagation":"none","containsHead":true}],["/home/tomas/sites/landing2025/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/landingbuilderslab/components/Faqs@_@astro":"pages/landingbuilderslab/components/faqs.astro.mjs","\u0000@astro-page:src/pages/api/track/lead@_@ts":"pages/api/track/lead.astro.mjs","\u0000@astro-page:src/pages/b/index@_@astro":"pages/b.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/landingbuilderslab/index@_@astro":"pages/landingbuilderslab.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","/home/tomas/sites/landing2025/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DpSt3PuR.mjs","\u0000@astrojs-manifest":"manifest_DKIgElWP.mjs","/home/tomas/sites/landing2025/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.8HhUXrVd.js","/home/tomas/sites/landing2025/src/components/Popup.astro?astro&type=script&index=0&lang.ts":"_astro/Popup.astro_astro_type_script_index_0_lang.0mMZK6Pu.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/tomas/sites/landing2025/src/components/Popup.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll(\".open-popup\").forEach(e=>{e.addEventListener(\"click\",()=>{document.getElementById(\"popup\")?.classList.toggle(\"hidden\")})});document.getElementById(\"popup\")?.addEventListener(\"click\",e=>{console.log(e.target,\" target:\",document.getElementById(\"popup\")),e.target===document.getElementById(\"popupContent\")&&document.getElementById(\"popup\")?.classList.add(\"hidden\")});document.querySelectorAll(\"#webhookForm\").forEach(e=>{e.addEventListener(\"submit\",async function(o){o.preventDefault();const n=new FormData(this),t=Object.fromEntries(n.entries());if(console.log(t),l(t),t.email&&t.phone&&t.countryCode&&t.presupuesto)if(t.presupuesto!==\"<350\"){document.getElementById(\"agenda-text\")?.classList.toggle(\"hidden\"),document.getElementById(\"agenda-loading\")?.classList.toggle(\"hidden\"),t.timestamp=new Date().toISOString(),t.landing=window.location.pathname.includes(\"/b\")?\"B\":\"A\",console.log(\"DATA: \",t);try{const a=await fetch(\"https://hook.us2.make.com/obfsv5zrls1rg7283a49iyyfojx0ob6p\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(t)});if(a.ok){const i=`https://wa.me/542616841853?text=${encodeURIComponent(\"Hola Tomi! Quiero una Landing\")}`;window.location.href=i,console.log(\"Response \",a)}else alert(\"Error al enviar el formulario.\")}catch{alert(\"Hubo un problema al enviar los datos.\")}}else alert(\"Lo sentimos pero por ahora no tenemos planes de menos de usd350\")})});function s(e){const n=`; ${document.cookie}`.split(`; ${e}=`);if(n.length===2)return n.pop()?.split(\";\").shift()}function r(){return\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(/[xy]/g,function(e){var o=Math.random()*16|0,n=e===\"x\"?o:o&3|8;return n.toString(16)})}const l=async e=>{const o=r();window.fbq(\"track\",\"Lead\",{email:e.email,phone:e.phone},{eventId:o}),await fetch(\"https://www.tomascostalp.com/api/track/lead\",{method:\"POST\",headers:{\"content-type\":\"application/json\"},body:JSON.stringify({email:e.email,phone:e.phone,fbp:s(\"_fbp\"),fbc:s(\"_fbc\"),eventId:o})})};"]],"assets":["/_astro/playfair-display-latin-wght-normal.BGlevZWC.woff2","/_astro/inter-latin-wght-normal.C2S99t-D.woff2","/_astro/playfair-display-cyrillic-wght-normal.Dr2SnCEI.woff2","/_astro/inter-cyrillic-ext-wght-normal.B2xhLi22.woff2","/_astro/inter-greek-ext-wght-normal.CGAr0uHJ.woff2","/_astro/playfair-display-vietnamese-wght-normal.DQ2yjD0Y.woff2","/_astro/playfair-display-latin-ext-wght-normal.CR05oQ3b.woff2","/_astro/inter-cyrillic-wght-normal.CMZtQduZ.woff2","/_astro/inter-vietnamese-wght-normal.CBcvBZtf.woff2","/_astro/inter-greek-wght-normal.CaVNZxsx.woff2","/_astro/inter-latin-ext-wght-normal.CFHvXkgd.woff2","/_astro/index.B-gfEX3G.css","/_astro/index.CRg1RzXS.css","/favicon.svg","/_astro/Layout.Cacu5y9W.css","/_astro/Layout.astro_astro_type_script_index_0_lang.8HhUXrVd.js","/images/agus.jpg","/images/binance.webp","/images/copy-analisis-1.jpg","/images/copy-analisis-2.jpg","/images/hello-emoji.webp","/images/hero-image-analytics.webp","/images/hero-image-pc.webp","/images/hero-image-phone.webp","/images/incluido.svg","/images/landing-buena-tomas-costa.webp","/images/landing-mala.webp","/images/lolo.jpg","/images/mercado-pago.webp","/images/patron-marca.webp","/images/sitio-biofounders-1.webp","/images/tomas-costa-landing-informativa.svg","/images/tomas-costa-landing-optin.svg","/images/tomas-costa-landing-venta-directa.svg","/images/tomas-costa-landing-vsl.svg","/images/tomas-costa-paginas-web.webp","/images/tomas-costa-testimonio-1.jpg","/images/tomas-costa-testimonio-2.jpg","/images/tomas-costa-testimonio-3.jpg","/images/tomas-costa-testimonio-4.jpg","/images/tomas-costa-testimonio-5.jpg","/images/tomas-costa-testimonio-6.jpg","/images/tomas-costa-testimonio-7.jpg","/images/tomas-costa-webs-1.webp","/images/tomas-costa-webs-2.webp","/images/tomas-costa-webs-3.webp","/images/tomas-costa-webs-4.webp","/images/tomas-costa-webs-5.webp","/images/tomas-costa-webs-6.webp","/images/landingbuilderslab/facturacion-landing-builders-lab.png","/images/landingbuilderslab/landing-builders-lab-cliente-1.webp","/images/landingbuilderslab/landing-builders-lab-cliente-2.webp","/images/landingbuilderslab/landing-builders-lab-cliente-3.webp","/images/landingbuilderslab/landing-builders-lab-cliente-4.webp","/images/landingbuilderslab/landing-builders-lab-cliente-5.webp","/images/landingbuilderslab/landing-builders-lab-founders.webp","/images/landingbuilderslab/landing-builders-lab-hero.png","/images/landingbuilderslab/landing-builders-lab-hero.webp","/images/landingbuilderslab/landing-builders-lab-logo.png","/images/landingbuilderslab/landing-builders-lab-tomas-costa.webp","/images/landingbuilderslab/pack-img.webp","/b/index.html","/landingbuilderslab/components/Faqs/index.html","/landingbuilderslab/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"/ThccwE5kWAaxcwfctIq5UQAiSI4TsAEpbVOxhzmUv4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
