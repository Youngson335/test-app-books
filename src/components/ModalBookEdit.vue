<template>
  <div v-show="showModal" class="edit--book" @click="handleModal">
    <form class="edit--book__block" @submit.prevent="saveEditBook">
      <div class="edit--book__close" @click="hiddenModal">
        <img src="../assets/icons/icon__close.svg" alt="Close" />
      </div>
      <div class="edit--book__title">
        <h2>Редактировать книгу</h2>
      </div>
      <div class="edit--book__name">
        <input
          v-model="bookName"
          type="text"
          placeholder="название книги"
          required
        />
      </div>
      <div class="edit--book__seller">
        <input
          v-model="seller"
          type="text"
          placeholder="селлер книги"
          required
        />
      </div>
      <div class="edit--book__seller__field">
        <label class="edit--book__seller__label">Способ интеграции:</label>
        <select v-model="integrationType" class="edit--book__select" required>
          <option value="" disabled>Изменить способ интеграции</option>
          <option value="reels">Reels</option>
          <option value="stories">Stories</option>
        </select>
      </div>
      <div class="edit--book__buttons">
        <BtnDeleteBook @click="deleteBook" />
        <BtnSaveEdit />
      </div>
    </form>
  </div>
</template>

<script>
import BtnSaveEdit from "../components/BtnSaveEdit.vue";
import BtnDeleteBook from "../components/BtnDeleteBook.vue";

export default {
  components: {
    BtnSaveEdit,
    BtnDeleteBook,
  },
  props: {
    editBook: Object,
    stateModal: Boolean,
  },
  data() {
    return {
      book: {},
      showModal: false,
      integrationType: "",
      seller: "",
      bookName: "",
    };
  },
  watch: {
    editBook: {
      immediate: true,
      handler() {
        this.setBookData();
      },
    },
    stateModal: {
      immediate: true,
      handler() {
        this.showModal = this.stateModal;
      },
    },
  },
  methods: {
    setBookData() {
      this.book = { ...this.editBook };
      this.bookName = this.editBook.name || "";
      this.seller = this.editBook.seller || "";
      this.integrationType = this.editBook.integration || "";
    },
    handleModal(event) {
      if (event.target === event.currentTarget) {
        this.hiddenModal();
      }
    },
    hiddenModal() {
      this.showModal = false;
      this.$emit("editStateModal", false);
    },
    saveEditBook() {
      const data = JSON.parse(localStorage.getItem("listBooks")) || [];
      const index = data.findIndex((item) => item.id === this.book.id);

      if (index !== -1) {
        data[index] = {
          ...data[index],
          name: this.bookName,
          seller: this.seller,
          integration: this.integrationType,
        };
        localStorage.setItem("listBooks", JSON.stringify(data));
        this.$emit("updateBooks");
        this.hiddenModal();
      }
    },
    deleteBook() {
      const data = JSON.parse(localStorage.getItem("listBooks")) || [];
      const updatedData = data.filter((item) => item.id !== this.book.id);

      localStorage.setItem("listBooks", JSON.stringify(updatedData));
      this.$emit("updateBooks");
      this.hiddenModal();
    },
  },
};
</script>

<style lang="scss">
.edit--book {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.54);
  animation: showModalEditBook 0.5s ease;

  @keyframes showModalEditBook {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &__block {
    padding: 20px;
    background: #fcfcfc;
    border-radius: 10px;
    width: 80%;
    max-width: 600px;
  }

  &__name,
  &__seller {
    width: calc(100% - 20px);
    margin: 0 auto;
  }

  &__seller__field {
    display: flex;
    flex-direction: column;
    width: calc(100% - 20px);
    margin: 0 auto 10px;

    &__label {
      font-weight: 600;
      text-align: start;
      width: 100%;
      margin-bottom: 5px;
    }
  }

  &__select {
    width: 100%;
    padding: 5px 10px;
    border-radius: 5px;
  }

  &__close {
    display: flex;
    justify-content: end;
    align-items: center;
    position: relative;
    bottom: 10px;
    cursor: pointer;

    img {
      opacity: 0.6;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 1;
      }
    }
  }

  &__title {
    margin-bottom: 10px;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 20px);
    margin: 0 auto;
  }

  input {
    width: 100%;
    padding: 5px 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
    font-weight: 600;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
}
</style>
