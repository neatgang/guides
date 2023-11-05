// "use client"

// import SearchUser from '@/components/twitch/SearchTwitchUser';
// // import { db } from '@/lib/db';
// import axios from 'axios';
// import { useSession } from 'next-auth/react';
// import Image from 'next/image';
// import { useState } from 'react';

// export default function TwitchPage() {
//   const { data: session } = useSession();
//   const [search, setSearch] = useState('');

//   if (!session) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex items-center space-x-4">
//       <Image className="h-10 w-10 rounded-full" src={session?.user?.image || '/placeholder.svg'} alt="User image" width={100} height={100}/>
//       <div>
//         <div className="font-bold">{session.user.name}</div>
//         <div className="text-sm text-gray-500">{session.user.email}</div>
//         <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
//         <SearchUser userId={session.user.id} search={search} />
//       </div>
//     </div>
//   );
// }