import { PropsWithChildren, use } from 'react';
import { CodeBlock } from '../../../../components';
import { ConditionalThemeContext } from '../../ConditionalContext';

type ConditionalCodeBlockProps = PropsWithChildren<{
    isLoading: boolean;
}>
export const ConditionalCodeBlock = ({ isLoading, children }: ConditionalCodeBlockProps) => {
    if (isLoading) {
        return <CodeBlock>Loading... Auto Enabled after 2 seconds!</CodeBlock>;
    }

    const theme = use(ConditionalThemeContext);

    return <CodeBlock theme={theme}>{children}</CodeBlock>;
};
