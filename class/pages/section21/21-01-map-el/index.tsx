export default function MapElPage(): JSX.Element {
    // 1. 기본방법
    ["짱구", "짱아", "신형만"].forEach((el, index) => {
        console.log("el:", el);
        console.log("index:", index);
    });

    // 2. 매개변수 변경
    ["짱구", "짱아", "신형만"].forEach((이름, qwer) => {
        console.log("el", 이름);
        console.log("index:", qwer);
    });

    // 3. 함수선언식 방법
    ["짱구", "짱아", "신형만"].forEach(function (이름, qwer) {
        console.log("el", 이름);
        console.log("index:", qwer);
    });

    // 4. el과 index 바꾸기
    ["짱구", "짱아", "신형만"].forEach((index, el) => {
        console.log("el:", el);
        console.log("index:", index);
    });

    return <></>;
}
