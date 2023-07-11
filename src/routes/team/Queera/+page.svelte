
<script>
import Footthing from '$lib/components/footer.svelte'
</script>



<body class="h-full bg-gradient-to-t from-light to-grey dark:bg-black">
   
<br>

<div class="card bg-gradient-to-t from-light_pink to-light dark:from-purp dark:to-dark border-4 border-black rounded-3xl grid grid-rows-2 ml-2 mr-2 sm:ml-12 sm:mr-12  lg:ml-24 lg:mr-24">
   <div class="col-span-3 bg-light_pink dark:bg-purp rounded-t-3xl flex justify-around">
      <h1 class="text-4xl m-0 dark:text-light_pink p-6 inline">Queera Bang</h1>
   </div>
<div class="p-12 row-start-2 col-span-3 lg:col-span-1">
   <img src="/src/images/image1.png" alt="" class="h-100 w-100">
   <div class="flex justify-start mt-4">
      

    <a class="mr-4" href="https://www.instagram.com/diana.b.tease/">
         <img class="icon" src="/src/images/instagram.png" alt="">
      </a>
      <a class=" inline" href="https://linktr.ee/queerabang">
         <svg width="15%" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 417 512.238"><path fill="#000000" fill-rule="nonzero" d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z"/></svg>
      </a>
   </div>
</div>
<div class="row-start-3 lg:row-start-2 p-2 lg:p-12 col-start-1 lg:col-start-2 col-span-3 lg:col-span-1">

   <p class="dark:text-light_pink">
      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.

Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of 'dolorem ipsum' ('pain itself').

Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.[1] Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors, including Pages and Microsoft Word, have since adopted Lorem ipsum,[2] as have many LaTeX packages,[3][4][5] web content managers such as Joomla! and WordPress, and CSS libraries such as Semantic UI
   </p>
</div>
</div>
<Footthing />
</body>

<style>
   .card {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 5em 1fr;
   }

   .icon {
   max-width: 3em;
}
</style>

