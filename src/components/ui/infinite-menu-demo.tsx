import { Component } from "./infinite-menu";

const DemoOne = () => {
  const items = [
    {
      image: "https://picsum.photos/300/300?grayscale",
      link: "https://21st.dev/",
    },
    {
      image: "https://picsum.photos/400/400?grayscale",
      link: "https://21st.dev/",
    },
    {
      image: "https://picsum.photos/500/500?grayscale",
      link: "https://21st.dev/",
    },
    {
      image: "https://picsum.photos/600/600?grayscale",
      link: "https://21st.dev/",
    },
  ];

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div style={{ height: "600px", width: "100%", maxWidth: "800px", position: "relative" }}>
        <Component items={items} />
      </div>
    </div>
  );
};

export { DemoOne }; 