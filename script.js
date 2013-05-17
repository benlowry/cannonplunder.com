function d(o) { return document.getElementById(o); }

function AJAXRequest()
{
	if(window.XMLHttpRequest)
	{
		this.Req = new XMLHttpRequest();

		if(this.Req.overrideMimeType) 
		{
			this.Req.overrideMimeType("text/html");
		}
	}
	else if(window.ActiveXObject)
	{
		this.Req = new ActiveXObject("Microsoft.XMLHTTP");
	}

	this.Method = "get";
	this.PostData = "";
}

AJAXRequest.prototype.Load = function()
{
	if(this.Method == "get")
	{
		this.Req.open(this.Method, this.Target, true);
		this.Req.send(null);
	}
	else
	{
		this.Req.open(this.Method, this.Target, true);
		this.Req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		this.Req.setRequestHeader("Content-length", this.PostData.length);
		this.Req.setRequestHeader("Connection", "close");
		this.Req.send(this.PostData);
	}
}