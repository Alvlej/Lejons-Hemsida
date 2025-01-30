<head>
    <title>Spin the wheel</title>
    
</head>
<body>
    <div class="container">
        <div class="spinBtn">Spin</div>
        <div class="wheel">
            
            <div class="number"  style = --i:29;><span>Login</span></div>

        </div>
    </div>         

    <script> 
        let wheel = document.querySelector(".wheel");
        let spinBtn = document.querySelector(".spinBtn");
        let value = Math.ceil(Math.random()* 3600);

        spinBtn.onclick = function(){
            wheel.style.transform= "rotate(" + value + "deg)"
            value += Math.ceil(Math.random()* 3600);

         
    }

    
        


    </script>
</body>




<style>

.number{

    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: black;
}

.container{
    position: relative;
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    transform: rotate(calc(360/29deg * var(--i)));
    

}
.container .spinBtn{

    position: absolute;
    width: 60px;
    height: 60px;
    display: flex;
    background: white;
    border-radius: 50%;
    z-index: 10;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 600;
    color:black;
    border: 4px solid;
    cursor: pointer;
    user-select: none;
}

.container .spinBtn::before{
    content:"";
    position: absolute;
    top:-30px;
    width: 20px;
    height: 30px;
    background: white;
    clip-path: polygon(50% 0%, 13% 100%, 82% 100%);
    
}
.container .wheel{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: black;
    border-radius: 50%;
    box-shadow: 0 0 0 5px  black, 0 0 0 15px white, 0 0 0 18px black;
    transition: transform 5s ease-in-out;
    
}

.container .wheel .number{
    position: absolute;
    width: 50%;
    height: 50%;
    background-color: red;
    transform-origin: bottom right;
    transform:rotate(calc(360/29deg * var(--i)));
    clip-path: polygon(0 0, 50% 0, 100% 100%, 0 50%);
    display: flex;
    justify-content: center;
    align-items: center;

}

.container .wheel .number span{
    position: relative;
    transform: rotate(310deg);
    font-size: x-large;
    font-weight: 1000;
}


</style>