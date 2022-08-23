import { ColumnDiv, Fieldset, Label, Input } from "./style";
import PropTypes from "prop-types";
import Button from "../../Button";
import React from "react";

type SidebarProps = {
  loginFormData: { email: string; password: string };
  handleUpdate: Function;
};

const Sidebar = (props: SidebarProps) => {
  const { loginFormData, handleUpdate } = props;

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
      <Button disabled={disabledButtonIfEmailAndPasswordAreEmpty()}>
        Log In
      </Button>
    </ColumnDiv>
  );
};

Sidebar.propTypes = {
  loginFormData: PropTypes.object,
  handleUpdate: PropTypes.func,
};

export default Sidebar;
