import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';

var selectedArray = [];
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb23ba',
        title: 'Forth Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa07f63',
        title: 'Fifth Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145771e29d72',
        title: 'Sixth Item',
    },
];



class MultipleSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItems: []
        }
    }
    onMultipleSelection(item) {
        let count = 0;
        if (selectedArray.length === 0) {
            selectedArray.push(item);
        } else {
            selectedArray.map((res, i) => {
                if (res.id === item.id) {
                    selectedArray.splice(i, 1);
                    count++;
                }
            });
            if (count === 0) {
                selectedArray.push(item);
            }
        }
        this.setState({
            selectedItems: selectedArray
        })
    }

    renderItem = ({ item }) => {
        const { selectedItems } = this.state
        let selected;
        const images = [];
        let count = 0;
        if (selectedItems.length > 0) {
            selectedItems.map((res, j) => {
                if (res.id === item.id) {

                    selected = "true";
                    count += 1;
                }
                if (count === 0) {
                    selected = "";
                }
            });
            if (selected === "true") {
                images.push(
                    <View style={{ height: 20, width: 20, backgroundColor: 'black', borderRadius: 10 }} />
                );
            } else {
                images.push(<View style={{ height: 20, width: 20, backgroundColor: 'white', borderRadius: 10, borderWidth: 1, borderColor: 'black' }} />);
            }
        } else {
            images.push(<View style={{ height: 20, width: 20, backgroundColor: 'white', borderRadius: 10, borderWidth: 1, borderColor: 'black' }} />);
        }
        return (
            <TouchableOpacity style={styles.item} onPress={() => this.onMultipleSelection(item)}>
                <Text style={styles.title}>{item.title}</Text>
                {images}
            </TouchableOpacity>
        )
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    extraData={this.state}
                />
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 32,
    },
});

export default MultipleSelection;