// import { Observable } from "@apollo/client";
import { from } from "zen-observable";

export default function ObservableFlatmapPage(): JSX.Element {
    const onClickButton = (): void => {
        // new Promise((resolve, reject) => {});
        // new Observable((observable) => {});
        from(["1번 useQuery", "2번 useQuery", "3번 useQuery"]) // formPromise 가정
            .flatMap((el) =>
                from([`${el} 결과에 qqq적용`, `${el} 결과에 zzz 적용`])
            )
            .subscribe((el) => console.log(el));
    };

    return <button onClick={onClickButton}>클릭</button>;
}
