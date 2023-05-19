/**
 * @param {string} shapeType 支持 rect/circel/path 等内置节点
 * @param {string} getShapeStyle 用于覆盖 base-node 默认样式
 * @param {string} icon 图片 url
 * @param {string} labelCfg 文本节点样式
 */
import defaultStyles from './defaultStyles';

const {
  iconStyles,
  nodeStyles,
  anchorPointStyles,
  nodeLabelStyles,
} = defaultStyles;

function getStyle (options, cfg) {
  return {
    ...cfg,
    // 自定义默认样式
    ...nodeStyles,
    ...options,
    // 当前节点样式
    ...cfg.style,
    // 文本配置
    labelCfg: {
      ...nodeLabelStyles,
      ...cfg.labelCfg,
      style: {
        ...nodeLabelStyles.style,
        ...(cfg.labelCfg ? cfg.labelCfg.style : {}),
      },
    },
    // 图标样式
    iconStyles: {
      ...iconStyles,
      ...cfg.iconStyles,
    },
    // 锚点样式
    anchorPointStyles: {
      ...anchorPointStyles,
      ...cfg.anchorPointStyles,
    },
    ...cfg.nodeStateStyles,
    // 锚点高亮样式
    anchorHotsoptStyles: cfg.anchorHotsoptStyles,
  };
}

export default G6 => {
  // 从 base-node 中扩展方形节点
  G6.registerNode('rect-node', {
    shapeType: 'rect',
    // 当前节点的样式集合
    getShapeStyle (cfg) {
      const width = cfg.style.width || 80;
      const height = cfg.style.height || 40;

      return getStyle.call(this, {
        width,
        height,
        radius: 5,
        // 将图形中心坐标移动到图形中心, 用于方便鼠标位置计算
        x:      -width / 2,
        y:      -height / 2,
      }, cfg);
    },
  }, 'base-node');

  // 扩展圆形节点
  G6.registerNode('circle-node', {
    shapeType: 'circle',
    getShapeStyle(cfg) {
      const r = cfg.style.r || 30;

      return getStyle.call(this, {
        r, // 半径
        // 将图形中心坐标移动到图形中心, 用于方便鼠标位置计算
        x: 0,
        y: 0,
      }, cfg);
    },
  }, 'base-node');

  // 扩展椭圆形
  G6.registerNode('ellipse-node', {
    shapeType: 'ellipse',
    getShapeStyle(cfg) {
      return getStyle.call(this, {
        rx: 50,
        ry: 30,
        // 将图形中心坐标移动到图形中心, 用于方便鼠标位置计算
        x:  0,
        y:  0,
      }, cfg);
    },
  }, 'base-node');

  // 扩展模态节点
  G6.registerNode('modelRect-node', {
    shapeType: 'rect',
    getShapeStyle (cfg) {
      const width = cfg.style.width || 100;
      const height = cfg.style.height || 80;

      return getStyle.call(this, {
        width,
        height,
        radius: 5,
        // 将图形中心坐标移动到图形中心, 用于方便鼠标位置计算
        x:      -width / 2,
        y:      -height / 2,
      }, cfg);
    },
  }, 'base-node');

  // 扩展菱形
  G6.registerNode('diamond-node', {
    shapeType: 'path', // 非内置 shape 要指定为path
    getShapeStyle (cfg) {
      const path = this.getPath(cfg);

      return getStyle.call(this, {
        path,
        x: 0,
        y: 0,
      }, cfg);
    },
    // 返回菱形的路径
    getPath (cfg) {
      const size = cfg.style.size || [100, 100]; // 如果没有 size 时的默认大小
      const width = size[0];
      const height = size[1];

      //  / 1 \
      // 4     2
      //  \ 3 /
      return [
        ['M', 0, -height / 2], // 上部顶点
        ['L', width / 2, 0], // 右侧顶点
        ['L', 0, height / 2], // 下部顶点
        ['L', -width / 2, 0], // 左侧顶点
        ['Z'], // 封闭
      ];
    },
  }, 'base-node');

  // 扩展三角形节点
  G6.registerNode('triangle-node', {
    shapeType: 'path',
    getShapeStyle(cfg) {
      const path = this.getPath(cfg);

      return getStyle.call(this, {
        direction: cfg.direction || 'up',
        path,
        x:         0,
        y:         0,
      }, cfg);
    },
    getPath (cfg) {
      const direction = cfg.direction || 'up';
      const size = cfg.style.size || [60, 100]; // 如果没有 size 时的默认大小
      const width = size[0];
      const height = size[1];

      const path = [
        // ['M', 0, -height / 2], // 上部顶点
        // ['L', -width / 2, 0], // 左侧顶点
        // ['L', width / 2, 0], // 右侧顶点
        ['Z'], // 封闭
      ];

      if (direction === 'up') {
        path.unshift(
          ['M', 0, -height / 2],
          ['L', -width / 2, 0], // 左侧顶点
          ['L', width / 2, 0], // 右侧顶点
        );
      } else {
        path.unshift(
          ['M', 0, height / 2],
          ['L', -width / 2, 0], // 左侧顶点
          ['L', width / 2, 0], // 右侧顶点
        );
      }

      return path;
    },
    getAnchorPoints (cfg) {
      return cfg.anchorPoints || [
        [0.5, 0],
        [0, 1],
        [1, 1],
      ];
    },
  }, 'base-node');

  G6.registerNode('custom-image-node', {
    shapeType: 'image',
    getImageUrl(cfg) {
      // 根据传入的数据获取图像路径
      return cfg.image || 'https://img.zcool.cn/community/01xac8xbazdqrxwwhk5xu73332.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp';
    },
    getShapeStyle(cfg) {
      const imageUrl = this.getImageUrl(cfg);

  
      return getStyle.call(this, {
       
        width:  cfg.style.width || 15,
        height: cfg.style.height || 40,   
        x:      -cfg.style.width / 2 ,
        y:      -cfg.style.height / 2,
        img:    imageUrl,         
      }, cfg);
    },
    addLabel(cfg) { },

    getAnchorPoints(cfg) {
      return cfg.anchorPoints || [
        [0.12, 0.08],
        [0.16, 0.08],
        [0.195, 0.08],
        [0.229, 0.08],
        [0.262, 0.08],
        [0.30, 0.08],
        [0.335, 0.08],
        [0.365, 0.08],

        [0.425, 0.08],
        [0.46, 0.08],
        [0.495, 0.08],
        [0.53, 0.08],
        [0.565, 0.08],
        [0.605, 0.08],
        [0.64, 0.08],
        [0.675, 0.08],
        [0.71, 0.08],
        [0.75, 0.08],
        [0.780, 0.08],
        [0.82, 0.08],
        [0.85, 0.08],
        [0.88, 0.08],

        [0.13, 0.45],
        [0.13, 0.75],
        [0.8, 0.65],

        [0.262, 0.89],
        [0.30, 0.89],
        [0.335, 0.89],
        [0.365, 0.89],
        [0.405, 0.89],
        [0.44, 0.89],
        [0.475, 0.89],
        [0.51, 0.89],

        [0.565, 0.89],
        [0.605, 0.89],
        [0.64, 0.89],
        [0.675, 0.89],
        [0.71, 0.89],
        [0.75, 0.89],
        [0.780, 0.89],
        [0.82, 0.89],
        [0.85, 0.89],
        [0.88, 0.89],
      ];
    },
  }, 'base-node');  

  G6.registerNode('switch-image-node', {
    shapeType: 'image',
    getImageUrl(cfg) {
      // 根据传入的数据获取图像路径
      return cfg.image || 'https://img.zcool.cn/community/01ktsi9mcfb01lxudmm9a23533.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp';
      //https://img.zcool.cn/community/01vgkkmjcwoog2a1jbiaoi3234.jpg
    },
    addLabel(cfg) { },
    getShapeStyle(cfg) {
      const imageUrl = this.getImageUrl(cfg);
      
      return getStyle.call(this, {
        
        width:  cfg.style.width || 15,
        height: cfg.style.height || 40,   
        x:      -cfg.style.width / 2 ,
        y:      -cfg.style.height / 2,
        img:    imageUrl,    
      }, cfg);
    },

    getAnchorPoints(cfg) {
      return cfg.anchorPoints || [
        [0.43, 0.9],
        [0.48, 0.9],
        [0.53, 0.9],
      ];
    },
  }, 'base-node');
  
  G6.registerNode('camera-image-node', {
    shapeType: 'image',
    getImageUrl(cfg) {
      // 根据传入的数据获取图像路径
      return cfg.image || 'https://img.zcool.cn/community/01hqznmnaicgyrkycswvpg3032.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp';
    },
    getShapeStyle(cfg) {
      const imageUrl = this.getImageUrl(cfg);
      
      return getStyle.call(this, {
        x:      -cfg.style.width / 2 ,
        y:      -cfg.style.height / 2,
        width:  cfg.style.width || 15,
        height: cfg.style.height || 40,        
        img:    imageUrl,    
      }, cfg);
    },
    getAnchorPoints(cfg) {
      return cfg.anchorPoints || [
        [0.5, 1],
        [0.6, 1],
        [0.7, 1],
      ];
    },
  }, 'base-node');
  G6.registerNode('lineCamera-image-node', {
    shapeType: 'image',
    getImageUrl(cfg) {
      // 根据传入的数据获取图像路径
      return cfg.image || 'https://img.zcool.cn/community/01vzii35gxpiedealwxmee3534.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp';
    },
    getShapeStyle(cfg) {
      const imageUrl = this.getImageUrl(cfg);
      
      return getStyle.call(this, {
        x:      -cfg.style.width / 2 ,
        y:      -cfg.style.height / 2,
        width:  cfg.style.width || 15,
        height: cfg.style.height || 40,        
        img:    imageUrl,    
      }, cfg);
    },
    getAnchorPoints(cfg) {
      return cfg.anchorPoints || [
        [0.5, 1],
        [0.6, 1],
        [0.7, 1],
      ];
    },
  }, 'base-node');
  G6.registerNode('light-image-node', {
    shapeType: 'image',
    getImageUrl(cfg) {
      // 根据传入的数据获取图像路径
      return cfg.image || 'https://img.zcool.cn/community/01qnw71umelzjbve4d7nos3433.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp';
    },
    getShapeStyle(cfg) {
      const imageUrl = this.getImageUrl(cfg);
      
      return getStyle.call(this, {
        x:      -cfg.style.width / 2 ,
        y:      -cfg.style.height / 2,
        width:  cfg.style.width || 15,
        height: cfg.style.height || 40,        
        img:    imageUrl,    
      }, cfg);
    },
    getAnchorPoints(cfg) {
      return cfg.anchorPoints || [
        [0.5, 1],
        [0.6, 1],
        [0.7, 1],
      ];
    },
  }, 'base-node');
  G6.registerNode('rfid-image-node', {
    shapeType: 'image',
    getImageUrl(cfg) {
      // 根据传入的数据获取图像路径
      return cfg.image || 'https://img.zcool.cn/community/01jj0gphywdefwyjvdu9hm3531.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp';
    },
    getShapeStyle(cfg) {
      const imageUrl = this.getImageUrl(cfg);
      
      return getStyle.call(this, {
        x:      -cfg.style.width / 2 ,
        y:      -cfg.style.height / 2,
        width:  cfg.style.width || 15,
        height: cfg.style.height || 40,        
        img:    imageUrl,    
      }, cfg);
    },
    getAnchorPoints(cfg) {
      return cfg.anchorPoints || [
        [0.5, 1],
        [0.6, 1],
        [0.7, 1],
      ];
    },
  }, 'base-node');
  G6.registerNode('valve-image-node', {
    shapeType: 'image',
    getImageUrl(cfg) {
      // 根据传入的数据获取图像路径
      return cfg.image || 'https://img.zcool.cn/community/016swjvv479h2gph8atkgl3231.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp';
    },
    getShapeStyle(cfg) {
      const imageUrl = this.getImageUrl(cfg);
      
      return getStyle.call(this, {
        x:      -cfg.style.width / 2 ,
        y:      -cfg.style.height / 2,
        width:  cfg.style.width || 15,
        height: cfg.style.height || 40,        
        img:    imageUrl,    
      }, cfg);
    },
    getAnchorPoints(cfg) {
      return cfg.anchorPoints || [
        [0.5, 1],
        [0.6, 1],
        [0.7, 1],
      ];
    },
  }, 'base-node');
  G6.registerNode('distance-image-node', {
    shapeType: 'image',
    getImageUrl(cfg) {
      // 根据传入的数据获取图像路径
      return cfg.image || 'https://img.zcool.cn/community/016swjvv479h2gph8atkgl3231.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp';
    },
    getShapeStyle(cfg) {
      const imageUrl = this.getImageUrl(cfg);
      
      return getStyle.call(this, {
        x:      -cfg.style.width / 2 ,
        y:      -cfg.style.height / 2,
        width:  cfg.style.width || 15,
        height: cfg.style.height || 40,        
        img:    imageUrl,    
      }, cfg);
    },
    getAnchorPoints(cfg) {
      return cfg.anchorPoints || [
        [0.5, 1],
        [0.6, 1],
        [0.7, 1],
      ];
    },
  }, 'base-node');
  G6.registerNode('cylinder-image-node', {
    shapeType: 'image',
    getImageUrl(cfg) {
      // 根据传入的数据获取图像路径
      return cfg.image || 'https://img.zcool.cn/community/016swjvv479h2gph8atkgl3231.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp';
    },
    getShapeStyle(cfg) {
      const imageUrl = this.getImageUrl(cfg);
      
      return getStyle.call(this, {
        x:      -cfg.style.width / 2 ,
        y:      -cfg.style.height / 2,
        width:  cfg.style.width || 15,
        height: cfg.style.height || 40,        
        img:    imageUrl,    
      }, cfg);
    },
    getAnchorPoints(cfg) {
      return cfg.anchorPoints || [
        [0.5, 1],
        [0.6, 1],
        [0.7, 1],
      ];
    },
  }, 'base-node');
  
  G6.registerNode('wifi-image-node', {
    shapeType: 'image',
    getImageUrl(cfg) {
      // 根据传入的数据获取图像路径
      return cfg.image || 'https://img.zcool.cn/community/016swjvv479h2gph8atkgl3231.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp';
    },
    getShapeStyle(cfg) {
      const imageUrl = this.getImageUrl(cfg);
      
      return getStyle.call(this, {
        x:      -cfg.style.width / 2 ,
        y:      -cfg.style.height / 2,
        width:  cfg.style.width || 15,
        height: cfg.style.height || 40,        
        img:    imageUrl,    
      }, cfg);
    },
    getAnchorPoints(cfg) {
      return cfg.anchorPoints || [
        [0.5, 1],
        [0.6, 1],
        [0.7, 1],
      ];
    },
  }, 'base-node');
  G6.registerNode('power-image-node', {
    shapeType: 'image',
    getImageUrl(cfg) {
      // 根据传入的数据获取图像路径
      return cfg.image || 'https://img.zcool.cn/community/016swjvv479h2gph8atkgl3231.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp';
    },
    getShapeStyle(cfg) {
      const imageUrl = this.getImageUrl(cfg);
      
      return getStyle.call(this, {
        x:      -cfg.style.width / 2 ,
        y:      -cfg.style.height / 2,
        width:  cfg.style.width || 15,
        height: cfg.style.height || 40,        
        img:    imageUrl,  
        label:  'demodemo',
      }, cfg);
    },
    getAnchorPoints(cfg) {
      return cfg.anchorPoints || [
        [0.5, 1],
        [0.6, 1],
        [0.7, 1],
      ];
    },
  }, 'base-node');
  

};

