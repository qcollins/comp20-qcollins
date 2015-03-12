function parse()
{
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function()
	{
    	if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    	{
        	var toprint = JSON.parse(xmlhttp.responseText);
        	make(toprint);
   		}
	}
	xmlhttp.open("GET", "data.json", true);
	xmlhttp.send();

	function make(data) 
	{
    	var out = "";
    	var i=0;

    	for(i; i < data.length; i++) 
    	{
        	out += data[i].content;
        	out += data[i].username;
    	}
    	document.getElementById("messages").innerHTML = out;
	}
}