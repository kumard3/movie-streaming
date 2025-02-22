/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from 'next/link';

import { gridCardClass } from '../../utils';
import { ITitleDetails, TCardIndex } from '../../utils/types';
import GridCardCommon from './GridCardCommon';

interface GridCardProps extends ITitleDetails {
  pos: TCardIndex;
}

const VerticalCard = ({ pos, ...rest }: GridCardProps) => (
  <NextLink href={`/${rest.mediaType}/${rest.id}`} className={`h-64 focus:outline-none ${gridCardClass(pos)}`}>
    <div tabIndex={-1}>
      <GridCardCommon {...rest} />
    </div>
  </NextLink>
);

export default VerticalCard;
