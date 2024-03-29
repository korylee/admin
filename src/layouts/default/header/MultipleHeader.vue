<template>
  <div v-if="getIsShowPlaceholderDom" :style="getPlaceholderDomStyle"></div>
  <div :style="getWrapStyle" :class="getClass">
    <LayoutHeader v-if="getShowInsetHeaderRef" />
    <MultipleTabs />
  </div>
</template>

<script lang="ts">
  import { computed, CSSProperties, defineComponent, unref } from 'vue';
  import { headerHeightRef } from '../content/useContentViewHeight';
  import LayoutHeader from './index.vue';
  import MultipleTabs from '../tabs/index.vue';
  import { useProviderContext } from '/@/components/Application';
  import {
    getFixed,
    getHeaderTheme,
    getShowFullHeaderRef,
    getShowHeader,
    getShowInsetHeaderRef,
  } from '/@/hooks/setting/useHeaderSetting';
  import { getCalcContentWidth, getSplit } from '/@/hooks/setting/useMenuSetting';
  import { getShowMultipleTab } from '/@/hooks/setting/useMultipleTabSetting';
  import { getRealFullContent } from '/@/hooks/setting/useRootSetting';
  const HEADER_HEIGHT = 48,
    TABS_HEIGHT = 32;

  export default defineComponent({
    name: 'LayoutMultipleHeader',
    components: { LayoutHeader, MultipleTabs },
    setup() {
      const { isMobile, getPrefixCls } = useProviderContext(),
        prefixCls = getPrefixCls('layout-multiple-header'),
        getShowTabs = computed(() => unref(getShowMultipleTab) && !unref(getRealFullContent)),
        getIsShowPlaceholderDom = computed(() => unref(getFixed) || unref(getShowFullHeaderRef)),
        getWrapStyle = computed((): CSSProperties => {
          const style: CSSProperties = {};
          if (unref(getFixed)) style.width = unref(isMobile) ? '100%' : unref(getCalcContentWidth);
          if (unref(getShowFullHeaderRef)) style.top = `${HEADER_HEIGHT}px`;
          return style;
        }),
        getIsFixed = computed(() => unref(getFixed) || unref(getShowFullHeaderRef)),
        getPlaceholderDomStyle = computed((): CSSProperties => {
          let height = 0;
          if (
            (unref(getShowFullHeaderRef) || !unref(getSplit)) &&
            unref(getShowHeader) &&
            !unref(getRealFullContent)
          )
            height += HEADER_HEIGHT;
          if (unref(getShowMultipleTab) && !unref(getRealFullContent)) height += TABS_HEIGHT;
          headerHeightRef.value = height;
          return { height: `${height}px` };
        }),
        getClass = computed(() => [
          prefixCls,
          `${prefixCls}--${unref(getHeaderTheme)}`,
          { [`${prefixCls}--fixed`]: unref(getIsFixed) },
        ]);
      return {
        getClass,
        prefixCls,
        getPlaceholderDomStyle,
        getIsFixed,
        getWrapStyle,
        getIsShowPlaceholderDom,
        getShowTabs,
        getShowInsetHeaderRef,
      };
    },
  });
</script>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-layout-multiple-header';

  .@{prefix-cls} {
    transition: width 0.2s;
    flex: 0 0 auto;

    &--dark {
      margin-left: -1px;
    }

    &--fixed {
      position: fixed;
      top: 0;
      z-index: @multiple-tab-fixed-z-index;
      width: 100%;
    }
  }
</style>
