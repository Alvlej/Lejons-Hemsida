<script>
	import { onMount } from "svelte";


	let x = 1;
	let y = 1;
	let z = 1;

	let choser = "https://cdn.pixabay.com/photo/2022/03/23/02/48/cross-7086307_1280.png";
	
	let boxes = []


	onMount(()=>{
		boxes =  document.querySelectorAll(".box") ;
	})
	let turn = "x";
	let isgameover = false;


	function onKeyDown(e) {
		switch (e.keyCode) {
			case 38: 
				if (y > 0) y -= 1;
				break;
			case 40: 
				if (y < 2) y += 1;
				break;
			case 37: 
				if (x > 0) x -= 1;
				break;
			case 39: 
				if (x < 2) x += 1;
				break;
			case 13: 
				for (let i = 0; i < boxes.length; i++) {
					if (boxes[i].innerHTML === "" && boxes[i].style.left == `${left}px` && boxes[i].style.top == `${top}px`) {
						boxes[i].innerHTML = `<img src="${choser}" style="width: 83px; height: 83px;">`;
						break;
					}
				}
				break;
		}
	}

	boxes.forEach((e, index) => {
		e.innerHTML = "";
		e.style.position = "absolute";
		e.style.left = `${(index % 3) * 83}px`;
		e.style.top = `${Math.floor(index / 3) * 83}px`;
		e.addEventListener("click", () => {
			if (!isgameover && e.innerHTML === "") {
				e.innerHTML = turn;
			}
		});
	});

</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />
<body> 
	
	<div style="left: {63+(x*83)}px; top: {83+(y*83)}px" class="choser">
		<img src="{choser}" alt="">
	</div>
	
    <div class ="main-grid">
        {#each Array(9) as _,i}
            <div class = "box-align"  data-index={i}>{i}</div>
        {/each}
        

    </div>
</body>



<style>

	.main-grid{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		height: 250px;
		width: 250px;
		margin: auto;
		border: 2px solid black;
		text-align: center;


	}


	.box-align{
		cursor: pointer;
		font-size:  2rem;
		font-weight: 800;
		border: 2px solid black;
	}


	.choser {
		width: 83px;
		height: 83px;
		position: relative;
		margin-left: 580px;
		top: 200px;
	
		
		
	}


	

</style>