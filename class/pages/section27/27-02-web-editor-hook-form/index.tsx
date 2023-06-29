import dynamic from "next/dynamic";
import { useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";
// import { Modal } from "antd";

const ReactQuill = dynamic(async () => await import("react-quill"), {
    ssr: false,
});

export default function WebEditorPage(): JSX.Element {
    const { register, setValue, trigger } = useForm({
        mode: "onChange",
    });

    // ReactQuill 만든 사람들이 만든 onChange 이므로 event안들어옴
    const onChangeContents = (value: string): void => {
        console.log(value);

        // register로 등록하지 않고, 강제로 값을 넣어주는 기능!!
        setValue("contents", value === "<p><br></p>" ? "" : value);

        // onChange 됐으니까 에러검즈 같은걸들 해달라고 react-hook-form에 알려주는 기능!!
        void trigger("contents");
    };

    // useEffect(() => {
    //     async function aaa(): Promise<void> {
    //         const { Modal } = await import("antd"); // code-splitting(코드스플릿팅)
    //         Modal.success({ content: "게시글 등록 성공" });
    //     }
    //     void aaa();
    // }, []);

    const onClickSubmit = async (): Promise<void> => {
        const { Modal } = await import("antd"); // code-splitting(코드스플릿팅)
        Modal.success({ content: "게시글 등록 성공" });
    };

    return (
        <form onSubmit={wrapFormAsync(onClickSubmit)}>
            작성자 : <input type="text" {...register("writer")} />
            <br />
            비밀번호 : <input type="password" {...register("password")} />
            <br />
            제목 : <input type="text" {...register("title")} />
            <br />
            내용 : <ReactQuill onChange={onChangeContents} />
            <br />
            <button>등록하기</button>
        </form>
    );
}
