<template>
  <section>
    <h3>VeeValidate - Nuxt-i18n Example:</h3>
    <ValidationProvider rules="required|alpha" v-slot="{ errors }" :name="$t('fields.name')">
    <h3>{{$t("forms.name")}}</h3>
      <input type="text" v-model="value">
      <span>{{ errors[0] }}</span>
    </ValidationProvider>

    <div>
      <nuxt-link :to="$i18n.locale === 'es' ? '/en' : '/es'">Switch Language</nuxt-link>
    </div>
  </section>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationProvider
  },
  data: () => ({
    value: ""
  })
};
</script>
