import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const profileQuery = gql`
  {
    github {
      user(username: "antjeenzi") {
        login
        avatar_url
        company
        repos {
          name
        }
      }
    }
  }
`;

function Profile() {
  const { loading, error, data } = useQuery(profileQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      {data.github.user.login}
      <div>
        <div>{data.github.user.company}</div>
        <img
          src={data.github.user.avatar_url}
          width="200"
          alt={data.github.user.login}
        />
      </div>
      <div>
        {data.github.user.repos.map(repo => (
          <div>{repo.name}</div>
        ))}
      </div>
    </div>
  );
}
export default Profile;
