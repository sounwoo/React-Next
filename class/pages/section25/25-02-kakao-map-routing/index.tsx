import Link from "next/link";
import { useRouter } from "next/router";

export default function KakaoMapPage(): JSX.Element {
    const router = useRouter();

    const onClickMove = (): void => {
        void router.push("25-02-kakao-map-routing-moved");
    };

    return (
        <>
            <button onClick={onClickMove}>페이지 이동</button>

            {/* 매 페이지를 새로 다운로드 받으므로 SPA(싱글페이지) 활용못함 */}
            <a href="25-02-kakao-map-routing-moved">페이지 이동하기</a>

            {/* next에서 제공하는 a태그 이므로, SPA 활용 가능 + <a>를 써서 검색 좋아짐 */}
            <Link href="25-02-kakao-map-routing-moved">
                <a>페이지 이동하기</a>
            </Link>
            {/* 의미가 있는 시멘틱 태그의 장점 */}
            {/* <h1>요리</h1>
            <div>요리</div>
            <section>요리</section> */}
        </>
    );
}
