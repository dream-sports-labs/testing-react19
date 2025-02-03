export const CODE_BLOCK = `export const DefferedComponent = () => {

    const value = 
    useDeferredValue('meta', '');

    console.log('-------------',value)

    return (<Text>{value}</Text>);
}
    
Expected Output in Console :
-------------
------------- meta
`