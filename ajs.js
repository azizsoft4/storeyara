function evi(d){
let s=["tail","img","color"];
let w=["<div class=\"vtail l bhov\" onclick=\"addop('tail','[n]')\">[v]</div>",
"<div class=\"vimg bhov l\" onclick=\"myf('[n]')\" style=\"background-image:url('[v]=s300')\"></div>",
"<div class=\"vcolor l bhov\" style=\"background:[v]\" onclick=\"addop('color','[n]')\"></div>"];
for(let t=0;t<3;t++){let o="";


if(typeof d[s[t]] != "undefined"){
	document.getElementById("n"+s[t]).classList.remove("n");
	
for(let i=0;i<d[s[t]].length;i++){
	
	
o += w[t].replace(/\[(.+?)\]/g,function(match,$1){return {v:d[s[t]][i],n:i}[$1];});
	}
}
document.getElementById('i'+s[t]).innerHTML = o;}
if(window.innerWidth > 599){
myf(0);
}
for(let i=0;i<3;i++){document.getElementById('deta_'+i).innerHTML =d["deta"][i];}
}
function myf(n){


if(n>d['img'].length-1){n=0;}if(n<0){n=d['img'].length-1;}
document.getElementById('sh_f').src=d['img'][n];
document.getElementById('vewerimg').src=d['img'][n];
document.getElementById('sh_f').classList.add('o0');
addop('img',n);
	if(window.innerWidth < 600){	
myf2(n);
	}




}
function myf2(n){	document.getElementById('vewer').classList.remove('n');
document.getElementById('vewerb').innerHTML = document.getElementById('iimg').innerHTML;
}
function addop(t,v){document.getElementById("v"+t).value = v;
let e = document.getElementById("i"+t).getElementsByClassName("v"+t);for(let i=0;i<e.length;i++){e[i].classList.remove("act");}
e[v].classList.add("act");}




function mi(s){
   let d=JSON.parse(document.getElementById(s).getElementsByClassName("n")[0].innerHTML);
   document.write('<div class="mini_do" style="background-image:url('+d['img'][0]+'=s800);"><div class="mini_prix"><span class="mini_prixv">'+d['deta'][2]+'</span>dh</div><div class="mini_do2">'+d['deta'][0]+'</div></div>');
}



document.onclick = function(event) {if(!event.target.classList.contains("w")){
let de = document.getElementsByClassName("z");let co = de.length;	
for(let i=0;i<co;i++){if(!de[i].contains(event.target)){de[i].classList.add("n");}}}}
function addtocart(){var el = document.getElementById('addpro');el.innerHTML = "<img height='45px' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Loadin_8_part.svg'/>";
let x = new XMLHttpRequest();x.onreadystatechange = function(){
if (x.readyState == 4 && x.status == 200){
el.innerHTML =x.response;document.getElementById("cartnum").innerHTML ="1";
document.getElementsByClassName("addsecc")[0].classList.add("addseccgo");
document.getElementsByClassName("addsecc")[0].onanimationend = function(){
document.getElementsByClassName("addsecc")[0].classList.remove("addseccgo");};
}};x.withCredentials = true;x.open('POST','https://a000a.eu5.org/stor/index.php',true);
x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');x.send('a='+JSON.stringify(d));}
