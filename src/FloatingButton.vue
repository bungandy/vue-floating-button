<template>
  <div class="vue-floating-button-main">
    <div v-if="isOpen" class="vue-floating-button-overlay"></div>
    <div class="vue-floating-button">
      <div v-show="isOpen" class="vue-floating-button-content">
        <header class="vue-floating-button-header" :style="`background-color: ${background}`">
          <slot v-if="$slots.header" name="header" />
          <div v-else>
            <h2 class="vue-floating-button-body-heading">
              <span class="mr-2">Hi</span>
              <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/waving-hand_1f44b.png" srcset="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/waving-hand_1f44b.png 2x" alt="Waving Hand on Apple iOS 15.4" width="30" height="30"></img>
            </h2>
            <div class="vue-floating-button-body-subheading">
              Let us know how we can help! :)
            </div>
          </div>
        </header>
        <div class="vue-floating-button-body">
          <div class="vue-floating-button-wrapper">
            <slot v-if="$slots.content" name="content" />
            <div v-else>
              <div class="vue-floating-button-text">Please feel free to speak your mind on our contact page and allow us one business-day to respond your message.</div>
              <a href="/contact" class="vue-floating-button-go">
                <svg width="32px" height="32px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M27.45,15.11l-22-11a1,1,0,0,0-1.08.12,1,1,0,0,0-.33,1L7,16,4,26.74A1,1,0,0,0,5,28a1,1,0,0,0,.45-.11l22-11a1,1,0,0,0,0-1.78Zm-20.9,10L8.76,17H18V15H8.76L6.55,6.89,24.76,16Z"/><rect fill="none" id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>
                <span>Send us a message</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <button @click.prevent="handleClick" class="vue-floating-button-icon">
        <div :class="['vue-floating-button-icon-open', {'hide-it' : isOpen}]">
          <slot v-if="$slots.icon" name="icon" />
          <div v-else>
            <svg x="0px" y="0px" width="30.667px" height="30.667px" viewBox="0 0 30.667 30.667">
              <path fill="#fff" d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017
                c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382
                c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076
                c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427
                c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437
                c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536
                c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609
                c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611
                c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787
                c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739
                C23.307,19.268,23.307,18.533,23.214,18.38z"/>
            </svg>
          </div>
        </div>
        <div :class="['vue-floating-button-icon-close', {'hide-it' : !isOpen}]">
          <svg focusable="false" viewBox="0 0 16 14" width="28" height="25" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fill-rule="evenodd" clip-rule="evenodd" d="M.116 4.884l1.768-1.768L8 9.232l6.116-6.116 1.768 1.768L8 12.768.116 4.884z"></path></svg>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FloatingButton',
  props: {
    background: {
      type: String,
      default: '#16a34a'
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    handleClick(){
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-floating-button-main{
  .vue-floating-button-overlay{
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.75);
  }
  .vue-floating-button{
    position: fixed;
    z-index: 9999;
    right: 24px;
    bottom: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (min-width: 768px) {
      bottom: 48px;
    }

    &-content{
      font-family: inherit;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 16px;
      max-width: 300px;
      background-color: #f5f5f5;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

      &.active{
        opacity: 1;
      }
    }

    &-header{
      padding: 32px 36px 56px;
    }

    &-body{
      margin-top: -40px;
      padding: 0px 24px 24px;

      &-heading{
        color: #fff;
        font-size: 32px;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
      }
      &-subheading{
        color: #fff;
        font-size: 0.8rem;
      }
    }

    &-wrapper{
      background-color: #fff;
      padding: 16px;
      border-radius: 8px;
    }

    &-text{
      font-size: 0.8rem;
      margin-top: 16px;
      margin-bottom: 16px;
    }

    &-go{
      font-size: .8em;
      color: #fff;
      background-color: #16a34a;
      border-radius: 8px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 4px 32px;

      &:hover{
        text-decoration: none;
        background-color: #15803d;
      }

      svg{
        width: 20px;
        margin-right: 8px;
      }
    }

    &-icon{
      background-color: #16a34a;
      color: #fff;
      cursor: pointer;
      outline: 0;
      border: 0;
      width: 54px;
      height: 54px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;

      @media screen and (min-width: 768px) {}

      &-open, &-close{
        position: absolute;
      }

      &-open{
        transition: all .2s ease-in-out;
        &.hide-it{
          transform: rotate(90deg) scale(0.1);
          opacity: 0;
        }
      }

      &-close{
        transition: all .2s ease-in-out;

        &.hide-it{
          transform: rotate(-90deg) scale(0.1);
          opacity: 0;
        }
        svg{
          width: 18px;
        }
      }
    }
  }
}
</style>