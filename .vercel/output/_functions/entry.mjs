import { r as renderers } from './chunks/internal_BsTt5pTQ.mjs';
import { c as createExports } from './chunks/entrypoint_DiQp9APn.mjs';
<<<<<<< HEAD
import { manifest } from './manifest_DumH1fIQ.mjs';
=======
import { manifest } from './manifest_T7Tn8mpn.mjs';
>>>>>>> 53ede5f44676364374c4c2d530dcb5f52c6118d2

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/track/lead.astro.mjs');
const _page2 = () => import('./pages/b.astro.mjs');
const _page3 = () => import('./pages/landingbuilderslab/components/cta.astro.mjs');
const _page4 = () => import('./pages/landingbuilderslab/components/cta-button.astro.mjs');
const _page5 = () => import('./pages/landingbuilderslab/components/faqs.astro.mjs');
const _page6 = () => import('./pages/landingbuilderslab/components/feature.astro.mjs');
const _page7 = () => import('./pages/landingbuilderslab.astro.mjs');
const _page8 = () => import('./pages/thankyou.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/track/lead.ts", _page1],
    ["src/pages/b/index.astro", _page2],
    ["src/pages/landingbuilderslab/components/cta.astro", _page3],
    ["src/pages/landingbuilderslab/components/cta-button.astro", _page4],
    ["src/pages/landingbuilderslab/components/Faqs.astro", _page5],
    ["src/pages/landingbuilderslab/components/feature.astro", _page6],
    ["src/pages/landingbuilderslab/index.astro", _page7],
    ["src/pages/thankyou/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
<<<<<<< HEAD
    "middlewareSecret": "351cc3cf-3f59-4afb-81fc-2c59a4d9696e",
=======
    "middlewareSecret": "8a7dd921-0355-4b99-a8bf-f22d4f322bc3",
>>>>>>> 53ede5f44676364374c4c2d530dcb5f52c6118d2
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
