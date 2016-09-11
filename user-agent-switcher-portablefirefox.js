fso = new ActiveXObject("Scripting.FileSystemObject");
shell = new ActiveXObject("Wscript.Shell");

userScript= "Data\\profile\\user.js";
agentFile="useragentstring.txt";

//Create user script file for writing
fUserScript=fso.OpenTextFile(userScript, 2, true );
//Read agent file for picking
lines=fileRead(agentFile);
rand = lines[Math.floor(Math.random() * lines.length)];

//For debugging
//WScript.Echo(rand);
//Write user script file
fUserScript.Write("user_pref(\"general.useragent.override\",\""+rand+"\");");
fUserScript.Close();

//Start firefox
shell.Run("FirefoxPortable.exe", 0);

function fileRead(File){
	var fso=new ActiveXObject("Scripting.FileSystemObject");
	var fid=fso.OpenTextFile(File);
	var contents=fid.ReadAll();
	fid.Close();
	var output=contents.split("\n");
	return(output);
}
