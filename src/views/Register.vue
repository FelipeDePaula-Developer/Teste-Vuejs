<template>
  <div>
    <section>
      <form action="" method="post">
        <b-field label="Email" :label-position="onBorder">
          <b-input name="email" id="email" type="email"></b-input>
        </b-field>
        <b-field label="Senha" :label-position="onBorder">
          <b-input name="senha" id="senha" type="password"></b-input>
        </b-field>
        <b-field label="Nome" :label-position="onBorder">
          <b-input name="nome" id="nome" type="text"></b-input>
        </b-field>
        <b-button native-type="submit" id="btn-cadastrar" class="is-success" outlined> Cadastrar </b-button>
      </form>
    </section>
  </div>
</template>
<script>
  document.querySelector("#btn-cadastrar").addEventListener("submit", async event =>{
    event.preventDefault()

    const email = document.querySelector("#email").innerHTML
    // const senha = document.querySelector("#senha").value
    // const nome = document.querySelector("#nome").value
    axios.post("http://localhost:8082/",
        {
          email: `${email}`
        }
    )
    
  })

export default {
  data() {
    return {
      onBorder: "on-border",
    };
  },
};
</script>
<style lang="css" scoped>
section {
  padding: 20px;
}
</style>