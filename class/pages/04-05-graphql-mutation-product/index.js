import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';

const CREATE_PRODUCT = gql`
    # 타입정의
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
        # 실제 우리가 전달할 변수 적는 곳
        createProduct(seller: $seller, createProductInput: $createProductInput) {
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationPage() {
    const [createProduct] = useMutation(CREATE_PRODUCT);

    const onClickSubmit = async () => {
        const result = await createProduct({
            // $ 역할을 해줌
            variables: {
                seller: '훈이',
                createProductInput: {
                    name: '마우스',
                    detail: '정말 좋은 마우스',
                    price: 3000,
                },
            },
        });
        console.log(result);
        alert(result.data.createProduct.message);
    };

    return <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>;
}
