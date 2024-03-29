import { generateAntColors, primaryColor } from '../themeConfig';
import { getThemeVariables } from 'ant-design-vue/dist/theme';
import { resolve } from 'path';

export function generateModifyVars(dark = false) {
  const palettes = generateAntColors(primaryColor);
  const primary = palettes[5];

  const primaryColorObj: Record<string, string> = {};

  for (let index = 0; index < 10; index++) {
    primaryColorObj[`primary-${index + 1}`] = palettes[index];
  }
  const modifyVars = getThemeVariables({ dark });
  return {
    ...modifyVars,
    //  Used for global import to avoid the need to import each style separately
    //  reference: Avoid repeated reference
    hack: `${modifyVars.hack} @import (reference) "${resolve('src/styles/config.less')}";`,
    'primary-color': primary,
    ...primaryColorObj,
    'info-color': primary,
    'processing-color': primary,
    'success-info': '#55D187',
    'error-info': '#ED6F6F',
    'warning-color': '#EFBD47',
    // 'border-color-base': '#EEEEEE',
    'font-size-base': '14px',
    'border-radius-base': '2px',
    'link-color': primary,
    'app-content-background': '#fafafa',
  };
}
