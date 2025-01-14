import React, { useState, useEffect } from 'react';
import MarkdownRenderer from '@/utils/MarkdownRenderer';

const Home: React.FC = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/pages/home.md');
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, [setContent]); // Apenas executa quando `page` mudar

  return (
    <div className='text-foreground max-w-7xl mx-auto'>
      <MarkdownRenderer markdownContent={content} />
    </div>
  );
};

export default Home;
