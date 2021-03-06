import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';
import {SampleFunctions} from './sample-functions';
import {takeWhile} from 'rxjs/operators';

export class TakeWhile extends RxNode {
  protected static title = 'TakeWhile';
  protected static desc = 'discard items emitted by an Observable after a specified condition becomes false';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('whileFilter', PropertyTypeEnum.Method, [
    SampleFunctions.ST6,
    SampleFunctions.ALL,
    SampleFunctions.GT6,
  ], '');

  public properties = {
    whileFilter: 0,
  };
  public graphInputs = [];

  public runner = ({}) => {
    return this.graphInputs[0].observable.pipe(takeWhile(TakeWhile.propertiesType.params[this.properties.whileFilter].func));
  }
  public toString = ({}) => {
    return `.pipe(takeWhile(${TakeWhile.propertiesType.params[this.properties.whileFilter].text}))`;
  }
}
