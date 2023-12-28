import cs from 'classnames';

type Props = {
  innerClasses?:string;
  outerClasses?:string;
}

const BlogCardFrame = ({innerClasses="",outerClasses="" }: Props) => (
  <div
    className={outerClasses}
  >
    <div
      className={cs("w-full h-full bg-cyber-black", innerClasses)}
    ></div>
  </div>
);

export default BlogCardFrame;
