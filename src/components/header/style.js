import styled from "styled-components";

export const Header = styled.header`
    background-color: ${(props) => props.theme.colors.primary};
    color: #f7f7f7;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
