import Color from "src/app/base-components/color/Color";
import LocatedSquare from "../LocatedSquare";

export default class UnicolorBlock2D extends LocatedSquare {

  constructor(
    readonly color: Color,
  ) {
    super();
  }

}
