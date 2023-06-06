import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useMutation } from "@apollo/client";
import { IBoardWriteProps } from "./BoardWrite.types";
import {
    IMutation,
    IMutationCreateBoardArgs,
    IMutationUpdateBoardArgs,
    IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const [isActive, setIsActive] = useState<boolean>(false);
    const [writer, setwriter] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [contents, setContents] = useState<string>("");
    const [youtube, setYoutube] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [zipcode, setZipcode] = useState<string>("");
    const [addressDetail, setAddressDetail] = useState<string>("");

    const [writerError, setwriterError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [titleError, setTitleError] = useState<string>("");
    const [contentsError, setContentsError] = useState<string>("");
    const [youtubeError, setYoutubeError] = useState<string>("");
    const [addressError, setAddressError] = useState<string>("");

    const [createBoard] = useMutation<
        Pick<IMutation, "createBoard">,
        IMutationCreateBoardArgs
    >(CREATE_BOARD);
    const [updateBoard] = useMutation<
        Pick<IMutation, "updateBoard">,
        IMutationUpdateBoardArgs
    >(UPDATE_BOARD);

    function onChangeWriter(event: ChangeEvent<HTMLInputElement>): void {
        const { value } = event.target;
        setwriter(value);
        if (value && password && title && contents) setIsActive(true);
    }

    function onChangePassword(event: ChangeEvent<HTMLInputElement>): void {
        const { value } = event.target;
        setPassword(value);
        if (writer && value && title && contents) setIsActive(true);
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>): void {
        const { value } = event.target;
        setTitle(value);
        if (writer && password && value && contents) setIsActive(true);
    }

    function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>): void {
        const { value } = event.target;
        setContents(value);
        if (writer && password && title && value) setIsActive(true);
    }

    function onChangeYoutube(event: ChangeEvent<HTMLInputElement>): void {
        const { value } = event.target;
        setYoutube(value);
    }

    function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>): void {
        const { value } = event.target;
        setAddressDetail(value);
    }

    const onToggleModal = (): void => {
        setIsOpen((prev) => !prev);
    };

    const handleComplete = (data: Address): void => {
        setZipcode(data.zonecode);
        setAddress(data.address);
        onToggleModal();
    };

    async function onClickSubmit(): Promise<void> {
        !writer ? setwriterError("이름을 입력해 주세요") : setwriterError("");
        !password
            ? setPasswordError("비밀번호를 입력해 주세요")
            : setPasswordError("");
        !title ? setTitleError("제목을 입력해 주세요") : setTitleError("");
        !contents
            ? setContentsError("내용을 입력해 주세요")
            : setContentsError("");
        !youtube
            ? setYoutubeError("Youtube링크를 입력해 주세요")
            : setYoutubeError("");
        !address
            ? setAddressError("주소를 입력해 주세요")
            : setAddressError("");

        if (writer && password && title && contents && youtube && address) {
            try {
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            title,
                            contents,
                            password,
                            writer,
                            youtubeUrl: youtube,
                            boardAddress: {
                                zipcode,
                                address,
                                addressDetail,
                            },
                        },
                    },
                });
                Modal.success({ content: "게시물 작성 완료!" });
                await router.push(`/boards/${result.data?.createBoard._id}`);
            } catch (error) {
                if (error instanceof Error)
                    Modal.error({ content: error.message });
            }
        }
    }

    const onClickUpdate = async () => {
        if (
            !writer &&
            !title &&
            !contents &&
            !youtube &&
            !address &&
            !addressDetail &&
            !zipcode
        )
            return Modal.error({ content: "변경 사항이 없습니다." });
        if (!password)
            return Modal.error({ content: "패스워드를 입력해 주세요" });
        const updateBoardInput: IUpdateBoardInput = {};
        if (title) updateBoardInput.title = title;
        if (contents) updateBoardInput.contents = contents;
        if (youtube) updateBoardInput.youtubeUrl = youtube;
        if (zipcode || address || addressDetail) {
            updateBoardInput.boardAddress = {};
            if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
            if (address) updateBoardInput.boardAddress.address = address;
            if (addressDetail)
                updateBoardInput.boardAddress.addressDetail = addressDetail;
        }
        try {
            if (typeof router.query.boardId !== "string") {
                alert("시스템에 문제가 있습니다.");
                return;
            }
            const result = await updateBoard({
                variables: {
                    boardId: router.query.boardId,
                    password,
                    updateBoardInput,
                },
            });
            Modal.success({ content: "업데이트 완료!" });
            router.push(`/boards/${result.data?.updateBoard._id}`);
        } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });
        }
    };

    return (
        <BoardWriteUI
            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}
            youtubeError={youtubeError}
            addressError={addressError}
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}
            onChangeYoutube={onChangeYoutube}
            onChangeAddressDetail={onChangeAddressDetail}
            isActive={isActive}
            isEdit={props.isEdit}
            onClickUpdate={onClickUpdate}
            data={props.data}
            isOpen={isOpen}
            onToggleModal={onToggleModal}
            handleComplete={handleComplete}
            address={address}
            zipcode={zipcode}
        />
    );
}
