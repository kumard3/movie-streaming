import NextHead from 'next/head';

const MetaHead = ({ pageTitle }: { pageTitle: string }) => (
  <NextHead>
    <title>{pageTitle} - Movie.db</title>
    <meta
      name="description"
      content="Movie db is a movie database web application that allows you to search and view your favorite movie and tv shows."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover" />
  </NextHead>
);

export default MetaHead;
