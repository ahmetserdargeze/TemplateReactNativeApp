import React from 'react';
import {StyleSheet, View ,Text,StatusBar} from 'react-native';
import SvgLogo from "../assets/svgComponent/Logo";
import {LinearGradient} from 'expo-linear-gradient';
import CopyRight from "../assets/svgComponent/Copyright";

export default function FirsScreen() {
    return (
        <View style={[styles.fullScreen]}>
            <StatusBar backgroundColor="#9f0e35" />
            <LinearGradient
                // Background Linear Gradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#9f0e35', '#59081e']}
                style={[styles.fullScreen]}
            >
                <View style={[styles.container]}>
                    <SvgLogo></SvgLogo>
                    <Text style={[styles.whiteText]}>Scrum Poker</Text>
                </View>

                <View style={[styles.footer]}>
                    <Text style={[styles.copyRightText]}>
                        <CopyRight/>2020 Geze Inc. All Rights Reserved
                    </Text>
                </View>




            </LinearGradient>

        </View>
    );
}

const styles = StyleSheet.create({
    fullScreen: {
        display:"flex",
        height:"100%",
        width:"100%"
    },
    container:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexGrow:1
    },
    footer:{
        display:"flex",
        alignItems:"center",
    },

    copyRightText:{
        color:"white"

    },
    whiteText:{
        color:"white",
        fontSize:35,
        fontWeight:"bold"
    },



});
