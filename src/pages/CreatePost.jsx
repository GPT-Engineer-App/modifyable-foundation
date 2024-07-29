import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const createPost = async (postData) => {
  // Simulated API call
  console.log('Creating post:', postData);
  return { success: true };
};

const CreatePost = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [subreddit, setSubreddit] = useState('');

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast.success('Post created successfully!');
    },
    onError: () => {
      toast.error('Failed to create post. Please try again.');
    },
  });

  const onSubmit = (data) => {
    mutation.mutate({ ...data, subreddit });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Create a New Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              placeholder="Title"
              {...register('title', { required: 'Title is required' })}
            />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}

            <Textarea
              placeholder="Content"
              {...register('content', { required: 'Content is required' })}
            />
            {errors.content && <p className="text-red-500">{errors.content.message}</p>}

            <Input
              placeholder="Subreddit"
              value={subreddit}
              onChange={(e) => setSubreddit(e.target.value)}
            />

            <Button type="submit" disabled={mutation.isLoading}>
              {mutation.isLoading ? 'Creating...' : 'Create Post'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePost;
