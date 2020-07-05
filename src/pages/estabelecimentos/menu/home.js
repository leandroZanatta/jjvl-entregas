import React from 'react';
import { View, Text } from 'react-native';
import { FAB } from 'react-native-paper';
import { StyleSheet } from 'react-native';



export default class HomeEstabelecimento extends React.Component {

    render() {
        return (
            <View style={{flex:1}}>
              <Text>Home Page Estabelecimento</Text>
              <FAB
                 style={styles.fab}
                    small
                    icon="plus"

                    onPress={() => this.props.navigation.navigate('Pedido')}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})