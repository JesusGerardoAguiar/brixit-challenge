import { ColumnDiv, Fieldset, Label, Input } from "./style";
import PropTypes from "prop-types";
import Button from "../../Button";
import React from "react";
import Spinner from "../../Spinner";

type SidebarProps = {
  loginFormData: { email: string; password: string };
  handleUpdate: Function;
  handleLogin: Function;
  isLoading: boolean;
  isError: boolean;
  error: string;
};

const Sidebar = (props: SidebarProps) => {
  const {
    loginFormData,
    handleUpdate,
    handleLogin,
    isLoading,
    isError,
    error,
  } = props;

  const disabledButtonIfEmailAndPasswordAreEmpty = () =>
    loginFormData.password === "" || loginFormData.email === "";

  return (
    <ColumnDiv>
      <h1>Log In To Your Account</h1>
      <Fieldset>
        <Label htmlFor="email" id="emailLabel">
          Email Address
          <Input
            error={isError}
            name="email"
            type="text"
            required={true}
            placeholder=""
            id="email"
            aria-invalid="false"
            value={loginFormData.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdate(e)
            }
          />
        </Label>
      </Fieldset>
      <Fieldset>
        <Label htmlFor="password" id="passwordLabel">
          Password
          <Input
            error={isError}
            disabled={loginFormData.email === ""}
            name="password"
            type="password"
            required={true}
            placeholder=""
            id="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdate(e)
            }
            aria-invalid="false"
            value={loginFormData.password}
          />
        </Label>
      </Fieldset>
      {!isLoading ? (
        <Button
          disabled={disabledButtonIfEmailAndPasswordAreEmpty()}
          onClick={() => handleLogin()}
        >
          Log In
        </Button>
      ) : (
        <Spinner />
      )}
      {isError ? <p style={{ color: "red" }}>*{error}</p> : <></>}
    </ColumnDiv>
  );
};

Sidebar.propTypes = {
  loginFormData: PropTypes.object,
  handleUpdate: PropTypes.func,
  handleLogin: PropTypes.func,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  error: PropTypes.string,
};

export default Sidebar;
