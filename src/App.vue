<template>
  <div id="app">
    <Header
      :listNav="listNav"
      :isActiveMenu="isActiveMenu"
      @changeMenu="changeMenu"
    />
    <Body
      :listNav="listNav"
      :isActiveMenu="isActiveMenu"
      @toggleShow="toggleShow"
    />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Body from '@/components/Body.vue';

export default {
  name: 'App',
  data() {
    return {
      isActiveMenu: false,
      listNav: [
        {
          id: 1,
          title: 'One',
          show: false,
          icon: '/images/user.svg',
          subTitle: {
            item1: 'item1',
            item2: 'item2',
            item3: 'item3',
          },
        },
        {
          id: 2,
          title: 'Two',
          show: false,
          icon: '/images/image.svg',
          subTitle: {
            item1: 'item1',
            item2: 'item2',
            item3: 'item3',
          },
        },
        {
          id: 3,
          title: 'Three',
          show: false,
          icon: '/images/home3.svg',
          subTitle: {
            item1: 'item1',
            item2: 'item2',
            item3: 'item3',
          },
        },
      ],
    };
  },
  methods: {
    changeMenu(bool) {
      this.isActiveMenu = bool;
    },
    toggleShow(bool, id) {
      this.listNav = this.listNav.map((elem) => {
        if (elem.id === id) {
          return {
            id: elem.id,
            title: elem.title,
            icon: elem.icon,
            show: bool,
            subTitle: elem.subTitle,
          };
        }
        return elem;
      });
    },
  },
  components: {
    Header, Body,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1920px;
  margin: 0 auto;
}
</style>
