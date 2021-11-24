import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";

import React from "react";
import MyButton from "../../../App/Components/MyButton";
import Center from "../../../App/Components/Center";

storiesOf("MyButton", module)
  .addDecorator((getStory) => <Center>{getStory()}</Center>)
  .add("Primary", () => (
    <MyButton title="Primary" onPress={action("OnButtonPress")} />
  ))
  .add("Danger", () => (
    <MyButton type="danger" title="Danger" onPress={action("OnButtonPress")} />
  ))
  .add("Secondary", () => (
    <MyButton
      title="Secondary"
      type="secondary"
      onPress={action("OnButtonPress")}
    />
  ))
  .add("Rounded", () => (
    <MyButton
      title="Rounded"
      type="rounded"
      onPress={action("OnButtonPress")}
    />
  ))
  .add("Fab", () => (
    <MyButton title="+" type="fab" onPress={action("OnButtonPress")} />
  ));
