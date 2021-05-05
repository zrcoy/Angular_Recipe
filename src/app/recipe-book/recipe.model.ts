export class Recipe {
  public name: string;
  public description: string;
  public imagePathUrl: string;

  constructor(name: string, des: string, imgPath: string) {
    this.name = name;
    this.description = des;
    this.imagePathUrl = imgPath;
  }
}
