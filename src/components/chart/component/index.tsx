import React from 'react';
import GoodAir from "../../icon/GoodAir";
import Hazardous from '../../icon/Hazardous';
import Moderate from '../../icon/Moderate';
import Unhealthy from '../../icon/Unhealthy';
import UnhealthySG from '../../icon/UnhealthySG';
import VeryUnhealthy from '../../icon/VeryUnhealthy';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

export const colors = ['#11225A', '#0A46EB', '#297EFF', '#B8D9FF'];

export const reduceDecimalPlaces = (num: any) => {
  return Math.round((num + Number.EPSILON) * 10000) / 10000;
};

export const truncate = (str:any) => {
  return str.length > 20 ? str.substr(0, 20 - 1) + '...' : str;
};

/**
 * @param {Number} value
 * @returns {Object}
 * @description Get air quality level text, icon and color based on the value
 * @returns {Object} { airQualityText, AirQualityIcon, airQualityColor }
 */
export const getAirQualityLevelText = (value:any) => {
  let airQualityText = '';
  let AirQualityIcon = null;
  let airQualityColor = '';

  if (value >= 0 && value <= 12) {
    airQualityText = 'Air Quality is Good';
    AirQualityIcon = GoodAir;
    airQualityColor = 'text-green-500';
  } else if (value > 12 && value <= 35.4) {
    airQualityText = 'Air Quality is Moderate';
    AirQualityIcon = Moderate;
    airQualityColor = 'text-yellow-500';
  } else if (value > 35.4 && value <= 55.4) {
    airQualityText = 'Air Quality is Unhealthy for Sensitive Groups';
    AirQualityIcon = UnhealthySG;
    airQualityColor = 'text-orange-500';
  } else if (value > 55.4 && value <= 150.4) {
    airQualityText = 'Air Quality is Unhealthy';
    AirQualityIcon = Unhealthy;
    airQualityColor = 'text-red-500';
  } else if (value > 150.4 && value <= 250.4) {
    airQualityText = 'Air Quality is Very Unhealthy';
    AirQualityIcon = VeryUnhealthy;
    airQualityColor = 'text-purple-500';
  } else if (value > 250.4 && value <= 500) {
    airQualityText = 'Air Quality is Hazardous';
    AirQualityIcon = Hazardous;
    airQualityColor = 'text-gray-500';
  }

  return { airQualityText, AirQualityIcon, airQualityColor };
};

/**
 * Customized label component for ReferenceLine
 * @param {Object} props
 */
export const CustomReferenceLabel = (props:any) => {
  const { viewBox } = props;
  const x = viewBox.width + viewBox.x - 10;
  const y = viewBox.y + 3;

  return (
    <g>
      <foreignObject x={x - 30} y={y - 14} width={40} height={25}>
        <div
          style={{ backgroundColor: 'red' }}
          className='rounded-md py-[4px] px-[2px] flex justify-center text-center text-white text-[12px] font-semibold leading-[11px]'>
          OMS
        </div>
      </foreignObject>
    </g>
  );
};

/**
 * Customized bar component for bar chart
 * @param {Object} props
 */
export const CustomBar = (props: any) => {
  const { fill, x, y, width, height } = props;

  return (
    <g>
      <foreignObject x={x} y={y} width={width} height={height}>
        <div
          style={{ backgroundColor: fill, width: '100%', height: '100%', borderRadius: '5px' }}
        />
      </foreignObject>
    </g>
  );
};
