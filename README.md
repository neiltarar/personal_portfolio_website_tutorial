# Creating a React Application

First, a BIG shoutout to [Bree](https://github.com/Bvaneerden), who has contributed to this project. Thanks for your help, Bree!

To start building a new React application, we can leverage `create-react-app`, a handy toolset for creating React apps with no build configuration. Here's the command to get started:

```bash
$ npx create-react-app <your-app-name>
```

Remember to replace `<your-app-name>` with your desired application name.

<br>

## Adding Material UI dependencies

We can add [Material UI](https://mui.com/material-ui/getting-started/installation/) dependencies to our application with the following command:

```bash
$ npm i @mui/material @emotion/react @emotion/styled
```

In addition to the core Material UI components, we'll also install the Material UI icons using:

```bash
$ npm i @mui/icons-material
```

<br>

## Fixing the babel plugin warning message

If you encounter any warning messages related to the babel plugin, consider adding the private-property-in-object plugin:

```bash
$ npm i @babel/plugin-proposal-private-property-in-object
```

For further discussion on this issue, you can check this [GitHub repository discussion](https://github.com/facebook/create-react-app/issues/11793).

<br>

## Installing react-router-dom

[Here](https://www.npmjs.com/package/react-router-dom) for the documentation.

```bash
$ npm i react-router-dom
```

<br>

## Installing react-scroll

[Here](https://www.npmjs.com/package/react-scroll) for the documentation.

```bash
$ npm i react-scroll
```

## How to install chatbot

[Here](https://www.freecodecamp.org/news/how-to-build-a-chatbot-with-react/) is a handy tutorial to follow how to make the chatbot your own.

```bash
$ npm install react-chatbot-kit
```
