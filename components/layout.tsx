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
      <div className="min-h-screen relative bg-cyber-black text-cyber-green w-full h-full" id="_layout">
        <main className="w-full h-full">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
