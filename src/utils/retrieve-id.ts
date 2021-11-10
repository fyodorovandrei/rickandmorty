const retrieveId = (path: string): number => {
    return +path
        .split('/')
        .filter((str) => str)
        .reverse()[0];
};

export default retrieveId;
