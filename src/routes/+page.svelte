
<!--Delar upp sidan i två delar-->
<main>
  <div>

    <h1 class=Alvin >Alvin Lejon </h1>
    <h2> /h2>Här har jag samlat min uppgifter jag gjort i samband med webbutveckling i årskurs 2 på Maja Beskowgymnasiet!</h2>
    <h3 id = "Number" > /h3>Inspirerade citat för min webbutvecklingsresa:</h3>
    <!--Under denna kommer vi lägga till fler element-->
	<p id="inspo">
		"The only way to learn a new programming language is by writing programs in it." - <strong>Dennis Ritchie</strong>, creator of the C programming language.
	</p>
	
	<p style="background-color:pink">
		"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - <span>Patrick McKenzie, software engineer and entrepreneur</span>.
	</p>
	
	
	

  </div>
    <!--Här kommer vi lägga till en bild senare i uppgiften 1.2.4 Extra styling-->  

	
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 320"><path fill="#5000ca" fill-opacity="1" d="M0,32L8,37.3C16,43,32,53,48,74.7C64,96,80,128,96,128C112,128,128,96,144,112C160,128,176,192,192,218.7C208,245,224,235,240,192C256,149,272,75,288,64C304,53,320,107,336,154.7C352,203,368,245,384,224C400,203,416,117,432,96C448,75,464,117,480,122.7C496,128,512,96,528,80C544,64,560,64,576,101.3C592,139,608,213,624,240C640,267,656,245,672,213.3C688,181,704,139,720,138.7C736,139,752,181,768,192C784,203,800,181,816,170.7C832,160,848,160,864,144C880,128,896,96,912,69.3C928,43,944,21,960,21.3C976,21,992,43,1008,74.7C1024,107,1040,149,1056,192C1072,235,1088,277,1104,277.3C1120,277,1136,235,1152,213.3C1168,192,1184,192,1200,176C1216,160,1232,128,1248,117.3C1264,107,1280,117,1296,133.3C1312,149,1328,171,1344,186.7C1360,203,1376,213,1392,181.3C1408,149,1424,75,1432,37.3L1440,0L1440,0L1432,0C1424,0,1408,0,1392,0C1376,0,1360,0,1344,0C1328,0,1312,0,1296,0C1280,0,1264,0,1248,0C1232,0,1216,0,1200,0C1184,0,1168,0,1152,0C1136,0,1120,0,1104,0C1088,0,1072,0,1056,0C1040,0,1024,0,1008,0C992,0,976,0,960,0C944,0,928,0,912,0C896,0,880,0,864,0C848,0,832,0,816,0C800,0,784,0,768,0C752,0,736,0,720,0C704,0,688,0,672,0C656,0,640,0,624,0C608,0,592,0,576,0C560,0,544,0,528,0C512,0,496,0,480,0C464,0,448,0,432,0C416,0,400,0,384,0C368,0,352,0,336,0C320,0,304,0,288,0C272,0,256,0,240,0C224,0,208,0,192,0C176,0,160,0,144,0C128,0,112,0,96,0C80,0,64,0,48,0C32,0,16,0,8,0L0,0Z"></path></svg>
  
	
  
<svg viewBox="-200-100 500 700" xmlns="http://www.w3.org/2000/svg">
	<path fill="#FF0066" d="M29.5,-44C37.1,-41,41.4,-30.9,43.5,-21.3C45.7,-11.7,45.8,-2.5,46.6,8.2C47.5,19,49.1,31.5,43.9,38.7C38.7,45.9,26.6,47.8,14.3,53.8C1.9,59.9,-10.8,70,-18.4,66.2C-26,62.4,-28.6,44.7,-40.2,33.5C-51.8,22.4,-72.5,17.9,-75.7,9.6C-78.8,1.3,-64.3,-10.7,-56.1,-24.3C-47.8,-37.9,-45.8,-53,-37.5,-55.7C-29.2,-58.3,-14.6,-48.4,-1.8,-45.6C10.9,-42.7,21.9,-46.9,29.5,-44Z" transform=" translate(100,70)"  />
  </svg>
  
  

</main>

<style>
  main{
    /*Styling för att dela upp sidan i två delar. */
    /*Vi kommer gå igenom detta i detalj senare*/
    margin: auto;
    width: 80vw;
    height: 70vh;
    display: grid;
    grid-template-columns: repeat(2,50%);
    overflow: hidden;
  }
  div{
    /*Styling för att centrera texten i behållaren*/
    margin: auto;
  }
  
	
h1{
    background-color: lightblue;
}
                

h2{
    color: rgb(255, 165, 0);
}
h3{
    color: #3cb371;
    font-family: sans-serif;
    font-weight: bold;
}

.Alvin {
	color: red
}


#inspo{
    font-family: courier;
    font-size: 160%;
}

span{
    color: green;
}


  /* Vi skiljer elementen med ett kommatecken(,) för att ge möjligheten till att ge flera element samma styling*/
  h1, h2, h3, p {
  display: inline;
  /*Ger utrymme mellan element*/
  margin: 10px;
}
        
</style>
-