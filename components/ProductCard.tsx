import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.fav}>
        <Image source={require("@/assets/icons/fav-icon.png")} />
      </TouchableOpacity>
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: image }}
          resizeMode="contain"
          style={styles.imgStyle}
        />
        <View style={{ padding: 5 }}>
          <Text numberOfLines={1} style={styles.productName}>
            {name}
          </Text>
          <Text style={styles.productPrice}>${price.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 151,
    height: 281,
    position: "relative",
  },
  cardContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
  },
  imgStyle: {
    width: "100%",
    height: 220,
  },
  productName: {
    color: "#272727",
    height: 15,
  },
  productPrice: {
    fontSize: 14,
    color: "#272727",
    fontWeight: "700",
    height: 14,
  },
  fav: {
    position: "absolute",
    top: 5,
    right: 10,
    height: 24,
    width: 24,
    zIndex: 10,
  },
});
