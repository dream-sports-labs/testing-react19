export const REF_CLEANUP_FUNCTIONS_TEXTS = {
  TITLE: 'Cleanup functions for refs',
  DESCRIPTION:
    'We now support returning a cleanup function from ref callbacks:',
  CODE_BLOCK: `<input
  ref={(ref) => {
    // ref created

    // NEW: return a cleanup function to reset
    // the ref when element is removed from DOM.
    return () => {
      // ref cleanup
    };
  }}
/>`,
  CTA_THEME_TOGGLE: 'Toggle Theme of Code Block',
  CTA_LOADING_TOGGLE: 'Trigger Loading State',
};
