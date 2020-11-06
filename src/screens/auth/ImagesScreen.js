import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Alert, Platform, FlatList, Image } from 'react-native';
import { UserContext } from "../../utils/UserContext";
import { login } from "../../utils/login";
import AsyncStorage from "@react-native-community/async-storage";
import ImagePicker from 'react-native-image-crop-picker';
var selectedImages = []
export default function ImagesScreen(props) {
    const { user, setUser } = useContext(UserContext);
    const [imagesArray, setImagesArray] = useState([])
    function onChoosingPhoto() {
        Alert.alert(
            "",
            "",
            [
                {
                    text: "Choose from Gallery",
                    onPress: () => openPicker(),
                },
                { text: "Take Photo", onPress: () => openCamera() },
                { text: "Cancel", onPress: () => console.log("cancel") }
            ],
        );
    }
    function openPicker() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true
        }).then(image => {
            // console.log("hjqgjhg", image);
            var id = '_' + Math.random().toString(36).substr(2, 9);
            var obj = {
                id: id,
                base64: image.data,
                uri: Platform.OS === "ios" ? image.sourceURL : image.path,
                type: image.mime
            }
            selectedImages = [...selectedImages, obj]

            setImagesArray(selectedImages)

        });
    }
    function openCamera() {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true
        }).then(image => {
            var id = '_' + Math.random().toString(36).substr(2, 9);
            var obj = {
                id: id,
                base64: image.data,
                uri: Platform.OS === "ios" ? image.sourceURL : image.path,
                type: image.mime
            }
            selectedImages = [...selectedImages, obj]

            setImagesArray(selectedImages)
        });
    }
    function onRemoveImg(item, key) {
        Alert.alert(
            "Are you sure you want to delete this photo?",
            "",
            [
                {
                    text: "Ok",
                    onPress: () => removePic(item, key)
                },
                { text: "Cancel", onPress: () => console.log("Cancel Pressed") }
            ],
        );
        // console.log(key, "=======key")

    }
    function removePic(item, key) {
        selectedImages.splice(key, 1);
        // console.log(selectedImages.length)
        // this.setState({
        //     imagesArray: [...selectedImages]
        // })
        setImagesArray([...selectedImages])
    }
    const renderImages = ({ item, index }) => {
        return (
            <View style={{
                marginLeft: 10, marginTop: 10, width: 100,
                height: 100, borderRadius: 10, marginRight: 10
                // ...Styles.shadow
            }}>
                <Image source={{ uri: item.uri }} style={{
                    width: "100%",
                    height: 100,
                    borderRadius: 10,
                }} />
                <View
                    // onPress={this.onRemoveImg.bind(this, item, index)}
                    style={{ position: 'absolute', right: -8, top: -8, bottom: 0, }}
                >
                    <TouchableOpacity onPress={() => onRemoveImg(item, index)}
                        style={{
                            backgroundColor: 'red',
                            height: 20, width: 20,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        {/* <Image source={Images.icons.canceled} style={{ height: 20, width: 20 }} /> */}
                        <Text style={{ color: "white", fontWeight: 'bold' }}>X</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                flex: 0.2,
                // justifyContent: 'center',
                // backgroundColor: "pink", 
                // alignItems: 'center'
            }}>
                {imagesArray && imagesArray.length > 0 ? (
                    <FlatList

                        key={imagesArray.length}
                        data={imagesArray}
                        horizontal={true}
                        extraData={this.state}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderImages}
                        keyExtractor={(item, i) => i.toString()}
                    />

                ) : (null)}
            </View>
            <View style={{ flex: 0.8 }}>
                <TouchableOpacity
                    onPress={() => onChoosingPhoto()}
                    style={{
                        height: 40, width: 150, backgroundColor: 'lightblue',
                        alignItems: 'center', justifyContent: 'center',
                        alignSelf: 'center',
                        marginTop: 10
                    }}
                >

                    <Text>Choose Photo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
