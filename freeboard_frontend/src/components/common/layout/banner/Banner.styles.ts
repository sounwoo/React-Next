import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Warpper = styled.div`
    height: 400px;
`;

export const SliderItem = styled.img`
    height: 400px;
    margin: auto;
`;

export const StyledSlider = styled(Slider)`
    .slick-dots {
        bottom: 20px;
    }

    .slick-dots li button:before {
        color: white;
    }

    .slick-arrow {
        z-index: 1;
    }

    .slick-prev {
        left: 25px;
    }

    .slick-next {
        right: 25px;
    }

    .slick-prev:before,
    .slick-next:before {
        font-size: 30px;
    }
`;
