# Name
user-agent-switcher-script

# Synopsis
A user agent random switcher for a chrome, portable firefox.

# Motivation
Why I create this project? The browser will response a header to a remote server by every request. The header contains some identified message in the user agent section. So I can confuse a remote server via modifying the user agent string. 

# Installation For Chrome
1. Download and install the [chrome](https://www.google.com.tw/chrome/browser/desktop/).
1. Download *user-agent-switcher.js* and *useragentstring.txt* source files into the **C:\Program Files\Google\Chrome\Application** directory.
1. Select and right click on the *user-agent-switcher.js* script file to go the sub menu **Open File| Select Program**. Then pick the opened program as **Microsoft (R) Windows Based Script Host**, and check **always use the program to open this file**. Click **OK** button to apply it.
1. Select and right click on the *user-agent-switcher.js* script file to go the sub menu **Send To|Desktop as shortcut**.
1. Now you can click the shortcut to start chrome with a random user agent.
1. You can go to [User Agnet String.com](http://www.useragentstring.com/index.php) to check current user agent.

# Installation For Portable Firefox
1. Download and install the [portable firefox](http://portableapps.com/apps/internet/firefox_portable).
1. Download *user-agent-switcher.js* and *useragentstring.txt* source files into the **FirefoxPortable** folder.
1. Select and right click on the *user-agent-switcher.js* script file to go the sub menu **Open File| Select Program**. Then pick the opened program as **Microsoft (R) Windows Based Script Host**, and check **always use the program to open this file**. Click **OK** button to apply it.
1. Select and right click on the *user-agent-switcher.js* script file to go the sub menu **Send To|Desktop as shortcut**.
1. Now you can click the shortcut to start firefox with a random user agent.
1. You can go to [User Agnet String.com](http://www.useragentstring.com/index.php) to check current user agent.

# API Reference
javascript wsh.

# Custom your user agent
Just open and edit the *useragentstring.txt* text file. 

# Environment
* Programming with javascript wsh.
* Test on Windows XP.
* [chrome](https://www.google.com.tw/chrome/browser/desktop/)
* [Portable Firefox](http://portableapps.com/apps/internet/firefox_portable)

# Contributors
* [User Agnet String.com](http://www.useragentstring.com/index.php) - Check youar user agent .
* [User.js](http://kb.mozillazine.org/User.js_file) - Mozilla knowledge base user.js.
* [List of User Agent Strings](http://www.useragentstring.com/pages/useragentstring.php)

# License
MIT
