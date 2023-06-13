import { SliderItem, StyledSlider, Warpper } from "./Banner.styles";

export default function BannerUI(): JSX.Element {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Warpper>
            <StyledSlider {...settings}>
                <SliderItem src="/images/banner/banner1.png" />
                <SliderItem src="/images/banner/banner2.png" />
                <SliderItem src="/images/banner/banner3.png" />
                <SliderItem src="/images/banner/banner4.png" />
            </StyledSlider>
        </Warpper>
    );
}
