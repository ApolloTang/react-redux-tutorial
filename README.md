# react-tutorial

Each folder is a lesson. If you are on OSX<sup>1</sup>, create a node_modules/ directory at the top level folder<sup>2</sup>:

```sh
mkdir node_modules
```

You only have to create this node_modules/ directory once. After that you can go to each lesson folder to run npm install

```sh
cd <lesson-dir>
npm i
```

To play with a lesson, spin up webpack dev server:

```sh
npm start
```

As an example : 

```sh
cd ./part-1-react-fundamental/01-00-component
npm i
npm start 
```

Then, in your browser open up localhost:9999




------------
[1]: If you are on Window machine, before you do 'npm i' you have to delete node_modules from the lesson directory and copy .babelrc to the lesson directory. For example:
```sh
cd ./part-1-react-fundamental/01-00-component
rm ./node_modules
cp ../../.babelrc .
npm i
```
Also, it is very like that port 9999 is already taken on Windows, if that is the case you will get error when you do 'npm start'. If that is the case you can configure webpack to use a different port in file webpack.config.js:
```javascript
deSever: {
   port: 9999   // <--- change this to something else 
}
```

[2]: node_modules/ in each lesson is symbolically linked to this directory so that you don't have duplicated node package in each lesson.
 


