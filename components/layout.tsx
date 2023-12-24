import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import BlogCardBackdrop from "./svgs/blog-card/Backdrop";
import BlogCardForeground from "./svgs/blog-card/Foreground";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="relative bg-cyber-black text-cyber-green">
        <div className="fixed w-[100vw] h-full z-[1] overflow-y-scroll overflow-x-hidden">
          <BlogCardForeground />
          <BlogCardBackdrop />
        </div>
        <div className="min-h-screen">
          <main className="main_container">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
