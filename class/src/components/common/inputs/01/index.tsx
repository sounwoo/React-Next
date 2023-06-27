import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
    type?: "text" | "password";
    register: UseFormRegisterReturn;
    error: string;
}

export default function Input01(props: IInputProps): JSX.Element {
    return (
        <>
            <input type={props.type ?? "text"} {...props.register} /> <br />
            {props.error && <div style={{ color: "red" }}>{props.error}</div>}
        </>
    );
}
