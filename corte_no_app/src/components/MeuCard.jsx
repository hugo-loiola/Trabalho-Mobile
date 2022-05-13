/* eslint-disable react/prop-types */
import * as React from "react";
import { View } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";

const MeuCard = (props) => (
	<Card elevation={100} style={{margin:16, borderRadius: 15, backgroundColor:"#dcdcdc"}}>

		<Card.Content>
			<Card.Cover style={{borderRadius:15}} resizeMode='contain' source={props.imagem} />

			<Title style={{color:"orange"}}>{props.titulo}</Title>

			<Paragraph>{props.telefone}</Paragraph>

			<View style={{flexDirection:"row", justifyContent:"space-around"}}>
				<View>
					<Paragraph>Serviços:</Paragraph>
					<Paragraph>* {props.servico}</Paragraph>
				</View>

				<View>
					<Paragraph>Localização: </Paragraph>
					<Paragraph>* {props.localizacao}</Paragraph>
				</View>
			</View>
			
		</Card.Content>

		<Card.Actions>
			<Button onPress={props.onPress} mode='contained' color="orange" style={{borderRadius: 15, marginTop: 16, marginLeft:10, marginBottom: 16}} >Preços</Button>
		</Card.Actions>

	</Card>
);

export default MeuCard;
