import { StyleSheet, View } from "react-native";
import Login from "./src/screens/Login";
import React from "react";

export default function App() {
	return (
		<View style={styles.container}>
			<Login/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		alignItems: "center",
		justifyContent: "center",
	},
});
