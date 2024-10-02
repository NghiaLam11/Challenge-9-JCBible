<script setup lang="ts">

</script>

<template>
  <section>
    <div @click="$emit('onCloseNoteForm')" class="blur"></div>
    <div class="content container">
      <form>
        <div class="edit"><i class="fas fa-edit"></i></div>
        <textarea placeholder="Write..."></textarea>
        <button>Done</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.blur {
  background-color: var(--blur-color);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.content {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  width: 100vw;
  height: 75vh;
  background-color: var(--bg-primary);
  padding: 3rem;
  box-shadow: var(--shadow-box);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
}
form .edit {
  text-align: end;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  cursor: pointer;
}
form button {
  width: 90px;
  padding: 0.3rem 0.7rem;
  background-color: var(--bg-primary);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  margin-left: auto;
  opacity: 0.9;
  cursor: pointer;
}
form button:hover {
  color: var(--success-color);
  border: 1px solid var(--success-color);
}
textarea {
  background-color: var(--bg-primary);
  outline: none;
  border: none;
  font-family: var(--font-mono);
  font-weight: bold;
  letter-spacing: 1.5px;
  color: var(--text-color);
  height: 100%;
  padding: 0 5%;
  font-size: 1.2rem;
}
@media screen and (max-width: 738px) {
  form {
    padding: 2rem;
  }
  form .edit {
    margin-bottom: 1rem;
  }
}
@media screen and (max-width: 538px) {
  form {
    padding: 1rem;
  }
}
</style>
