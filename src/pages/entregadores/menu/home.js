import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class HomeEntregador extends React.Component {

    data = [{ id: 1, estabelecimento: 'Garage' }];

    render() {
        return (
            <View>
                <FlatList
                    data={this.data}
                    renderItem={({ item }) => <Text >{item.estabelecimento}</Text>}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        );
    }
}