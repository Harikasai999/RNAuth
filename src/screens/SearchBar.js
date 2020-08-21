import React from 'react'
import { View, Text, TextInput } from 'react-native'
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
    return (
        <View style={{ flex: 1 }}>
            <TextInput
                placeholder="Search"
                value={searchTerm}
                onChangeText={(text) => setSearchTerm(text)}
            />
            {results.map((item, key) => {
                return (
                    <Text> {item.name}</Text>
                )
            })}
        </View>
    )
}
