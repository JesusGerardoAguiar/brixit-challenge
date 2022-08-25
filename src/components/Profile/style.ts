import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  width: 100vw;
  min-height: 100vh;
  background-image: url(https://account.mongodb.com/static/images/auth/login_promo_desktop.png);
`;

export const UserProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:start;
    background-color: white;
    padding:2rem;
    border-radius:25px;
`

export const Avatar = styled.img`
    width:10rem;
    height:10rem;
    border-radius:100%;
`