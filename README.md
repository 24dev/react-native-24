<h1 align="center">
  <img src="assets/rn-24.png?raw=true" width="250" align="center" alt="react 24 logo">
</h1>

<div align="center">

A clean, modern React Native component library. Light and easy to use. Built for 2020 and beyond. <br />
Made with 🔥 in the UK.

</div>

## 💻 Installation

```sh
npm install react-native-24
```

or

```sh
yarn add react-native-24
```

## 🚀 Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from "react";
import { Text, Flex } from "react-native-24";

function App() {
  return (
    <Flex justifyContent="center">
      <Text type="h1" color="blue">
        24
      </Text>
    </Flex>
  );
}
```

## 📚 Components

<b>Flex</b> (for flexible, dynamic divs)

```jsx
<Flex props>
  {...children}
</Flex>

justifyContent?:
  | "space-between"
  | "space-evenly"
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-around"; Default is 'space-between'.
children: any;
style?: ViewStyle;
```

<b>Text</b> (for all kinds of text)

```jsx
<Text props>
  {...children}
</Text>

children: any
size?: oneOf(['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']); Default is 'p'.
color?: string;
bold?: boolean;
skeletonLoading?: boolean;
camel?: boolean;
underlined?: boolean;
numberOfLines?: number;
style?: TextStyle;
```

<b>Space</b> (forget margins)

```jsx
<Space props>
  {...children}
</Space>

size?: oneOf(['xs', 'sm', 'md', 'lg', 'xl']). Default is 'md';
children?: any;
style?: ViewStyle;
```

<b>Button</b> (buttons)

```jsx
<Button props>
  {...children}
</Button>

feedback?: "opacity" | "highlight" | "none"; Default is "opacity".
theme?: "primary" | "outline" | "invisible"; Default is "invisible".
children: any;
style?: ViewStyle;
onPress: function;
disabled?: boolean;
```

<b>Divider</b> (hr)

```jsx
<Divider props>
  {...children}
</Divider>

color?: string;
width?: string | number;
style?: ViewStyle;
```

## Roadmap

Currently in development. Once a complete, stable release is ready, we will announce.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
