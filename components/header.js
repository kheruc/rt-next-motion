import Link from 'next/link';

const Header = () => (
  <div className="header-wrapper">
    <div className="logo">
      <Link href="/">
        <a>Next.js &amp; Framer Motion</a>
      </Link>
    </div>

    <div className="tutorial">
      <a target="_blank" href="https://reacttricks.com/animating-next-page-transitions-with-framer-motion">
        Tutorial
      </a>
    </div>

    <style jsx>{`
      .header-wrapper {
        padding: 20px;
        background: #fafafa;
      }
      .logo {
        padding: 10px 0;
      }
      .logo a {
        font-weight: 900;
        color: #111;
      }
      .logo a:hover {
        font-weight: 900;
        border-bottom: 2px solid #111;
      }
      .tutorial {
        font-size: 16px;
      }
    `}</style>
  </div>
);

export default Header;
