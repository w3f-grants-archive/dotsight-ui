import {ReactNode, FunctionComponent, SVGAttributes, ComponentType} from 'react';

import {Widget} from '@/entities/widget/model';

import LineChart from './LineChart';
import Table from './Table';
import Radar from './Radar';
import {WidgetType} from './constants';

export type WidgetConfig = {
  title: string,
  type: WidgetType,
  Widget: ({data}: any) => ReactNode;
  Placeholder: ({isLoading, isError}: any) => ReactNode;
  Icon: FunctionComponent<SVGAttributes<SVGElement>>;
  getUnavailabilityReason?: (widget: Widget) => string | undefined,
  views: Record<string, {View: ComponentType<any>}>,
}
export const widgets: Record<WidgetType, WidgetConfig> = {
  [WidgetType.lineChart]: LineChart,
  [WidgetType.table]: Table,
  [WidgetType.radar]: Radar,
};

export default widgets;
