import { StyleSheet, View, TextInput, Image } from "react-native";

interface BarDimenstions {
  height: number;
  width: number;
}
export default function SearchBar({ height, width }: BarDimenstions) {
  return (
    <View style={[styles.container, { height, width }]}>
      <Image source={require("@/assets/icons/srch.png")} style={styles.icon} />
      <TextInput
        style={styles.input}
        clearButtonMode="always"
        placeholder="Search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    borderRadius: 100,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingLeft: 35,
    height: "100%",
  },
  icon: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 10,
  },
});
