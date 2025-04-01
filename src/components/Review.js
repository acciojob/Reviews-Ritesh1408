import React, { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up.",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan.",
  },
];

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];
  
  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const randomReview = () => {
    let newIndex = Math.floor(Math.random() * reviews.length);
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * reviews.length);
    }
    setIndex(newIndex);
  };

  return (
    <article className="review">
      <img 
        src={image} 
        alt={`${name}'s profile picture`} 
        className="person-img" 
        style={{ width: "150px", borderRadius: "50%" }}
      />
      <h4 id={`author-${id}`} className="author">
        {name}
      </h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      
      <div>
        <button className="prev-btn" onClick={prevReview} aria-label="Previous Review">
          Prev
        </button>
        <button className="next-btn" onClick={nextReview} aria-label="Next Review">
          Next
        </button>
      </div>

      <button className="random-btn" onClick={randomReview} aria-label="Surprise Me">
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
