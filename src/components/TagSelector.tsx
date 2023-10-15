"use client"

import React, { useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { db } from '@/lib/db';
import { Input } from './ui/Input';
import { useState } from 'react';

const TagComponent = () => {

    const tags = [
        { id: '1', name: '' },
        { id: '2', name: 'Tag 2' },
        { id: '3', name: 'Tag 3' },
        // Add more tags as needed
      ];

    const [selectedTag, setSelectedTag] = useState('');

    const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedTag(event.target.value);
      };

  return (
    <Select>
      <SelectTrigger>
        <input
          type="text"
          value={selectedTag}
          onChange={handleTagChange}
          placeholder="Select a tag"
          className="w-full resize-none appearance-none overflow-hidden bg-transparent text-lg focus:outline-none"
        />
      </SelectTrigger>
      <SelectContent>
        {/* Render the list of existing tags */}
        {tags.map((tag) => (
          <SelectItem key={tag.id} value={tag.id}>
            {tag.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TagComponent;