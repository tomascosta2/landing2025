import { r as renderers } from './chunks/internal_BsTt5pTQ.mjs';
import { c as createExports } from './chunks/entrypoint_9VtQtp0j.mjs';
import { manifest } from './manifest_B1suix3u.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/track/lead.astro.mjs');
const _page2 = () => import('./pages/b.astro.mjs');
const _page3 = () => import('./pages/landingbuilderslab/components/cta.astro.mjs');
const _page4 = () => import('./pages/landingbuilderslab/components/cta-button.astro.mjs');
const _page5 = () => import('./pages/landingbuilderslab/components/faqs.astro.mjs');
const _page6 = () => import('./pages/landingbuilderslab/components/feature.astro.mjs');
const _page7 = () => import('./pages/landingbuilderslab.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/track/lead.ts", _page1],
    ["src/pages/b/index.astro", _page2],
    ["src/pages/landingbuilderslab/components/cta.astro", _page3],
    ["src/pages/landingbuilderslab/components/cta-button.astro", _page4],
    ["src/pages/landingbuilderslab/components/Faqs.astro", _page5],
    ["src/pages/landingbuilderslab/components/feature.astro", _page6],
    ["src/pages/landingbuilderslab/index.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d39d68cd-4078-4774-8bc9-dfd6a1f3adb6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
