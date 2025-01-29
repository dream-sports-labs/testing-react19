import React, { useDeferredValue } from "react";
import { Text } from "react-native";

export const SearchScreen = ({ deferredValue }: { deferredValue: string }) => {
    const value = useDeferredValue(deferredValue, '');
    console.log('-------------value', value)
    return (
        <Text>{value}</Text>
    );
}