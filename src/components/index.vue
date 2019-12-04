<template>
  <div class="body">

    <div class="section">
      <div class="section-header">
        Новая задача
      </div>
      <div class="section-body">
        <textarea class="section-body-area"></textarea>
      </div>
      <div class="section-footer">
        <div class="button">
        <div class="button-bg"></div>
        <div class="button-title">Добавить</div>
        </div>
        <fai icon="times" />
      </div>
    </div>

    <div class="section">
      <div class="section-body">

        <div class="item" v-for="i in 10">
          <div class="item-handler">
            <fai class="item-handler-hand" icon="pen" />
            <fai class="item-handler-hand" icon="trash" />
            <fai class="item-handler-hand" icon="check" />
          </div>
          <div class="item-title" v-for="i in 11">{{1}}) task 11231212313213213212123</div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  mounted(){

  },
  methods: {

  }
}
</script>

<style lang="scss">
$blue_font: #223648;
$green: #7ca65c;

  .body{
    flex-direction: column;
    padding: 1rem 2rem;
    justify-content: flex-start;
  }
  .section{
    background-color: #f9f9f9;
    border: 1px solid #dadada;
    border-radius: 5px;
    box-shadow: 0.5px 1px 4px 0px rgba(0,0,0,0.25);
    margin-bottom: 1rem;
    flex-direction: column;
    padding: 0.5rem 1rem;

    &-header{
      padding: 0.5rem 0;
      border-bottom: 0.2rem solid $blue_font;
      justify-content: space-between;
      color: $blue_font;
      font-size: 1.25rem;
      font-weight: bold;
      border-bottom-left-radius: 2px; 
      border-bottom-right-radius: 2px; 
    }
    &-body{
      margin: 1rem 0;
      padding: 0.25rem 1rem;
      flex-wrap: wrap;
      &-area{
        width: 100%;
        height: 6rem;
        resize: none;
        outline: none;

      }
    }
    &-footer{
      justify-content: flex-start;
      &>div{
        width: auto;
        margin: 0 0.5rem;
      }
      &>svg{
        cursor: pointer;
        color: $blue_font;
        font-size: 1.2rem;
        margin-left: 0.75rem;
        transition: transform 0.2s;
        &:hover{
          color: #b12828;
        }
        &:active{
          transform: scale(1.2);
        }
      }
    }
  }

  .item{
    flex-direction: column;
    flex: 0 0 20%;
    max-width: 19%;
    min-width: 200px;
    margin: 0 0.5% 1rem 0.5%;
    border-radius: 2px;
    background-color: #e0e3e6;
    box-shadow: 0.5px 1px 4px 0px rgba(0,0,0,0.25);
    padding: 0.5rem 1rem;
    height: 6rem;
    overflow: auto;
    align-items: flex-start;
    justify-content: flex-start;
    &:hover{

      .item-handler-hand{
        color: $blue_font;
      }
    }

    &-handler{
      justify-content: flex-end;
      position: sticky;
      top: 0;

      &-hand{
        color: transparent;
        cursor: pointer;
        margin-left: 0.25rem;

        &:hover{

        }
        &:last-child{
          color: $blue_font;

          &.active{
            color: $green;
          }
        }
      }
    }
    &-title{
      display: block;
      text-align: start;
      white-space: pre-wrap;
      overflow-wrap: break-word;
      word-wrap: break-word;
    }
  }

  .button{
    padding: 0.25rem 0.4rem;
    cursor: pointer;
    color: #ffffff;
    font-weight: bold;
    transition: 0.1s;
    border: 2px solid transparent;
    border-radius: 2px;
    &-title{
      z-index: 1;
    }
    z-index: 1;      
    &-bg{
      content: "";
      width: 100%;
      height: 100%;
      background-color: $green; 
      position: absolute;
      left: 0;
      z-index: 0;      
      transition: 0.3s;
      box-shadow: -0px 2px 0px 0px rgba(0,0,0,0.55);
    }
    &:hover{
      color: $green;
      border-color: $green;
      .button-bg{
        box-shadow: unset;
        background-color: #dadada;
      }
    }
    &:active{
      color: #376ff1;
      border-color: #5588ff;
      .button-bg{
        transform: rotateX(180deg);
      }
    }
  }

@media screen and (max-width: 575px){
  .item{
    max-width: 100%;
    width: 100%;
    flex: unset;
  }
  .item-handler-hand{
    margin-left: 1rem;
    color: $blue_font;
  }
}
</style>
