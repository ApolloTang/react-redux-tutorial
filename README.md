# react-tutorial

Each folder is a lesson. If you are on OSX, create a node_modules/ directory at the top level folder:

```sh
mkdir node_modules
```

After that you can go to the first lesson folder to run npm install:

```sh
cd <lesson-dir>
npm i
```

You only have to do npm install once because node_modules/ in each lesson is symbolically linked to the node_modules/ folder in its parent directory recussively. 

The above installation instruction won't work for Windows, please read footnote [1] for work around.

To play with a lesson, spin up webpack dev server:

```sh
npm start
```

Then, in your browser open up localhost:8888

Here is the full instruction set for OSX:

```sh
git clone git@github.com:ApolloTang/react-tutorial.git
cd react-tutorial
mkdir node_modules
cd ./part-1-react-fundamental/01-00-component
npm i
npm start 
```





------------
[1]: If you are on Window machine, before you do 'npm i' you have to delete node_modules from the lesson directory and also copy .babelrc to the lesson directory:
```sh
cd ./part-1-react-fundamental/01-00-component
rm ./node_modules
cp ../../.babelrc .
npm i
```
This is because I have symbolically linked each node_modules/ to the one in its parent folder. Unfortunately Linux symbolic link is not reconized by Windows, as the result npm run on window is confused and throw errors. By removing this file, npm can install node packages normally; the trade off is that you have to install the packages in each lesson, which takes long time and can be annoying. 

The second step that you have to copy .babelrc to each lesson folder because for some reason Windows does not search up to parent directory to look for babel configuration.

