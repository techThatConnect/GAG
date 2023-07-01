<script>
  let test2 = false;
  let test3 = false;

  function clicker() {
    if(test2 == true) {
      test2 = false
    }
  }
</script>

<div id="menu" class="menu hidden md:flex  place-items-start items-start w-auto">
           
    

      <div class=" p-2 mt-1 md:inline-block  mr-4">
        <button class="p-3 item "  on:click={() => (test2 = !test2)} on:keydown={() => (test2 = !test2)}>
          About
      </button>
      {#if test2}
  <ul class="p-8 mt-4 z-20 rounded-2xl hover:bg-dark_pink" >
  <li class="p-3 item2  rounded-2xl hover:bg-light_pink"><a  on:click={() => (test2 = !test2)} on:keydown={() => (test2 = !test2)} href="/about">Our story</a></li>
  <li class="item2 p-3  rounded-2xl hover:bg-light_pink"><a  on:click={() => (test3 = !test3)} on:keydown={() => (test3 = !test3)} href="/team">Meet the Team</a> </li>
  {#if test3}
  <li><ul class="p-3  rounded-2xl hover:bg-light_pink">
    <li class="p-3 m-6  rounded-2xl hover:bg-dark_pink" ><a  on:click={() => (test2 = !test2)} on:keydown={() => (test2 = !test2)}  href="/team/Diana">Diana B. Tease</a></li>
    <li class="p-3 m-6  rounded-2xl hover:bg-dark_pink" ><a  on:click={() => (test2 = !test2)} on:keydown={() => (test2 = !test2)}  href="/team/Queera">Queera Bang</a></li>
  </ul></li>
  {/if}
  </ul>
  {/if}
      </div>


      <a  href="/service" class="item block p-2 mt-4 md:inline-block   mr-4">
       Services
      </a>
      <a href="/about" class="item block p-2 mt-4 md:inline-block   mr-4">
        Contact
      </a>
      <a href="/about" class="item block p-2 mt-4 md:inline-block mr-4">
       Events
      </a>
      
     
    
    


 
      </div>

      <style>
        .menu {
  grid-column-start: 3;
}
 .item:hover {
  border-radius: 36px;
background: linear-gradient(145deg, #e4cad7, #fff0ff);
box-shadow:  6px 6px 12px #b49faa,
             -6px -6px 12px #ffffff;
 }
 .item:active {
  border-radius: 36px;
background: linear-gradient(315deg, #e4cad7, #fff0ff);
box-shadow:  -6px -6px 12px #b49faa,
             6px 6px 12px #ffffff;
 }




@media only screen and (max-width: 768px) {
  .menu {
  grid-column-start: 1;
  grid-column-end: 3;

}}
      </style>