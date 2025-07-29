import React, { useRef, useEffect, type FC, useState } from "react";
import type { Particle, Position } from "../../model/Particle";
import "./Universe.css";

const PARTICLE_COUNT = 1400;
const MILLISECONDS_PER_SECOND = 1000;
const REFRESH_RATE = 40;
const FORCE_BASE_MULTIPLIER = 0.01;
const VELOCITY_BASE_MULTIPLIER = 0.3;
const MAX_DISTANCE_DIFF = 100;

export const Universe: FC = () => {
  const [dimensions, setDimensions] = useState<Position>({
    x: window.innerWidth,
    y: window.innerHeight,
  });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [particles, setParticles] = useState<Particle[]>(
    initParticles(dimensions, PARTICLE_COUNT)
  );

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ x: window.innerWidth, y: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    const canvas = canvasRef.current;
    if (canvas) {
      const universe = canvas?.getContext("2d");
      if (universe) {
        setInterval(() => {
          setParticles((prev) => updateParticlePositions(prev, dimensions));
        }, REFRESH_RATE);
      }
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log("UPDATE particles");

    const canvas = canvasRef.current;
    renderUniverse(canvas, particles);
  }, [particles]);

  return (
    <canvas
      id="universe"
      className="Background"
      ref={canvasRef}
      width={dimensions.x}
      height={dimensions.y}
    ></canvas>
  );
};

function renderUniverse(
  canvas: HTMLCanvasElement | null,
  particles: Particle[]
) {
  if (canvas) {
    const universe = canvas?.getContext("2d");

    if (universe) {
      drawUniverse(universe, { x: canvas!.width, y: canvas!.height });
      for (const p of particles) {
        const particleSize: Position = { x: 7, y: 7 };
        drawParticle(universe, p.position, particleSize, p.color);
      }
    }
  }
}

function drawUniverse(universe: CanvasRenderingContext2D, size: Position) {
  universe.fillStyle = "black";
  universe.fillRect(0, 0, size.x, size.y);
}

function drawParticle(
  universe: CanvasRenderingContext2D,
  posStart: Position,
  size: Position,
  color: string
) {
  universe.beginPath();
  universe.fillStyle = color;

  universe.shadowBlur = 15;
  universe.shadowColor = "white";

  universe.arc(posStart.x, posStart.y, size.x / 2, 0, 2 * Math.PI);

  universe.fill();

  universe.shadowBlur = 0;
}

function updateParticlePositions(
  particles: Particle[],
  dimens: Position
): Particle[] {
  const attractionRules: ((particles: Particle[]) => Particle[])[] = [
    (p) => applyAttractionToParticles(p, "#222", "#222", -10, dimens),
    (p) => applyAttractionToParticles(p, "#222", "#444", 3, dimens),
    (p) => applyAttractionToParticles(p, "#222", "#666", 5, dimens),

    (p) => applyAttractionToParticles(p, "#444", "#444", -10, dimens),
    (p) => applyAttractionToParticles(p, "#444", "#222", 5, dimens),
    (p) => applyAttractionToParticles(p, "#444", "#666", 1, dimens),
    (p) => applyAttractionToParticles(p, "#444", "white", 5, dimens),
    (p) => applyAttractionToParticles(p, "#444", "green", 0, dimens),

    (p) => applyAttractionToParticles(p, "#666", "#666", 1, dimens),
    (p) => applyAttractionToParticles(p, "#666", "#222", 5, dimens),
    (p) => applyAttractionToParticles(p, "#666", "#444", 5, dimens),

    (p) => applyAttractionToParticles(p, "white", "white", -8, dimens),
    (p) => applyAttractionToParticles(p, "white", "#444", 0, dimens),
    (p) => applyAttractionToParticles(p, "white", "#222", 2, dimens),

    (p) => applyAttractionToParticles(p, "green", "#222", -2, dimens),
  ];

  for (const applyAttractionRule of attractionRules) {
    applyAttractionRule(particles);
  }
  return [...particles];
}

const getRandomPosition = (dimension: number) => Math.random() * dimension + 25;
const getRandomVelocity = (dimension: number) =>
  ((Math.random() - 0.5) * dimension) / 600;
// const colorPossibilites = ["green", "red", "yellow", "white"];
const colorPossibilites = ["#222", "#444", "#666"];
const getRandomColor = () =>
  colorPossibilites[Math.floor(Math.random() * colorPossibilites.length)];

function applyAttractionToParticles(
  particles: Particle[],
  particleTypeA: string,
  particleTypeB: string,
  attractionCoefficient: number,
  screenLimit: Position
): Particle[] {
  const particlesA = particles.filter((p) => p.color == particleTypeA);
  const particlesB = particles.filter((p) => p.color == particleTypeB);
  for (let idxA = 0; idxA < particlesA.length; idxA++) {
    let particleA = particlesA[idxA];
    let forceX = 0;
    let forceY = 0;
    for (let idxB = 0; idxB < particlesB.length; idxB++) {
      const particleB = particlesB[idxB];
      const diffX = particleA.position.x - particleB.position.x;
      const diffY = particleA.position.y - particleB.position.y;
      const diff = Math.sqrt(diffX * diffX + diffY * diffY);
      if (diff > 0 && diff < MAX_DISTANCE_DIFF) {
        // ???
        const force =
          attractionCoefficient *
          (1 / diff) *
          (REFRESH_RATE / MILLISECONDS_PER_SECOND) *
          FORCE_BASE_MULTIPLIER;
        forceX += force * diffX;
        forceY += force * diffY;
      }
    }
    // console.log(
    //   `${idxA} BEFORE POS{x: ${particleA.position.x} y:${particleA.position.y}} VEL{x: ${particleA.velocity.x} y:${particleA.velocity.y}}`
    // );
    particleA.velocity.x += forceX * VELOCITY_BASE_MULTIPLIER;
    particleA.velocity.y += forceY * VELOCITY_BASE_MULTIPLIER;
    particleA.position.x += particleA.velocity.x;
    particleA.position.y += particleA.velocity.y;
    if (particleA.position.x <= 0 || particleA.position.x >= screenLimit.x) {
      particleA.velocity.x *= -0.9;
    }
    if (particleA.position.y <= 0 || particleA.position.y >= screenLimit.y) {
      particleA.velocity.y *= -0.9;
    }
    // console.log(
    //   `${idxA} AFTER POS{x: ${particleA.position.x} y:${particleA.position.y}} VEL{x: ${particleA.velocity.x} y:${particleA.velocity.y}}`
    // );
  }

  return particles;
}

function initParticles(
  dimensions: Position,
  particleCount: number
): Particle[] {
  let list: Particle[] = [];

  for (let i = 0; i < particleCount; ++i) {
    const particle: Particle = {
      position: {
        x: getRandomPosition(dimensions.x),
        y: getRandomPosition(dimensions.y),
      },
      color: getRandomColor(),
      velocity: {
        x: 0,
        y: 0,
      },
    };
    list.push(particle);
  }

  return list;
}
