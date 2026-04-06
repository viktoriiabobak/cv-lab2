import { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/2/comments');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Помилка завантаження відгуків:', error);
      }
    };
    fetchReviews();
  }, []);

  return (
    <section className="p-4 mb-6 rounded-lg transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-[#383838] hover:translate-x-2">
      <h2 className="flex items-center text-lg font-bold text-emerald-700 dark:text-[#34d399] uppercase tracking-widest mb-4">
        Reviews
        <span className="flex-grow h-0.5 bg-emerald-700 dark:bg-[#34d399] ml-4"></span>
      </h2>
      
      <ul className="space-y-3">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id} className="border-l-2 border-emerald-700 dark:border-[#34d399] pl-3">
              <strong className="text-emerald-700 dark:text-[#34d399]">{review.email}</strong> <br />
              {/* Зробили текст коментаря світлішим для кращої читабельності */}
              <span className="text-gray-700 dark:text-[#e0e0e0]">{review.body}</span>
            </li>
          ))
        ) : (
          <li className="text-gray-500 italic">Завантаження відгуків...</li>
        )}
      </ul>
    </section>
  );
};

export default Reviews;