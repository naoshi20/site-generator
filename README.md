# My Portfolio Site

## CSS Architecture

### Folder Structure

```
sass/
├── base/                      // variables and mixins
├── components/                // style for components
├── layout/                    // define whole layout
├── pages/                     // specific style for each page
├── themes/                    // various themes
├── abstracts/                 // not output css
├── vendors/                   // third party css
```

## CSS Naming Convention

using BEM

## Node Package Manager

nvm allows you to quickly install and use different versions of node via the command line.

```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
nvm install 12
nvm use 19
```

[link](https://github.com/nvm-sh/nvm)

## Preparation for using npm

```
npm init
```

## Autocompilation of SCSS

```
npm install node-sass
npm ls
```

In package.json

```
"scripts": {
    "compile:sass": "node-sass sass/main.scss css/style.css -w"
}
```

Then, sass/main.scss can be compiled to css/style.css. '-w' option watches detections and compile it automatically.

## Hoot Reloading

```
npm install -g live-server
```

In your project root, you should run below command.

```
live-server
```

## Berore Development

```
npm ci
npm run compile:sass
live-server
```

## Development Tips

multi cursor feature

1. select some word
2. cmd + d
3. write some word

[link](https://code.visualstudio.com/Docs/editor/codebasics#:~:text=VS%20Code%20supports%20multiple%20cursors,insert%20cursors%20below%20or%20above.)

## GAS API testing

`curl -X "GET" "https://script.google.com/macros/s/AKfycbzLCJgPhcmr4ObLHWpiMNUA3IXkGry9piT15hR8z4COcIdwD-wBiB9R1b4FSeKeMu72Fw/exec" -H "accept: application/json" -L`
