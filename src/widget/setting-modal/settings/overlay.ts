import i18n from '../../../i18n'
import useDataSource from './dataSource'

const getOverlaySettings = (locale:string) => {
	const { solid_dashed, fill_stroke, size, font_size, font_weight, font_family } = useDataSource(locale)
	return [
		{
      key: 'overlay.line.style',
      text: i18n('Line Style', locale),
      component: 'select',
      dataSource: solid_dashed
    },
    {
      key: 'overlay.line.smooth',
      text: i18n('Smooth line', locale),
      component: 'switch',
    },
    {
      key: 'overlay.line.size',
      text: i18n('Line size', locale),
      component: 'select',
      dataSource: size
    },

    {
      key: 'overlay.rect.style',
      text: i18n('Rect Style', locale),
      component: 'select',
      dataSource: fill_stroke
    },

    {
      key: 'overlay.polygon.style',
      text: i18n('Polygon Style', locale),
      component: 'select',
      dataSource: fill_stroke
    },

    {
      key: 'overlay.circle.style',
      text: i18n('Circle Style', locale),
      component: 'select',
      dataSource: fill_stroke
    },

    {
      key: 'overlay.arc.style',
      text: i18n('Arc Style', locale),
      component: 'select',
      dataSource: solid_dashed
    },
    {
      key: 'overlay.arc.size',
      text: i18n('Arc size', locale),
      component: 'select',
      dataSource: size
    },

    {
      key: 'overlay.text.size',
      text: i18n('Text size', locale),
      component: 'select',
      dataSource: font_size
    },
    {
      key: 'overlay.text.weight',
      text: i18n('Text weight', locale),
      component: 'select',
      dataSource: font_weight
    },

    {
      key: 'overlay.rectText.style',
      text: i18n('Rect_text style', locale),
      component: 'select',
      dataSource: fill_stroke
    },
    {
      key: 'overlay.rectText.size',
      text: i18n('Rect_text size', locale),
      component: 'select',
      dataSource: font_size
    },
    {
      key: 'overlay.rectText.family',
      text: i18n('Rect_text font family', locale),
      component: 'select',
      dataSource: font_family
    },
    {
      key: 'overlay.rectText.weight',
      text: i18n('Rect_text weight', locale),
      component: 'select',
      dataSource: font_weight
    }
	]
}

export default getOverlaySettings