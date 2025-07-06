import { r as renderers } from './chunks/internal_BsTt5pTQ.mjs';
import { c as createExports } from './chunks/entrypoint_Da7xBHWG.mjs';
import { manifest } from './manifest_D9w7KvIW.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/opt-in/submit-form.astro.mjs');
const _page2 = () => import('./pages/api/track/lead.astro.mjs');
const _page3 = () => import('./pages/b.astro.mjs');
const _page4 = () => import('./pages/landingbuilderslab/components/cta.astro.mjs');
const _page5 = () => import('./pages/landingbuilderslab/components/cta-button.astro.mjs');
const _page6 = () => import('./pages/landingbuilderslab/components/faqs.astro.mjs');
const _page7 = () => import('./pages/landingbuilderslab/components/feature.astro.mjs');
const _page8 = () => import('./pages/landingbuilderslab.astro.mjs');
const _page9 = () => import('./pages/thankyou.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/opt-in/submit-form.ts", _page1],
    ["src/pages/api/track/lead.ts", _page2],
    ["src/pages/b/index.astro", _page3],
    ["src/pages/landingbuilderslab/components/cta.astro", _page4],
    ["src/pages/landingbuilderslab/components/cta-button.astro", _page5],
    ["src/pages/landingbuilderslab/components/Faqs.astro", _page6],
    ["src/pages/landingbuilderslab/components/feature.astro", _page7],
    ["src/pages/landingbuilderslab/index.astro", _page8],
    ["src/pages/thankyou/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3a5fd495-8f83-47c1-a850-3e39e22c1a9a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
