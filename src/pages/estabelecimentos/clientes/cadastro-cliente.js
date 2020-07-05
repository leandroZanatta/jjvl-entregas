import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
export default class CadastroCliente extends React.Component {


    render() {
        return (
            <View>
                <TextInput label="Nome:" />
                <Button mode="contained" onPress={() => this.props.navigation.goBack()}>
                    cadastrar
      </Button>
            </View>
        );
    }
}