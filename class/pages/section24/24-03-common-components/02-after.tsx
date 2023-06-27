import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.validation";
import Input01 from "../../../src/components/common/inputs/01";
import Button01 from "../../../src/components/common/buttons/01";

interface IFormData {
    writer: string;
    title: string;
    contents: string;
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
            작성자:
            <Input01
                register={register("writer")}
                type="text"
                error={formState.errors.writer?.message ?? ""}
            />
            제목:
            <Input01
                register={register("title")}
                type="text"
                error={formState.errors.title?.message ?? ""}
            />
            내용:
            <Input01
                register={register("contents")}
                type="text"
                error={formState.errors.contents?.message ?? ""}
            />
            <Button01 title="등록하기" isActive={formState.isValid} />
        </form>
    );
}
