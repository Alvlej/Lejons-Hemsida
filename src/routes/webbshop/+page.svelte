<script>

    //drycker
        let cola = "https://icons.veryicon.com/png/Food%20%26%20Drinks/Coke%20%26%20Pepsi%20Can/Coca%20Cola%20Can.png"
        let sprite = "https://pngimg.com/d/sprite_PNG98773.png"
        let fanta = "https://pngimg.com/d/fanta_PNG54.png"
        let zingo = "https://carlsberg-group-2022.euwest01.umbraco.io/media/r1gdgmcr/zingo-apelsin-sleekcan-lores-web.png"
        let up = "https://www.pngmart.com/files/21/7up-PNG-Image.png"
        let pepsi = "https://www.freeiconspng.com/uploads/pepsi-transparent-pic-5.png"
        let trocadero = "https://assets.flaivy.com/d769b4183f696ac01c4a64f6907d328a.png"
        let nocco = "https://www.sport-enzinger.com/wp-content/uploads/2024/07/2024-05-14-nocco-ramonade-einzel-1.png"
        let celsius = "https://shop.selecta.se/cdn/shop/files/CelsiusKiwiguava-removebg-preview.png?v=1691404904"
        let redbull = "https://pngimg.com/d/red_bull_PNG27.png"
        let poverking = "https://www.cooperscandy.com/upload/prod/800008104.jpg"
        let monster = "https://web-assests.monsterenergy.com/mnst/5587a01b-3c83-42f7-a741-b29a1d534409.png"
        let latitude ="https://www.cooperscandy.com/upload/prod/800013879.png"
        let clean = "https://varsego.se/storage/ADCDCDC4006DF85CD527BAD98AED1B584D3A88E2E7238CB4C919F730D284564F/3707b79cdc9841ef97e7558bf04a1048/png/media/0f37ec2b51524a42968411bb1974d055/14435%20Clean%20Drink%20Bl%C3%A5.png"
        let vatten = "https://static.vecteezy.com/system/resources/previews/035/209/063/non_2x/glass-of-water-free-png.png"
        let mjölk = "https://static.vecteezy.com/system/resources/thumbnails/032/325/468/small/fresh-milk-in-the-glass-isolated-on-transparent-background-file-cut-out-ai-generated-png.png"
        let kaffe = "https://static.vecteezy.com/system/resources/previews/009/887/134/non_2x/cup-of-coffee-free-png.png"
        let te = "https://static.vecteezy.com/system/resources/thumbnails/016/349/669/small/cup-of-tea-with-fresh-tea-leaves-on-saucer-transparant-background-png.png"
        let kvatten = "https://res.cloudinary.com/coopsverige/image/upload/e_sharpen,f_auto,fl_clip,fl_progressive,q_90,c_lpad,g_center,h_660,w_660/v1675780340/cloud/273478.jpg"
        let choklad = "https://static.vecteezy.com/system/resources/previews/053/962/717/non_2x/delicious-hot-chocolate-with-whipped-cream-and-sprinkles-free-png.png"
        let saft = "https://www.bob.se/wp-content/uploads/sites/48/2022/12/34813_1200x750_WebbNoBackground-1024x640.png"
        let öl = "https://res.cloudinary.com/coopsverige/image/upload/e_sharpen,f_auto,fl_clip,fl_progressive,q_90,c_lpad,g_center,h_660,w_660/v1598952930/406397.jpg"
        let vin = "https://static.vecteezy.com/system/resources/previews/021/217/339/non_2x/red-wine-bottle-png.png"
        let cider = "https://www.thebeertown.co.uk/cdn/shop/products/cider-lost-orchards-scottish-pure-apple-cider-low-alcohol-29399868735685.png?v=1627339864"
        let champange = "https://pngimg.com/d/champagne_PNG104377.png"
        let vodka = "https://img1.picmix.com/output/stamp/normal/6/0/1/1/2191106_cb243.png"
        let rose = "https://static.vecteezy.com/system/resources/previews/047/300/368/non_2x/rose-wine-bottle-and-glass-with-roses-on-transparent-background-free-png.png"
        let whiskey ="https://png.pngtree.com/png-clipart/20210801/original/pngtree-whiskey-glass-red-wine-png-image_6577480.jpg"


        let antal_bonaqua =0
        let antal_fanta =0
        let antal_cola = 0
        let total_price = 0
        let antal_celsius =0
        let antal_champagne =0
        let antal_clean =0
        let antal_choklad =0
        let antal_cider =0
        let antal_kaffe =0
        let antal_latitude=0
        let antal_mjölk=0
        let antal_monster=0
        let antal_vodka =0
        let antal_trocadero=0
        let antal_sprite=0
        let antal_redbull=0
        let antal_nocco=0
        let antal_zingo=0
        let antal_up=0
        let antal_pepsi=0
        let antal_powerking=0
        let antal_vatten=0
        let antal_te=0
        let antal_vin=0
        let antal_saft=0
        let antal_öl=0
        let antal_rose=0






        function addcola(){
            antal_cola +=1
            total_price += 10
        }
        function addsprite(){
            antal_sprite +=1
            total_price +=10
        }
        function addfanta(){
            antal_fanta +=1
            total_price +=10
        }
        function addzingo(){
            antal_zingo +=1
            total_price +=15
        }
        function addup(){
            antal_up +=1
            total_price +=15
        }
        function addpepsi(){
            antal_pepsi +=1
            total_price +=10
        }
        function addtrocadero(){
            antal_trocadero +=1
            total_price +=15
        }
        function addnocco(){
            antal_nocco +=1
            total_price +=20
        }
        function addcelsius(){
            antal_celsius +=1
            total_price +=20
        }
        function addredbull(){
            antal_redbull +=1
            total_price +=10
        }
        function addpowerking(){
            antal_powerking +=1
            total_price +=5
        }
        function addmonster(){
            antal_monster +=1
            total_price +=10
        }
        function addlatitude(){
            antal_latitude +=1
            total_price +=15
        }
        function addclean(){
            antal_clean +=1
            total_price +=20
        }
        function addvatten(){
            antal_vatten +=1
            total_price +=0
        }
        function addmjölk(){
            antal_mjölk+=1
            total_price +=5
        }
        function addkaffe(){
            antal_kaffe +=1
            total_price +=5
        }
        function addte(){
            antal_te+=1
            total_price +=5
        }
        function addbonaqua(){
            antal_bonaqua +=1
            total_price +=5
        }
        function addchoklad(){
            antal_choklad +=1
            total_price +=30
        }
        function addsaft(){
            antal_saft +=1
            total_price +=10
        }
        function addöl(){
            antal_öl +=1
            total_price +=5
        }
        function addvin(){
            antal_vin +=1
            total_price +=50
        }
        function addcider(){
            antal_cider +=1
            total_price +=10
        }
        function addchampagne(){
            antal_champagne+=1
            total_price +=100
        }
        function addvodka(){
            antal_vodka +=1
            total_price +=50
        }
        function addrose(){
            antal_rose +=1
            total_price +=200
        }
        function addwhiskey(){
            antal_cola +=1
            total_price +=1000
        }

       
       

    </script>
<main>

  


</main>

   
    
    <div class="photos">
        <div class= "image-wrapper">
            <p class="namn" >Cola</p>
            <img src={cola} alt="">
            <button class = "add" on:click={addcola}>➕</button>
            <p class ="pris">10 kr</p>
        </div>
        <div class ="image-wrapper">
            <p class="namn">Sprite</p>
            <img src={sprite} alt="">
            <button class = "add" on:click={addsprite}>➕</button>
            <p class ="pris">10 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Fanta</p>
            <img src={fanta} alt="">
            <button class = "add" on:click={addfanta}>➕</button>
            <p class ="pris">10 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Zingo</p>
            <img src={zingo} alt="">
            <button class = "add" on:click={addzingo}>➕</button>
            <p class ="pris">15 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">7up</p>
            <img src={up} alt="">
            <button class = "add" on:click={addup}>➕</button>
            <p class ="pris">15 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Pepsi</p>
            <img src={pepsi} alt="">
            <button class = "add" on:click={addpepsi}>➕</button>
            <p class ="pris">15 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Trocadero</p>
            <img src={trocadero} alt="">
            <button class = "add" on:click={addtrocadero}>➕</button>
            <p class ="pris">20 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Nocco</p>
            <img src={nocco} alt="">
            <button class = "add" on:click={addnocco}>➕</button>
            <p class ="pris">20 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Celsius</p>
            <img src={celsius} alt="">
            <button class = "add" on:click={addcelsius}>➕</button>
            <p class ="pris">20 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Redbull</p>
            <img src={redbull} alt="">
            <button class = "add" on:click={addredbull}>➕</button>
            <p class ="pris">10 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Powerking</p>
            <img src={poverking} alt="">
            <button class = "add" on:click={addpowerking}>➕</button>
            <p class ="pris">5 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Monster</p>
            <img src={monster} alt="">
            <button class = "add" on:click={addmonster}>➕</button>
            <p class ="pris">10 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Latitude</p>
            <img src={latitude} alt="">
            <button class = "add" on:click={addlatitude}>➕</button>
            <p class ="pris">15 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Clean drink</p>
            <img src={clean} alt="">
            <button class = "add" on:click={addclean}>➕</button>
            <p class ="pris">20 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Vatten</p>
            <img src={vatten} alt="">
            <button class = "add" on:click={addvatten}>➕</button>
            <p class ="pris">gratis</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Mjölk</p>
            <img src={mjölk} alt="">
            <button class = "add" on:click={addmjölk}>➕</button>
            <p class ="pris">5 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Kaffe</p>
            <img src={kaffe} alt="">
            <button class = "add" on:click={addkaffe}>➕</button>
            <p class ="pris">5 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Te</p>
            <img src={te} alt="">
            <button class = "add" on:click={addte}>➕</button>
            <p class ="pris">5 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Bonaqua</p>
            <img src={kvatten} alt="">
            <button class = "add" on:click={addbonaqua}>➕</button>
            <p class ="pris">5 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Choklad</p>
            <img src={choklad} alt="">
            <button class = "add" on:click={addchoklad}>➕</button>
            <p class ="pris">30 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Saft</p>
            <img src={saft} alt="">
            <button class = "add" on:click={addsaft}>➕</button>
            <p class ="pris">10 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Vin</p>
            <img src={vin} alt="">
            <button class = "add" on:click={addvin}>➕</button>
            <p class ="pris">50 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Cider</p>
            <img src={cider} alt="">
            <button class = "add" on:click={addcider}>➕</button>
            <p class ="pris">10 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Champagne</p>
            <img src={champange} alt="">
            <button class = "add" on:click={addchampagne}>➕</button>
            <p class ="pris">100 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Vodka</p>
            <img src={vodka} alt="">
            <button class = "add" on:click={addvodka}>➕</button>
            <p class ="pris">50 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Rosé</p>
            <img src={rose} alt="">
            <button class = "add" on:click={addrose}>➕ </button>
            <p class ="pris">200 kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Whiskey</p>
            <img src={whiskey} alt="">
            <button class = "add" on:click={addwhiskey}>➕</button>
            <p class ="pris">1000kr</p>
        </div>
        <div class = "image-wrapper">
            <p class="namn">Öl</p>
            <img src={öl} alt="">
            <button class = "add" on:click={addöl}>➕</button>
            <p class ="pris">5 kr</p>
        </div>

        
    
    
    
    </div>

    <div class="varukorg"> 
        <p class="korg">🛒 </p>
        <p class ="total"> Total: {total_price} SEK</p>
    </div>

        
    <style> 

        
    
    .photos{
        display: flex;
        flex-wrap: wrap;
        max-width: 60%;
        
    }
    
    
         .image-wrapper{
            flex-basis:12vw;
            margin:20px;
            margin-top: 100px;
            
            
         }

        .image-wrapper img{ width: 700%;
            height: 250px; 
            border-radius: 20px;
            border: 2px solid white;
            background-color: gainsboro;
            box-shadow: 4px 8px 0px rgba(0,0,0,0.10);
            
            
        
        }
            
            
        
    
        
        h1{
            text-align: center;
            font-size: 50px;
            margin: 20px;
            color: rgb(252, 4, 4);
        }

        .namn{
            justify-self: center;
            font-weight: 700;
            font-size: xx-large;
            margin-bottom: 10px;
            
        }

        .pris{
            font-weight: 700;
            font-size: large;
        }

        .varukorg{
            width: 600px;
            height: 1000px;
            background-color: whitesmoke;
            position: fixed;
            right: 10px;
            top: 10px;

        }
        .korg{
           font-size: 500%;
           margin-top: 50px;
           margin-left: 80%;
        }
        .total{
            font-size: xx-large;
            color: black;
            margin-top: 90%;
            margin-left: 60%;
            font-weight: 500;
        }

        .add{
            background-color: greenyellow;
            border-radius: 50%;
            margin-top: 10px;
        }
        .pris{
            font-size: x-large;
            text-align: center;
            
        }

     
      
    </style>
    
    