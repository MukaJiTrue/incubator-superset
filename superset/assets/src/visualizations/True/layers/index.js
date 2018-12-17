/* eslint camelcase: 0 */
import { getLayer as true_grid } from './Grid/Grid';
import { getLayer as true_screengrid } from './Screengrid/Screengrid';
import { getLayer as true_path } from './Path/Path';
import { getLayer as true_hex } from './Hex/Hex';
import { getLayer as true_scatter } from './Scatter/Scatter';
import { getLayer as true_geojson } from './Geojson/Geojson';
import { getLayer as true_arc } from './Arc/Arc';
import { getLayer as true_polygon } from './Polygon/Polygon';

const layerGenerators = {
  true_grid,
  true_screengrid,
  true_path,
  true_hex,
  true_scatter,
  true_geojson,
  true_arc,
  true_polygon,
};

export default layerGenerators;
