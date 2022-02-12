import NextHead from 'next/head';

const MetaHead = ({ pageTitle }: { pageTitle: string }) => (
  <NextHead>
    <title>{pageTitle} - Movie.db</title>
    <meta
      name="description"
      content="Movie db is a movie database web application that allows you to search and view your favorite movie and tv shows."
    />
  </NextHead>
);

export default MetaHead;
