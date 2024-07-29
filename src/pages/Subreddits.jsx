import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fetchSubreddits = async () => {
  // Simulated API call
  return [
    { id: 1, name: 'AskReddit', members: 1000000 },
    { id: 2, name: 'funny', members: 800000 },
    { id: 3, name: 'gaming', members: 600000 },
  ];
};

const Subreddits = () => {
  const { data: subreddits, isLoading, error } = useQuery({
    queryKey: ['subreddits'],
    queryFn: fetchSubreddits,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Subreddits</h1>
      {subreddits.map((subreddit) => (
        <Card key={subreddit.id} className="mb-4">
          <CardHeader>
            <CardTitle>r/{subreddit.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{subreddit.members.toLocaleString()} members</p>
            <Button className="mt-2">Join</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Subreddits;
