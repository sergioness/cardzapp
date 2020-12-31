export const doFetch = (url) => {
    return fetch(url).then(response => response.json());
};
