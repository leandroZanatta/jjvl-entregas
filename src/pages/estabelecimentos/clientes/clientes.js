import React from 'react';
import { View, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FAB } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default class Clientes extends React.Component {

    data = [{ id: 1, nome: 'Victor'}, { id: 2, nome: 'Leandro'}];

    render() {
        return (
            <View style={{flex:1}}>
                <FlatList
                    data={this.data}
                    renderItem={({ item }) => (
                        <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#FAFAFA' }}>
                            <Button
                                key={item.id}
                                style={{ backgroundColor: '#FFF', padding: 20, height: 50 }}
                                onPress={() => console.log(item.nome)}
                                title={item.nome} />
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
                <FAB
                 style={styles.fab}
                    small
                    icon="plus"

                    onPress={() => this.props.navigation.navigate('CadastroCliente')}
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