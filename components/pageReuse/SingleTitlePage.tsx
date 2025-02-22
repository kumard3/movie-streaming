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
      <div className="flex flex-col justify-between h-full relative">
        <div className="flex flex-col pb-[10rem]">
          {isTV ? (
            <>
              <div className="flex flex-col ">
                <span>episode_count {seasons[seasons.length - 1].episode_count}</span>
                <span>.season_number {seasons[seasons.length - 1].season_number} </span>
                <span>name {seasons[seasons.length - 1].name} </span>
              </div>

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
              {/* https://vidsrc.pro/embed/tv/{tmdb_id}/{season_number}/{episode_number} */}
              <iframe
                src={`https://vidsrc.pro/embed/tv/${id}/${tvShowSeason}/${tvShowValue}`}
                frameBorder="0"
                scrolling="no"
                height="100%"
                width="100%"
                allowFullScreen
                autoSave="on"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          ) : (
            <div className="flex h-[30rem] justify-between w-full flex-wrap my-[10rem]">
              <iframe
                src={`https://vidsrc.pro/embed/movie/${id}`}
                frameBorder="0"
                scrolling="no"
                height="100%"
                width="100%"
                allowFullScreen
                autoSave="on"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              <iframe
                id="ve-iframe"
                src={`https://www.2embed.stream/embed/movie/${id}`}
                width="100%"
                height="100%"
                allowFullScreen
                frameBorder="0"
              ></iframe>{' '}
              <iframe
                id="ve-iframe"
                src={`https://vidsrc.in/embed/movie?tmdb=${id}`}
                width="100%"
                height="100%"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
          )}
        </div>

        <div className="relative top-[23rem] ">
          <VerticalCardCarousel dataList={similarTitlesList} name={`Similar ${isTV ? 'Shows' : 'Movies'}`} />
        </div>
      </div>
    </>
  );
};

export default SingleTitlePage;
