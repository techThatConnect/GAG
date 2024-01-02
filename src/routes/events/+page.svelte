<script>
    import Footthing from '../../lib/components/footer.svelte'
export let data;

let tickettailor = data.info.data
for(let o = 0; o < tickettailor.length; o++){
   let num = tickettailor[o].created_at
   let answer = convertDate(num)
   console.log(answer)
   tickettailor[o].created_at = answer
   console.log(tickettailor)
}
console.log(tickettailor)
/*
async function test() {
  let newstuff = await fetch('/calender')
  let newdata = await newstuff.json()
  console.log(newdata)
}

test()

*/

function convertDate(unixStamp){
   let millisecond = unixStamp * 1000
   let date = new Date(millisecond)
   date.toLocaleDateString
   return date
}
</script>

<svelte:head>
	<script src='https://widgets.sociablekit.com/eventbrite-events/widget.js' async defer></script>
</svelte:head>

<body class="min-h-full bg-black">
   
<br>
<div class="p-4 m-4 text-center ">
   <h1 class="glow md:text-9xl text-6xl text-center font-bold ">Events</h1>
   
</div>

<div class="p-8 place-items-start border-2  m-4 bg-gradient-to-t from-light_pink to-light dark:to-dark dark:from-purp border-4 border-black ">

   <div class=" dark:text-light_pink">
<p > From birthday parties to corporate events, to tours, to large-scale Pride festivals, we’re here to help you create a one-of-a-kind experience that your guests will never forget.
   </p>
   </div>
 
   <br>
<p id="test"></p>



{#each tickettailor as event, i}
{#if event.next_occurrence_date != null}
<div class="rounded-xl border-4 block lg:flex lg:justify-between">
   <div>
      <img class="object-cover" src="{event.images.header}" alt="">
   </div>
   <div class="p-2">
      <h2 class="text-3xl">{event.name}</h2>
    
        
         <p>{event.next_occurrence_date.formatted}</p>
        
         
      <a class="p-2 inline-block rounded-3xl mr-4 bg-light_pink hover:bg-dark_pink hover:dark:bg-purp" href="{event.url}">Buy Tickets</a>
      <p class="inline">{event.default_ticket_types[0].quantity} tickets remaining</p>
      <div class="p-2">
         {@html event.description}
      </div>
   
   </div>

   
</div>
{/if}
{/each}

   <iframe src='https://widgets.sociablekit.com/eventbrite-events/iframe/164050' title="" frameborder='0' width='100%' height='1000'></iframe>

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




