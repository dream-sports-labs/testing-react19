import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import { CodeBlock } from '../../components/CodeBlock';
import { CODE_BLOCK } from './constants';


export const ErrorReporting = () => {
    const [state, setState] = useState(false);
    if (state) {
        // eslint-disable-next-line react-compiler/react-compiler, react-hooks/rules-of-hooks
        useEffect(() => {
            console.log('hello');
        }, []);
    }
    const onPress = () => {
        setState(!state);
        throw new Error('Hello');
    };
    return <View style={{ flex: 1 }}>
        <CodeBlock code={CODE_BLOCK}/>
        <Button title={'throw error'} onPress={onPress} />
        </View>;
};
