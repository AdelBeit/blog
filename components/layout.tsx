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
      <div
        className="min-h-screen relative bg-cyber-black text-cyber-green flex flex-col justify-between px-10 gap-5 pb-2"
        id="_layout"
      >
          {children}
        {/* <main className="flex flex-col gap-5 mt-5 justify-between">
        </main> */}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
