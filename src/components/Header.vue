<template>
  <header class="header">
    <div class="header__logo">
      <a href="/">
        <img src="../assets/images/logo.png" alt="">
      </a>
    </div>

    <div class="header__wrap-right">
      <nav class="header__nav nav">
        <ul class="nav__list">
          <li
            class="nav__item"
            v-for="item in listNav"
            :key="item.id"
          >
            <p>{{item.title}}</p>
            <ul class="nav__sub-list">
              <li
                class="nav__sub-item"
                v-for="(elem, i) in item.subTitle"
                :key="i"
              >
                <a href="/">{{elem}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="header__control">
        <button class="btn__log-in">
          log in
        </button>

        <button class="btn__sign-up">
          <span>
            sign up
          </span>
        </button>
      </div>

      <button
        :class="['header__menu', 'menu', {'menu--active': isActiveMenu}]"
        @click="clickMenu"
      >
        <span></span>
      </button>
    </div>

  </header>
</template>

<script>
export default {
  props: ['listNav', 'isActiveMenu'],
  methods: {
    clickMenu() {
      this.$emit('changeMenu', !this.isActiveMenu);
    },
  },
};
</script>

<style lang="scss">
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 100px;

    background: $colorMenu;

    @media (max-width: 765px) {
      grid-template-columns: 1fr 2fr;
    }

    &__logo {
      display: flex;
      & img {
        @media (max-width: 765px) {
          width: 100px;
        }

        @media (max-width: 479px) {
          width: 80px;
        }
      }
    }

    &__wrap-right {
      display: grid;
      grid-template-columns: 55% 40%;
      align-items: center;
      grid-column-gap: 5%;
      height: $height;

      @media (max-width: 992px) {
        grid-template-columns: 75% 20%;
      }
    }

    &__nav {
    }

    &__control {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;
      grid-column-gap: 10%;
      height: 50px;

      @media (max-width: 765px) {
        grid-template-columns: 1fr 1fr;
        height: 40px;
      }
    }

    &__menu {
      display: none;

      @media (max-width: 992px) {
        display: flex;
        justify-self: center;
      }
    }
  }

  .btn__log-in,
  .btn__sign-up {
    position: relative;
    cursor: pointer;
    height: 100%;
    border: 2px solid $colorYellow;
    border-radius: 5px;
    background-color: transparent;
    text-transform: uppercase;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .btn__log-in {
    color: $colorYellow;
  }

  .btn__sign-up {
    background-color: $colorYellow;
    color: $colorMenu;
  }
</style>
