import { useEffect, useState } from "react";

export default function WithUser(Component) {
  return function WrappedComponent({ userId, ...props }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function fetchUser() {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const userData = await response.json();
        setUser(userData);
        setLoading(false);
      }
      fetchUser();
    }, [userId]);

    if (loading) {
      return <p>Loading User...</p>;
    }
    return <Component user={user} {...props} />;
  };
}
