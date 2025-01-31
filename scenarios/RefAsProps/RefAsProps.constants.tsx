export const REF_AS_PROPS_TEXTS = {
    CODE_BLOCK: `import { Suspense } from "react";
import { TextInput } from "react-native";

function MyInput({ref}) {
  return <Button onPress={() => ref?.current?.focus()} title="Focus Input" />;
}

//...
<TextInput ref={inputRef} placeholder="Click on Focus Input" style={styles.input} />
<MyInput ref={inputRef} />`,
  };
