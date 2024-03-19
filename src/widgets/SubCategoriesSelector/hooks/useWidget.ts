import {useSelector} from 'react-redux';
import {useEffect} from 'react';

import {WidgetId} from '@/entities/widget/model';
import {useDispatch} from '@/infra/providers/redux';
import {getWidgetById} from '@/entities/widget/model/providers/getWidgetById';
import {selectById} from '@/entities/widget/model/selectors';
import {getWidgetCategoryId} from '@/entities/widget/model/getters';

export const useWidget = (id: WidgetId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWidgetById(id));
  }, [dispatch, id]);
  const widget = useSelector((state) => selectById(state, id));

  return {
    categoryId: widget && getWidgetCategoryId(widget),
  };
}