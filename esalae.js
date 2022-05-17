			function s(e){
				return document.querySelector(e);
}

function aji(va){
	
	
	let x = new XMLHttpRequest();
	x.onreadystatechange = function(){
if (x.readyState == 4 && x.status == 200){


va['fo'](x.response);
}};
x.open('GET',va['url'],true);

x.send();

}


function pgx(id){
	s("#pgx").classList.add('d');
aji({"url":"https://www.esalserv.cf/feeds/posts/default/"+id+"?alt=json",
"fo":function(e){

let jj = JSON.parse(e);
	s("#pgx").classList.remove('d');
s("#pgx").innerHTML = jj["entry"]["content"]["$t"];

	}
});
	
}
