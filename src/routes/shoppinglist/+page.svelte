
<script>
	import { fade } from 'svelte/transition'

    let varor=[{name: "Nocco", tobuy:true}]
    let vara = ""
    function add(){
        if (vara !=""){
            varor = [...varor, {name:vara,tobuy:true}]
        }
    }

    function flytta(vara){
        vara.tobuy=false
        varor=varor
    }

    function remove(vara){
        varor.pop(vara)
        varor=varor
    }
    function flyttat(vara){
        vara.tobuy=true
        varor=varor
    }
    
</script>


<main class= "container">
    <h1>Shoppinglist</h1>
    <div class="categories_container">
        <section>

            <h2>Varor att köpa</h2>

            <ol>
                {#each varor as vara,i}
                {#if vara.tobuy}
                    <li>
                        
                        {vara.name}
                        <button on:click={()=> flytta(vara)}> <strong>☐</strong></button>
                        <button on:click={()=> remove(vara)}> <strong>❌</strong></button>
                        <hr style="border-color: white; "transition:fade>
                    </li>
                    {/if}
                {/each }
              
            </ol>

        </section>


        <section>

            <h2>Köpta varor</h2>
            <ul>
               {#each varor as vara}
               {#if !vara.tobuy}
                    <li>
                        {vara.name}
                        <button on:click={()=> flyttat(vara)}><strong>✅</strong></button>
                        <hr style="border-color: white;"transition:fade>
                    </li>
                    {/if}
                {/each }
            </ul>

        </section>
    </div> 
    <div>

    <input style="color:black;" type="text" bind:value={vara}>
    <button on:click={add}> <strong>Lägg till</strong>  </button>

    
    
    
</div>


    


</main>


<style>


.container{
    background-color:red;
    width: 60vw;
    height: 70vh;
    border-radius: 20px;
    display: grid;
    grid-template-rows: 1fr 8fr 1fr;
    justify-self: center;
    align-self:center;
    
        
}

.categories_container{
    background-color: bisque;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap: 10px;

   
}
.container h1{
    background-color: darkred;
    border-radius: 10px;
    justify-self: center;
    align-self:center;
}


.container section{
    height: 100%;
    width: 100%;
}

.container section h2{
    background-color: black;
    font-size: large;
    text-align: center;
    list-style-position: inside;
}


.categories_container section:nth-child(even){  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.1)

  }
 
.categories_container section:nth-child(odd){  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.3) /* svart bakgrund med 30% opacitet */
  }


        

</style>