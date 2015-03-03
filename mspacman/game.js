function init()
{
	canvas = document.getElementById('game_canvas');
	ctx = canvas.getContext('2d');
	var img = new Image();
	img.addEventListener("load", function() {
	ctx.drawImage(img, 322, 0, 785, 137, 0, 0, 785, 137);
	ctx.drawImage(img, 83 ,23, 13, 14, 36, 31, 13, 14);
	}, false);
	img.src="pacman10-hp-sprite.png";
	
	//-463, -137
}