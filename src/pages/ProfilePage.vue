<template>
  <div class="profile">
    <h1 class="profile__title">Личный кабинет</h1>
    <div class="profile__menu">
      <BtnPostBook class="profile__menu--btn" @click="goToPostBook" />
      <BtnSaveList class="profile__menu--btn" @click="goToCheckList" />
      <BtnNoActive class="profile__menu--btn" />
      <BtnNoActive class="profile__menu--btn" />
    </div>
    <router-view />
  </div>
</template>

<script>
import BtnPostBook from "../components/BtnPostBook.vue";
import BtnNoActive from "../components/BtnNoActive.vue";
import BtnSaveList from "../components/BtnSaveList.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    BtnPostBook,
    BtnNoActive,
    BtnSaveList,
  },
  beforeMount() {
    this.router = useRouter(); // Используем useRouter для получения доступа к роутеру
  },
  methods: {
    goToPostBook() {
      // Проверяем, что текущий маршрут не является 'postBook'
      if (this.router && this.router.currentRoute.value.name !== "postBook") {
        this.router.push({ name: "postBook" });
      }
    },
    goToCheckList() {
      // Проверяем, что текущий маршрут не является 'checkList'
      if (this.router && this.router.currentRoute.value.name !== "checkList") {
        this.router.push({ name: "checkList" });
      }
    },
  },
};
</script>

<style lang="scss">
.profile {
  &__menu {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 20px;
    button {
      @media (max-width: 690px) {
        font-size: 13px;
      }
      @media (max-width: 480px) {
        font-size: 13px;
      }
    }
    @media (max-width: 550px) {
      font-size: 30px;
      flex-wrap: wrap;
      justify-content: center;
    }
    &--btn {
      margin-right: 10px;
      @media (max-width: 550px) {
        width: 40%;
        display: flex;
        margin: 10px;
      }
    }
  }
  &__title {
    text-align: start;
    margin-bottom: 10px;
    font-size: 40px;
    @media (max-width: 550px) {
      font-size: 30px;
    }
  }
}
</style>
