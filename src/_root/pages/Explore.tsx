// import { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";
// import useDebounce from "@/hooks/useDebounce";
// import { GridPostList, Loader } from "@/components/shared";
// import { useGetPosts, useSearchPosts } from "@/lib/react-query/queries";

// export type SearchResultProps = {
//   isSearchFetching: boolean;
//   searchedPosts: any;
// };

// const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultProps) => {
//   if (isSearchFetching) {
//     return <Loader />;
//   } else if (searchedPosts && searchedPosts.documents.length > 0) {
//     return <GridPostList posts={searchedPosts.documents} />;
//   } else {
//     return (
//       <p className="text-light-4 mt-10 text-center w-full">No results found</p>
//     );
//   }
// };

// const Explore = () => {
//   const { ref, inView } = useInView();
//   const { data: posts, fetchNextPage, hasNextPage } = useGetPosts();

//   const [searchValue, setSearchValue] = useState("");
//   const debouncedSearch = useDebounce(searchValue, 500);
//   const { data: searchedPosts, isFetching: isSearchFetching } = useSearchPosts(debouncedSearch);

//   useEffect(() => {
//     if (inView && !searchValue) {
//       fetchNextPage();
//     }
//   }, [inView, searchValue]);

//   if (!posts)
//     return (
//       <div className="flex-center w-full h-full">
//         <Loader />
//       </div>
//     );

//   const shouldShowSearchResults = searchValue !== "";
//   const shouldShowPosts = !shouldShowSearchResults && 
//     posts.pages.every((item) => item.documents.length === 0);

//   return (
//     <div className="explore-container">
//       {/* <div className="explore-inner_container">
//         <h2 className="h3-bold md:h2-bold w-full">Search Posts</h2>
//         <div className="flex gap-1 px-4 w-full rounded-lg bg-dark-4">
//           <img
//             src="/assets/icons/search.svg"
//             width={24}
//             height={24}
//             alt="search"
//           />
//           <Input
//             type="text"
//             placeholder="Search"
//             className="explore-search"
//             value={searchValue}
//             onChange={(e) => {
//               const { value } = e.target;
//               setSearchValue(value);
//             }}
//           />
//         </div>
//       </div> */}

//       <div className="flex-between w-full max-w-5xl mt-16 mb-7">
//         <h3 className="body-bold md:h3-bold">Events</h3>

//         <div className="flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer">
//           <p className="small-medium md:base-medium text-light-2">All</p>
//           <img
//             src="/assets/icons/filter.svg"
//             width={20}
//             height={20}
//             alt="filter"
//           />
//         </div>
//       </div>

//       <div className="flex flex-wrap gap-9 w-full max-w-5xl">
//         {shouldShowSearchResults ? (
//           <SearchResults
//             isSearchFetching={isSearchFetching}
//             searchedPosts={searchedPosts}
//           />
//         ) : shouldShowPosts ? (
//           <p className="text-light-4 mt-10 text-center w-full">End of posts</p>
//         ) : (
//           posts.pages.map((item, index) => (
//             <GridPostList key={`page-${index}`} posts={item.documents} />
//           ))
//         )}
//       </div>

//       {hasNextPage && !searchValue && (
//         <div ref={ref} className="mt-10">
//           <Loader />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Explore;

import React, { useState } from 'react';

// Define the event type
type Event = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  network: 'BASE' | 'MORPH';
};

// Data for events
const events: Event[] = [
  {
    id: 1,
    name: "EthDubai 2024",
    description: "Blckchain event for developers and enthusiasts. Join us for a day of learning and networking",
    imageUrl: "https://icoholder.com/files/img/e9abb51728c7d85e232448046cb22fce.png",
    price: "50 USD",
    network: "BASE"
  },
  {
    id: 2,
    name: "EthDubai 2025",
    description: "Blckchain event for developers and enthusiasts. Join us for a day of learning and networking",
    imageUrl: "https://icoholder.com/files/img/e9abb51728c7d85e232448046cb22fce.png",
    price: "50 USD",
    network: "MORPH"
  },
];

// Network Selector Component Props
interface NetworkSelectorProps {
  selectedNetwork: 'BASE' | 'MORPH';
  onSelect: (network: 'BASE' | 'MORPH') => void;
}

const NetworkSelector: React.FC<NetworkSelectorProps> = ({ selectedNetwork, onSelect }) => (
  <select className="network-selector" value={selectedNetwork} onChange={e => onSelect(e.target.value as 'BASE' | 'MORPH')} style={{ color: 'black' }}>
    <option value="BASE">BASE</option>
    <option value="MORPH">MORPH</option>
  </select>
);

// Event Card Component Props
interface EventCardProps {
  event: Event;
}


const EventCard: React.FC<EventCardProps> = ({ event }) => (
  <div className="event-card" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px', margin: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
    <img src={event.imageUrl} alt={event.name} style={{ width: '300px', height: '200px', borderRadius: '5px', objectFit: 'cover' }} />
    <h4 style={{ margin: '10px 0' }}>{event.name}</h4>
    <p style={{ marginBottom: '5px' }}>{event.description}</p>
    <p style={{ marginBottom: '10px' }}>{event.price}</p>
    <button style={{
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007BFF',  // Bootstrap primary blue
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    }}
    onMouseOver={e => (e.currentTarget.style.backgroundColor = '#0056b3')}  // Darker blue on hover
    onMouseOut={e => (e.currentTarget.style.backgroundColor = '#007BFF')}
    >
      Buy Ticket
    </button>
  </div>
);

// Event List Component Props
interface EventListProps {
  events: Event[];
  selectedNetwork: 'BASE' | 'MORPH';
}

const EventList: React.FC<EventListProps> = ({ events, selectedNetwork }) => (
  <div className="event-list">
    {events.filter(event => event.network === selectedNetwork).map(event => (
      <EventCard key={event.id} event={event} />
    ))}
  </div>
);

// Main Explore Component
const Explore: React.FC = () => {
  const [selectedNetwork, setSelectedNetwork] = useState<'BASE' | 'MORPH'>('BASE');

  return (
    <div className="explore-container">
      <div className="flex-between w-full max-w-5xl mt-16 mb-7">
        <h3 className="body-bold md:h3-bold">Events</h3>
        <NetworkSelector selectedNetwork={selectedNetwork} onSelect={setSelectedNetwork} />
      </div>

      <EventList events={events} selectedNetwork={selectedNetwork} />
    </div>
  );
};

export default Explore;

