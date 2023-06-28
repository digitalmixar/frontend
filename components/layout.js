import Navbar from "./elements/navbar";
import Footer from "./elements/footer";

const Layout = ({ children, global, pageContext }) => {
  const { navbar, footer } = global;

  return (
    <div className="font-roboto flex min-h-screen flex-col justify-between bg-light-grey-blue">
      {/* Aligned to the top */}
      <div className="flex-1">
        <Navbar global={global} navbar={navbar} pageContext={pageContext} />
        <div>{children}</div>
      </div>
      {/* Aligned to the bottom */}
      {/* <Footer global={global} footer={footer} /> */}
    </div>
  );
};

export default Layout;
