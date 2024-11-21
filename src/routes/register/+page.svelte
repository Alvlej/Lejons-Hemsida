<script>

    let name =""
    let email=""
    let password=""

    let color = "black"

    

    let colors= [{namn: "Blå", value: "blue"}, {namn: "Röd", value: "red"},{namn: "Grön", value: "green"},{namn: "Rosa", value: "pink"},{namn: "Orange", value: "orange"},{namn: "Gul", value: "yellow"}]

    function handleSubmit(){
        alert("Välkommen " + name + ",   "   + "email: " + email + " " +"password: " + password)
    }

    import { base } from '$app/paths';

</script>

<main>
    <div class="container">
        <h1> Registrering </h1>
        <form on:submit|preventDefault={handleSubmit}>

            <div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};"></div>


            <label for="name">Name:</label>
            <input type="text" id="name" bind:value={ name }>
           
            <label for="email">Email:</label>
            <input type="email" id="email" bind:value={ email }>            

            <label for="password">Password:</label>
            <input type="password" id="password" bind:value={ password } >

            <label for="favorite color">Favorite color:</label>
            <select id="favorite color" bind:value={color}> 
                {#each colors as c}
                <option value={c.value}>{c.namn}</option>
                {/each}
                </select>


            <input type= submit value="Registrera">
        </form>
        <a href="{base}/login">Har du redan ett konto? Logga in</a>

    </div> 
</main>

<style>
 main{
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
    }

.container{
    display: flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;

    border: solid 5px rosybrown;
    border-radius: 10px;
    width: 35%;
    height: 80%;
    background-color: white;
    margin: auto;
    color: black;
    min-width: 300px;
    min-height: 500px;

}
</style>
