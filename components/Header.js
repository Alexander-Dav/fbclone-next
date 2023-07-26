import Image from 'next/image';
import React from 'react';
import {
  BellIcon,
  ChatBubbleBottomCenterIcon,
  ChatBubbleOvalLeftIcon,
  ChevronDownIcon,
  FlagIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlayIcon,
  ShoppingCartIcon,
  Square2StackIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import HeaderIcon from './HeaderIcon';

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/*Left*/}
      <div className="flex items-center">
        <Image src="" width={40} height={40} layout="fixed" />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-6 text-gray-600" />
          <input
            className="hidden mb:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink "
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 mb:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon active Icon={UserGroupIcon} />
        </div>
      </div>
      <div className="flex items-center sm:space-x-2 justify-end">
        <p className="whitespace-nowrap font-semibold pr-3"> Sony</p>
        <Squares2X2Icon className="icon" />
        <ChatBubbleOvalLeftIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
      {/*Right*/}
    </div>
  );
};

export default Header;
