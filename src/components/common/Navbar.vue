<template>
  <div class="navbar ndbgr">

    <div class="navbar__body ndbg">
      <!-- logo -->
      <div class="navbar__logo ndbgg" @click="$router.push('/')">
        <img src="@/assets/images/common/logo.png"/> <!-- NOTE: 2024/10/17 - I think move images to the 'static' _public_ folder from _assets_ folder -->
        <div class="navbar__logo-text">Furniro</div>
      </div>
      <!-- text menu block -->
      <div class="navbar__menu ndbg">
        <div v-for="mi in menuItems"
             :key="mi.title"
             class="navbar__menu-item ndbgr"
        >
          <a class="navbar__menu-item-text ndbgy" @click="$router.push(mi.link)">{{mi.title}}</a>
        </div>
      </div>
      <!-- icons block -->
      <div class="navbar__icons ndbg">
        <div v-for="i in icons"
             :key="i.src"
        >
          <img :src="require('@/assets/images/components/Navbar/'+i.img)"
               @click="i.link ? $router.push(i.link) : null"
          />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
	export default {
		data() {
			return {
				menuItems: [
					{title: 'Home', link: '/mock/home'},
					{title: 'Shop', link: '/mock/shop'},
					{title: 'About', link: '/mock/about'},
					{title: 'Contact', link: '/mock/contact'},
				],
				icons: [
					{img: 'account-icon.svg', link: null},
					{img: 'search-icon.svg', link: null},
					{img: 'heart-icon.svg', link: null},
					{img: 'cart-icon.svg', link: '/cart'},
				],
			}
		},
	}
</script>

<style lang="scss" scoped>
  .navbar {

    &__body {
      max-width: 1440px;
      height: 100px;

      /*center block horizontally*/
      margin-left: auto;
      margin-right: auto;

      padding-left: 50px;
      padding-right: 90px;


      display: flex;
      justify-content: space-between;
      align-items: center;

    }

    /* logo block*/
    &__logo {
      cursor: pointer;
      display: flex;

      &-text {
        font-family: $secondary-font;
        font-weight: 700;
        font-size: 34px;
        line-height: 41.45px;

        color: $default-color;
      }
    }

    /* menu block */
    &__menu {
      width: 430px;
      height: 24px;

      display: flex;
      justify-content: space-between;

      &-item {
        cursor: pointer;

        &-text {
          font-family: $primary-font;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;

          color: $default-color;

          &:hover {
            font-weight: 700;
            text-decoration: underline;
          }
        }
      }
    }

    /* icons block*/
    &__icons {
      width: 220px;
      height: 28px;

      display: flex;
      justify-content: space-between;

      cursor: pointer;
    }
  }
</style>
