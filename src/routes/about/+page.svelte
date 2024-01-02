<script>
   import Footthing from '../../lib/components/footer.svelte'

import Diana from '$lib/components/diana.svelte';
import Queera from '$lib/components/queera.svelte';
</script>

<body class=" bg-gradient-to-b from-black to-grey dark:bg-black">
   
<br>
   <div class="p-4   m-4 text-center ">
   <h1 class="glow md:text-9xl text-3xl text-center font-bold ">About us</h1>
   
</div>

      
<div class="p-4 xl:flex text-light m-4 text-center   grid grid-rows-2 m-4 md:m-12 xl:m-24">
     
   <div class="xl:flex-1 dark:text-light_pink">
     
        
         <p> your premier source for drag entertainment in rural Nova Scotia. <br class="hidden sm:block"> We are owned and operated by two trans, non-binary, drag performers, <br class="hidden sm:block "><a class="text-purp bg-light_pink" href="#queera">Queera Bang</a> and <a class="text-purp bg-light_pink" href="#diana">Diana B. Tease. </a>
            <br>We’re passionate about bringing the art of drag to audiences across the province.
            <br>
   <br>
            At Glitter & Grit, we produce a range of drag events, including drag shows, karaoke, trivia, and bachelorette parties. Whether you’re a seasoned drag fan or a curious newcomer, our events are sure to entertain and inspire. Our performers are some of the best in the business, bringing their unique styles and personalities to every show.
   
      </p>
 
   </div>

<div class="xl:flex-1 dark:text-light_pink">
<p>Our target audience is queer folks from across Nova Scotia who are interested in drag. We know that it can be tough to find quality drag events in rural areas, which is why we’re committed to bringing the best of the best to our community. We believe that everyone deserves to experience the joy and excitement of drag, no matter where they live or what their background is.
   <br>
   <br>
   If you’re looking for a truly unforgettable drag experience, look no further than Glitter & Grit. We’re dedicated to making every event a night to remember, with top-notch performances, lively music, and a welcoming atmosphere that celebrates diversity and inclusivity.
   <br>
   <br>
   So why not join us for our next show or book our business for your next queer event? We promise you won’t be disappointed. Let Glitter & Grit bring a little sparkle and sass to your life.
   </p>
</div>


</div>

<div id="queera" class="pt-16">
   <Queera  />
</div>

<br>
<div id="diana">
   <Diana/>
</div>

 <Footthing />
</body>


  
   <style lang="postcss">
      body {
   background:black;
  

   }
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

 
      </style>
   

