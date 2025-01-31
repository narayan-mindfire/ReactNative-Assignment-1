import SearchBar from "@/components/SearchBar";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import productData from "@/assets/products.json";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const products = productData.products;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={{ width: "100%", alignItems: "center" }}>
            <SearchBar height={40} width={342} />
          </View>
          <View style={styles.catBox}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.heading}>Categories</Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 16, paddingRight: 3 }}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categories}>
              <View style={styles.category}>
                <Image
                  resizeMode="contain"
                  source={require("@/assets/images/hoodie.png")}
                />
                <Text style={styles.cattxt}>Hoodies</Text>
              </View>
              <View style={styles.category}>
                <Image
                  resizeMode="contain"
                  source={require("@/assets/images/Shorts.png")}
                />
                <Text style={styles.cattxt}>Shorts</Text>
              </View>
              <View style={styles.category}>
                <Image
                  resizeMode="contain"
                  source={require("@/assets/images/Shoes.png")}
                />
                <Text style={styles.cattxt}>Shoes</Text>
              </View>
              <View style={styles.category}>
                <Image
                  resizeMode="contain"
                  source={require("@/assets/images/Bags.png")}
                />
                <Text style={styles.cattxt}>Bag</Text>
              </View>
              <View style={styles.category}>
                <Image
                  resizeMode="contain"
                  source={require("@/assets/images/Accessories.png")}
                />
                <Text style={styles.cattxt}>Accessories</Text>
              </View>
            </View>
          </View>
          <View style={styles.topList}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 24,
              }}
            >
              <Text style={styles.heading}>Top Selling</Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 16, paddingRight: 3 }}>See All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={products.slice(10, 20)}
              horizontal={true}
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
          <View style={[styles.newList, { marginBottom: 15 }]}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 24,
              }}
            >
              <Text style={[styles.heading, { color: "#8E6CEF" }]}>New In</Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 16, paddingRight: 3 }}>See All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              nestedScrollEnabled={true}
              data={products.slice(20, 28)}
              horizontal={true}
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 63,
    justifyContent: "center",
    marginBottom: 35,
  },
  catBox: {
    paddingHorizontal: 24,
    marginTop: 24,
    height: 116,
    width: "100%",
  },
  heading: {
    fontWeight: "700",
    fontSize: 16,
  },
  categories: {
    top: 13,
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  category: {
    width: 56,
    height: 80,
    // borderColor : 'black',
    // borderWidth : 3,
    flexDirection: "column",
    alignItems: "center",
  },
  cattxt: {
    fontSize: 12,
    lineHeight: 19.2,
    fontWeight: "300",
  },
  topList: {
    height: 282,
    width: "100%",
    paddingHorizontal: 24,
    // borderColor : 'black',
    // borderWidth : 3,
  },
  newList: {
    paddingHorizontal: 24,
    width: "100%",
    height: 300,
  },
});
