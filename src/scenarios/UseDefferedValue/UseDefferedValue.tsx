import React, { memo, useDeferredValue, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { CodeBlock } from '../../components';
import { CODE_BLOCK } from './constants';

const DefferedValueInitialArg = memo(() => {
    const value = useDeferredValue('meta', '');
    console.log('-------------',value);
    return (
        <Text>{'Deffered Component Mounted'}</Text>
    );
});
export const DefferedValueInitialWrapper = () => {
    const [showDefferedComponent, toggleShowDefferedComponent] = useState(false);
    const onPress = () => {
        toggleShowDefferedComponent(!showDefferedComponent);
    };

    return <View style={{flex:1}}>
        {showDefferedComponent && <DefferedValueInitialArg/>}
        <CodeBlock code={CODE_BLOCK} />
        <Button title={'Mount/Unmount Deffered Component'} onPress={onPress} />
    </View>;

};

