import { Component } from "./infinite-menu";

// Custom rugby inspiration photos array - 50 authentic photos with inspirational quotes and Bible verses
// Using actual filenames from the inspiration-photos directory
const rugbyInspirationPhotos = [
  {
    image: "/inspiration-photos/IMG_9287.HEIC",
    link: "#discipline",
    title: "Discipline keeps promises to yourself.",
    description: "Consistency beats motivation."
  },
  {
    image: "/inspiration-photos/IMG_2911.HEIC",
    link: "#motivation",
    title: "Discipline over motivation.",
    description: "Motivation fluctuates, discipline drives."
  },
  {
    image: "/inspiration-photos/IMG_2794.HEIC",
    link: "#perseverance",
    title: "Keep doing the simple things.",
    description: "Day after day, that's how you win."
  },
  {
    image: "/inspiration-photos/IMG_2643.HEIC",
    link: "#mindset",
    title: "Your life reflects your thoughts.",
    description: "Change your mindset, change your world."
  },
  {
    image: "/inspiration-photos/IMG_2176.HEIC",
    link: "#focus",
    title: "What you focus on expands.",
    description: "Focus on solutions, not problems."
  },
  {
    image: "/inspiration-photos/IMG_1840.HEIC",
    link: "#growth",
    title: "Change your behavior.",
    description: "The mistake isn't the problem, you are."
  },
  {
    image: "/inspiration-photos/IMG_8199.HEIC",
    link: "#learning",
    title: "You're a student, not a teacher.",
    description: "Own the learning process."
  },
  {
    image: "/inspiration-photos/IMG_5563.HEIC",
    link: "#time",
    title: "Time is precious.",
    description: "Once lost, never regained."
  },
  {
    image: "/inspiration-photos/IMG_8006.HEIC",
    link: "#business",
    title: "Business is problem-solving at scale.",
    description: "Higher impact, higher reward."
  },
  {
    image: "/inspiration-photos/IMG_9916.HEIC",
    link: "#value",
    title: "The market cares about value.",
    description: "Results matter more than passion."
  },
  {
    image: "/inspiration-photos/IMG_9233.HEIC",
    link: "#money",
    title: "Money is the byproduct of value.",
    description: "Focus on solving, not selling."
  },
  {
    image: "/inspiration-photos/IMG_9009.HEIC",
    link: "#pricing",
    title: "Raise your price, increase value.",
    description: "Perception frames pricing."
  },
  {
    image: "/inspiration-photos/IMG_6755.HEIC",
    link: "#offers",
    title: "Value perception wins.",
    description: "Increase value, decrease effort."
  },
  {
    image: "/inspiration-photos/IMG_2392.HEIC",
    link: "#action",
    title: "Imperfect action beats perfect inaction.",
    description: "Done is better than perfect."
  },
  {
    image: "/inspiration-photos/IMG_4363 2.JPG",
    link: "#start",
    title: "The best time to start is now.",
    description: "Don't wait for perfect timing."
  },
  {
    image: "/inspiration-photos/IMG_3829.JPG",
    link: "#choices",
    title: "You can be right or rich.",
    description: "Value over winning arguments."
  },
  {
    image: "/inspiration-photos/IMG_4246.JPG",
    link: "#luck",
    title: "The harder you work, the luckier you get.",
    description: "Luck favors effort."
  },
  {
    image: "/inspiration-photos/15C7985B-DAE4-42F8-8DC5-6413F07C378E.JPG",
    link: "#standards",
    title: "Don't expect mediocre support.",
    description: "Lift your circle."
  },
  {
    image: "/inspiration-photos/IMG_3839.JPG",
    link: "#insults",
    title: "Only believe what you choose.",
    description: "Choose your response."
  },
  {
    image: "/inspiration-photos/IMG_3840.JPG",
    link: "#standards",
    title: "You want it done right.",
    description: "High standards look harsh to others."
  },
  {
    image: "/inspiration-photos/IMG_3833.JPG",
    link: "#belief",
    title: "Belief makes impossible possible.",
    description: "Faith moves mountains."
  },
  {
    image: "/inspiration-photos/dclassic 2025-04-14 182503.322.JPG",
    link: "#choices",
    title: "You always have a choice.",
    description: "Choose your response wisely."
  },
  {
    image: "/inspiration-photos/IMG_3636.jpg",
    link: "#resilience",
    title: "Hard times reveal true character.",
    description: "Adversity builds strength."
  },
  {
    image: "/inspiration-photos/IMG_3827.JPG",
    link: "#perspective",
    title: "Your perspective shapes reality.",
    description: "Change your view, change your life."
  },
  {
    image: "/inspiration-photos/IMG_3589.JPG",
    link: "#bible",
    title: "I can do all things through Christ.",
    description: "Philippians 4:13"
  },
  {
    image: "/inspiration-photos/IMG_3830.JPG",
    link: "#bible",
    title: "Be strong and courageous.",
    description: "Joshua 1:9"
  },
  {
    image: "/inspiration-photos/IMG_3828.JPG",
    link: "#bible",
    title: "Trust in the Lord with all your heart.",
    description: "Proverbs 3:5"
  },
  {
    image: "/inspiration-photos/IMG_3037.PNG",
    link: "#bible",
    title: "The Lord is my strength and shield.",
    description: "Psalm 28:7"
  },
  {
    image: "/inspiration-photos/IMG_3036.PNG",
    link: "#bible",
    title: "Wait for the Lord, be strong.",
    description: "Psalm 27:14"
  },
  {
    image: "/inspiration-photos/IMG_2938.jpg",
    link: "#bible",
    title: "God is our refuge and strength.",
    description: "Psalm 46:1"
  },
  {
    image: "/inspiration-photos/fqs 2025-01-08 132301.256.JPG",
    link: "#bible",
    title: "Rejoice always, pray continually.",
    description: "1 Thessalonians 5:16-17"
  },
  {
    image: "/inspiration-photos/IMG_1897.JPG",
    link: "#bible",
    title: "Love your neighbor as yourself.",
    description: "Mark 12:31"
  },
  {
    image: "/inspiration-photos/IMG_1330.JPG",
    link: "#bible",
    title: "Do everything in love.",
    description: "1 Corinthians 16:14"
  },
  {
    image: "/inspiration-photos/fqs 2024-10-18 144125.717.JPG",
    link: "#bible",
    title: "Be kind and compassionate.",
    description: "Ephesians 4:32"
  },
  {
    image: "/inspiration-photos/IMG_1017.JPG",
    link: "#bible",
    title: "Walk by faith, not by sight.",
    description: "2 Corinthians 5:7"
  },
  {
    image: "/inspiration-photos/IMG_1317.JPG",
    link: "#bible",
    title: "Seek first the kingdom of God.",
    description: "Matthew 6:33"
  },
  {
    image: "/inspiration-photos/IMG_4240.JPG",
    link: "#bible",
    title: "Give thanks in all circumstances.",
    description: "1 Thessalonians 5:18"
  },
  {
    image: "/inspiration-photos/IMG_0259.jpg",
    link: "#bible",
    title: "Be transformed by renewing your mind.",
    description: "Romans 12:2"
  },
  {
    image: "/inspiration-photos/78203b92-cde1-462d-9427-9c2262d9a977.JPG",
    link: "#bible",
    title: "Let your light shine before others.",
    description: "Matthew 5:16"
  },
  {
    image: "/inspiration-photos/IMG_8162.WEBP",
    link: "#bible",
    title: "Be strong in the Lord.",
    description: "Ephesians 6:10"
  },
  {
    image: "/inspiration-photos/IMG_7137.JPG",
    link: "#bible",
    title: "The joy of the Lord is your strength.",
    description: "Nehemiah 8:10"
  },
  {
    image: "/inspiration-photos/IMG_2462.HEIC",
    link: "#bible",
    title: "Cast your cares on the Lord.",
    description: "1 Peter 5:7"
  },
  {
    image: "/inspiration-photos/IMG_2173.HEIC",
    link: "#bible",
    title: "God works all things for good.",
    description: "Romans 8:28"
  },
  {
    image: "/inspiration-photos/IMG_0454.JPG",
    link: "#bible",
    title: "Be still and know that I am God.",
    description: "Psalm 46:10"
  },
  {
    image: "/inspiration-photos/7ed360b1-4cb1-4531-97bc-925902c7674d.JPG",
    link: "#bible",
    title: "Perfect love drives out fear.",
    description: "1 John 4:18"
  },
  {
    image: "/inspiration-photos/IMG_9711.HEIC",
    link: "#bible",
    title: "The Lord is my shepherd.",
    description: "Psalm 23:1"
  },
  {
    image: "/inspiration-photos/IMG_9545.HEIC",
    link: "#bible",
    title: "Blessed are the peacemakers.",
    description: "Matthew 5:9"
  },
  {
    image: "/inspiration-photos/IMG_6506.JPG",
    link: "#bible",
    title: "Love is patient, love is kind.",
    description: "1 Corinthians 13:4"
  },
  {
    image: "/inspiration-photos/IMG_2201.JPG",
    link: "#bible",
    title: "Faith without works is dead.",
    description: "James 2:26"
  },
  {
    image: "/inspiration-photos/IMG_3544.JPG",
    link: "#bible",
    title: "Be doers of the word.",
    description: "James 1:22"
  }
];

const DemoOne = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div style={{ height: "600px", width: "100%", maxWidth: "800px", position: "relative" }}>
        <Component items={rugbyInspirationPhotos} />
      </div>
    </div>
  );
};

export { DemoOne }; 