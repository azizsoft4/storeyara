function evi(d){
let s=["tail","img","color"];
let w=['<label><input class="n" type="radio" name="vtail" value="[v]"><div class="l bhov vtail">[v]</div></label>',
'<label><input class="n" onchange="myf([n]);" type="radio" name="vimg" value="[n]"><div class="l bhov vimg" style="background-image:url([v]=s300)"></div></label>',
'<label><input class="n" type="radio" name="vcolor" value="[v]"><div class="l bhov vcolor" style="background:[v];"></div></label>'];
for(let t=0;t<3;t++){let o="";
if(typeof d[s[t]] != "undefined"){document.getElementById("n"+s[t]).classList.remove("n");	
for(let i=0;i<d[s[t]].length;i++){
o += w[t].replace(/\[(.+?)\]/g,function(match,$1){return {v:d[s[t]][i],n:i}[$1];});}}document.getElementById('i'+s[t]).innerHTML = o;}
myf(0);
for(let i=0;i<3;i++){document.getElementById('deta_'+i).innerHTML =d["deta"][i];}

document.querySelector("input[name=vtail]").checked = true;
document.querySelector("input[name=vcolor]").checked = true;
document.querySelector("input[name=vimg]").checked = true;

}

function myf(n){
	

document.getElementById('sh_f').src=d['img'][n];
document.getElementById('sh_f').classList.add('o0');


}



function myf2(){	document.getElementById('vewer').classList.remove('n');
document.getElementById('vewerb').innerHTML = document.getElementById('iimg').innerHTML;
}
function mi(s){
let d=JSON.parse(document.getElementById(s).getElementsByClassName("n")[0].innerHTML);
document.write('<div class="mini_do" style="background-image:url('+d['img'][0]+'=s800);"><div class="mini_prix"><span class="mini_prixv">'+d['deta'][2]+'</span>dh</div><div class="mini_do2">'+d['deta'][0]+'</div></div>');}
document.onclick = function(event) {if(!event.target.classList.contains("w")){
let de = document.getElementsByClassName("z");let co = de.length;	
for(let i=0;i<co;i++){if(!de[i].contains(event.target)){de[i].classList.add("n");}}}}
function addtocart(){

if(typeof document.querySelector("input[name=vtail]:checked").value == "string"  && typeof document.querySelector("input[name=vcolor]:checked").value == "string" ){
let e1 = document.getElementById('addpro');
let e2 = document.getElementsByClassName("addsecc")[0];
e1.innerHTML = "<img height='30px' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Loadin_8_part.svg'/>";
let x = new XMLHttpRequest();x.onreadystatechange = function(){
if (x.readyState == 4 && x.status == 200){
e1.innerHTML ="ØªÙ…Øª Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ù…Ù†ØªØ¬ Ù„Ø³Ù„Ø© Ø§Ù„ØªØ³ÙˆÙ‚";
document.getElementById("cartnum").innerHTML =x.response;
e2.classList.add("addseccgo");
e2.onanimationend = function(){
e2.classList.remove("addseccgo");};
}};x.withCredentials = true;x.open('POST','https://a000a.eu5.org/stor/index.php',true);
x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
x.send('a='+JSON.stringify(d)+'&n='+document.getElementById('noumcom').value+'&tail='+document.querySelector("input[name=vtail]:checked").value+'&color='+document.querySelector("input[name=vcolor]:checked").value);

}else{
	alert('Ø¥Ø®ØªØ± Ø§Ù„Ù„ÙˆÙ† Ùˆ Ø§Ù„Ù…Ù‚Ø§Ø³');
	
}
}
function che(yy){let el=document.getElementById('noumcom');let n=Number(el.value) + Number(yy);if(Number.isInteger(Number(n)) && n > 0){el.value=n;}else{el.value="1";}}
