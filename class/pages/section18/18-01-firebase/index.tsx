import {
    collection,
    addDoc,
    getDocs,
    getFirestore,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../../src/commons/libraries/firebase";

export default function FireBasePage(): JSX.Element {
    const onClickSubmit = (): void => {
        const board = collection(getFirestore(firebaseApp), "board");

        void addDoc(board, {
            writer: "철수",
            tilte: "하이",
            contents: "내용",
        });
    };
    const onClickFetch = async (): Promise<void> => {
        const board = collection(getFirestore(firebaseApp), "board");

        const result = await getDocs(board);
        const datas = result.docs.map((el) => el.data());
        console.log(datas);
    };

    return (
        <>
            <button onClick={onClickSubmit}>등록하기</button>
            <button onClick={onClickFetch}>조회하기</button>
        </>
    );
}
