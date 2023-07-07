import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/component/Footer";
import Top from "../src/component/Top";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

// 모든 페이지에 적용되어야 할 내용이 들어감
