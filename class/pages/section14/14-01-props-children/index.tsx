import Example from "../../../src/components/units/14-props-children-example";

export default function PropsChildrenPage(): JSX.Element {
    return (
        <div>
            <div>+++++++빨간색 파란색 초록색+++++++++</div>
            <Example school="다람쥐 초등학교">
                {/* 쏙들어가기! 떙겨오기! */}
                <div>
                    <input type="text" />
                    <div>저는 맹구</div>
                    <button>클릭해주세요!</button>
                </div>
            </Example>
            <div>+++++++빨간색 파란색 초록색+++++++++</div>
        </div>
    );
}
