import { Container, UserProfileContainer,Avatar } from "./style";
import Button from "../Button";
import * as Services from "../../services";
import { useRouter } from "next/router";

type ProfileProps = {
  profileData: {
    id: string;
    avatar: string;
    age: number;
    email: string;
    name: string;
    role: string;
    surname: string;
  };
};

const Profile = (props: ProfileProps) => {
  const { profileData } = props;
  const router = useRouter();
  const { id, avatar, age, email, name, role, surname } = profileData;

  return (
    <Container>
      <UserProfileContainer>
        <Avatar src={avatar}/>
        <p>Email: {email}</p>
        <p>Name: {name}</p>
        <p>surname: {surname}</p>
        <p>Age: {age}</p>
        {/* <p>avatar: {avatar}</p> */}
        <p>role: {role}</p>
        <Button
          onClick={() => {
            router.push("/");
            Services.logOut();
          }}
        >
          Log Out
        </Button>
      </UserProfileContainer>
    </Container>
  );
};

export default Profile;
