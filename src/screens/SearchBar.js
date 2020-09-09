import React from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
const people = [
    { "name": "Afghanistan" },
    { "name": "Åland Islands", },
    { "name": "Albania", },
    { "name": "Algeria", }, {
        "name": "American Samoa",
    }
];

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const results = !searchTerm
        ? people
        : people.filter(person =>
            person.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
    const renderItem = ({ item, index }) => {
        return (
            <View style={{ height: 40, borderBottomWidth: 1, borderColor: "lightgrey", justifyContent: 'center' }}>
                <Text> {item.name}</Text>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <TextInput
                placeholder="Search"
                value={searchTerm}
                style={{ height: 40, padding: 15, borderColor: 'grey', borderWidth: 1 }}
                onChangeText={(text) => setSearchTerm(text)}
            />
            {/* {results.map((item, key) => {
                return (
                    <Text> {item.name}</Text>
                )
            })} */}
            <FlatList
                data={results}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
