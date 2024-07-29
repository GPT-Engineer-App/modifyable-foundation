import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const fetchUserProfile = async () => {
  // Simulated API call
  return {
    username: 'JohnDoe',
    karma: 1234,
    cakeDay: '2022-01-01',
    recentPosts: [
      { id: 1, title: 'My first post', subreddit: 'AskReddit' },
      { id: 2, title: 'Funny meme', subreddit: 'funny' },
    ],
  };
};

const Profile = () => {
  const { data: profile, isLoading, error } = useQuery({
    queryKey: ['userProfile'],
    queryFn: fetchUserProfile,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt={profile.username} />
              <AvatarFallback>{profile.username[0]}</AvatarFallback>
            </Avatar>
            <CardTitle>{profile.username}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p>Karma: {profile.karma}</p>
          <p>Cake Day: {profile.cakeDay}</p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Recent Posts</h2>
          <ul>
            {profile.recentPosts.map((post) => (
              <li key={post.id}>
                {post.title} in r/{post.subreddit}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
