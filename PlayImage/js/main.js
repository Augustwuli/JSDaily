 window.onload = function() {
    var list = document.getElementById('list');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var container = document.getElementById('container');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var index = 1;

    function animate(offset) {
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        if(newLeft < -2400){
        	list.style.left = 0 + 'px';
        }
        if(newLeft > 0){
        	list.style.left = -2400 + 'px';
        }
    }
	var timer;
	function autoplay(){
		timer = setInterval(function(){
			next.onclick()
		},1500);
	}
	autoplay();
	function stopplay(){
		clearInterval(timer);
	}
	function showButton(){
		//清除之前的样式
		for(let i = 0;i<buttons.length;i++){
			if(buttons[i].className == 'on'){
				buttons[i].className = '';
			}
		}
		buttons[index-1].className = 'on';
	}
	prev.onclick = function() {   
		index-=1;
		if(index < 1){
			index = 5;
		}
		showButton();
    	animate(600);
    }
    next.onclick = function() {  
    	index+=1;
    	if(index > 5){
    		index = 1;
    	}
    	showButton();
        animate(-600);
    }
    for(var i = 0;i<buttons.length;i++){
    	buttons[i].onclick = function() {
    		var clickIndex = parseInt(this.getAttribute('index'));
    		var offset = 600*(index - clickIndex);
			animate(offset);
			index = clickIndex;
			showButton();
        }
    }
    container.onmouseover = stopplay;
	container.onmouseout = autoplay;
}