import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { F as Footer } from "../../../chunks/footer.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-dzjgiq{color:transparent}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="h-screen bg-gradient-to-t from-light to-grey dark:bg-black"><br> <div class="p-4 xl:flex border-2 m-4 text-center bg-gradient-to-t from-light_pink to-light dark:from-purp dark:to-dark border-4 border-black rounded-3xl " data-svelte-h="svelte-gc3088"><h1 class="lg:text-9xl text-3xl text-center text-transparent font-bold bg-gradient-to-l from-dark to-purp dark:from-light_pink dark:to-dark_pink bg-clip-text svelte-dzjgiq">Our Events</h1></div> <div class="p-8 place-items-start border-2 rounded m-4 bg-gradient-to-t from-light_pink to-light dark:to-dark dark:from-purp border-4 border-black rounded-3xl " data-svelte-h="svelte-gf57w0"><div class="dark:text-light_pink"><p>From birthday parties to corporate events, to tours, to large-scale Pride festivals, we’re here to help you create a one-of-a-kind experience that your guests will never forget.</p></div> <br> <div class="sk-eventbrite-event" data-embed-id="164050"></div><script src="https://widgets.sociablekit.com/eventbrite-events/widget.js" async defer><\/script></div> ${validate_component(Footer, "Footthing").$$render($$result, {}, {}, {})} </body>`;
});
export {
  Page as default
};
