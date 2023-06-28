<script>
    import "../app.css";
  import Logo from './components/logo.svelte'
  import Menu from './components/menu.svelte'
  let test = false
  </script>
  


  <body class="dark:bg-dark_pink">
    
  

<div class="pb-2 ">
  <nav class="navbar dark:bg-purp bg-light_pink p-1 ">
    <div class="logoBox">
      <a href="/" class="bg-light_pink"> <Logo /> </a>
    </div>
 
<Menu />

          <button class="p-1 md:hidden flex justify-end "  on:click={() => (test = !test)} on:keydown={() => (test = !test)}>
            <svg width="3em" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13 16.75c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm2.195-5.992 2.746 2.999c.142.154.342.243.552.243s.41-.088.553-.242l2.757-2.999c.132-.144.197-.326.197-.507 0-.684-.841-1.008-1.303-.508l-2.202 2.397-2.194-2.396c-.46-.503-1.303-.175-1.303.507 0 .18.065.362.197.506zm-2.195.992c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
        </button>
          {#if test}
          <div id="menu" class="menu md:hidden flex items-center w-auto">
           
            <div class="text-lg lg:flex-grow ">
             
              <a href="/about" class="block p-2 mt-4 md:inline-block lg:mt-0 hover:translate-y-4 active:translate-y-2 hover:border-l-4 hover:border-t-4 hover:bg-purp  hover:text-light mr-4">
              About
              </a>
              <a href="/about" class="block p-2 mt-4 md:inline-block lg:mt-0 hover:translate-y-4 active:translate-y-2 hover:border-l-4 hover:border-t-4 hover:bg-purp  hover:text-light mr-4">
               Services
              </a>
              <a href="/about" class="block p-2 mt-4 md:inline-block lg:mt-0 hover:translate-y-4 active:translate-y-2 hover:border-l-4 hover:border-t-4 hover:bg-purp  hover:text-light mr-4">
                Contact
              </a>
              <a href="/about" class="block p-2 mt-4 md:inline-block lg:mt-0 hover:translate-y-4 active:translate-y-2 hover:border-l-4 hover:border-t-4 hover:bg-purp  hover:text-light">
               Events
              </a>
             
            </div>
            
        
     
         
              </div>
              {/if}
  </nav>
  
  </div>
    




  <slot />
</body>

  <style>
.navbar {
  position: sticky;
  top:0px;
  display: grid;
  grid-template-columns: 2em auto;
}



.logoBox {
  grid-column-start: 1;
}

.menu {
  grid-column-start: 3;
}

@media only screen and (max-width: 768px) {
  .menu {
  grid-column-start: 1;
  grid-column-end: 3;

}


}
  </style>

  