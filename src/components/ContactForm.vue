<template>
 <section>
     <div class="columns">
                    <div class="column is-6">
     <b-field label="Subject">
             <b-input ></b-input>
        </b-field>
        <b-field label="Name">
            <b-input ></b-input>
        </b-field>

        <b-field label="Email"
           >
            <b-input type="email"
                maxlength="30">
            </b-input>
        </b-field>
         <b-field>
            <b-button type="is-success">Success</b-button>
        </b-field>
        </div>
         <div class="column is-6">
        <b-field label="Message">
            <b-input rows="7" maxlength="200" type="textarea"></b-input>
        </b-field>
        
        </div>
     </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

</style>
