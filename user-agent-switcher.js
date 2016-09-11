shell = new ActiveXObject("Wscript.Shell");
agentFile="useragentstring.txt";

//Read agent file for picking a user agent string
lines=fileRead(agentFile);
rand = lines[Math.floor(Math.random() * lines.length)];

//For debugging
//WScript.Echo(rand);

//Start chrome
shell.Run("chrome.exe --user-agent=\""+rand+"\"", 0);

function fileRead(File){
	var fso=new ActiveXObject("Scripting.FileSystemObject");
	var fid=fso.OpenTextFile(File);
	var contents=fid.ReadAll();
	fid.Close();
	var output=contents.split("\n");
	return(output);
}
