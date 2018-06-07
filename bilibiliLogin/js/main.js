window.onload = function(){
	var img = document.getElementById('list').getElementsByTagName('img');
	
	function animate(offset){
		for(let i = 0;i<img.length;i++){
			if(parseInt(img[i].style.left) <= -320){
				img[i].style.left = 320+'px';
			}
			img[i].style.left = parseInt(img[i].style.left) - offset+ 'px';
		}
	}
	var timer;
	function autoplay(){
		timer = setInterval(function(){
			animate(3);
		},60);
	}
	autoplay();
}
