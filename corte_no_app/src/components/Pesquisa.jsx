import * as React from "react";
import { Searchbar } from "react-native-paper";

const Pesquisa = () => {
	const [searchQuery, setSearchQuery] = React.useState("");

	const onChangeSearch = query => setSearchQuery(query);

	return (
		<Searchbar
			style={{backgroundColor:"black",}}
			inputStyle={{color: "orange"}}
			placeholder="Pesquisa"
			placeholderTextColor={"orange"}
			onChangeText={onChangeSearch}
			value={searchQuery}
			iconColor={"orange"}
		/>
	);
};

export default Pesquisa;
