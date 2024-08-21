import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { Navigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-gray-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. While loading, show spinner

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 3. If there is no authenticated user, redirect to /login

  if (!isAuthenticated) return <Navigate to="login" />;

  // 4. If there is a user, render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
