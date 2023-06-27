// 1. 함수를 리턴하는 함수
function aaa() {
    const apple = 10;

    return function bbb() {
        const banana = 20;
        console.log(banana);
        console.log(apple);
    };
}
aaa()();

// 2. 함수를 리턴하는 함수 - 인자
function aaa2(apple) {
    return function bbb(banana) {
        console.log(banana);
        console.log(apple);
    };
}
aaa2(100)(500);

// 3. 함수를 리턴하는 함수 - 화살표 함수
const aaa3 = (apple) => (banana) => {
    console.log(banana);
    console.log(apple);
};
aaa3(50)(60);

// 4. 함수를 리턴하는 함수 - 인자 여러개
const aaa4 = (apple) => (banana) => (tomato) => (orange) => {
    console.log(banana);
    console.log(apple);
    console.log(tomato);
    console.log(orange);
};
aaa4(50)(60)(20)(10);
