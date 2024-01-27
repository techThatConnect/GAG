<script>
   import Footthing from '../../lib/components/footer.svelte'
   import orange from '$lib/images/logo-orange.png'
   import insta from '$lib/images/instagram.png'

</script>
<body class="min-h-full bg-black">
   
    <br>
    <div class="p-4 m-4 text-center ">
      <h1 class="glow md:text-9xl text-3xl text-center font-bold ">Contact</h1>
      
   </div>
    
          
    <div class="p-4 md:flex flex-wrap m-4 lg:text-center text-light  md:m-24">
         
      <div class="md:flex-1 md:mr-16 flex-auto dark:text-light_pink">
      You can find us on the web in these other locations
      <br>
      <div class="flex flex-wrap justify-center">
         <a class="p-4 inline" href="https://www.eventbrite.ca/o/glitter-and-grit-events-54272475463">
            <img class="w-24 h-auto" src="{orange}" alt="">
       </a> 
       <a  class="p-4 inline" href="https://www.instagram.com/gag.events/">
         <img class="w-20 h-auto"  src="{insta}" alt="">
       </a>
       <a class="p-4 inline" href="https://www.facebook.com/profile.php?id=100091639494650">
         <svg class="w-20 h-auto" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0021 0C7.1645 0 0 7.20701 0 16.0971C0 24.1327 5.85601 30.796 13.5096 32V20.745H9.4211V16.0971H13.5096L13.5139 12.5497C13.5139 8.51463 15.8906 6.27916 19.5458 6.27916C21.2962 6.27916 23.1152 6.62009 23.1152 6.62009V10.5559H21.1074C19.1211 10.5559 18.4861 11.8074 18.4861 13.0805L18.4904 16.1014H22.935L22.2228 20.745H18.4904V31.9957C26.144 30.7916 32 24.1327 32 16.0928C32 7.20701 24.8355 0 16.0021 0Z" fill="#1877F2"/>
            </svg>
      </a>
      </div>
  
         
 
    </div>
    
    <div class="md:flex-1  dark:text-light_pink">
      send us an email
      <form class="text-left" name="email" method="POST" netlify-honeypot="bot-field" netlify>
       <input type="hidden" name="form-name" value="email" /> 
<div  >
         <label for="name" class="flex80 text-left">
            Name
            <input class="block text-black border-2 hover:border-4 focus:border-4 border-black" type="text" name="name" id="name">
            
         </label>

         <br>
         
         <label for="youremail">
            your email
            <input class="block text-black border-2 hover:border-4 focus:border-4 border-black" type="text" name="youremail" id="youremail">
         </label>
        
        </div>
        <br>
         <label for="email"> 
            message
            <textarea class="border-2 text-black hover:border-4 focus:border-4 border-black" name="message" id="email" cols="80" rows="10"></textarea>
         </label>
         <button class="bg-dark_pink hover:bg-light_pink hover:text-black active:bg-dark-pink  hover:dark:bg-purp p-2 ml-2 rounded-3xl" type="submit">send</button>
         
         </form>
   
    </div>

    

    </div>
    
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
      



textarea {
   flex: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    width: 100%;
}

input {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    width: 100%;
}
    
 
     
          </style>
       
    
    
