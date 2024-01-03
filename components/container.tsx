import cs from "classnames";

type Props = {
  children?: React.ReactNode;
  classes
  ?: string;
};

const Container = ({ children, classes }: Props) => {
  return (
    <div className={cs("container mx-auto px-5",classes)}>
      {children}
    </div>
  );
};

export default Container;
