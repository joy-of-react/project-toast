function Footer() {
  return (
    <footer className="px-4 pt-8 pb-16 max-w-[31rem] my-8 mx-auto text-center text-sm text-slate-200 space-y-3">
      <p>
        This project is from{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://joyofreact.com"
          className="text-gray-400 hover:underline font-bold"
        >
          The Joy of React
        </a>
        , a comprehensive React.js course.
      </p>
      <p>© 2022-present Joshua Comeau. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
