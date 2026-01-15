import * as cheerio from 'cheerio';
import { readFileSync } from 'fs';

type Vector = {
  d: string
  fill: string
  stroke: string
  strokeWidth: number 
  opacity: number
}

type ParsedSVG = {
  fill: string
  width: number
  height: number
  viewBox: string
  paths: Vector[]
}

const normalize = (value: any, fallback: string | number) => {
    if(!value) return fallback;
    if(!isNaN(value)) return parseFloat(value);
    return value;
}

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const path = query.path;

    const svg = readFileSync(path, 'utf-8');
    const $ = cheerio.load(svg, {xml: true});

    const width = $('svg').attr('width');
    const height = $('svg').attr('height');
    const viewBox = $('svg').attr('viewBox');
    const fill = $('svg').attr('fill');
    
    const data: ParsedSVG = {fill: normalize(fill, 'none'), width: normalize(width, 24) , height: normalize(height, 24), viewBox: normalize(viewBox, '0 0 24 24'), paths: []};

    $('path').each((i, elem) => {
        const d = $(elem).attr('d');
        const stroke = $(elem).attr('stroke');
        const strokeWidth = $(elem).attr('stroke-width');
        const f = $(elem).attr('fill');
        const opacity = $(elem).attr('opacity');

        data.paths.push({d: normalize(d, ''), fill: normalize(f, '#000000'), stroke: normalize(stroke, '#000000'), strokeWidth: normalize(strokeWidth, 0.25), opacity: normalize(opacity, 1)});
    });

    return data;
});