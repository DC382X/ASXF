var count = 0
setInterval(function(){
var r = document.getElementById("TXT").value
var s = document.getElementById("IXI").value
if(r == ""){
document.getElementById("01").innerHTML = ('<style>body { background:#fff; font-family:Arial; margin:0; padding:0; }</style><p style="color:Red">Please put text in both places!!')
}
else{
var a = r.includes("'");
if(a == true){
document.getElementById("01").innerHTML = ('<style>body { background:#fff; font-family:Arial; margin:0; padding:0; }</style> <p style="color:Red">Your message contains an &apos;! Remove them so the message works!</p>')
}
else{
document.getElementById("01").innerHTML = ('<style>body { background:#fff; font-family:Arial; margin:0; padding:0; }</style><title>Tech</title><a href="javascript:var z=window.open();z.document.write(&apos;'+r+'&apos;)"> '+s+'</a><br> Base Code: <input value="javascript:var z=window.open();z.document.write(&apos;'+r+'&apos;)" size="152" readonly>')
}
}
},250)
