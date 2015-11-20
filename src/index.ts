const upperCaseRegex = /[A-Z]+(?=[A-Z][a-z]|$)|[A-Z]/g;

export default function hyphenate(original: string, connector = '-'): string {
    return original
        .split(/[^a-z\d]+/i)
        .map(part => part && part.replace(upperCaseRegex, (text: string, index: number) => {
            return (index ? connector : '') + text.toLowerCase();
        }))
        .filter(part => !!part)
        .join(connector);
}
