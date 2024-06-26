import type {Widget} from './types';

export const getWidgetId = (widget: Widget) => widget.id;
export const getWidgetName = (widget: Widget) => widget.name;
export const getWidgetCategoryId = (widget: Widget) => widget.category;
export const getWidgetSubCategoriesIds = (widget: Widget) => widget.subcategories;
export const getWidgetMetricsIds = (widget: Widget) => widget.metrics;
export const getWidgetPresetId = (widget: Widget) => widget.preset;
export const getWidgetView = (widget: Widget) => widget.view;
export const isWidgetDeletable = (widget: Widget) => widget.canDelete;
export const isWidgetPublic = (widget: Widget) => widget.isPublic;
export const canModifyWidget = (widget: Widget) => widget.canModify;
