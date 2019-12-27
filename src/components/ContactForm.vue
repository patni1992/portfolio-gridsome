<template>
  <section>
    <form
      name="contact"
      @submit.prevent="submitForm"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <div class="columns">
        <div class="column is-6">
          <b-field label="Subject">
            <b-input name="subject" v-model="form.subject" required />
          </b-field>
          <b-field label="Name">
            <b-input name="name" v-model="form.name" required />
          </b-field>
          <b-field label="Email">
            <b-input name="email" v-model="form.email" type="email" required />
          </b-field>
        </div>
        <div class="column is-6">
          <b-field label="Message">
            <b-input
              name="message"
              rows="7"
              v-model="form.message"
              type="textarea"
              required
            />
          </b-field>
        </div>
      </div>
      <b-field>
            <b-button  native-type="submit" type="is-success"
              >Send email</b-button
            >
          </b-field>
    </form>
  </section>
</template>

<script>
import encodeForm from "~/utils/encodeForm";

export default {
  data() {
    return {
      form: {
        message: "",
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encodeForm({ "form-name": "contact", ...this.form })
        });
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
