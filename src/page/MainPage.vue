<template>
  <div>
    <h2>메인 페이지</h2>
    <h3>Notification.permission</h3>
    <p>{{ userPermission }}</p>
    <button @click="updatePermission">허용 상태 갱신</button>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      userPermission: null
    }
  },
  mounted() {
    this.requestPermission()
  },
  methods: {
    requestPermission() {
      if ('Notification' in window && Notification && Notification.permission) {
        this.userPermission = Notification.permission
      }
    }
  }
};
</script>
