import React from "react";

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
  const { id, avatar, age, email, name, role, surname } = profileData;

  return (
    <div>
      <p>Email: {email}</p>
      <p>Name: {name}</p>
      <p>surname: {surname}</p>
      <p>Age: {age}</p>
      <p>avatar: {avatar}</p>
      <p>role: {role}</p>
    </div>
  );
};

export default Profile;
