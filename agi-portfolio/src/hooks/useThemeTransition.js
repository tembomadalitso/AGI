export function useThemeTransition() {
  return (callback) => {
    if (!document.startViewTransition) {
      callback();
      return;
    }

    document.startViewTransition(callback);
  };
}
