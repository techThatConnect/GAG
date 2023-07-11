<script>
    import "../app.css";
  import Logo from '../lib/components/logo.svelte'
  import Menu from '../lib/components/menu.svelte'
  let test = false
  let test2 = false;
  let test3 = false;
  </script>
  



    
  

<div class=" ">
  <nav class="navbar dark:bg-purp bg-light_pink pb-0 md:pb-2" >
    <div class="logoBox" >
      <a  href="/" class="bg-light_pink"> <Logo /> </a>
    </div>
 
<Menu />

          <button class="p-1 md:hidden flex justify-end "  on:click={() => (test = !test)} on:keydown={() => (test = !test)}>
            <svg width="3em" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13 16.75c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm2.195-5.992 2.746 2.999c.142.154.342.243.552.243s.41-.088.553-.242l2.757-2.999c.132-.144.197-.326.197-.507 0-.684-.841-1.008-1.303-.508l-2.202 2.397-2.194-2.396c-.46-.503-1.303-.175-1.303.507 0 .18.065.362.197.506zm-2.195.992c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
        </button>


          {#if test}
          <div id="menu" class="flex justify-center menu md:hidden items-center w-auto pb-12">
           
            <div class="text-lg dark:text-light_pink">
              <div class=" block mt-4 md:inline-block   mr-4">
                <button class="p-3 item inline flex justify-start hover:bg-gradient-to-l hover:from-light_pink hover:to-dark_pink hover:dark:from-purp hover:dark:to-dark"  on:click={() => (test2 = !test2)} on:keydown={() => (test2 = !test2)}>
                  About
              </button>
              {#if test2}
          <ul class="p-8 mt-4 z-20 rounded-2xl hover:bg-dark_pink dark:hover:bg-dark" >
          <li class="p-3 item2 rounded-2xl hover:bg-light_pink dark:hover:bg-purp"><a  on:click={() => (test = !test)} on:keydown={() => (test = !test)} href="/about">Our story</a></li>
          <li class="item2 p-3 rounded-2xl hover:bg-light_pink dark:hover:bg-purp"><button  on:click={() => (test3 = !test3)} on:keydown={() => (test3 = !test3)}>Meet the Team</button> </li>
          {#if test3}
          <li><ul class="p-3 rounded-2xl hover:bg-light_pink dark:hover:bg-purp">
            <li class="p-3 m-6 rounded-2xl hover:bg-dark_pink dark:hover:bg-dark" ><a  on:click={() => (test = !test)} on:keydown={() => (test = !test)}  href="/team/Diana">Diana B. Tease</a></li>
            <li class="p-3 m-6 rounded-2xl hover:bg-dark_pink dark:hover:bg-dark" ><a  on:click={() => (test = !test)} on:keydown={() => (test = !test)}  href="/team/Queera">Queera Bang</a></li>
          </ul></li>
          {/if}
          </ul>
          {/if}
              </div>



              <a  on:click={() =>  (test= !test)} on:keydown={() => (test= !test)}  href="/service" class="item block p-3 md:inline-block  mr-4 hover:bg-gradient-to-l hover:from-light_pink hover:to-dark_pink hover:dark:from-purp hover:dark:to-dark">
               Services
              </a>
              <a on:click={() =>  (test= !test)} on:keydown={() => (test= !test)}  href="/contact" class="item block p-3  md:inline-block  mr-4 hover:bg-gradient-to-l hover:from-light_pink hover:to-dark_pink hover:dark:from-purp hover:dark:to-dark">
                Contact
              </a>
              <a on:click={() =>  (test= !test)} on:keydown={() => (test= !test)}  href="/events" class="item block p-3 md:inline-block mr-4 hover:bg-gradient-to-l hover:from-light_pink hover:to-dark_pink hover:dark:from-purp hover:dark:to-dark">
               Events
              </a>
             
            </div>
            
        
     
         
              </div>
              {/if}

              
  </nav>
  

  </div>
  
  <slot />
  

 

  <style>


.navbar {
  position: sticky;
  top:0px;
  display: grid;
  grid-template-columns: 2em auto;
}



.logoBox {
  grid-column-start: 1;
  grid-column-end: 2;

  text-align: left;
  justify-content: left;
}

.menu {
  grid-column-start: 2;
}

.item {
  text-align: center;
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
  .navbar {

  grid-template-columns: 25% auto;
}
  .menu {
  grid-column-start: 1;
  grid-column-end: 3;

}


}
  </style>

  