<template>
  <main class="body">
    <ul :class="['body__list', {'body__list--active': isActiveMenu}]">
      <li
        :class="['list', {'list--active': item.show}]"
        v-for="item in listNav"
        :key="item.id"
      >
        <div class="list__main">
          <div class="list__info">
            <img src="" alt="">
            <p>{{item.title}}</p>
          </div>

          <button
            :class="[
              'list__btn-show',
              {'list__btn-show--active': item.show}
            ]"
            @click="onChangeToggleSubTitle(item.show, item.id)"
          >
          </button>
        </div>

        <div
          :class="[
            'list__sub-list-wrap',
            {'list__sub-list-wrap--active': item.show}
          ]"
        >
          <ul
            :class="[
              'list__sub-list',
              {'list__sub-list--active': item.show}
            ]"
          >
            <li
              class="list__sub-title"
              v-for="(elem, i) in item.subTitle"
              :key="i"
            >
              <a href="/">{{elem}}</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  props: ['listNav', 'isActiveMenu'],
  data() {
    return {
      active: false,
    };
  },
  methods: {
    onChangeToggleSubTitle(bool, id) {
      this.$emit('toggleShow', !bool, id);
    },
  },
};
</script>

<style lang="scss">
.body {
  position: relative;
  display: block;
  height: 100vh;
  background: $colorBody;
  overflow: hidden;

  &__list {
    opacity: 0;
    position: absolute;
    top: 0;
    left : 0;
    display: grid;
    width: 100%;
    transform: translateY(-100%);
    transition: all 0.3s linear;

    &--active {
      opacity: 1;
      transform: translateY(0);
    }

    @media (min-width: 993px) {
      display: none;
    }
  }
}
</style>
