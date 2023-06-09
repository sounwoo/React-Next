import { css } from "@emotion/react";

export const golbalStyles = css`
    * {
        margin: 0;
        box-sizing: border-box;
        font-size: 20px;
        font-family: "myfont";
    }

    @font-face {
        font-family: "myfont";
        src: url("/fonts/scifibit.ttf");
    }
`;
