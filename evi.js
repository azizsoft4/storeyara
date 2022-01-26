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

   document.write('<div class="mini_do" style="background-image:url('+d['img'][0]+'=s800);"><div class="mini_prix"><span class="mini_prixv">'+d['deta'][2]+'</span>dh</div><div class="mini_do2">'+d['deta'][0]+'</div></div>');
}
