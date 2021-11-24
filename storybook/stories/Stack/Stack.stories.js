import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Text, Image } from "react-native";
import Card from "../../../App/Components/Card";
import Stack from "../../../App/Components/Stack";

storiesOf("Stack", module)
  //   .addDecorator((getStory) => <Center>{getStory()}</Center>)
  .add("Single Child", () => (
    <Stack>
      <Card />
    </Stack>
  ))
  .add("Multi Child", () => (
    <Stack>
      <Card />
      <Card />
      <Card />
    </Stack>
  ))
  .add("Horizontal Order", () => (
    <Stack order="horizontal">
      {[...Array(5).keys()].map((i) => (
        <Card key={i}>
          <Text>{i + 1} - card</Text>
        </Card>
      ))}
    </Stack>
  ))
  .add("Vertical Order", () => (
    <Stack order="vertical">
      {[...Array(5).keys()].map((i) => (
        <Card key={i}>
          <Text>{i + 1} - card</Text>
        </Card>
      ))}
    </Stack>
  ));
