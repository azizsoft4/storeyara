			function s(e){
				return document.querySelector(e);
}

function aji(va){
	
	
	let x = new XMLHttpRequest();
	x.onreadystatechange = function(){
if (x.readyState == 4 && x.status == 200){


va['fo'](x.response);
}};
x.open('POST',va['url'],true);

x.send();

}


