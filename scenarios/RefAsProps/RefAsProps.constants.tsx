export const REF_AS_PROPS_TEXTS = {
    CODE_BLOCK: `import { Suspense } from "react";
import { TextInput } from "react-native";

function MyInput({placeholder, ref}) {
  return <TextInput placeholder={placeholder} ref={ref} />
}

//...
<MyInput ref={ref} />`,
  };
