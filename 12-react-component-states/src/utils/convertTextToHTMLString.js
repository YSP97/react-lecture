export function convertHTMLToText(htmlString) {
  return htmlString
    .replace(/<[^>]+>/g, ($1) => {
      if ($1.includes('/')) return '\n\n';
      return '';
    })
    .trim();
}

export function convertTextToHTMLString(text, tagName = 'p') {
  return text
    .split('\n')
    .filter(Boolean)
    .reduce(
      (htmlString, line) => htmlString + `<${tagName}>${line}</${tagName}>`,
      ''
    );
}
