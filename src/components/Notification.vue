<template>
  <div class="notification" v-show="showNot">
    <p>Книга успешно добавлена!</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showNot: false,
    };
  },
  props: {
    showNotification: Boolean,
  },
  watch: {
    showNotification() {
      this.checkStateNotification();
    },
  },
  methods: {
    checkStateNotification() {
      this.showNot = this.showNotification;
      const notification = document.querySelector(".notification");
      setTimeout(() => {
        notification.classList.add("no__active");
      }, 3000);
      setTimeout(() => {
        this.showNot = false;
        notification.classList.remove("no__active");
        this.$emit("resetNotification", false);
      }, 3500);
    },
  },
};
</script>
<style lang="scss">
.notification {
  position: absolute;
  top: 10px;
  background: rgb(137 201 91);
  color: white;
  right: 0;
  left: 0;
  max-width: 300px;
  margin: 0 auto;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0px -1px 40px #0000008f;
  animation: showNotification 0.5s ease;
  &.no__active {
    animation: hiddenNotification 0.5s ease;
  }
  @keyframes showNotification {
    0% {
      opacity: 0;
      transform: translateY(-60px);
    }
    60% {
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes hiddenNotification {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    60% {
      transform: translateY(10px);
    }
    100% {
      opacity: 0;
      transform: translateY(-60px);
    }
  }
}
</style>
