import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { F as Footer } from "../../../../chunks/footer.js";
import { i as insta } from "../../../../chunks/instagram.js";
const picture = "/_app/immutable/assets/image2.a82f9ce3.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card.svelte-bc69m9{grid-template-columns:1fr 1fr;grid-template-rows:5em 1fr}.icon.svelte-bc69m9{max-width:3em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="h-full bg-gradient-to-t from-light to-grey dark:bg-black"><br> <div class="card bg-gradient-to-t from-light_pink to-light dark:from-purp border-4 border-black rounded-3xl grid grid-rows-2 ml-2 mr-2 sm:ml-12 sm:mr-12 lg:ml-24 lg:mr-24 svelte-bc69m9"><div class="col-span-3 bg-light_pink dark:bg-purp rounded-t-3xl flex justify-around" data-svelte-h="svelte-hdyya0"><h1 class="text-4xl p-6 inline">Diana B. Tease</h1></div> <div class="p-12 row-start-2 col-span-3 lg:col-span-1"><img${add_attribute("src", picture, 0)} alt="" class="h-100 w-100"></div> <div class="row-start-3 lg:row-start-2 p-2 lg:p-12 col-start-1 lg:col-start-2 col-span-3 lg:col-span-1"><p class="dark:text-light_pink" data-svelte-h="svelte-da5v4f">Diana B. Tease is Halifax&#39;s dashing diabetic diva, and her blood sugar is probably higher than yours. Diana aims to bring drag to unconventional places, and in 2022 she raised $1500 for Easter Seals NS by rappelling down a building in drag. They enjoy sewing, playing video games, and tucking her cat Penny into cozy blankets.
      Diana is a queer activist, founder of Halifax Queer Solidarity Project, co-host of the Gay Expectations podcast, and co-founder of Glitter &amp; Grit Events.</p> <div class="flex"><a href="https://www.instagram.com/diana.b.tease/"><img class="icon svelte-bc69m9"${add_attribute("src", insta, 0)} alt="blah"></a> <a class="ml-4 p-2 bg-light_pink dark:bg-purp" href="https://www.wheresmyinsulin.gay" data-svelte-h="svelte-pjh7sy">wheresmyinsulin.gay</a></div></div></div> ${validate_component(Footer, "Footthing").$$render($$result, {}, {}, {})} </body>`;
});
export {
  Page as default
};
