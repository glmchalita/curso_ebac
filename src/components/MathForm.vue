<script setup>
const props = defineProps(["firstNum", "secondNum", "operator", "changeOperation", "result"]);
</script>

<template>
  <form>
    <div class="row">
      <div class="col-md-4">
        <input @keyup="props.firstNum" class="form-control" type="number" required placeholder="Digite o primeiro número" />
      </div>
      <div class="col-md-1 text-center">
        <p class="fs-4">{{ props.operator }}</p>
      </div>
      <div class="col-md-4">
        <input @keyup="props.secondNum" class="form-control" type="number" required placeholder="Digite o segundo número" />
      </div>
      <div class="col-md-3">
        <select @change="props.changeOperation" class="form-control">
          <option value="addition">Adição</option>
          <option value="subtraction">Subtração</option>
          <option value="multiplication">Multiplicação</option>
          <option value="division">Divisão</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col text-center mt-4 fs-4">
        <p>{{ props.result ? props.result : 0 }}</p>
      </div>
    </div>
  </form>
</template>
