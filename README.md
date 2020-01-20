<h1 align="center">
  <img src="assets/bella.png?raw=true" width="250" align="center" alt="react bella logo">
</h1>

<div align="center">

A clean, modern React Native component library. Light and easy to use. Built for 2020 and beyond. <br />
Made with 🔥 in the UK.

</div>

## 💻 Installation

```sh
npm install react-native-24
```

## 🚀 Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Text, Flex } from "react-native-24";

function App() {
  return (
    <Flex justifyContent="center">
      <Text type="h1" color="blue">
        Bella
      </Text>
    </Flex>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
```

## 📚 Components

<b>Flex</b> (for flexible, dynamic divs)

```jsx
<Flex justifyContent>
  {...children}
</Flex>

justifyContent: oneOf(['center', 'flex-start', 'flex-end', 'space-between', 'space-evenly']). Default is 'space-between'.
children: any
```

<b>Text</b> (for all kinds of text)

```jsx
<Text type>
  {...children}
</Text>

type: oneOf(['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']). Default is 'span'.
children: any
```

<b>Space</b> (forget margins)

```jsx
<Space size>
  {...children}
</Space>

size: oneOf(['xs', 'sm', 'md', 'lg', 'xl']). Default is 'md'.
children: any
```

<b>Button</b> (buttons)

```jsx
<Button theme>
  {...children}
</Button>

theme: oneOf(['primary', 'outline', 'invisible']). Default is 'invisible'.
children: any
```

## Roadmap

Currently in development. Once a complete, stable release is ready, we will announce.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
