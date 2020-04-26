<template>
  <div class='page'>
    <div> 修改此系统后台管理员帐号密码</div>
    <div>
      <a-form
        @submit="handleSubmit"
        :label-col="{ span: 3 }"
        :wrapper-col="{ span: 12 }"
      >
        <a-form-item>

        </a-form-item>
        <a-form-item label="管理员账号:">
          <a-input v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]" />
        </a-form-item>
        <a-form-item label="管理员密码:">
          <a-input v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]" />
        </a-form-item>
        <a-form-item label="老密码:">
          <a-input v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 4, offset: 3 }">
          <a-button
            type="primary"
          >
            确认修改
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "component_name",
  props: {},
  data() {
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: ""
      }
    };
  },
  methods: {
    handleSubmit() {}
  },
  created() {}
};
</script>
<style lang="scss">
</style>