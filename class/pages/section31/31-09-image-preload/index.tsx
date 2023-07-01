import { useRouter } from "next/router";
import { useEffect } from "react";

const qqq = [];

export default function ImagePreloadPage(): JSX.Element {
    const router = useRouter();

    useEffect(() => {
        const img = new Image();
        img.src =
            "https://media.istockphoto.com/id/1215075897/ko/%EC%82%AC%EC%A7%84/%EC%9D%B4%EC%83%81-%EB%B0%95%EC%A0%9C-%EA%B5%90%EC%99%B8-%EC%B0%A8%EA%B3%A0%EC%97%90-%ED%81%B0-%ED%98%BC%EB%9E%80.jpg?s=1024x1024&w=is&k=20&c=CJ1RqbT8_mjWPIq8Vg2qLZRnJVnQmN7UIW06q3kGh58=";
        img.onload = () => {
            qqq.push(img);
        };
    }, []);

    const onClickMove = (): void => {
        router.push("31-09-image-preload-moved");
    };
    return <button onClick={onClickMove}>페이지 이동하기</button>;
}
