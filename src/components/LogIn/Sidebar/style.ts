import styled from "@emotion/styled";
type InputProps = {
  error?: boolean;
  disabled?: boolean;
};
export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin: 50px 0px 50px 20px;
  border-right: 1px solid #e6e6e6;
  width: 385px;
  height: auto;
  order: 2;
`;

export const Fieldset = styled.fieldset`
  border: none;
  margin: 0px 0px 20px;
  padding: 0px;
  width:75%;
`;

export const Label = styled.label`
  font-size: 13px;
  color: rgb(61, 79, 88);
  position: relative;
  height: 16px;
  width: 36px;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 0.02em;
  margin-top: 15px;
`;

export const Input = styled.input`
  border: ${(props: InputProps) => (props.error ? "1px solid red;" : "1px solid rgb(136, 147, 151);")};
  background-color: ${(props: InputProps) => (props.disabled ? "rgb(245, 245, 245);" : "white;")};
  width: 100%;
  font-weight: normal;
  transition: border-color 150ms ease-in-out 0s;
  z-index: 1;
  outline: none;
  color: rgb(0, 30, 43);
  font-size: 13px;
  height: 36px;
  padding-left: 12px;
  font-family: "Euclid Circular A", Akzidenz, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  border-radius: 6px;
  padding-right: 12px;
  margin-top: 10px;
`;
