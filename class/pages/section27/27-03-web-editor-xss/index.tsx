import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const ReactQuill = dynamic(async () => await import("react-quill"), {
    ssr: false,
});

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
            writer
            contents
            title
        }
    }
`;

export default function WebEditorPage(): JSX.Element {
    const { register, setValue, trigger, handleSubmit } = useForm({
        mode: "onChange",
    });
    const router = useRouter();
    const [createBoard] = useMutation(CREATE_BOARD);

    const onChangeContents = (value: string): void => {
        setValue("contents", value === "<p><br></p>" ? "" : value);
        void trigger("contents");
    };

    const onClickSubmit = async (data: any): Promise<void> => {
        const result = await createBoard({
            variables: { createBoardInput: { ...data } },
        });

        const { Modal } = await import("antd"); // code-splitting(코드스플릿팅)
        Modal.success({ content: "게시글 등록 성공" });

        const boardId = result.data.createBoard._id;
        void router.push(`27-03-web-editor-xss-detail/${boardId}`);
    };

    return (
        <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
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
