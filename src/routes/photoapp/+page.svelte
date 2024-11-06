<script>
    
let image = "https://picsum.photos/id/70/367/267"
let photo = "https://picsum.photos/id/88/367/267"
let picture = "https://picsum.photos/id/93/367/267"

</script>
<h1>Lejons Hemsida</h1>
<p>"i den här paragrafen finns fina bilder"</p>

<div class="photos">
    <div class= "image-wrapper">
        <img src={picture} alt="">
    </div>
    <div class ="image-wrapper">
        <img src={photo} alt="">
    </div>
    <div class = "image-wrapper">
        <img src={image} alt="">
    </div>
    
    </div>
<style> 



    

.photos{
    display: flex;
    flex-wrap: wrap;
    
}


     .image-wrapper{
        flex-grow:1;
        flex-basis: 300px;
        margin:10px;
     }
    .image-wrapper img{ width: 100%; border-radius: 20px; border: 2px solid white;background-color: gainsboro;box-shadow: 4px 8px 0px rgba(0,0,0,0.10);}
    .image-wrapper:hover { flex-grow:2; transition: 500ms flex; }

    
    h1{
        text-align: center;
        font-size: 50px;
        margin: 20px;
        color: rgb(252, 4, 4);
    }
    
  
</style>

