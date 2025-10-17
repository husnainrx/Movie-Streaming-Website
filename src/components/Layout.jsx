import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, pageTitle }) => {
  return (
    <div id="container">
      <Header title={pageTitle} />
      <main>{children}</main> {/* Main content area */}
      <Footer />
    </div>
  );
};

export default Layout;
