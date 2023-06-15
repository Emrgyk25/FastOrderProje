/* eslint-disable prettier/prettier */
import React from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../components/Login.styles";

function LoginPage(props) {
    function navigateToPage() {
        props.navigation.navigate('Home');
    }
    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/fast.png')}
                    style={styles.image}
                />

            </View>

            <View style={styles.form}>
                <View style={styles.item}>
                    <TextInput style={styles.input} placeholder={'Kullanici Adi'} />
                    <TextInput style={styles.input_margin} placeholder={'Sifre'} />
                    <TouchableOpacity><Text style={styles.item_text}>Şifrenizi mi unuttunuz?</Text></TouchableOpacity>
                </View>
                <View style={styles.login}>
                    <TouchableOpacity onPress={navigateToPage}><Text style={styles.login_text}>Giriş yap</Text></TouchableOpacity>
                </View>
                <View style={styles.or}>
                    <Text style={styles.or_text}>veya</Text>
                </View>

                <View style={styles.finish}>
                    <Text style={styles.finish_text}>Bir hesabın yok mu? <TouchableOpacity><Text style={styles.register}>Kayıt ol</Text></TouchableOpacity></Text>
                </View>
            </View>
        </SafeAreaView>
    );

}

export default LoginPage;
