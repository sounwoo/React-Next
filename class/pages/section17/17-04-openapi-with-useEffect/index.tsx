import axios from "axios";
import { useEffect, useState } from "react";
export default function RestGetPage(): JSX.Element {
    const [dog, setDog] = useState("");

    useEffect(() => {
        const onClickSync = async (): Promise<void> => {
            const result = await axios.get(
                "https://dog.ceo/api/breeds/image/random"
            );
            console.log(result.data.message);
            setDog(result.data.message);
        };
        void onClickSync();
    }, []);

    return (
        <>
            <img src={dog} />
            {/* <button onClick={onClickSync}>REST-API(동기) 요청하기</button> */}
        </>
    );
}
