export const CODE_BLOCK = `export const ErrorReporting = () => {

    const [state, setState] = 
                    useState(false)

    if (state) {
        useEffect(() => {

        }, [])
    }
        
    const onPress = () => {
        setState(!state)
        throw new Error('Hello')
    }

return <Button ... onPress={onPress}>

}

In console Detailed Error should be displayed like this

Previous render            Next render
   ----------------------------------
1. useState                 useState
2. undefined                useEffect

`