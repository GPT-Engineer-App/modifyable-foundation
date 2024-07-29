import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle, ArrowDownCircle, MessageCircle } from 'lucide-react';

const fetchPosts = async () => {
  // Simulated API call
  return [
    { id: 1, title: 'First post', content: 'This is the first post content', votes: 10, comments: 5 },
    { id: 2, title: 'Second post', content: 'This is the second post content', votes: 7, comments: 3 },
  ];
};

const Home = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Reddit Clone</h1>
      {posts.map((post) => (
        <Card key={post.id} className="mb-4">
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{post.content}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm"><ArrowUpCircle /></Button>
              <span>{post.votes}</span>
              <Button variant="ghost" size="sm"><ArrowDownCircle /></Button>
            </div>
            <Button variant="ghost" size="sm">
              <MessageCircle className="mr-2" />
              {post.comments} Comments
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Home;
