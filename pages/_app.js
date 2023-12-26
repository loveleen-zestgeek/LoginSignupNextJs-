import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <ToastContainer />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
