<template>
  <div
    id="itemPanel"
    ref="itemPanel"
    :class="{'hidden': itemVisible}"
  >
    <i class="iconfont icon-h-drag" />
    <div class="config-item">
      <select class="CompoentSearch">
        <option value="option1">All</option>
        <option value="option1">控制器</option>
        <option value="option2">传感器</option>
        <option value="option3">驱动器</option>
        <option value="option4">执行器</option>
        <option value="option5">通信件 </option>
        <option value="option6">电源件</option>
        <option value="option7">连接线</option>
      </select>
      <input 
        class="search"
        type="text" 
        placeholder="搜索"
      >
    </div>
    <div class="icon-tool">      
      <!-- <i
        class="node circle"
        draggable="true"
        data-label="开始"
        data-shape="circle-node"
        fill="#eef5fe"
      >开始</i>
      <i
        class="node warning"
        draggable="true"
        data-label="警告"
        data-shape="rect-node"
        fill="#f8ecda"
      >警告</i> -->
      <i
        class="node end"
        draggable="true"
        data-label="结束"
        data-shape="rect-node"
        fill="#f9e3e2"
      >结束</i>
      <!-- <i
        draggable="true"
        data-label="圆形节点"
        data-shape="circle-node"
        class="node iconfont icon-circle"
      />
      <i
        draggable="true"
        data-label="方形节点"
        data-shape="rect-node"
        class="node iconfont icon-rect"
      />
      <i
        draggable="true"
        data-label="椭圆形节点"
        data-shape="ellipse-node"
        class="node iconfont icon-ellipse"
      />
      <i
        draggable="true"
        data-label="菱形节点"
        data-shape="diamond-node"
        class="node iconfont icon-diamond"
      />  -->
      
      <img
        draggable="true"
        data-label="PLC-Smart 200"
        data-shape="custom-image-node"
        class="node iconfont icon-image"      
        src="https://img.zcool.cn/community/01qua7gus3wfxmimfd8dex3936.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp"      
      >
      <img
        draggable="true"
        data-label="工业面相机"
        data-shape="camera-image-node"
        class="node e"        
        src="https://img.zcool.cn/community/01io3slahydncxgliiroi23035.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp"
      > 
      <img
        draggable="true"
        data-label="工业线相机"
        data-shape="lineCamera-image-node"
        class="node e"        
        src="https://img.zcool.cn/community/01vzii35gxpiedealwxmee3534.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp"
      >
      <img
        draggable="true"
        data-label="磁性开关"
        data-shape="switch-image-node"
        class="node e"        
        src="https://img.zcool.cn/community/01kteu83qjvwua8u9dnctu3232.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp"
      > 
      <img
        draggable="true"
        data-label="光电传感器"
        data-shape="light-image-node"
        class="node e"        
        src="https://img.zcool.cn/community/01zuulwwrcj5grw3agyx683634.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp"
      > 
      <img
        draggable="true"
        data-label="RFID高速读卡器"
        data-shape="rfid-image-node"
        class="node e"        
        src="https://img.zcool.cn/community/01mrnwv4cgoahdtxyxhnk83935.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp"
      > 
      <img
        draggable="true"
        data-label="电磁阀"
        data-shape="valve-image-node"
        class="node e"        
        src="https://img.zcool.cn/community/01t3nqcoaymyxacx2ynff43334.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp"
      > 
      <img
        draggable="true"
        data-label="三相数字步进驱动器"
        data-shape="distance-image-node"
        class="node e"        
        src="https://img.zcool.cn/community/01cusmtpcnumfrmapziiei3034.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp"
      > 
      <img
        draggable="true"
        data-label="气缸"
        data-shape="cylinder-image-node"
        class="node e"        
        src="https://img.zcool.cn/community/0168eiglt0ngnmf5vgyivc3838.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp"
      > 
      <img
        draggable="true"
        data-label="工业以太网交换机"
        data-shape="wifi-image-node"
        class="node e"        
        src="https://img.zcool.cn/community/013lssztpuudih5vjxcsfy3833.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp"
      >
      <img
        draggable="true"
        data-label="12V电源"
        data-shape="power-image-node"
        class="node e"
        src="https://img.zcool.cn/community/01izxa2yzbwifjwx6ji8403834.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp"
      >
      <!-- <i
        draggable="true"
        data-label="对话框节点"
        data-shape="modelRect-node"
        class="node iconfont icon-model-rect"
      />  -->
      <!-- <i class="split" /> -->
      <i
        draggable="true"
        class="gb-toggle-btn"
        @click="itemVisible = !itemVisible"
      />
    </div>
  </div>
</template>

<script>
    export default {
        name: 'ItemPanel',
        data () {
            return {
                itemVisible: false,
            };
        },
        mounted () {
            const icons = [...this.$refs.itemPanel.querySelector('.icon-tool').querySelectorAll('.node')];

            icons.forEach(icon => {
                icon.addEventListener('dragstart', event => {
                  const shape = icon.getAttribute('data-shape');
                  const label = icon.getAttribute('data-label');
                  const fill = icon.getAttribute('fill');

                  /* 设置拖拽传输数据 */
                  event.dataTransfer.setData('dragComponent',
                      JSON.stringify({
                        label,
                        shape,
                        fill,
                      }),
                  );
                });
            });

            // 阻止默认动作
            document.addEventListener('drop', e => {
                e.preventDefault();
            }, false);
        },
    };
</script>

<style lang="scss">
#itemPanel {
  overflow: auto;
  position   : absolute;
  top        : 0;
  left       : 0;
  bottom     : 0;
  z-index    : 10;
  width      : 240px;
  background : #fefefe;
  padding-top: 60px;
  transition : transform .3s ease-in-out;
  box-shadow : 0 0 2px 0 rgba(238, 83, 83, 0.1);

  &.hidden {
    transform: translate(-100%, 0);
  }

  .icon-h-drag {
    position   : absolute;
    top        : 40px;
    left       : 0;
    width      : 100%;
    height     : 20px;
    line-height: 20px;
    font-size  : 18px;
    background : #f5f5f5;
    text-align : center;
    cursor     : move;

    &:hover {
      background: #f1f1f1;
    }
  }

  .gb-toggle-btn {
    width        : 10px;
    height       : 20px;
    top          : 50%;
    left         : 100%;
    border-radius: 0 10px 10px 0;
    box-shadow   : 2px 0 2px 0 rgba(0, 0, 0, .1);
    transform    : translate(0, -50%);
  }

  .split {
    height    : 1px;
    display   : block;
    background: #9c9eb4;
    margin    : 5px ;
  }
  .config-item{
    padding:10px;
    .search{
      width: 140px;
      height: 30px;
      border: 1px solid #ccc;
      border-radius: 15px;
      font-size: 12px;
    }
  }
  .icon-tool {
    padding:  10px;
    text-align    : center;
    .iconfont {
      display       : block;
      // width         : 160px;
      // height        : 160px;
      line-height   : 40px;
      font-size     : 30px;
      cursor        : move;
      border        : 1px solid transparent;
      margin: 0 auto;

      &:hover {
        border-color: #ccc;
      }
    }
    .node{
      display: block;
      margin-bottom: 10px;
      cursor        : move;
      text-align : center;
    }
    .circle{
      height: 80px;
      line-height: 80px;
      border-radius: 50%;
      border: 1px solid #ccc;
      background:#0f6ae1;
    }
    .warning{
      height: 40px;
      line-height: 40px;
      border-left: 4px solid #E6A23C;
      background:#bc7c1d;
    }
    .end{
      height: 40px;
      line-height: 40px;
      border-radius: 10px;
      background:#f9e3e2;
    }
    .e{
      padding:10px;      
      line-height: 20px;
      margin: 0 auto;    
    } 

  }
}
</style>
