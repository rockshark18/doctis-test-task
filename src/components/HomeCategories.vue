<template>
  <div class="container ndbg">
    <div class="header ndbg">
      <div class="header__title">Browse The Range</div>
      <div class="header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
    <div class="content ndbg">
      <div v-for="c in categories"
           :key="c.title"
           class="content__item ndbgr"
      >
        <img class="content__item-img" :src="require('@/assets/images/categories/'+c.img)"/>
        <div class="content__item-title">{{c.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				categories: [
					{title: 'Dining', img: 'dining.jpg'},
					{title: 'Living', img: 'living.jpg'},
					{title: 'Bedroom', img: 'bedroom.jpg'},
				],
			}
		},
	}
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 50px; // NOTE: very bad practice

    width: 1440px;
    height: 700px;
  }

  .header {
    text-align: center;

    &__title {
      font-family: $primary-font;
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;

      color: $primary-color;
    }

    &__text {
      font-family: $primary-font;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;

      color: #666666;
    }
  }

  .content {
    display: flex;
    justify-content: center; // center H

    width: 100%;

    padding: 0;

    margin-top: 60px;

    &__item {
      padding: 0 10px;
    }

    &__item-img {
      width: 381px;
      height: 480px;
    }

    &__item-title {
      text-align: center;
      margin-top: 30px;

      font-family: $primary-font;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;

      color: $primary-color;
    }
  }
</style>
