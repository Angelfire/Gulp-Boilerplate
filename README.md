Gulp Boilerplate
================
**Less + HTML5 + Livereload**

This is a Gulp boilertplate which has settings to work with Less and Livereload in a base directory structure

Gettings started
----

File structure
---

```
gulp-boilerplate
|   .gitignore
|   Gulpfile.js
|   package.json
|   README.md
|
+---app
|   |   index.html
|   |
|   +---js
|   |       main.js
|   |
|   +---css
|   |       main.css
|   |
|   +---less
|   |       main.less
|   |
|   +---img
|   |   |
```

Less
---
The main less file is main.less and less folder is the include directory. main.less is recompiled everytime a less file is modified.

Livereload
----
Livereload works for javascript, html and less files. You need to install the livereload plugin in your browser in order to make it work

Static Server
----
Once you run the gulp proccess a connect static http server runs over port 9000, It serves files from the "app" folder

Tasks
---
Included gulp tasks

**styles**

It compiles the main.less file and execute livereload for css

**connnect**

It runs a static connect server over port 9000 (you can change it) for app directory

**scripts**

It executes livereload for javascript files

**views**

It executes livereload for html files

**default**

It starts livereload server, watch for less, js and html (called when you run 'gulp' in command line)