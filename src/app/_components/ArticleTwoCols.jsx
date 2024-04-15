const ArticleTwoCols = ({ component: Component, custCss }) => {
  return (
    <article
      className={`flex items-center max-w-screen-xl justify-center gap-y-14 xl:gap-0 py-20 md:min-h-screen flex-col w-full px-10 lg:flex-row ${custCss}`}
    >
      <Component />
    </article>
  );
};

export default ArticleTwoCols;
