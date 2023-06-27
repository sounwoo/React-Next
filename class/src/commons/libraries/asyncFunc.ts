export const wrapAsync = (asyncFunc: () => Promise<void>) => () => {
    void asyncFunc();
};
