import React from 'react'
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import { Tab, Tabs, ScrollableTab, TabHeading } from 'native-base';
const DATA = [
    {
        id: "1",
        title: "All",
        data: [
            {
                id: "1",
                subTitle: "Pizza",
                price: "",
                description: ""
            },
            {
                id: "2",
                subTitle: "Burger",
                price: "",
                description: ""
            },
            {
                id: "3",
                subTitle: "Risotto",
                price: "",
                description: ""
            }]
    },
    {
        id: "2",
        title: "Chips",
        data: [
            {
                id: "1",
                subTitle: "French Fries",
                price: "",
                description: ""
            },
            {
                id: "2",
                subTitle: "Onion Rings",
                price: "",
                description: ""
            },
            {
                id: "3",
                subTitle: "Fried Shrimps",
                price: "",
                description: ""
            }]
    },
    {
        id: "3",
        title: "Drinks",
        data: [
            {
                id: "1",
                subTitle: "Water",
                price: "",
                description: ""
            },
            {
                id: "2",
                subTitle: "Coke",
                price: "",
                description: ""
            },
            {
                id: "3",
                subTitle: "Sprite",
                price: "",
                description: ""
            }]
    },
    {
        id: "4",
        title: "Desserts",
        data: [
            {
                id: "1",
                subTitle: "Cheese Cake",
                price: "",
                description: ""
            },
            {
                id: "2",
                subTitle: "Ice Cream",
                price: "",
                description: ""
            },
            {
                id: "3",
                subTitle: "Pastry",
                price: "",
                description: ""
            }]
    },
    {
        id: "5",
        title: "Pizzas",
        data: [
            {
                id: "1",
                subTitle: "Cheese Pizza",
                price: "",
                description: ""
            },
            {
                id: "2",
                subTitle: "Chicken Pizza",
                price: "",
                description: ""
            },
            {
                id: "3",
                subTitle: "Paneer Pizza",
                price: "",
                description: ""
            }]
    },
    {
        id: "6",
        title: "Drinks",
        data: [
            {
                id: "1",
                subTitle: "Water",
                price: "",
                description: ""
            },
            {
                id: "2",
                subTitle: "Coke",
                price: "",
                description: ""
            },
            {
                id: "3",
                subTitle: "Sprite",
                price: "",
                description: ""
            }]
    },
];

export default function TabsScreen() {
    const [page, setPage] = React.useState(null);
    var description = [];
    {
        DATA.map((tab, i) => {
            key = { i };

            description.push(
                <Tab
                    tabBarBackgroundColor={"white"}
                    heading={
                        <TabHeading
                        // style={[
                        //     styles.tabHeadingStyle,
                        //     {
                        //         borderBottomWidth: page === i ? 3 : 0
                        //     }
                        // ]}
                        >
                            <Text>{tab.title} </Text>

                        </TabHeading>
                    }
                >
                    <FlatList
                        data={tab.data}
                        renderItem={({ item }) => {
                            return (
                                <Text>{item.subTitle}</Text>
                            )
                        }}
                        keyExtractor={item => item.id}
                    />

                </Tab>
            );
        });
    }

    return (
        <View style={{ flex: 1 }}>
            <Tabs
                // tabStyle={styles.tabBar}
                // tabBarUnderlineStyle={styles.tabUnderline}
                onChangeTab={({ i }) => setPage(i)}
                tabBarPosition="top"
                tabContainerStyle={{ borderTopWidth: 0 }}
                renderTabBar={() => <ScrollableTab />}
            >
                {description}
            </Tabs>
        </View>
    )
}


const styles = StyleSheet.create({
    tabBar: {
        // marginLeft: 10
    },
    tabHeadingStyle: { backgroundColor: "white" },
    tabUnderline: {
        backgroundColor: "transparent",
        // marginLeft: 10
    },
    activeText: {
        color: "#007bff",
        fontSize: 16,
        fontWeight: "500",
        // paddingLeft: 10
    },
    lastText: {
        color: "yellow",
        fontSize: 16,
        fontWeight: "500"
    },
    active: {
        backgroundColor: "white"
    }
});