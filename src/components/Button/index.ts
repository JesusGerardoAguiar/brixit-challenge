import styled from "@emotion/styled";
type ButtonProps = {
  disabled?: boolean;
};
const Button = styled.button`
 appearance: none;
 padding: 0px;
 margin: 0px;
 border: 1px solid rgb(0, 104, 74);
 display: inline-flex;
 -webkit-box-align: stretch;
 align-items: stretch;
 transition: all 150ms ease-in-out 0s;
 position: relative;
 text-decoration: none;
 cursor: pointer;
 z-index: 0;
 font-family: "Euclid Circular A", Akzidenz, "Helvetica Neue", Helvetica, Arial, sans-serif;
 border-radius: 6px;
 background-color: ${(props: ButtonProps) =>
   props.disabled ? "rgb(245, 245, 245);" : "rgb(0, 104, 74);"}
 color: ${(props: ButtonProps) =>
   props.disabled ? "#fdfdfd" : "rgb(255, 255, 255);"}
 line-height: 20px;
 font-weight: 500;
 height: 32px;
 width: 90px;
 font-size: 15px;
 margin-bottom: 0px;
 text-align: center;
 display: flex;
 justify-content: center;
 align-items: center;
 padding-bottom: 0.2rem;
`;

export default Button;
