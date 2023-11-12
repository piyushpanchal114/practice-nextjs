import React from "react";

interface Props {
  params: { slug: string[] };
}

const ProfilePage = ({ params: { slug } }: Props) => {
  return <div>ProfilePage {slug}</div>;
};

export default ProfilePage;
