import { useLayoutEffect } from 'react';

/** @type { (documentTitle: string) => void } */
function useDocumentTitle(documentTitle) {
  useLayoutEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);
}

export default useDocumentTitle;
