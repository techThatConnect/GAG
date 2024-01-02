<script>
import Footthing from '../lib/components/footer.svelte'


</script>

<body >
   <br>
   <div class="p-4  m-4 text-center  ">
      <h1 class=" glow md:text-9xl text-3xl text-center font-bold ">Glitter & Grit</h1>
      <br>
      <h3 class="text-light_pink">your premier source for drag entertainment in rural Nova Scotia.</h3>
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
  .glow {
      text-shadow: 
      0 0 0.01em #ffffff,
      0 0 0.02em #ffffff,
      0 0 0.03em #ffffff,
      0 0 0.04em #ffffff,
      0 0 0.05em #ffffff,
      0 0 0.06em #ffffff,
      0 0 0.1em #f4b6e7,
      0 0 0.2em #f4b6e7,
      0 0 0.3em #f4b6e7,
      0 0 0.4em #f4b6e7;

   }

  body {
   background:black;
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
