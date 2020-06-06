<template>
  <div class="login">
    <div class="form">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
      <el-form-item label="账号" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
       <el-button type="primary" @click="submitForm(ruleForm)">登录</el-button>
    </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 4, max: 10, message: '长度在 4 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 4, max: 10, message: '长度在 4 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      const _this = this
      _this.axios({
        method: 'post',
        url: 'http://localhost:8081/login',
        params: {
          username: this.ruleForm.name,
          password: this.ruleForm.password
        }
      }).then((response) => {
        if (response.data.result === 'ok') {
          _this.$router.push(
            {
              path: '/Backstage'
            }
          )
        } else {
          alert('登录失败')
        }
      })
    }
  },
  mounted () {
    const _this = this
    _this.axios({
      method: 'post',
      url: 'http://localhost:8081/getSession'
    }).then(function (response) {
      if (response.data === 'ok') {
        _this.$router.push(
          {
            path: '/Backstage'
          }
        )
      }
    })
  }
}
</script>

<style scoped>
.login {
  margin-top: 60px;
  text-align: center;
  box-sizing: border-box ;
  background-color: #FFFFFF;
  height: 800px;
}
.form {
  margin-top: 200px;
  width: 30%;
  text-align: center;
  display: inline-block;
}
</style>
