import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  min-height: 100vh;
`;

export const Background = styled.div`
width: calc(100vw - 385px);
    height: 100%;
    order: 2;
    background-image: url(https://account.mongodb.com/static/images/auth/login_promo_desktop.png);
    display: block;
    -webkit-box-align: inherit;
    align-items: inherit;
    position: absolute;
    left: 385px;
`