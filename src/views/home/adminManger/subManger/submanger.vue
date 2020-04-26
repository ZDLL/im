<template>
  <div class='subMangerBox'>
    <div>
      <a-form layout="inline">
        <a-form-item>
          <a-input
            v-decorator="[
              'userName',
              { rules: [{ required: true, message: 'Please input your username!' }] },
            ]"
            placeholder="账号"
          >
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'userName',
              { rules: [{ required: true, message: 'Please input your username!' }] },
            ]"
            placeholder="密码"
          >
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
          >
            添加
          </a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="tab">
      <a-table
        :columns="columns"
        :dataSource="data"
        :scroll="{ x: 1500, y: 300 }"
      >
        <a
          slot="action"
          slot-scope="text"
        >操作</a>
      </a-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "component_name",
  props: {},
  data() {
    return {
      columns: [
        { title: "账号", dataIndex: "address", key: "1", width: 150 },
        {
          title: "操作",
          key: "operation",
          fixed: "right",
          width: 300,
          scopedSlots: { customRender: "action" }
        }
      ],
      data: [
        {
          key:1,
          address: "New York Park"
        },
        {
          key:2,
          address: "London Park"
        }
      ]
    };
  },
  methods: {},
  created() {}
};
</script>
<style lang="scss">
</style>