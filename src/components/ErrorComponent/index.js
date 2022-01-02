import React from 'react'
import { View, Text } from 'react-native'

export default function ErrorComponent({error}) {
    return (
        <View>
            <Text>{error.message}</Text>
        </View>
    )
}
