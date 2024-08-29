<template>
  <div class="add-book">
    <form @submit.prevent="addBook" class="add-book__form">
      <div class="add-book__field">
        <label for="bookName" class="add-book__label">Название книги:</label>
        <input
          type="text"
          id="bookName"
          v-model="bookName"
          placeholder="Введите название товара"
          class="add-book__input"
          required
        />
      </div>

      <div class="add-book__field">
        <label for="seller" class="add-book__label">Селлер:</label>
        <input
          type="text"
          id="seller"
          v-model="seller"
          placeholder="Введите имя селлера"
          class="add-book__input"
          required
        />
      </div>

      <div class="add-book__field">
        <label class="add-book__label">Способ интеграции:</label>
        <select v-model="integrationType" class="add-book__select" required>
          <option value="" disabled>Выберите способ интеграции</option>
          <option value="reels">Reels</option>
          <option value="stories">Stories</option>
        </select>
      </div>

      <BtnPostBook class="add-book__btn" @addedBook="addedBook" />
    </form>
  </div>
  <Notification
    :showNotification="showNotification"
    @resetNotification="resetNotification"
  />
</template>

<script>
import BtnPostBook from "../components/BtnPostBook.vue";
import Notification from "../components/Notification.vue";

export default {
  components: {
    BtnPostBook,
    Notification,
  },
  data() {
    return {
      bookName: "",
      seller: "",
      integrationType: "",
      books: JSON.parse(localStorage.getItem("listBooks")) || [], // Книги загружаются из localStorage, если данные есть
      bookIdCounter: Number(localStorage.getItem("bookIdCounter")) || 1, // Счётчик для уникальных ID книг
      showNotification: false,
    };
  },
  methods: {
    resetNotification(val) {
      this.showNotification = val;
    },
    addedBook(val) {
      // Проверяем, что все обязательные поля заполнены
      if (
        this.bookName != "" &&
        this.integrationType != "" &&
        this.seller != ""
      ) {
        this.showNotification = val;
      } else {
        this.showNotification = false;
      }
    },
    addBook() {
      if (this.bookName && this.seller && this.integrationType) {
        const newBook = {
          id: this.bookIdCounter,
          name: this.bookName,
          seller: this.seller,
          integration: this.integrationType,
        };

        this.books.push(newBook); // Добавляем новую книгу в массив
        localStorage.setItem("listBooks", JSON.stringify(this.books)); // Сохраняем обновлённый массив в localStorage

        this.bookIdCounter++; // Увеличиваем счётчик ID и сохраняем его
        localStorage.setItem("bookIdCounter", this.bookIdCounter);

        // Очищаем поля формы после добавления
        this.bookName = "";
        this.seller = "";
        this.integrationType = "";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.add-book {
  max-width: 500px;
  &__title {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }
  &__form {
    display: flex;
    flex-direction: column;
    animation: showForm 0.5s ease;
    @keyframes showForm {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }
    @media (max-width: 400px) {
      max-width: 300px;
      margin: 0 auto;
    }
  }
  &__field {
    margin-bottom: 15px;
  }
  &__label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    text-align: start;
  }
  &__input,
  &__select {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    font-size: 16px;
  }
  &__submit {
    padding: 10px 20px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background-color: #45a049;
    }
  }
}
</style>
<style>
input {
  outline: none;
  border: 1px solid rgb(91 173 201 / 66%);
  box-sizing: border-box;
}
input::placeholder {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 600;
  opacity: 0.5;
  color: rgb(91, 173, 201);
}
select {
  outline: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 600;
  opacity: 0.5;
  color: rgb(91, 173, 201);
  border: 1px solid rgb(91 173 201 / 66%);
}

.add-book__btn button {
  width: 100%;
  max-width: 100% !important;
}
</style>
