import { useRouter } from 'next/router';

import { textClass } from '../../utils';
import { SingleTitlePageProps } from '../../utils/types';
import HeroCard from '../cards/HeroCard';
import VerticalCardCarousel from '../carousels/VerticalCardCarousel';
import MetaHead from '../MetaHead';
import PagePlaceHolder from '../spinners';

interface SingleTitlePageCompProps extends SingleTitlePageProps {
  isTV: boolean;
}

const SingleTitlePage = ({ isTV, similarTitlesList, singleTitleDetails }: SingleTitlePageCompProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <PagePlaceHolder />;
  }

  const { title, description, id } = singleTitleDetails;
  console.log(singleTitleDetails);

  return (
    <>
      <MetaHead pageTitle={title} />
      <HeroCard {...singleTitleDetails} />
      <div className="hidden md:block md:h-8"></div>
      <div className="my-6 md:hidden">
        <p className={`${textClass} mb-2`}>Overview</p>
        <p>{description}</p>
      </div>
      {isTV ? (
        ''
      ) : (
        <>
          <iframe
            src={`https://fsapi.xyz/tmdb-movie/${id}`}
            frameBorder="0"
            scrolling="no"
            className="w-[30rem] h-[30rem] "
          ></iframe>

          <iframe
            src={`https://www.2embed.ru/embed/tmdb/movie?id=${id}`}
            frameBorder="0"
            scrolling="no"
            className="w-[30rem] h-[30rem] "
          ></iframe>
        </>
      )}

      <VerticalCardCarousel dataList={similarTitlesList} name={`Similar ${isTV ? 'Shows' : 'Movies'}`} />
    </>
  );
};

export default SingleTitlePage;
