export const USE_HOOK_WITH_PROMISE_TEXTS = {
    CODE_BLOCK: `import { Suspense, use } from "react";

const DataContainer = ({ dataPromise }) => {
  return (
      <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
        <DataComponent dataPromise={dataPromise} />
      </Suspense>
  );
};

const DataComponent = ({ dataPromise }) => {
  const data = use(dataPromise);
  return <CodeBlock>{data}</CodeBlock>;
};

export default DataContainer;`,
    CTA_FETCH_DATA: 'Fetch Data',
    CTA_TRY_AGAIN: 'Try Again',
  };
