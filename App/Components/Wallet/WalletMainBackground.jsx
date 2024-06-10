import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import WhiteText from "../WhiteText/WhiteText";
import Header from "../Dashboard/Header";
const { width } = Dimensions.get("window");

const WalletMainBackground = ({
  title = "Wallet",
  onBackPress,
  containerStyle,
  headerStyle,
  balanceSectionStyle,
  iconStyle,
  balanceValueStyle,
  balance,
  amountAdded,
  amountDeducted,
  children,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Header />
      <View style={[styles.header, headerStyle]}>
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.separator}></View>
      <View style={[styles.balanceSection, balanceSectionStyle]}>
        <Ionicons
          name="wallet-outline"
          size={28}
          color="#FFC5C5"
          style={[styles.icon, iconStyle]}
        />
        <View style={styles.balanceTextContainer}>
          <WhiteText style={styles.currentBalanceText}>
            Current Balance
          </WhiteText>
          <Text style={[styles.balanceValue, balanceValueStyle]}>
            ₹{balance}
          </Text>
        </View>
      </View>
      <View style={styles.amountDetailsContainer}>
        {amountAdded > 0 && (
          <View style={[styles.amountSection, styles.amountAdded]}>
            <Text style={styles.amountAddedText}>Added: ₹{amountAdded}</Text>
          </View>
        )}
        {amountDeducted > 0 && (
          <View style={[styles.amountSection, styles.amountDeducted]}>
            <Text style={styles.amountDeductedText}>Deducted: ₹{amountDeducted}</Text>
          </View>
        )}
      </View>
      {children}
    </View>
  );
};

export default WalletMainBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#2A2E2E",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 60 : 40, // Adjust for iOS status bar
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  backButton: {
    position: "absolute",
    left: 20,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#F4E8F3",
    marginVertical: 20,
  },
  balanceSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: width - 40,
    marginHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#808080",
    borderRadius: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  balanceTextContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  currentBalanceText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    
  },
  balanceValue: {
    color: "#ECB425",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
    marginLeft:5,
  },
  amountDetailsContainer: {
    marginHorizontal: 20,
    marginTop: -10,
  },
  amountSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
  amountAdded: {
    backgroundColor: "#DFF0D8",
  },
  amountDeducted: {
    backgroundColor: "#F2DEDE",
  },
  amountAddedText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
  amountDeductedText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
});
