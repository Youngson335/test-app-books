<template>
  <div class="save--books">
    <h3 v-if="books !== null" class="save--books__list-title">Список книг</h3>
    <h3 v-else class="save--books__list-title">У вас нет добавленных книг</h3>
    <ul>
      <li
        v-for="(book, index) in books"
        :key="index"
        class="save--books__list-item"
        @click="editedBook(book)"
      >
        <p>
          {{ book.name }} (Селлер: {{ book.seller }}, Интеграция:
          {{ book.integration }})
        </p>

        <button class="edit__book--btn">Редактировать</button>
      </li>
    </ul>
  </div>
  <ModalBookEdit
    @editStateModal="editStateModal"
    :stateModal="stateModal"
    :editBook="editBook"
    @updateBooks="getAllSaveBooks"
  />
</template>

<script>
import ModalBookEdit from "../components/ModalBookEdit.vue";
export default {
  components: {
    ModalBookEdit,
  },
  data() {
    return {
      books: [],
      editBook: [],
      stateModal: false,
    };
  },
  methods: {
    getAllSaveBooks() {
      let result = localStorage.getItem("listBooks");
      this.books = JSON.parse(result);
    },
    editedBook(val) {
      this.editBook = val;
      this.stateModal = true;
    },
    editStateModal(val) {
      this.stateModal = val;
    },
  },
  mounted() {
    this.getAllSaveBooks();
  },
};
</script>
<style lang="scss">
.save--books {
  &__list {
    &-title {
      font-size: 25px;
      margin-bottom: 10px;
      text-align: start;
    }
    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: start;
      margin-bottom: 10px;
      font-size: 18px;
      background: rgba(91, 173, 201, 0.46);
      padding: 15px;
      max-width: 600px;
      border-radius: 10px;
      box-sizing: border-box;
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: 0.2s all ease;
      &:hover {
        background: rgb(91 173 201 / 81%);
        transition: 0.2s all ease;
      }
      @media (max-width: 550px) {
        padding: 8px;
        font-size: 14px;
      }
    }
  }
}
.edit__book--btn {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 600;
  background: none;
  border: none;
  color: #316e8b;
  font-size: 14px;
  cursor: pointer;
}
</style>
