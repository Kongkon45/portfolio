"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import tsparticles and loadFull
const Particles = dynamic(() => import("@tsparticles/react"), { ssr: false });
const loadFull = dynamic(() => import("tsparticles").then((mod) => mod.loadFull), { ssr: false });

const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      console.log("Initializing Particles...");
      const loadFullParticles = await loadFull();
      await loadFullParticles((engine) => {
        console.log("Engine loaded successfully");
      });
      setInit(true);
    };

    initParticles();
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles Loaded", container);
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            zIndex: -1,
          }}
          options={{
            background: {
              color: {
                value: "#fff",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ed2218",
              },
              links: {
                color: "#f7655e",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1.2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 160,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export default Particle;
