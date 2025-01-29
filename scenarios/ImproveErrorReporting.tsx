import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";


export const ErrorReporting = () => {
    const [state, setState] = useState(false)
    if (state) {
        useEffect(() => {
            console.log('hello')
        }, [])
    }
    const onPress = () => {
        setState(!state)
        throw new Error('Hello')
    }
    return <View style={{ flex: 1 }}><Button title={"throw error"} onPress={onPress} /></View>
}