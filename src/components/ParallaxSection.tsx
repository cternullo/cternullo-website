import { useParallax } from 'react-scroll-parallax';

const ParallaxSection = () => {
  const parallax = useParallax({
    speed: -10,
  });

  return (
    <div className="min-h-screen relative">
      <div ref={parallax.ref} className="absolute inset-0">
        {/* Your content here */}
        <h1 className="text-4xl text-white text-center pt-20">Welcome to My Portfolio</h1>
      </div>
    </div>
  );
};

export default ParallaxSection; 