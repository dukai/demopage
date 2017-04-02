
	var clientWidth = document.documentElement.clientWidth;
	var fontSize;
	if(clientWidth > 750){
		fontSize = '100px';
	}else{
		fontSize = 100 * (clientWidth / 750) + 'px';
	}

  document.documentElement.style.fontSize = fontSize;

