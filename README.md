# react-tutorial

Each folder is a lesson. If you are on OSX, create a node_modules/ directory at the top level folder<sup>1</sup>:

```sh
mkdir node_modules
```

You only have create the node_modules/ directory once. After that you can go to each lesson folder to run npm install

```sh
cd <lesson-dir>
npm i
```

To play with a lesson, spin up webpack dev server:

```sh
npm start
```

In browser open up localhost:9999


------------

[1]: node_modules/ in each lesson is symbolically linked to this directory so that you don't have duplicated node package in each lesson.



