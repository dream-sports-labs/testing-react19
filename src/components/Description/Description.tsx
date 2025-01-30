import type { PropsWithChildren } from 'react';
import { StyleSheet, Text } from 'react-native';

type DescriptionProps = PropsWithChildren<{
    description?: string;
}>;
export const Description = ({children, description}: DescriptionProps) => {
    return (
        <Text style={styles.description}>{children ?? description}</Text>
    );
};

const styles = StyleSheet.create({
    description: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
});
