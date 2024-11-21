<script>

    let name =""
    let email=""
    let password=""

    

    

    

    function handleSubmit(){
        alert("Välkommen: " + name + email + password)
    }

    import { base } from '$app/paths';

</script>

<main>
    <div class="container">
        <form on:submit|preventDefault={handleSubmit}>
            <h1> Inloggning </h1>

           

            
           
            <label for="email">Email:</label>
            <input type="email" id="email" bind:value={ email }>            

            <label for="password">Password:</label>
            <input type="password" id="password" bind:value={ password } >

           


            <input type= submit value="logga in">
            

            
        
        </form>

        <a href="{base}/register">Har du inget konto? Registrera här!</a>

        
    </div> 
</main>

<style>
 main{
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 10%;
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

}
</style>
