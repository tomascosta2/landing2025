import { r as renderers } from './chunks/internal_BsTt5pTQ.mjs';
import { c as createExports } from './chunks/entrypoint_BXwa9WrT.mjs';
import { manifest } from './manifest_qAwvqwdG.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/track/lead.astro.mjs');
const _page2 = () => import('./pages/b.astro.mjs');
const _page3 = () => import('./pages/landingbuilderslab/components/faqs.astro.mjs');
const _page4 = () => import('./pages/landingbuilderslab.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/track/lead.ts", _page1],
    ["src/pages/b/index.astro", _page2],
    ["src/pages/landingbuilderslab/components/Faqs.astro", _page3],
    ["src/pages/landingbuilderslab/index.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b0f32e29-ed0e-4ff4-b647-7d541562a9b8",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
