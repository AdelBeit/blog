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
      <div className="min-h-screen relative bg-cyber-black text-cyber-green w-full">
        <main className="w-full">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
