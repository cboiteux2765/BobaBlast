import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import { fetchBlogPosts, postBlogEntry } from '../utils/api';
import { useTailwind } from 'tailwind-rn';

const BlogScreen = () => {
    const tailwind = useTailwind();
    const [blogPosts, setBlogPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
        const loadBlogPosts = async () => {
            const posts = await fetchBlogPosts();
            setBlogPosts(posts);
        };
        loadBlogPosts();
    }, []);

    const handlePostSubmit = async () => {
        if (newPost.trim()) {
            await postBlogEntry(newPost);
            setNewPost('');
            const posts = await fetchBlogPosts();
            setBlogPosts(posts);
        }
    };

    return (
        <View style={tailwind('flex-1 p-4')}>
            <Text style={tailwind('text-xl font-bold mb-4')}>Boba Blog</Text>
            <FlatList
                data={blogPosts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={tailwind('mb-4 p-2 border rounded')}>
                        <Text style={tailwind('text-lg')}>{item.content}</Text>
                    </View>
                )}
            />
            <TextInput
                style={tailwind('border p-2 rounded mb-4')}
                placeholder="Share your boba experience..."
                value={newPost}
                onChangeText={setNewPost}
            />
            <Button title="Post" onPress={handlePostSubmit} />
        </View>
    );
};

export default BlogScreen;