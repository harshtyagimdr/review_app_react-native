import React from 'react';
import {View,Text} from 'react-native';
import {GlobalStyles} from '../screens/styles/global'

export default function Home(){
    return(
    <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.titleText}>Home Screen</Text>
    </View>

    )
}
