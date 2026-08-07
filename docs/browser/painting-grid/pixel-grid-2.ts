export type Pixel = {
  color: string; // e.g., '#FFFFFF'
  isColored: boolean;
};


export type PixelGrid = Pixel[][];

export const pixelGrid: PixelGrid = [
  // Row 1 – Solid blue
  [ { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
    { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
    { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
    { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }
  ],

  // Row 2 – Solid blue
  [ { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
    { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
    { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
    { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }
  ],
  // Row 3 – Solid blue
  [ { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
    { color: '#FFFFFF', isColored: false }, { color: '#FFFFFF', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
    { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
    { color: '#FFFFFF', isColored: false }, { color: '#FFFFFF', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }
  ],
  //Row 4
  [ { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#FFFFFF', isColored: false },
    { color: '#FFFFFF', isColored: false }, { color: '#FFFFFF', isColored: false }, { color: '#FFFFFF', isColored: false }, { color: '#87CEEB', isColored: false },
    { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#FFFFFF', isColored: false },
    { color: '#FFFFFF', isColored: false }, { color: '#FFFFFF', isColored: false }, { color: '#FFFFFF', isColored: false }, { color: '#87CEEB', isColored: false }
  ],
  //Row 5
  [ { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
    { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
    { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
    { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }
  ],
  //Row 6
  [
  { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
  { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
  { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
  { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
  { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
  { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }
],
  //Row 7
  [
  { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
  { color: '#87CEEB', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#87CEEB', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#87CEEB', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#87CEEB', isColored: false }, { color: '#FFD700', isColored: false },
  { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }
],
  //Row 8
  [
  { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#FFD700', isColored: false },
  { color: '#87CEEB', isColored: false }, { color: '#87CEEB', isColored: false }
],
  //Row 9
  [
  { color: '#87CEEB', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#FFD700', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#FFD700', isColored: false }, { color: '#FFD700', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#87CEEB', isColored: false }
],

  //Row 10
  [
  { color: '#A9A9A9', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#FFD700', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#A9A9A9', isColored: false },
  { color: '#A9A9A9', isColored: false }, { color: '#FFD700', isColored: false },
  { color: '#FFD700', isColored: false }, { color: '#A9A9A9', isColored: false }
],

  //Row 11
  [
  { color: '#228B22', isColored: false }, { color: '#FFD700', isColored: false },
  { color: '#FFD700', isColored: false }, { color: '#FFD700', isColored: false },
  { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false },
  { color: '#228B22', isColored: false }, { color: '#007FCE', isColored: false },
  { color: '#007FCE', isColored: false }, { color: '#228B22', isColored: false },
  { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false },
  { color: '#FFD700', isColored: false }, { color: '#FFD700', isColored: false },
  { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false }
],
  //Row 12
  [
  { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false }, { color: '#FFD700', isColored: false }, { color: '#228B22', isColored: false },
  { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false }, { color: '#007FCE', isColored: false },
  { color: '#007FCE', isColored: false }, { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false },
  { color: '#FFD700', isColored: false }, { color: '#FFD700', isColored: false }, { color: '#FFD700', isColored: false }, { color: '#228B22', isColored: false }
],
  //Row 13
  [
  { color: '#228B22', isColored: false }, { color: '#FFD700', isColored: false }, { color: '#FFD700', isColored: false }, { color: '#FFD700', isColored: false },
  { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false }, { color: '#007FCE', isColored: false },
  { color: '#007FCE', isColored: false }, { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false }, { color: '#FFD700', isColored: false },
  { color: '#FFD700', isColored: false }, { color: '#FFD700', isColored: false }, { color: '#FFD700', isColored: false }, { color: '#FFD700', isColored: false }
],
  //Row 14
  [
  { color: '#FFD700', isColored: false }, { color: '#FFD700', isColored: false }, { color: '#FFD700', isColored: false }, { color: '#FFD700', isColored: false },
  { color: '#FFD700', isColored: false }, { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false }, { color: '#007FCE', isColored: false },
  { color: '#007FCE', isColored: false }, { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false },
  { color: '#228B22', isColored: false }, { color: '#FFFFFF', isColored: false }, { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false }
],
  //Row 15
  [
  { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false }, { color: '#FFFFFF', isColored: false }, { color: '#228B22', isColored: false },
  { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false },
  { color: '#007FCE', isColored: false }, { color: '#007FCE', isColored: false }, { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false },
  { color: '#228B22', isColored: false }, { color: '#FFFFFF', isColored: false }, { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false }
],
  //Row 16
  [
  { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false }, { color: '#FFFFFF', isColored: false }, { color: '#228B22', isColored: false },
  { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false },
  { color: '#228B22', isColored: false }, { color: '#007FCE', isColored: false }, { color: '#007FCE', isColored: false }, { color: '#228B22', isColored: false },
  { color: '#228B22', isColored: false }, { color: '#FFFFFF', isColored: false }, { color: '#228B22', isColored: false }, { color: '#228B22', isColored: false }
],



];