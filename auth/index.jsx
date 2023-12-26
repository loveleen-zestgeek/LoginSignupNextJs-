import { useRouter } from "next/router";

const handleAuthentication = () => {
  const router = useRouter();

  const auth = localStorage.getItem("token");
  console.log("🚀 ~ file: ProtectedRoute.jsx:8 ~ ProtectedRoute ~ auth:", auth);

  if (!auth) {
    router.push("/login");
    return false; // Return false to indicate authentication failure
  }

  return true; // Return true to indicate authentication success
};

export default handleAuthentication;
