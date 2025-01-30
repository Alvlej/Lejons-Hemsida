
<script>
    /** @type {import('./$types').PageData} */
    export let data;
  </script>
  
  {#await data}
    <p>.. waiting</p>
  {:then pokemon}
  <h1>{pokemon.response.name}</h1>
  <article>
    {#each Object.entries(pokemon.response.sprites) as sprites}
      {#if typeof sprites[1] == "string"}
      <img src={sprites[1]} alt=""/>
      {/if}
    {/each}
  </article>

  <section>
  
  </section>
  
  {/await}  
  
  
    <style>
        article{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            width: 90%;
            height: 30%;
            gap: 1em;
            justify-content: center;
            justify-items: center;
            scale:300%
            
            
        }

        h1{
            color: black;
            scale: 300%;
        }
    </style>