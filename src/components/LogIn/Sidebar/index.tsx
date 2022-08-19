import { ColumnDiv, Fieldset, Label, Input } from "./style";
import Button from '../../Button';
const Sidebar = () => {
  return (
    <ColumnDiv>
      <h1>Log In To Your Account</h1>
      <Fieldset>
        <Label htmlFor="username" id="usernameLabel">
          Email Address
          <Input
            error={false}
            name="username"
            type="text"
            required={true}
            placeholder=""
            id="username"
            aria-invalid="false"
            value=""
          />
        </Label>
      </Fieldset>
      <Fieldset>
        <Label htmlFor="username" id="usernameLabel">
         Password
          <Input
            error={false}
            disabled={true}
            name="username"
            type="text"
            required={true}
            placeholder=""
            id="username"
            aria-invalid="false"
            value=""
          />
        </Label>
      </Fieldset>
      <Button      disabled={true}>Log In</Button>
    </ColumnDiv>
  );
};

export default Sidebar;
