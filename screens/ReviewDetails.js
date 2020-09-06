import React from 'react';
import {View,Text,Button} from 'react-native';
import {GlobalStyles} from '../screens/styles/global';

export default function ReviewDetails({navigation}){
    const pressHandler=()=>{
        navigation.goBack();
    }
    return(

    <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.titleText}>Review Screen</Text>
        <Button title='Back to Home' onPress={pressHandler}/>
    </View>
    )
}
