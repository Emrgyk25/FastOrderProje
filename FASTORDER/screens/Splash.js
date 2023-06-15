/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login Page');
        }, 2000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/fast.png")}
                style={styles.image}
            />
            <Text style={styles.text}></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },
    image: {
        width: 450,
        height: 450,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SplashScreen;


