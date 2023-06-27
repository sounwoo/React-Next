import { useForm } from "react-hook-form";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

interface IFormData {
    writer: string;
    title: string;
    contents: string;
    boardAddress: {
        addressDetail: string;
    };
}

export default function GraphqlMutationPage() {
    const { register, handleSubmit } = useForm<IFormData>();
    const onClickSubmit = (data: IFormData): void => {
        console.log(data);
    };

    return (
        <form onSubmit={wrapAsync(handleSubmit(onClickSubmit))}>
            작성자: <input type="text" {...register("writer")} /> <br />
            제목: <input type="text" {...register("title")} /> <br />
            내용: <input type="text" {...register("contents")} /> <br />
            주소:{" "}
            <input
                type="text"
                {...register("boardAddress.addressDetail")}
            />{" "}
            <br />
            <button type="submit">GRAPHQL-API(동기) 요청하기</button>
        </form>
    );
}

/* 
  <button type="button" onClick={함수}>내가 누른 버튼만 실행시키자!</button>
  <button type="reset">지우자!!</button>
  <button type="submit">등록하자!</button> // 기본값
*/
