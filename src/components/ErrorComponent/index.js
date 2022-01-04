import React from 'react'
import { View, Text } from 'react-native'

export default function ErrorComponent({error}) {
    return (
        <View style={{flex:1, width:'100%',height:'100', justifyContent:'center'}}>
            <Text>{error.message}</Text>
        </View>
    )
}
