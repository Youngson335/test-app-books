<template>
  <nav class="menu">
    <ul class="menu__list">
      <li
        class="menu__item"
        v-for="item in menuItems"
        :key="item.id"
        @click="changeLink(item.id)"
        :class="{ active__link: item.id === activeMenu }"
      >
        <router-link :to="item.route" class="menu__link">{{
          item.text
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, text: "Личный кабинет", route: "/profile" },
        { id: 2, text: "Главная", route: "/" },
        { id: 3, text: "Настройки", route: "/settings" },
      ],
      activeMenu: 2, // Инициализация с активным меню по умолчанию
    };
  },
  methods: {
    changeLink(id) {
      this.activeMenu = id;
      localStorage.setItem("activeMenu", id); // Сохранение активного меню в localStorage
    },
  },
  mounted() {
    const savedMenu = localStorage.getItem("activeMenu");
    if (savedMenu) {
      this.activeMenu = parseInt(savedMenu, 10); // Восстановление активного меню из localStorage
    }
  },
};
</script>

<style lang="scss">
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 20px;
  @media (max-width: 550px) {
    font-size: 15px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
}
.menu {
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background: rgb(91 173 201 / 46%);
    border-radius: 10px;
    margin: 10px 0px;
    li {
      padding: 5px 10px;
      border-radius: 5px;
      @media (max-width: 550px) {
        padding: 1px 10px;
      }
    }
  }
  &__item {
    opacity: 0.7; // Снижение непрозрачности для неактивных элементов
  }
}
.active__link {
  background: rgb(91 173 201);
  transition: all 0.2s;
  animation: showActiveLink 0.5s ease;
  opacity: 1;
  @keyframes showActiveLink {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
