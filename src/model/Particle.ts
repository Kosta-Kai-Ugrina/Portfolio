export interface Position {
  x: number;
  y: number;
}

export interface Particle {
  position: Position;
  color: string;
  velocity: Position;
}
