<!-- 见解和文章 -->
<template>
  <div class>
    <!-- 见解和文章开始 -->
    <div class="article">
      <div class="color-bottom"></div>
      <div class="container">
        <div class="article-top">
          <div class="article-topLeft">
            <div class="section-title-2">
              <h3 class="title">我们的见解和文章</h3>
            </div>
          </div>
          <div class="article-topRight">
            <div class="view-more view-more-3">
              <a href="#">查看更多>></a>
            </div>
          </div>
        </div>
        <div class="article-content">
          <div class="article-content-item">
            <div class="blog-thumb">
              <img src="../assets/img/blog/blog-7.jpg" alt="blog" />
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span>新闻</span>
              </div>
              <div class="blog-title">
                <h4>
                  <a
                    href="blog-details.html"
                  >Diusmod tempor indicidunt ut Labore et dolore magna aliqua。Ut enim ad minim veniam</a>
                </h4>
              </div>
              <div class="blog-footer">
                <span>
                  <i class="far fa-calendar-alt"></i> 2020年1月28日
                </span>
                <span>
                  <i class="far fa-user"></i> 通过管理员
                </span>
              </div>
            </div>
          </div>
          <div class="article-content-item">
            <div class="blog-thumb">
              <img src="../assets/img/blog/blog-8.jpg" alt="blog" />
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span>新闻</span>
              </div>
              <div class="blog-title">
                <h4>
                  <a
                    href="blog-details.html"
                  >Aonsectetur奉献精英，sius do eiusmod tempor indicidunt ut Labore et dolore</a>
                </h4>
              </div>
              <div class="blog-footer">
                <span>
                  <i class="far fa-calendar-alt"></i> 2020年1月28日
                </span>
                <span>
                  <i class="far fa-user"></i> 通过管理员
                </span>
              </div>
            </div>
          </div>
          <div class="article-content-item">
            <div class="blog-thumb">
              <img src="../assets/img/blog/blog-9.jpg" alt="blog" />
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span>新闻</span>
              </div>
              <div class="blog-title">
                <h4>
                  <a
                    href="blog-details.html"
                  >Rncididunt ut Labore et dolore magna aliqua。ore et dolore magna a乌尼姆劳动与美元</a>
                </h4>
              </div>
              <div class="blog-footer">
                <span>
                  <i class="far fa-calendar-alt"></i> 2020年1月28日
                </span>
                <span>
                  <i class="far fa-user"></i> 通过管理员
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--见解和文章结束-->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.article {
  width: 100%;
  height: 582px;
  position: relative;
  padding-top: 50px;
  .color-bottom{
    width: 100%;
    height: 150px;
    position: absolute;
    bottom: 0;
    background-color: #fff7f0;
  }
  .container {
    width: 1140px;
    margin: 0 auto;
    left: 0;
    right: 0;
    position: absolute;
    z-index: 888;
    .article-top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      .article-topLeft {
        .section-title-2 {
          h3.title {
            font-size: 24px;
            padding: 0 15px;
            color: #191919;
          }
        }
      }

      .article-topRight {
        .view-more.view-more-3 {
          a {
            font-family: "DM Sans", sans-serif;
            font-size: 16px;
            font-weight: 700;
            color: #262626;
            padding: 0 15px;
            text-decoration: none;
          }
        }
      }
    }

    .article-content {
      display: flex;
      .article-content-item {
        width: 380px;
        height: 480px;
        padding: 0 15px;
        &:hover .blog-thumb img {
          transition: 0.3s linear;
          transform: scale(1.05);
        }
        .blog-thumb {
          width: 350px;
          height: 236px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }

        .blog-content {
          position: relative;
          padding: 35px 25px;
          background: #fff;
          border: 1px solid #ccc;
          .blog-meta {
            background: #a3bbc8;
            padding: 8px 25px;
            position: absolute;
            left: 30px;
            top: 0;
            transform: translateY(-50%);
            border-radius: 30px;
          }

          .blog-title {
            h4 {
              font-size: 18px;
              line-height: 26px;
              margin-bottom: 20px;
              padding-bottom: 20px;
              border-bottom: 2px solid #e0e0e0;
              a {
                color: #262626;
                text-decoration: none;
                &:hover {
                  color: rgb(252, 215, 182);
                  transition: 0.8s;
                }
              }
            }
          }

          .blog-footer {
            display: flex;
            justify-content: space-between;
            span {
              font-size: 12px;
              color: #222933;
            }
          }
        }
      }
    }
  }
}
</style>