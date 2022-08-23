import { ColumnDiv, Fieldset, Label, Input } from "./style";
import PropTypes from "prop-types";
import Button from "../../Button";
import React from "react";

type SidebarProps = {
  loginFormData: { email: string; password: string };
  handleUpdate: Function;
  handleLogin: Function;
  isLoading: boolean;
};

const Sidebar = (props: SidebarProps) => {
  const { loginFormData, handleUpdate, handleLogin, isLoading } = props;

  const disabledButtonIfEmailAndPasswordAreEmpty = () =>
    loginFormData.password === "" || loginFormData.email === "";

  return (
    <ColumnDiv>
      <h1>Log In To Your Account</h1>
      <Fieldset>
        <Label htmlFor="email" id="emailLabel">
          Email Address
          <Input
            error={false}
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
            error={false}
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
        <p>loading...</p>
      )}
    </ColumnDiv>
  );
};

Sidebar.propTypes = {
  loginFormData: PropTypes.object,
  handleUpdate: PropTypes.func,
  handleLogin: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default Sidebar;
