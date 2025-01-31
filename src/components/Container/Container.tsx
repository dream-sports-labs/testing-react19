import type { PropsWithChildren } from 'react';
import { View } from 'react-native';

export const Container = ({children}: PropsWithChildren) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};


const styles = {
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f4f4f4',
    },
};
