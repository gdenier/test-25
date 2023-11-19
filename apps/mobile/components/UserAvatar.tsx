import { ReactElement } from "react";
import { Image } from "react-native";
import { Text, View } from "./ui/design-system";

export const UserAvatar = ({ name }: { name: string }): ReactElement | null => {
  return (
    <View tw="bg-slate-400 aspect-square p-2 w-10 justify-center items-center rounded-full">
      <Text tw="text-slate-950">
        {name.split(" ")[0].split("")[0]}
        {name.split(" ")[1].split("")[0]}
      </Text>
    </View>
  );
};
