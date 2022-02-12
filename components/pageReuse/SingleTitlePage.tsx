/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-key */
import { useRouter } from 'next/router';
import { useState } from 'react';

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
  const [tvShowValue, setTvShowValue] = useState<number>(1);
  const [tvShowSeason, setTvShowSeason] = useState<number>(1);
  const router = useRouter();

  if (router.isFallback) {
    return <PagePlaceHolder />;
  }
  //@ts-ignore
  const { title, description, id, seasons } = singleTitleDetails;

  return (
    <>
      <MetaHead pageTitle={title} />
      <HeroCard {...singleTitleDetails} />
      <div className="hidden md:block md:h-8"></div>
      <div className="my-6 md:hidden">
        <p className={`${textClass} mb-2`}>Overview</p>
        <p>{description}</p>
      </div>
      <div className="flex flex-col pb-[10rem]">

      {isTV ? (
        <>
          {seasons.map((season: any) => {
            return (
              <div className="flex flex-col ">
                <span>episode_count {season.episode_count}</span>
                <span>.season_number {season.season_number} </span>
                <span>name {season.name} </span>
              </div>
            );
          })}
          <div className="flex flex-col">
            <input
              type="number"
              value={tvShowValue}
              className="text-black"
              onChange={e => setTvShowValue(parseInt(e.target.value as string))}
            />{' '}
            <span>Enter the number of episode</span>
            <input
              type="number"
              value={tvShowSeason}
              className="text-black"
              onChange={e => setTvShowSeason(parseInt(e.target.value as string))}
            />{' '}
            <span>Enter the number of season</span>
          </div>
        </>
      ) : (
        <> </>
      )}
      {isTV ? (
        <div className="flex h-[30rem] justify-between w-full flex-wrap">
          <iframe
            src={`https://fsapi.xyz/tv-tmdb/${id}-${tvShowSeason}-${tvShowValue}`}
            frameBorder="0"
            scrolling="no"
            height="100%"
            width="100%"
          ></iframe>
          <iframe
            src={`https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=${tvShowSeason}&e=${tvShowValue}`}
            frameBorder="0"
            scrolling="no"
            height="100%"
            width="100%"
          ></iframe>
        </div>
      ) : (
        <div className="flex h-[30rem] justify-between w-full flex-wrap my-[10rem]">
          <iframe
            src={`https://fsapi.xyz/tmdb-movie/${id}`}
            frameBorder="0"
            scrolling="no"
            height="100%"
            width="100%"
          ></iframe>

          <iframe
            src={`https://www.2embed.ru/embed/tmdb/movie?id=${id}`}
            frameBorder="0"
            scrolling="no"
            height="100%"
            width="100%"
            className="py-10"
          ></iframe>
        </div>
      )}
      </div>

      <div className="relative top-[23rem] ">
        <VerticalCardCarousel dataList={similarTitlesList} name={`Similar ${isTV ? 'Shows' : 'Movies'}`} />
      </div>
    </>
  );
};

export default SingleTitlePage;
