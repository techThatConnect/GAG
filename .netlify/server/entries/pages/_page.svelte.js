import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { F as Footer } from "../../chunks/footer.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-iqkhe4{color:transparent;flex:100%}body.svelte-iqkhe4{background-image:linear-gradient(to top, rgba(38, 21, 47, 1), rgba(38, 21, 47, 0.25)), url('$lib/images/test.jpg');background-position:top;background-size:cover;background-repeat:no-repeat}@media(prefers-color-scheme: dark){body.svelte-iqkhe4{background-position:top;background-size:cover;background-repeat:no-repeat}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="h-screen svelte-iqkhe4"><br> <div class="p-4 border-2 m-4 text-center bg-gradient-to-t from-light_pink to-light dark:from-purp dark:to-dark border-4 border-black rounded-3xl " data-svelte-h="svelte-1vj6fwk"><h1 class="lg:text-9xl text-3xl text-center text-transparent font-bold bg-gradient-to-l from-dark to-purp dark:from-light_pink to-purp dark:to-dark_pink bg-clip-text svelte-iqkhe4">Glitter &amp; Grit</h1> <br> <h3>your premier source for drag entertainment in rural Nova Scotia.</h3></div> <br>  <div class="p-6" data-svelte-h="svelte-1s03kgm"><div id="curator-feed-default-feed-layout"><a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a></div><script type="text/javascript">/* curator-feed-default-feed-layout */
         (function(){
         var i,e,d=document,s="script";i=d.createElement("script");i.async=1;i.charset="UTF-8";
         i.src="https://cdn.curator.io/published/a6b7a1cb-b0a0-4975-a10e-1e5ee651b0fd.js";
         e=d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
         })();<\/script></div> ${validate_component(Footer, "Footthing").$$render($$result, {}, {}, {})} </body>`;
});
export {
  Page as default
};
