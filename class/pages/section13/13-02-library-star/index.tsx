import React, { useState } from "react";
import { Rate } from "antd";

export default function App(): JSX.Element {
    const [value, setValue] = useState(0);
    console.log(value);

    // === 1단계 방식 ===
    // const onChangeStar = (value: number): void => {
    //     setValue(value);
    // };

    // === 2단계 방식 ===
    // const onChangeStar = (value: number): void => setValue(value);

    return (
        // <Rate onChange={onChangeStar} value={value} />               // 1. 단계
        // <Rate onChange={onChangeStar} value={value} />               // 2. 단계
        // <Rate onChange={(value) => setValue(value)} value={value} /> // 3. 단계
        <Rate onChange={setValue} value={value} /> // 4. 단계
    );
}
