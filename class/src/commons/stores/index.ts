import { atom } from "recoil";

export const isEditState = atom({
    key: "isEditState",
    default: true,
});

export const accessTokenState = atom({
    key: "accessTokenState",
    default: "",
});

export const visitedPageState = atom({
    key: "visitedPageState",
    default: "",
});
