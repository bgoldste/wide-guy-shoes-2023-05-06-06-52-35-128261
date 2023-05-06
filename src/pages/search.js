import { useState } from 'react';
import reviewData from '@/data/review_data.json';
import review from "@/components/Review";

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const data = reviewData.posts;
    const handleSearch = e => {
        const term = e.target.value;
        setSearchTerm(term);

        // Filter the data based on the search term
        const results = data.filter(
            item =>
                item.title.toLowerCase().includes(term.toLowerCase()) ||
                item.content.toLowerCase().includes(term.toLowerCase())
        );

        setSearchResults(results);
    };

    return (
        <div>
            <h1>Search</h1>
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." />

            {searchResults.length > 0  && searchTerm.length > 0 ? (
                <ul>
                    {searchResults.map(item => (
                        <li key={item.id}>
                            <a href={item.slug}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
}
