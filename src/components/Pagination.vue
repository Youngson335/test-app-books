<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">Prev</button>

    <button
      v-for="page in visiblePages"
      :key="page"
      @click="selectPage(page)"
      :class="{ active: currentPage === page }"
    >
      {{ page }}
    </button>

    <span v-if="endPage < totalPages">...</span>

    <button @click="nextPage" :disabled="currentPage === totalPages">
      Next
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    maxVisiblePages: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    endPage() {
      return Math.min(
        this.totalPages,
        this.startPage + this.maxVisiblePages - 1
      );
    },
    startPage() {
      let startPage = Math.max(
        1,
        this.currentPage - Math.floor(this.maxVisiblePages / 2)
      );
      return startPage;
    },
    visiblePages() {
      const pages = [];
      for (let i = this.startPage; i <= this.endPage; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit("update:currentPage", this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit("update:currentPage", this.currentPage + 1);
      }
    },
    selectPage(page) {
      this.$emit("update:currentPage", page);
    },
  },
};
</script>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 5px;
  left: 0;
  right: 0;
  padding: 20px 0;
  background: rgb(50 50 50);
  width: 500px;
  margin: 0 auto;
  border-radius: 40px;
  box-shadow: 0px 0px 30px 0px rgb(55 97 112);
  animation: showPagination 0.6s ease;
  @keyframes showPagination {
    0% {
      transform: translateY(100px);
    }
    60% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  button {
    background-color: rgb(91, 173, 201);
    color: white;
    border: none;
    padding: 10px 15px;
    margin: 0 5px;
    border-radius: 5px;
    cursor: pointer;

    &.active {
      background-color: rgb(65 119 138);
    }

    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:not(:disabled):hover {
      background-color: rgb(141, 202, 225);
    }
  }

  span {
    margin: 0 10px;
    font-size: 18px;
  }
  @media (max-width: 550px) {
    padding: 10px 0;
    width: 90%;
  }
}
</style>
