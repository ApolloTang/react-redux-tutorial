# react-tutorial

Each folder is a lesson. If you are on OSX, create a node_modules/ directory at the top level folder:

```sh
mkdir node_modules
```

After that you can go to the first lesson folder to run npm install

```sh
cd <lesson-dir>
npm i
```

You only have to do npm install once because node_modules/ in each lesson is symbolically link to the node_modules/ folder in its parent directory recussively. 

The above installation instruction won't work for Windows, please read footnote [1] for work around.

To play with a lesson, spin up webpack dev server (Windows user, please read footnote [2]):

```sh
npm start
```

Then, in your browser open up localhost:9999

Here is the full instruction set for OSX:

```sh
git clone git@github.com:ApolloTang/react-tutorial.git
mkdir node_modules
cd ./part-1-react-fundamental/01-00-component
npm i
npm start 
```





------------
[1]: If you are on Window machine, before you do 'npm i' you have to delete node_modules from the lesson directory and copy .babelrc to the lesson directory:
```sh
cd ./part-1-react-fundamental/01-00-component
rm ./node_modules
cp ../../.babelrc .
npm i
```
This is because node_modules/ is a Linux symbolic link which does not reconized by Windows, as the result npm will be confused. By removing this file, npm can install node packages normally; the trade off is that you have to install the packages in each lesson, which can be annoying. 

The second step that you have to copy .babelrc to each lesson folder because for some reason Windows does not search up to parent directory to look for babel configuration.

[2]: I originally write this tutorial on OSX, but later discovered that port 9999 is already taken on Windows by default, as the result 'npm start' will terminate with errors. To work around this you have to configure webpack to use a different port by editing the file webpack.config.js in each lesson:
```javascript
devSever: {
   . . .
   port: 9999   // <--- change this to something else
   . . . 
}
```
