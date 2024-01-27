<script>
    import Footthing from '../../lib/components/footer.svelte'
export let data;

let tickettailor = data.info.data

console.log(tickettailor)


/*
for(let o = 0; o < tickettailor.length; o++){
   let num = tickettailor[o].created_at
   let answer = convertDate(num)
 
   tickettailor[o].created_at = answer
  
}

async function test() {
  let newstuff = await fetch('/calender')
  let newdata = await newstuff.json()
  console.log(newdata)
}

test()

function convertDate(unixStamp){
   let millisecond = unixStamp * 1000
   let date = new Date(millisecond)
   date.toLocaleDateString
   return date
}

*/


</script>

<svelte:head>
	<script src='https://widgets.sociablekit.com/eventbrite-events/widget.js' async defer></script>
</svelte:head>

<body class="min-h-screen bg-black">
   

<br>
<div class="p-4 m-4 text-center ">
   <h1 class="glow md:text-9xl text-6xl text-center font-bold ">Events</h1>
   
</div>

<div class="p-8 place-items-start border-2  m-4  min-h-screen">
 

   <div class=" text-light_pink">
<p > From birthday parties to corporate events, to tours, to large-scale Pride festivals, we’re here to help you create a one-of-a-kind experience that your guests will never forget.
   </p>
   </div>
 
   <br>
<p id="test"></p>

<!-- Ticket Tailor Widget. Paste this into your website where you want the widget to appear. Do not change the code or the widget may not work properly. -->
<div class="tt-widget"><div class="tt-widget-fallback"><p><a href="https://www.tickettailor.com/all-tickets/techthatconnect/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true" target="_blank">Click here to buy tickets</a><br /><small><a href="https://www.tickettailor.com?rf=wdg_157951" class="tt-widget-powered">Sell tickets online with Ticket Tailor</a></small></p></div><script src="https://cdn.tickettailor.com/js/widgets/min/widget.js" data-url="https://www.tickettailor.com/all-tickets/techthatconnect/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true" data-type="inline" data-inline-minimal="true" data-inline-show-logo="false" data-inline-bg-fill="false" data-inline-inherit-ref-from-url-param="" data-inline-ref="website_widget"></script></div>
<!-- End of Ticket Tailor Widget -->


{#each tickettailor as event, i}

{#if event.next_occurrence_date != null}
<div class=" block lg:flex bg-gradient-to-t from-light_pink to-light dark:to-dark dark:from-purp">
   <div class="lg:max-fifty">
      <img class="object-cover h-full" src="{event.images.header}" alt="">
   </div>
   <div class="p-4">
      <h2 class="text-3xl">{event.name}</h2>
    
        
         <p>{event.next_occurrence_date.date}      {event.next_occurrence_date.time} </p>
         <p>{event.venue.name} {event.venue.postal_code}</p>
         
      <a class="p-2 inline-block rounded-3xl mr-4 bg-light_pink hover:bg-dark_pink hover:dark:bg-purp" href="{event.url}">Buy Tickets</a>
    <div class="p-2">
         {@html event.description}
      </div>
   
   </div>

   
</div>
{/if}
{/each}


   
   </div>

<Footthing />
</body>

   <style>


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




