import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.validation";

interface IFormData {
    writer: string;
    title: string;
    contents: string;
    // boardAddress: {
    //     addressDetail: string;
    // };
}

export default function GraphqlMutationPage() {
    const { register, handleSubmit, formState } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: "onChange",
    });
    const onClickSubmit = (data: IFormData): void => {
        console.log(data);
    };

    return (
        <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
            작성자: <input type="text" {...register("writer")} /> <br />
            <div style={{ color: "red" }}>
                {formState.errors.writer?.message}
            </div>
            제목: <input type="text" {...register("title")} /> <br />
            <div style={{ color: "red" }}>
                {formState.errors.title?.message}
            </div>
            내용: <input type="text" {...register("contents")} /> <br />
            <div style={{ color: "red" }}>
                {formState.errors.contents?.message}
            </div>
            {/* 주소:{" "}
            <input
                type="text"
                {...register("boardAddress.addressDetail")}
            />{" "}
            <br /> */}
            <button
                style={{ backgroundColor: formState.isValid ? "yellow" : "" }}
            >
                GRAPHQL-API(동기) 요청하기
            </button>
        </form>
    );
}
