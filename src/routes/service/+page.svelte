<script>
    import Footthing from '../../lib/components/footer.svelte'
    import pic from '$lib/images/image3.png'

</script>

<body class=" bg-black">
   
<br>
<div class="p-4   m-4 text-center ">
   <h1 class="glow md:text-9xl text-3xl text-center font-bold ">Our Services</h1>
   
</div>

<div class="p-8 lg:flex text-light place-items-start  rounded m-4  ">

   <div class="md:flex-1 dark:text-light_pink">
<p > At Glitter & Grit, we’re proud to offer a wide range of drag and queer entertainment services that are perfect for any occasion. Whether you’re planning a wild bachelorette party, a classy wedding reception, or a fun night out with friends, we’ve got you covered.
   
    But don’t let this list limit you! We’re flexible and able to bring drag to almost any sort of event imaginable. From birthday parties to corporate events, to tours, to large-scale Pride festivals, we’re here to help you create a one-of-a-kind experience that your guests will never forget.
   </p>
   <br>
   <p>
      <a class="m-2 p-2 bg-dark_pink text-black dark:bg-purp" href="mailto:glitterandgrit.events@gmail.com">Email</a>  us for pricing and more information. We can’t wait to bring the magic of drag to your next event!
      </p>
<br>
   </div>

   



   <ul class="md:flex-1 list ml-12 dark:text-light_pink">
     <li>
      Karaoke: Sing your heart out with our fabulous drag performers as your hosts. We’ll keep the party going all night long!
   </li>
   <li>
      Trivia: Test your knowledge with our hilarious and interactive queer trivia games. It’s the perfect way to add some excitement to any event.
   </li>
   <li>
      Bingo: Bingo has never been so much fun! Our drag bingo games are full of surprises, prizes, and perfect for fundraising.
   </li>
   <li>
      Bachelorx, Bachelorette, Bachelor Parties: Celebrate your upcoming nuptials in style with our unforgettable drag parties. We’ll make sure it’s a night to remember for you and your friends, filled with glamour, laughter, and plenty of fun. Get ready for a wild and fabulous ride with Glitter & Grit!
   </li>
   <li>
      Wedding Receptions: Add some sparkle to your special day with our stunning drag performers and MCs. We’ll create a unique and memorable experience that you and your guests will treasure forever.
   </li>
   <li>
      Event and Conference Hosting: Need a charismatic and engaging host for your next event or conference? Look no further than Glitter & Grit. Our talented performers will keep your audience entertained and engaged from start to finish.
   </li>
   <li>
      All Ages Drag Shows: Drag isn’t just for adults! We offer family-friendly drag shows that are suitable for all ages. It’s a great way to introduce young people to a world of inclusivity, drag and to inspire them to be their most fabulous selves.
   </li>  
   </ul>
   </div>

   <div class="p-4 ml-24 mr-24">
      <img src="{pic}" alt="" class="h-100 w-100">
   </div>

   <Footthing />
</body>

   <style>
      .list {
         list-style-type:disc;
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




