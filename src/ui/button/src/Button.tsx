import type { ButtonTheme } from '/@/ui/button/styles';
import type { ButtonSize, ButtonType } from '/@/ui/button/src/interface';
import type { BaseWaveRef } from '/@/ui/_internal/wave/src/Wave';

import { computed, defineComponent, nextTick, PropType, ref, renderSlot, unref } from 'vue';
import useTheme, { ThemeProps } from '/@/ui/_mixins/use-theme';
import { call, MaybeArray } from '/@/ui/_utils/vue/call';
import useConfig from '/@/ui/_mixins/use-config';
import { useMemo } from 'vooks';
import useRtl from '/@/ui/_mixins/use-rtl';
import style from './styles/button.cssr';
import { buttonLight } from '/@/ui/button/styles';
import { createKey } from '/@/ui/_utils/cssr';
import { createHoverColor, createPressedColor } from '/@/ui/_utils/color';
import useFormItem from '/@/ui/_mixins/use-form-item';

const buttonProps = {
  ...(useTheme.props as ThemeProps<ButtonTheme>),
  color: String,
  text: Boolean,
  block: Boolean,
  loading: Boolean,
  disabled: Boolean,
  circle: Boolean,
  ghost: Boolean,
  round: Boolean,
  size: String as PropType<ButtonSize>,
  depth: [Number, String] as PropType<1 | 2 | 3 | '1' | '2' | '3'>,
  focusable: { type: Boolean, default: true },
  keyboard: { type: Boolean, default: true },
  tag: { type: String as PropType<keyof HTMLElementTagNameMap>, default: 'button' },
  type: { type: String as PropType<ButtonType>, default: 'default' },
  dashed: Boolean,
  iconPlacement: { type: String as PropType<'left' | 'right'>, default: 'left' },
  attrType: { type: String as PropType<'button' | 'submit' | 'reset'>, default: 'button' },
  onClick: [Function, Array] as PropType<MaybeArray<(e: MouseEvent) => void>>,
  bordered: { type: Boolean, default: true },
};

export default defineComponent({
  name: 'Button',
  props: buttonProps,
  setup(props) {
    const selfRef = ref<HTMLElement | null>(null);
    const waveRef = ref<BaseWaveRef | null>(null);
    const enterPressedRef = ref(false);
    const showBorderRef = useMemo(
      () => !props.text && (!props.color || props.ghost || props.dashed) && props.bordered
    );

    const { mergedClsPrefixRef } = useConfig(props);
    const { ConfigProvider } = useConfig(props);
    const themeRef = useTheme('Button', 'Button', style, buttonLight, props, mergedClsPrefixRef);
    const { mergedSizeRef } = useFormItem(
      {},
      {
        defaultSize: 'medium',
        mergedSize: () => {
          const { size } = props;
          if (size) return size;
          return 'medium';
        },
      }
    );

    function handleClick(e) {
      if (props.disabled) return;
      const { onClick } = props;
      if (onClick) call(onClick, e);
      if (props.text) return;
      unref(waveRef)?.play();
    }

    function handleKeyUp(e: KeyboardEvent): void {
      switch (e.code) {
        case 'Enter':
        case 'NumpadEnter':
          if (!props.keyboard) return e.preventDefault();
          enterPressedRef.value = false;
          void nextTick(() => {
            if (props.disabled) return;
            selfRef.value?.click();
          });
      }
    }

    function handleKeyDown(e: KeyboardEvent): void {
      switch (e.code) {
        case 'Enter':
        case 'NumpadEnter':
          if (!props.keyboard) return;
          e.preventDefault();
          enterPressedRef.value = true;
      }
    }

    const rtlEnabledRef = useRtl('Button', ConfigProvider?.mergedRtlRef, mergedClsPrefixRef);
    return {
      selfRef,
      mergedClsPrefix: mergedClsPrefixRef,
      showBorder: showBorderRef,
      rtlEnabled: rtlEnabledRef,
      enterPressed: enterPressedRef,
      handleClick,
      handleKeyUp,
      handleKeyDown,
      cssVars: computed(() => {
        const {
          common: { cubicBezierEaseInOut, cubicBezierEaseOut },
          self,
        } = unref(themeRef);
        const { rippleDuration, opacityDisabled, fontWeightText, fontWeighGhost, fontWeight } =
          self;
        const size = mergedSizeRef.value;
        const { dashed, type, ghost, text, color, round, circle } = props;
        //font
        const fontProps = {
          '--font-weight': text ? fontWeightText : ghost ? fontWeighGhost : fontWeight,
        };
        // color
        const colorProps = text
          ? {
              '--color': '#0000',
              '--color-hover': '#0000',
              '--color-pressed': '#0000',
              '--color-focus': '#0000',
              '--color-disabled': '#0000',
              '--ripple-color': '#0000',
              '--text-color':
                color || (type === 'default' && depth !== undefined)
                  ? self[createKey('textColorTextDepth', String(depth))]
                  : self[createKey('textColorText', type)],
              '--text-color-hover': color
                ? createHoverColor(color)
                : self[createKey('textColorTextHover', type)],
              '--text-color-pressed': color
                ? createPressedColor(color)
                : self[createKey('textColorTextPressed', type)],
              '--text-color-focus': color
                ? createHoverColor(color)
                : self[createKey('textColorTextHover', type)],
              '--text-color-disabled': color || self[createKey('textColorTextDisabled', type)],
            }
          : ghost || dashed
          ? {
              '--color': '#0000',
              '--color-hover': '#0000',
              '--color-pressed': '#0000',
              '--color-focus': '#0000',
              '--color-disabled': '#0000',
              '--ripple-color': color || self[createKey('rippleColor', type)],
              '--text-color': color || self[createKey('textColorGhost', type)],
              '--text-color-hover': color
                ? createHoverColor(color)
                : self[createKey('textColorGhostHover', type)],
              '--text-color-pressed': color
                ? createPressedColor(color)
                : self[createKey('textColorGhostPressed', type)],
              '--text-color-focus': color
                ? createHoverColor(color)
                : self[createKey('textColorGhostFocus', type)],
              '--text-color-disabled': color || self[createKey('textColorGhostDisabled', type)],
            }
          : {
              '--color': color || self[createKey('color', type)],
              '--color-hover': color
                ? createHoverColor(color)
                : self[createKey('colorHover', type)],
              '--color-pressed': color
                ? createPressedColor(color)
                : self[createKey('colorPressed', type)],
              '--color-focus': color
                ? createHoverColor(color)
                : self[createKey('colorFocus', type)],
              '--color-disabled': color || self[createKey('colorDisabled', type)],
              '--ripple-color': color || self[createKey('rippleColor', type)],
              '--text-color': color ? self.textColorPrimary : self[createKey('textColor', type)],
              '--text-color-hover': color
                ? self.textColorHoverPrimary
                : self[createKey('textColorHover', type)],
              '--text-color-pressed': color
                ? self.textColorPressedPrimary
                : self[createKey('textColorPressed', type)],
              '--text-color-focus': color
                ? self.textColorFocusPrimary
                : self[createKey('textColorFocus', type)],
              '--text-color-disabled': color
                ? self.textColorDisabledPrimary
                : self[createKey('textColorDisabled', type)],
            };

        const borderProps = text
          ? {
              '--border': 'none',
              '--border-hover': 'none',
              '--border-pressed': 'none',
              '--border-focus': 'none',
              '--border-disabled': 'none',
            }
          : {
              '--border': self[createKey('border', type)],
              '--border-hover': self[createKey('borderHover', type)],
              '--border-pressed': self[createKey('borderPressed', type)],
              '--border-focus': self[createKey('borderFocus', type)],
              '--border-disabled': self[createKey('borderDisabled', type)],
            };

        const {
          [createKey('height', size)]: height,
          [createKey('fontSize', size)]: fontSize,
          [createKey('padding', size)]: padding,
          [createKey('paddingRound', size)]: paddingRound,
          [createKey('iconSize', size)]: iconSize,
          [createKey('borderRadius', size)]: borderRadius,
          [createKey('iconMargin', size)]: iconMargin,
          waveOpacity,
        } = self;

        const sizeProps = {
          '--width': circle && !text ? height : 'initial',
          '--height': text ? 'initial' : height,
          '--font-size': fontSize,
          '--padding': circle ? 'initial' : text ? 'initial' : round ? paddingRound : padding,
          '--icon-size': iconSize,
          '--icon-margin': iconMargin,
          '--border-radius': text ? 'initial' : circle || round ? height : borderRadius,
        };
        return {
          '--bezier': cubicBezierEaseInOut,
          '--bezier-ease-out': cubicBezierEaseOut,
          '--ripple-duration': rippleDuration,
          '--opacity-disabled': opacityDisabled,
          '--wave-opacity': waveOpacity,
          ...fontProps,
          ...colorProps,
          ...borderProps,
          ...sizeProps,
        };
      }),
    };
  },
  render({ $slots, mergedClsPrefix, tag: Component }) {
    return (
      <Component
        class={[
          `${mergedClsPrefix}-button`,
          `${mergedClsPrefix}-button--${this.type}-type`,
          {
            [`${mergedClsPrefix}-button--rtl`]: this.rtlEnabled,
            [`${mergedClsPrefix}-button--disabled`]: this.disabled,
            [`${mergedClsPrefix}-button--block`]: this.block,
            [`${mergedClsPrefix}-button--pressed`]: this.enterPressed,
            [`${mergedClsPrefix}-button--dashed`]: !this.text && this.dashed,
            [`${mergedClsPrefix}-button--color`]: this.color,
            [`${mergedClsPrefix}-button--ghost`]: this.ghost, // required for button group border collapse
          },
        ]}
        type={this.attrType}
        style={this.cssVars}
        disabled={this.disabled}
        onClick={this.handleClick}
        onKeyup={this.handleKeyUp}
        onKeydown={this.handleKeyDown}
      >
        {$slots.default && this.iconPlacement === 'right' ? (
          <div class={`${mergedClsPrefix}-button__content`}>{renderSlot($slots, 'default')}</div>
        ) : null}
        {}
        {$slots.default && this.iconPlacement === 'left' ? (
          <span class={`${mergedClsPrefix}-button__content`}>{renderSlot($slots, 'default')}</span>
        ) : null}
      </Component>
    );
  },
});