import React from "react";
import { useParams } from "react-router-dom";
import Profile from "../components/Profile";

export default function User() {
  const params = useParams();

  return (
    <>
      <Profile username={username} />
    </>
  );
}
