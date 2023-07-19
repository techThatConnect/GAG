import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { F as Footer } from "../../../chunks/footer.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".flex80.svelte-1szjnq2{flex:80%\r\n         }.item.svelte-1szjnq2:hover{border-radius:36px;box-shadow:6px 6px 12px #b49faa,\r\n             -6px -6px 12px #ffffff}.item.svelte-1szjnq2:active{border-radius:36px;box-shadow:-6px -6px 12px #b49faa,\r\n             6px 6px 12px #ffffff}textarea.svelte-1szjnq2{flex:100%;box-sizing:border-box;width:100%}input.svelte-1szjnq2{box-sizing:border-box;width:100%}h1.svelte-1szjnq2{color:transparent;margin:0px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="h-screen bg-gradient-to-t from-light to-grey dark:bg-black"><br> <div class="p-4 xl:flex border-2 m-4 text-center bg-gradient-to-t from-light_pink to-light dark:from-purp dark:to-dark border-4 border-black rounded-3xl " data-svelte-h="svelte-fkab6s"><h1 class="lg:text-9xl text-3xl text-transparent font-bold bg-gradient-to-l from-dark to-purp dark:from-light_pink dark:to-dark_pink bg-clip-text svelte-1szjnq2">Contact</h1></div> <div class="p-4 lg:flex flex-wrap border-2 m-4 lg:text-center bg-gradient-to-t from-light_pink to-light dark:from-purp dark:to-dark border-4 border-black rounded-3xl grid grid-rows-2 xl:m-24" data-svelte-h="svelte-19fdv7p"><div class="lg:flex-1 dark:text-light_pink">send us an email
      <form method="post" action="/email"><div class="flex"><label for="name" class="flex80 svelte-1szjnq2">Name
            <input class="inline border-2 hover:border-4 focus:border-4 border-black svelte-1szjnq2" type="text" name="name" id="name"></label> <button class="item inline bg-gradient-to-l from-light_pink to-dark_pink dark:from-purp dark:to-dark p-2 ml-2 rounded-3xl svelte-1szjnq2" type="submit">send</button></div> <br> <label for="email">message
            <textarea class="border-2 hover:border-4 focus:border-4 border-black svelte-1szjnq2" name="" id="" cols="80" rows="10"></textarea></label></form></div> <div class="lg:flex-1 dark:text-light_pink">You can find us on the web in these other locations
      <br> <div class="flex flex-wrap justify-center"><a class="p-4 inline" href="https://www.eventbrite.ca/o/glitter-and-grit-events-54272475463"><img class="w-24 h-auto" src="src/images/logo-orange.png" alt=""></a> <a class="p-4 inline" href="https://www.instagram.com/gag.events/"><img class="w-20 h-auto" src="/src/images/instagram.png" alt=""></a> <a class="p-4 inline" href="https://www.facebook.com/profile.php?id=100091639494650"><svg class="w-20 h-auto" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0021 0C7.1645 0 0 7.20701 0 16.0971C0 24.1327 5.85601 30.796 13.5096 32V20.745H9.4211V16.0971H13.5096L13.5139 12.5497C13.5139 8.51463 15.8906 6.27916 19.5458 6.27916C21.2962 6.27916 23.1152 6.62009 23.1152 6.62009V10.5559H21.1074C19.1211 10.5559 18.4861 11.8074 18.4861 13.0805L18.4904 16.1014H22.935L22.2228 20.745H18.4904V31.9957C26.144 30.7916 32 24.1327 32 16.0928C32 7.20701 24.8355 0 16.0021 0Z" fill="#1877F2"></path></svg></a></div></div></div> ${validate_component(Footer, "Footthing").$$render($$result, {}, {}, {})} </body>`;
});
export {
  Page as default
};