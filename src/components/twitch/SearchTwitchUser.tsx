import { useState, useEffect } from 'react';
import axios from 'axios';
import { db } from '@/lib/db';

export default function SearchUser({ userId, search }: { userId: string, search: string }) {
  // const [data, setData] = useState(null);

  useEffect(() => {
    const getAccessToken = async () => {
      const account = await db.account.findFirst({
        where: {
          userId: userId,
          provider: 'twitch',
        },
      });

      return account?.access_token;
    };

    const fetchData = async () => {
      const access_token = await getAccessToken();

      const response = await axios.get('https://api.twitch.tv/helix/users', {
        headers: {
          'Client-ID': process.env.TWITCH_CLIENT_ID,
          'Authorization': `Bearer ${access_token}`
        },
        params: {
          login: search
        }
      });

      return (response.data);
    };

    fetchData();
  }, [userId, search]);

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  // Render the data here
  return (
    <div>
      {/* Render the data here */}
    </div>
  );
}