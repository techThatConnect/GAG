<script>
import Footthing from '../lib/components/footer.svelte'

</script>

<body >
   <br>
   <div class="p-4 justify-center border-2 m-4 text-center  bg-gradient-to-t from-light_pink to-light dark:from-purp dark:to-dark  border-4 border-black rounded-3xl ">
      <h1 class="lg:text-9xl text-3xl text-center text-transparent font-bold bg-gradient-to-l from-dark to-purp dark:from-light_pink to-purp  dark:to-dark_pink bg-clip-text">Glitter & Grit</h1>
      <br>
      <h3>your premier source for drag entertainment in rural Nova Scotia.</h3>
   </div>
<br>
   <!-- Place <div> tag where you want the feed to appear -->
      <div class="p-6"><div id="curator-feed-default-feed-layout"><a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a></div><!-- The Javascript can be moved to the end of the html page before the </body> tag --><script type="text/javascript">
         /* curator-feed-default-feed-layout */
         (function(){
         var i,e,d=document,s="script";i=d.createElement("script");i.async=1;i.charset="UTF-8";
         i.src="https://cdn.curator.io/published/a6b7a1cb-b0a0-4975-a10e-1e5ee651b0fd.js";
         e=d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
         })();
         </script></div>
<Footthing />
</body>







  
  
  <style lang="postcss">
h1 {
   color: transparent;
   flex:100%;
}

  body {
   background-image:linear-gradient(to top, rgba(38, 21, 47, 1), rgba(38, 21, 47, 0.25)), url('$lib/images/test.jpg');
      background-position: top;
      background-size: cover;
      background-repeat: no-repeat;

   }

   @media (prefers-color-scheme: dark) {
      body {
     
      background-position: top;
      background-size: cover;
      background-repeat: no-repeat;

   }
}

   
 
  </style>