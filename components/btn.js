import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
function btn(props) {

const ontrigeer=(data)=>{
    props.onPress(data)
}
    return (
        <View>
            <TouchableOpacity style={styles.btn} onPress={()=>ontrigeer(props.text)}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    btn: {
        borderColor: '#C0C0C0',
        backgroundColor: '#fff',
        borderRadius: 40,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default btn
