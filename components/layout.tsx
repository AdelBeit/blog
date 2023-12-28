import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="relative bg-cyber-black text-cyber-green">
        <div className="min-h-screen">
          <main className="main_container">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
