export class Color {
  static readonly SHARK = new Color('Shark', '#202124');
  static readonly RED = new Color('red', '#5c2b29');
  static readonly ORANGE = new Color('orange', '#614a19');
  static readonly YELLOW = new Color('yellow', '#635d19');
  static readonly GREEN = new Color('green', '#345920');
  static readonly TURQUOISE = new Color('turquoise', '#16504b');
  static readonly BLUE = new Color('blue', '#2d555e');
  static readonly DARK_BLUE = new Color('dark Blue', '#1e3a5f');
  static readonly PURPLE = new Color('purple', '#42275e');
  static readonly PINK = new Color('pink', '#5b2245');
  static readonly BROWN = new Color('brown', '#442f19');
  static readonly GRAY = new Color('gray', '#3c3f43');
  static readonly ATHENS_GRAY = new Color('Athens Gray', '#E8EAED');
  static readonly OSLO_GRAY = new Color('Oslo Gray', '#80868B');

  static readonly ALL_COLORS = [
    Color.RED,
    Color.ORANGE,
    Color.YELLOW,
    Color.GREEN,
    Color.TURQUOISE,
    Color.BLUE,
    Color.DARK_BLUE,
    Color.PURPLE,
    Color.PINK,
    Color.BROWN,
    Color.GRAY,
    Color.ATHENS_GRAY,
    Color.OSLO_GRAY,
  ];

  // private to disallow creating other instances of this type
  private constructor(
    private readonly name: string,
    public readonly value: string,
  ) {}

  static getRandomColor() {
    return Color.ALL_COLORS[
      Math.floor(Math.random() * Color.ALL_COLORS.length)
    ];
  }
}
