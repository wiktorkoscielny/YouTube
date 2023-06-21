export const urlPathProvider = (path: string) => {
    return (window.location.href).includes(path) && true;
}
