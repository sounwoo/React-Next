import { FormEvent } from "react";

export const wrapAsync = (asyncFunc: () => Promise<void>) => () => {
    void asyncFunc();
};

export const wrapFormAsync =
    (asyncFunc: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        void asyncFunc();
    };
