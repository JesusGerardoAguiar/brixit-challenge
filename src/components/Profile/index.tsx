import React from "react";

type ProfileProps = {
    profileData: { email: string; username: string; age: string; };
  };

const Profile = (props: ProfileProps) => {
    const {profileData} = props;
    const {
        email,
        username,
        age
    } = profileData;

    return (
        <div>
            <p>Email: {email}</p>
            <p>Username: {username}</p>
             <p>Age: {age}</p>
        </div>
    )
}

export default Profile