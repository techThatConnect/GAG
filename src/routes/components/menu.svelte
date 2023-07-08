<script>
  let test2 = false;
  let test3 = false;


</script>

<div id="menu" class="menu hidden md:flex  place-items-start items-start w-auto">
           
    

      <div class=" p-3 mt-1 md:inline-block  mr-4 dark:text-light_pink">
        <button class="p-3 item hover:bg-gradient-to-l hover:from-light_pink hover:to-dark_pink hover:dark:from-purp hover:dark:to-dark"  on:click={() => (test2 = !test2)} on:keydown={() => (test2 = !test2)}>
          About
      </button>
      {#if test2}
  <ul class="p-8 mt-4 z-20 rounded-2xl hover:bg-dark_pink dark:hover:bg-dark" >
  <li class="p-3 item2  rounded-2xl hover:bg-light_pink dark:hover:bg-purp"><a  on:click={() => (test2 = !test2)} on:keydown={() => (test2 = !test2)} href="/about">Our story</a></li>
  <li class="item2 p-3  rounded-2xl hover:bg-light_pink dark:hover:bg-purp"><button  on:click={() => (test3 = !test3)} on:keydown={() => (test3 = !test3)}>Meet the Team</button> </li>
  {#if test3}
  <li><ul class="p-3  rounded-2xl hover:bg-light_pink dark:hover:bg-purp">
    <li class="p-3 m-6  rounded-2xl hover:bg-dark_pink dark:hover:bg-dark" ><a  on:click={() => (test2 = !test2)} on:keydown={() => (test2 = !test2)}  href="/team/Diana">Diana B. Tease</a></li>
    <li class="p-3 m-6  rounded-2xl hover:bg-dark_pink dark:hover:bg-dark" ><a  on:click={() => (test2 = !test2)} on:keydown={() => (test2 = !test2)}  href="/team/Queera">Queera Bang</a></li>
  </ul></li>
  {/if}
  </ul>
  {/if}
      </div>


      <a  href="/service" class="item block p-3 mt-4 md:inline-block dark:text-light_pink  mr-4  mr-4 hover:bg-gradient-to-l hover:from-light_pink hover:to-dark_pink hover:dark:from-purp hover:dark:to-dark">
       Services
      </a>
      <a href="/contact" class="item block p-3 mt-4 md:inline-block mr-4 dark:text-light_pink  mr-4 hover:bg-gradient-to-l hover:from-light_pink hover:to-dark_pink hover:dark:from-purp hover:dark:to-dark">
        Contact
      </a>
      <a href="/events" class="item block p-3 mt-4 md:inline-block mr-4 dark:text-light_pink    mr-4 hover:bg-gradient-to-l hover:from-light_pink hover:to-dark_pink hover:dark:from-purp hover:dark:to-dark">
       Events
      </a>
      
     
    
    


 
      </div>

      <style>
        .menu {
  grid-column-start: 3;
}
 .item:hover {
  border-radius: 36px;

box-shadow:  6px 6px 12px #b49faa,
             -6px -6px 12px #ffffff;
 }
 .item:active {
  border-radius: 36px;

box-shadow:  -6px -6px 12px #b49faa,
             6px 6px 12px #ffffff;
 }




@media only screen and (max-width: 768px) {
  .menu {
  grid-column-start: 1;
  grid-column-end: 3;

}}
      </style>