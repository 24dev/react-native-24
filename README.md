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
| "space-around";
alignItems?:
| "space-between"
| "center"
| "stretch"
| "flex-start"
| "flex-end"
| "baseline"
| "initial"
| "inherit";
children: any;
style?: ViewStyle;
vertical?: boolean;
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

<b>Space</b> (handy replacement for margins)

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

feedback?: FeedbackType;
theme?: ThemeType;
children: any;
style?: ViewStyle | ViewStyle[];
onPress?: () => void;
onPressIn?: () => void;
onPressOut?: () => void;
disabled?: boolean;
```

<b>Divider</b> (hr)

```jsx
<Divider props />

color?: string;
width?: string | number;
style?: ViewStyle;
```

<b>Spinner</b> (ActivityIndicator)

```jsx
<Spinner props />

color?: string;
size?: number;
style?: ViewStyle;
```

<b>Input</b> (TextInput)

```jsx
<Input props />

height?: number;
style?: ViewStyle;
value?: string;
onChange?: Function;
multiline?: boolean;
editable?: boolean;
placeholder?: string;
```

<b>Avatar</b> (for profile/display pictures)

```jsx
<Avatar props />

source: any; // uri or require local
style?: ViewStyle;
size?: "xxs" | "xs" | "sm" | "md" | "lg";
```

<b>Card</b>

```jsx
<Card props />

children: any;
style?: ViewStyle;
noPadding?: boolean;
```

<b>Notification</b> (for in-app toasts)

```jsx
import { Notification, Notify } from "react-native-24";
import { Text } from "...";
// Use at the root level of your app. Then you can call Notify.open elsewhere.
<Notification
  ref={ref => {
    Notify.setNotification(ref);
  }}
  text={Text} // use whatever text component you want (so you can have custom fonts)
/>;
```

<b>Notify</b> (to call Notification ☝️)

```jsx
Notify.open(message, type);

message: string;
success: "success" | "info" | "error";
```

## Roadmap

Currently in active development, and not ready for production projects. Any feedback is welcome.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
