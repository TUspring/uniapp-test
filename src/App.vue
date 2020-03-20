<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
  /*公共css */
  @import url("./styles/common.css");
  uni-page-body,#app{
    height: 100%;
  }
</style>
