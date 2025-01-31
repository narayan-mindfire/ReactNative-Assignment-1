import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import data from "../../assets/products.json";
import ProductCard from "@/components/ProductCard";
export default function ProductPage() {
  return (
    <SafeAreaView style={styles.sv}>
      <View style={styles.container}>
        <TouchableOpacity style={{ marginTop: 33 }}>
          <View style={styles.bbtn}>
            <Image source={require("@/assets/icons/arrowleft2.png")} />
          </View>
        </TouchableOpacity>
        <Text style={styles.headtxt}>Products ({data.products.length})</Text>
        <FlatList
          data={data.products}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 20,
          }}
          renderItem={({ item }) => (
            <ProductCard
              name={item.title ? item.title : "default"}
              price={item.price ? item.price : 0}
              image={
                item.images
                  ? item.images[0]
                  : "https://assets.dummyjson.com/public/qr-code.png"
              }
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sv: {
    backgroundColor: "#FFFFFF",
  },
  container: {
    paddingHorizontal: 24,
  },
  bbtn: {
    backgroundColor: "#F4F4F4",
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  headtxt: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 19.2,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  fav: {
    marginLeft: "90%",
  },
});
