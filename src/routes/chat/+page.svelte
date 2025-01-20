

<script>
    import ElizaBot from 'elizabot';
    const eliza = new ElizaBot();
    let chat = [{ user: 'Eliza', message: eliza.getInitial() }];
    import { enhance } from "$app/forms";
	import { Container } from 'postcss';
    
    async function write(message) {
        chat = [...chat, {user: "User",message: message}]
        

        
        //Hämta HTML-elementet med id:et visible
        var element = document.getElementById("visible");
        //Ändrar elementets CSS-egenskap display till default
        element.style.display = "block"; // Visa elementet
                


        // random delay for Eliza's response time
        await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
        element.style.display="none"
        chat =[...chat, {user:"Eliza",message: "okej, intressant att höra"}]

    

  }

  
                
</script>

<main>
    <section>
        {#each chat as meddelande}
        <article class = "container" id={meddelande.user} >
            <p> {meddelande.user} : {meddelande.message} </p>
            
            
        </article>

        {/each}
       
        <article id = "visible"> 
            <span class = "circle">

            </span>

            <span class = "circle">

            </span>

            <span class = "circle">

            </span>

        </article>
            
    </section>

     
    <form  method="post"
        use:enhance={({ formElement, formData, action, cancel }) => {
          cancel(); //don't post anything to server
          const text = formData.get("text"); // what does "text" refer to?
          write(text);
    
          // TODO: reset the form using _____.reset() - what do we want to reset? the element or the data?
    
          }}>
                    
        <input type="text" name="text" style="color: black;"> 

        <button on:click={()=> write(message)}>Skicka</button>


    
        

    </form>

</main>

<style>

    #User{
        background-color: gray;
        justify-self: flex-end;
    }
    main{
        height: 70vh;
        width: 60vw;
        padding: 10px;
        justify-self: center;
        background-color: darkgrey;
    
    }

    section{
        height: 90%;
        overflow-y:scroll;
  

    }

    .container{
        margin:10px;
        padding: 10px;
        border-radius: 10px;
        background-color: black;
        width: 60%;
        display:flex;

    }

    #visible{
        display:none;
        justify-content: center; /* Centrera horisontellt */
        align-items: center; /* Centrera vertikalt */
     
    }

    .circle{
        display:inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color:black;
        justify-content: center;
        align-items: center;

        animation-name: typing;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: ease; /* Funktion som styr tidsförloppet (till exempel "ease-in-out") */
    }

  

    

     
@keyframes typing {
    0% { transform: scale(1);}
    25% {transform: scale(1);}
    50% { transform: scale(1.4); }
    100% { transform: scale(1);}
}


 /* CSS-stilar för .circle med index 1 (den första cirkeln) */
.circle:nth-child(1) {
     animation-delay: 0ms; /* Ingen fördröjning */
            }
 /* CSS-stilar för .circle med index 2 (den andra cirkeln) */
 .circle:nth-child(2) {
    animation-delay: 333ms; /* Starta animationen efter 333 millisekunder (ms) */
            }
 /* CSS-stilar för .circle med index 3 (den tredje cirkeln) */  
  .circle:nth-child(3) {
     animation-delay: 666ms; /* Starta animationen efter 666 ms */
            }
            

    
        
</style>

