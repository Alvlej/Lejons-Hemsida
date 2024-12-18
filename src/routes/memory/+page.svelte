<script>

    let bluePoints = 0
    let redPoints = 0
    let wait = false
    let blueTurn = true
    let winner = ""
    let cards =[ {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1015px-BMW.svg.png", flipped: false, matched: false},
    {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1015px-BMW.svg.png", flipped: false, matched: false}, 
    {img: "https://images.seeklogo.com/logo-png/1/2/audi-logo-png_seeklogo-13436.png?v=638687242440000000", flipped: false, matched: false},
    {img: "https://images.seeklogo.com/logo-png/1/2/audi-logo-png_seeklogo-13436.png?v=638687242440000000", flipped: false, matched: false},
    {img: "https://img.redbull.com/images/w_950/redbullcom/2024/6/12/a2dsocx2qlbi8imuah8w/red-bull-logo", flipped: false, matched: false},
    {img: "https://img.redbull.com/images/w_950/redbullcom/2024/6/12/a2dsocx2qlbi8imuah8w/red-bull-logo", flipped: false, matched: false},
    {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png", flipped: false, matched: false},
    {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png", flipped: false, matched: false},
    {img: "https://www.svgrepo.com/show/446896/mclaren-alt.svg", flipped: false, matched: false},
    {img: "https://www.svgrepo.com/show/446896/mclaren-alt.svg", flipped: false, matched: false},
    {img: "https://www.oreca.com/wp-content/uploads/2017/06/porsche-logo.png", flipped: false, matched: false},
    {img: "https://www.oreca.com/wp-content/uploads/2017/06/porsche-logo.png", flipped: false, matched: false},
    
    ]

    let flipped_img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FafMhQcDFHIrHhA1ebwSezKXfNzqlpjEig&s"

    shuffle()

    function flip(card){
       
        let flippedCards = cards.filter(kort => kort.flipped == true && kort.matched == false)
        if (flippedCards.length >= 2 || wait){
          return
        }

        else if(card.flipped == false) { 

          card.flipped = !card.flipped
          flippedCards = cards.filter(kort => kort.flipped == true && kort.matched == false)
          cards = [... cards]
          
          
          if (flippedCards.length == 2){
            wait = true
            if( flippedCards[0].img == flippedCards[1].img){
              flippedCards[0].matched = true
              flippedCards[1].matched = true

              
              if (!blueTurn){
                redPoints += 1
              }
              else if (blueTurn){
                bluePoints += 1
              }
              if(redPoints + bluePoints == 6){
                if(bluePoints>redPoints){
                  winner="Blå vann"
                }
                else if(bluePoints<redPoints){
                  winner="Röd vann"
                }
                else{
                  winner="Oavgjort"
                }
              }
            }

              else{
                blueTurn = !blueTurn
              } 
           

            setTimeout(() => {
              cards.forEach((card) => {
                  card.flipped = card.matched;
              });
              wait = false
              cards = cards;
            }, 1000);
          }   
        }
        }



  function shuffle() {
    for (var i = cards.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = cards [i];
      cards[i] = cards[j];
      cards[j] = temp;}
      
      }
      
        function spela_igen(){
          cards = [{img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1015px-BMW.svg.png", flipped: false, matched: false},
          {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1015px-BMW.svg.png", flipped: false, matched: false}, 
          {img: "https://images.seeklogo.com/logo-png/1/2/audi-logo-png_seeklogo-13436.png?v=638687242440000000", flipped: false, matched: false},
          {img: "https://images.seeklogo.com/logo-png/1/2/audi-logo-png_seeklogo-13436.png?v=638687242440000000", flipped: false, matched: false},
          {img: "https://img.redbull.com/images/w_950/redbullcom/2024/6/12/a2dsocx2qlbi8imuah8w/red-bull-logo", flipped: false, matched: false},
          {img: "https://img.redbull.com/images/w_950/redbullcom/2024/6/12/a2dsocx2qlbi8imuah8w/red-bull-logo", flipped: false, matched: false},
          {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png", flipped: false, matched: false},
          {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png", flipped: false, matched: false},
          {img: "https://www.svgrepo.com/show/446896/mclaren-alt.svg", flipped: false, matched: false},
          {img: "https://www.svgrepo.com/show/446896/mclaren-alt.svg", flipped: false, matched: false},
          {img: "https://www.oreca.com/wp-content/uploads/2017/06/porsche-logo.png", flipped: false, matched: false},
          {img: "https://www.oreca.com/wp-content/uploads/2017/06/porsche-logo.png", flipped: false, matched: false}]

    bluePoints = 0
    redPoints = 0
    wait = false
    blueTurn = true
    shuffle()
    winner=""
  }

shuffle()

</script>

<h1>Memory</h1>

<main>
    
    {#each cards as card}
    <div class = "card" class:flipped= { card.flipped } on:click= {flip(card)}>
        <img class = "front" src={card.img} alt="" >
        <img class = "back" src={flipped_img} alt="">
        

    </div>
    
    {/each}
    <div>
      <button on:click={spela_igen}> <strong>Spela igen</strong>  </button>
    </div>
    
    

</main>

  <p class ="winner">{winner}</p>

   <aside class = "blue">
    
    <p>{bluePoints}</p>

   </aside>


   <aside>
    
    <p>{redPoints}</p>

   </aside>

   <aside class ="turn" class:blue= { blueTurn }></aside>
                          

<style>
    h1 {
        text-align:center;
    }
    
    main{
        display:grid;
        grid-template-columns:repeat(4, 200px);
        grid-template-rows:repeat(3,200px);
        justify-content: center;
    }
    .card{
        border: solid 3px; 
        margin: 5px;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        transition: transform 0.5s;
    }

    .card:not(.flipped):hover{
      transform: scale(1.1);

    }
    

    .back{
        position: absolute;
        position: relative;
        top: -185px;
        
        
    }

    
  aside{
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p{
    font-size: 30px;
  }

  .blue{

    left:10px;
    background-color:blue;
  }

  .turn{
    box-shadow: 0 0 10px 10px yellowgreen;
    z-index: -1;
  }
  .front{
    transform: rotateY(180deg);
  }
  .flipped{
    transform: rotateY(180deg);
  }
  
  .winner{
    text-align: center;
  }
                          
</style>
