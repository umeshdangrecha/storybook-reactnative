import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import { width } from "dom-helpers";
import React from "react";
import { Text, Image } from "react-native";
import Card from "../../../App/Components/Card";
import Center from "../../../App/Components/Center";

storiesOf("Card", module)
  .addDecorator((getStory) => <Center>{getStory()}</Center>)
  .add("Basic", () => <Card />)
  .add("Custom-child", () => (
    <Card>
      <Image
        source={require("../../../assets/adaptive-icon.png")}
        style={{ width: 100, height: 100 }}
      />
      <Text>Custom child</Text>
    </Card>
  ));
