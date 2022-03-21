import Link from "next/link";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="container">
      <div className="navBar">
        <div className="flexNav">
          <Link href="/">
            <a>Home</a>
          </Link>
          <a>|</a>
          <Link href="/blog/first-article">
            <a>First Article</a>
          </Link>
          <Link href="/blog/second-article">
            <a>Second Article</a>
          </Link>
        </div>
      </div>
      {children}
      <p>FOOTER</p>
    </div>
  );
};
