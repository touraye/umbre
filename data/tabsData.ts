const solutionData = [
    {
      value: "ott-apps",
      triggerText: "OTT TV Apps",
      imageSrc: "/assets/entertainment.png",
      imageAlt: "A collage of streaming service logos like Apple TV, Roku, and Android TV",
      title: "Distribute Videos to Anywhere, Watch on Any Device",
      features: [
        "Reach every screen — Android, Apple TV, Tizen OS, Roku to reach a broader audience.",
        "Stay smooth everywhere and bring consistent user experiences on all devices for a slick content binge.",
        "Your content, your rules — anytime, anywhere, on any device. Take full ownership of the content flow.",
      ],
    },
    {
      value: "integration",
      triggerText: "Integration",
      imageSrc: "/assets/CDN.png",
      imageAlt: "Integration logos like Stripe and PayPal floating over an abstract background",
      title: "Integration with Your Favorite Apps Made Easy and Faster",
      features: [
        "Expand your content horizons, linking creators for an array of captivating choices.",
        "Streamline transactions, tailor content, and deliver personalized experiences effortlessly.",
        "Leverage integrated data for informed decisions and optimized, tailored content experiences.",
      ],
    },
    {
      value: "migration",
      triggerText: "Migration",
      imageSrc: "/assets/customized-platform.png",
      imageAlt: "A collage of movie posters with an arrow indicating migration",
      title: "Transfer All Your Content Zero Data Loss & 100% Secure",
      features: [
        "Migrate your current content and user data to your OTT platform seamlessly without data loss.",
        "Reduce downtime to ensure uninterrupted service, minimizing disruptions for your audience.",
        "Effortlessly transfer your content library, user accounts, and settings to your new platform.",
      ],
    },
  ];
  
export default solutionData;

export type IndustryTab = {
    value: string;
    triggerText: string;
    title: string;
    features: string[];
    imageSrc: string;
    imageAlt: string;
    publishedDate: string;
  };
  
  
  export const industryTabsData: IndustryTab[] = [
    {
      value: 'entertainment',
      triggerText: 'Entertainment',
      title: "Entertain Your Audience — It's Showtime, Anytime",
      features: [
        'Engaging Content Curation: Build an OTT app tailored to captivate diverse audiences.',
        'Immersive Viewing Experience: Elevate your content presentation for next-level entertainment.',
        'Stream Anything: From virtual concerts to behind the scenes clips at your convenience.',
      ],
      imageSrc: '/assets/entertainment.png',
      imageAlt: 'A user interface for an entertainment streaming service showing the movie Fast X.',
      publishedDate: '2025-08-10',
    },
    {
      value: 'filmmakers',
      triggerText: 'Filmmakers',
      title: 'Unleash Your Films Across the World with Creative Freedom',
      features: [
        'An Independent Showcase Hub: Present films to a global audience, enhancing visibility and audience reach globally.',
        'Interactive Filmmaker Community: Cultivate engagement, feedback, and collaborations for enriched storytelling.',
        'Monetization and Control: Direct distribution gives you control over your revenue and opportunity to scale at your own pace.',
      ],
      imageSrc: '/assets/filmmakers.png',
      imageAlt: 'A user interface for a creators hub for filmmakers, with a directors chair in the background.',
      publishedDate: '2025-08-10',
    },
    {
      value: 'broadcasters',
      triggerText: 'Broadcasters',
      title: 'Elevate Your Reach, Captivate Your Audience with 24/7 Broadcasts',
      features: [
        'Better Viewer Metrics: Gain detailed insights for precise audience targeting and strategic content decisions.',
        'Seamless Ad Integration: Implement tailored ad formats to rake in more revenue without disrupting user experiences.',
        'Robust Content Management: Optimize workflow with tailored solutions for efficient content curation on your OTT platform.',
      ],
      imageSrc: '/assets/broadcasters.png',
      imageAlt: 'A user interface for a live news broadcast service showing two news anchors.',
      publishedDate: '2025-08-10',
    },
    {
      value: 'education',
      triggerText: 'Education',
      title: 'Teach Everywhere — Take Your Lessons to Students Worldwide',
      features: [
        'Reach Learners Worldwide: Bring educators and students together for accessible, real-time learning opportunities.',
        'Interactive Engagement Tools: Live Q&A sessions and polls to enhance student participation, and understanding.',
        'Flexible Learning Options: Give access to live classes and recorded sessions on your OTT app.',
      ],
      imageSrc: '/assets/education.webp',
      imageAlt: 'A user interface for an online education platform showing a teacher at a chalkboard.',
      publishedDate: '2025-08-10',
    },
    {
      value: 'fitness',
      triggerText: 'Fitness',
      title: 'Monetize Every Move with a Dedicated OTT Platform',
      features: [
        'Personalized Fitness Guidance: Stream live workouts led by experts, tailored to individual fitness goals.',
        'Engage with Fitness Challenges: Allow users to join live fitness challenges to increase engagement and viewership.',
        'Interact with Experts: Receive real-time feedback and address concerns directly with fitness experts for optimal results.',
      ],
      imageSrc: '/assets/fitness.webp',
      imageAlt: 'A user interface for a fitness streaming app showing a person doing a workout.',
      publishedDate: '2025-08-10',
    },
    {
      value: 'sports',
      triggerText: 'Sports',
      title: 'Build a Loyal Fan Squad — Make More Money from Every Video',
      features: [
        'Engage Fans Worldwide: Connect global fans to live events, expanding reach and bringing sports enthusiasts together.',
        'Live Game Insights: Real-time match coverage delivers dynamic insights, commentary, and in-depth game analysis.',
        'Dynamic Streaming Experience: Access live games and highlights on-the-go on your custom-built OTT app.',
      ],
      imageSrc: '/assets/sports.png',
      imageAlt: 'A user interface for a sports streaming platform showing analytics and a live soccer match.',
      publishedDate: '2025-08-10',
    },
    {
      value: 'religious',
      triggerText: 'Religious',
      title: 'Unite, Engage, and Grow Your Community',
      features: [
        'Integrate Global Congregations: Unify global followers for spiritual sermons on your dedicated OTT platform.',
        'Live Spiritual Connection: Facilitate live religious ceremonies. Enable real-time participation in sacred rituals and teachings.',
        'Interactive Spiritual Guidance: Foster engagement with spiritual leaders, directly from your platform.',
      ],
      imageSrc: '/assets/religious.png',
      imageAlt: 'A user interface for a spiritual or religious streaming service with the title Devine Spirit.',
      publishedDate: '2025-08-10',
    },
  ];
