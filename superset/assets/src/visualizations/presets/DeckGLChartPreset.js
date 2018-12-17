import { Preset } from '@superset-ui/core';
import ArcChartPlugin from '../deckgl/layers/Arc/ArcChartPlugin';
import GeoJsonChartPlugin from '../deckgl/layers/Geojson/GeojsonChartPlugin';
import GridChartPlugin from '../deckgl/layers/Grid/GridChartPlugin';
import HexChartPlugin from '../deckgl/layers/Hex/HexChartPlugin';
import KeplerChartPlugin from '../Kepler/KeplerChartPlugin';
import MultiChartPlugin from '../deckgl/Multi/MultiChartPlugin';
import PathChartPlugin from '../deckgl/layers/Path/PathChartPlugin';
import PolygonChartPlugin from '../deckgl/layers/Polygon/PolygonChartPlugin';
import ScatterChartPlugin from '../deckgl/layers/Scatter/ScatterChartPlugin';
import ScreengridChartPlugin from '../deckgl/layers/Screengrid/ScreengridChartPlugin';
//MukaJi: Add True plugin
import TrueArcChartPlugin from '../True/layers/Arc/ArcChartPlugin';
import TrueGeoJsonChartPlugin from '../True/layers/Geojson/GeojsonChartPlugin';
import TrueGridChartPlugin from '../True/layers/Grid/GridChartPlugin';
import TrueHexChartPlugin from '../True/layers/Hex/HexChartPlugin';
import TrueMultiChartPlugin from '../True/Multi/MultiChartPlugin';
import TruePathChartPlugin from '../True/layers/Path/PathChartPlugin';
import TruePolygonChartPlugin from '../True/layers/Polygon/PolygonChartPlugin';
import TrueScatterChartPlugin from '../True/layers/Scatter/ScatterChartPlugin';
import TrueScreengridChartPlugin from '../True/layers/Screengrid/ScreengridChartPlugin';

export default class DeckGLChartPreset extends Preset {
  constructor() {
    super({
      name: 'deck.gl charts',
      plugins: [
        new ArcChartPlugin().configure({ key: 'deck_arc' }),
        new GeoJsonChartPlugin().configure({ key: 'deck_geojson' }),
        new GridChartPlugin().configure({ key: 'deck_grid' }),
        new HexChartPlugin().configure({ key: 'deck_hex' }),
        new KeplerChartPlugin().configure({ key: 'kepler' }), 
        new MultiChartPlugin().configure({ key: 'deck_multi' }),
        new PathChartPlugin().configure({ key: 'deck_path' }),
        new PolygonChartPlugin().configure({ key: 'deck_polygon' }),
        new ScatterChartPlugin().configure({ key: 'deck_scatter' }),
        new ScreengridChartPlugin().configure({ key: 'deck_screengrid' }),
        new TrueArcChartPlugin().configure({ key: 'true_arc' }),
        new TrueGeoJsonChartPlugin().configure({ key: 'true_geojson' }),
        new TrueGridChartPlugin().configure({ key: 'true_grid' }),
        new TrueHexChartPlugin().configure({ key: 'true_hex' }), 
        new TrueMultiChartPlugin().configure({ key: 'true_multi' }),
        new TruePathChartPlugin().configure({ key: 'true_path' }),
        new TruePolygonChartPlugin().configure({ key: 'true_polygon' }),
        new TrueScatterChartPlugin().configure({ key: 'true_scatter' }),
        new TrueScreengridChartPlugin().configure({ key: 'true_screengrid' }),
      ],
    });
  }
}
