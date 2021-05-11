function help(){
  document.getElementById("02").innerHTML = ('Tips: Use "&lt;br&gt;" to break lines and have seperated code.<br>Use <input value="&lt;script&gt;var a = prompt(&quot;Lorem&quot;);document.write(a+&quot;Lorem&quot;)&lt;/script&gt;" size="98" readonly>for some really fancy stuff.')
  count++
  count = count - Math.floor(-.1*count)
  document.getElementById("03").innerHTML = ('&Omega; x '+count)
  }
