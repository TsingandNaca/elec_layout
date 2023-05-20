import G6 from '@antv/g6';

export default {
  nodes: [
    {
      id:    '1001',
      image: 'https://img.zcool.cn/community/01qua7gus3wfxmimfd8dex3936.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp',
      data:  {
        action: '初始化',
      },
      type:  'custom-image-node',
      x:     500,
      y:     100,
      // size:  [120],
      style: {
        width:  163,
        height: 150,
      },
      label:    'id:1001\n名称:PLC-200 Smart\n型号:SIMATIC S7-200 SMART\n输入电压:24VDC\nI/O接口:30per',
      labelCfg: {        
        style: {
          fontSize:  30,
          fill:      '#39495b',
          textAlign: 'center',
          x:         0,
          y:         0,
        },
      },
      anchorPoints: [
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
      ],
    },
    {
      id:    '2001',
      image: 'https://img.zcool.cn/community/01kteu83qjvwua8u9dnctu3232.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp',
      data:  {
        action: '初始化',
      },
      type:  'switch-image-node',
      x:     800,
      y:     200,
      // size:  [120],
      style: {
        width:  163,
        height: 150,
      },
      label:    'id:2001\n名称:磁性开关\n型号:CSG-1\n输入电压:24VDC\n最大距离:10mm',
      labelCfg: {        
        style: {
          fontSize:  16,
          fill:      '#39495b',
          textAlign: 'center',
          x:         0,
          y:         0,
        },
      },
      anchorPoints: [
        [0.43, 0.94],
        [0.48, 0.94],
        [0.53, 0.94],
      ],
    },
  
    // {
    //   id:   '1', // 非必选
    //   data: {
    //     action: '初始化',
    //   },
    //   x:     500, // 该元素在画布中的位置
    //   y:     100,
    //   style: { // 节点样式
    //     fill:          '#39495b',
    //     lineDash:      [1, 2],
    //     shadowOffsetX: 0,
    //     shadowOffsetY: 2,
    //     shadowColor:   '#666',
    //     shadowBlur:    10,
    //     width:         160,
    //     height:        70,
    //   },
    //   label:    'new Vue()', // 节点上的文本
    //   // node 文本默认样式
    //   labelCfg: {
    //     style: {
    //       fontSize:     24,
    //       fill:         '#fff',
    //       textAlign:    'center',
    //       textBaseline: 'middle',
    //       fontWeight:   'bold',
    //     },
    //   },
    //   // 当前节点的多状态样式
    //   nodeStateStyles: {
    //     'nodeState:default': {
    //       fill: '#39495b',
    //     },
    //     'nodeState:hover': {
    //       fill: '#ffbd17',
    //     },
    //     'nodeState:selected': {
    //       fill: '#f1ac00',
    //     },
    //   },
    //   // 自定义锚点数量和位置
    //   anchorPoints: [
    //     [0, 0],
    //     [0.5, 0],
    //     [0, 1],
    //     [0.5, 1],
    //     [1, 0],
    //     [1, 1],
    //     [0.5, 0.5],
    //     [0.45, 0.2],
    //   ],
    // },
    {
      id:    '2',
      type:  'circle-node',
      style: {
        r:         50,
        width:     230,
        height:    60,
        fill:      '#65b586',
        lineWidth: 0,
      },
      x:        500,
      y:        300,
      label:    '初始化\n事件和生命周期',
      labelCfg: {
        style: {
          lineWidth: 2,
          fontSize:  18,
          stroke:    '#ccc',
          fill:      '#fff',
          textAlign: 'center',
        },
      },
      anchorPoints: [
        [0, 0],
        [0.5, 0],
        [0, 1],
        [0.5, 1],
        [1, 0],
        [1, 1],
        [0.5, 0.5],
        [0.45, 0.2],
      ],
    },
    {
      id:    '3',
      type:  'rect-node',
      style: {
        fill:      '#fff',
        stroke:    '#c96164',
        lineWidth: 3,
        width:     180,
        height:    60,
      },
      x:        250,
      y:        170,
      label:    'beforeCreate',
      labelCfg: {
          style: {
          fill:       '#c96164',
          fontSize:   20,
          fontWeight: '700',
          width:      200,
          height:     60,
        },
      },
      anchorHotsoptStyles: {
        r:    11,
        fill: 'green',
      },
      anchorPointStyles: {
        r:         4,
        fill:      '#fff',
        stroke:    '#1890FF',
        lineWidth: 2,
      },
    },
    {
      id:    '4',
      x:     500,
      y:     450,
      type:  'rect-node',
      label: '初始化\n注入 & 校验',
      // direction: 'down',
      style: {
        fill:      '#65b586',
        size:      [100, 160],
        lineWidth: 0,
        width:     200,
        height:    60,
      },
      labelCfg: {
         style: {
          fontSize:  12,
          fill:      '#fff',
          stroke:    '#65b586',
          textAlign: 'left',
          x:         -30,
          y:         0,
          position:  'bottom',
        },
      },
      /* anchorPoints: [
        [1, 0],
        [0, 0],
        [0.5, 1],
      ], */
    },
    {
      id:    '5',
      x:     250,
      y:     320,
      label: 'created',
      type:  'rect-node',
      style: {
        fill:      '#fff',
        stroke:    '#c96164',
        lineWidth: 3,
        width:     180,
        height:    60,
      },
      labelCfg: {
        style: {
          fontSize: 20,
          fill:     '#c96164',
        },
      },
    },
    {
      id:    '6',
      x:     500,
      y:     600,
      type:  'diamond-node',
      label: '是否指定 "el" 选项?',
      style: {
        size:   [160, 100],
        fill:   '#f1b953',
        stroke: '#f1b953',
      },
      labelCfg: {
        style: {
          fontSize: 14,
          fill:     '#fff',
          stroke:   '#fff',
        },
      },
    },
    {
      id:    '7',
      x:     750,
      y:     600,
      label: '当调用\n vm.$mount(el)\n 函数时',
      style: {
        fill:      '#65b586',
        size:      [160, 200],
        lineWidth: 0,
      },
      labelCfg: {
        style: {
          fill:      '#fff',
          stroke:    '#65b586',
          fontSize:  12,
          textAlign: 'left',
          x:         -40,
          y:         -30,
        },
      },
      type: 'triangle-node',
    },
    {
      x:        500,
      y:        800,
      id:       '8',
      label:    '是否指定 "template" 选项',
      labelCfg: {
        style: {
          fontSize: 12,
        },
      },
      style: {
        rx: 100,
        ry: 30,
      },
      type: 'ellipse-node',
    },
    {
      id:       '9',
      x:        250,
      y:        800,
      label:    '将 template 编译\n到 render 函数中',
      labelCfg: {        
        style: {
          fontSize: 12,          
        },
      },
      style: {
        width:  160,
        height: 60,
      },
    },
    {
      id:       '10',
      x:        750,
      y:        800,
      label:    '将 el 外部的 HTML\n作为 template 编译',
      labelCfg: {
        style: {
          fontSize: 12,
        },
      },
      style: {
        width:  160,
        height: 60,
      },
    },
    {
      id:       '11',
      x:        500,
      y:        1000,
      label:    '结束',
      labelCfg: {
        style: {
          fontSize: 16,
          fill:     '#fff',
        },
      },
      style: {
        width:     160,
        height:    60,
        fill:      '#fdbc33',
        lineWidth: 0,
      },
    },
  ],
  
  edges: [
    {
      source:       '1001',
      target:       '2001',
      sourceAnchor: 3,
      targetAnchor: 1,
      label:        '导线',
      // data:         {
      //   type:   'A',
      //   amount: '100,000 元',
      //   date:   '2019-08-03',
      // },      
      type:         'polyline-edge',
      style:        {
        stroke:          '#ECD18E',
        //  
        lineWidth:       2,
        lineAppendWidth: 10,
        cursor:          'hand',
        endArrow:        false,
      },
      labelCfg: {
        position:   'center', // 其实默认就是 center，这里写出来便于理解
        autoRotate: true, // 使文本随边旋转
        style:      {
          stroke:    'white', // 给文本添加白边和白色背景
          fill:      '#722ed1', // 文本颜色
          lineWidth: 5, // 文本白边粗细
        },
      },
      edgeStateStyles: {
        'edgeState:default': {
          strokeOpacity:   1,
          cursor:          'default',
          // lineDash:        [5, 2],
          lineWidth:       2,
          lineAppendWidth: 10,
          endArrow:        false,
        },
        'edgeState:hover': {
          strokeOpacity: 0.6,
          cursor:        'pointer',
        },
        'edgeState:selected': {
          strokeOpacity: 1,
          cursor:        'pointer',
        },
      },
    },
    // {
    //   source:       '1',
    //   target:       '3',
    //   sourceAnchor: 3,
    //   targetAnchor: 4,
    //   data:         {
    //     type:   'B',
    //     amount: '100,000 元',
    //     date:   '2019-08-03',
    //   },
    //   label: '',
    //   style: {
    //     endArrow: {
    //       path:   'M 0,0 L 8,4 L 7,0 L 8,-4 Z',
    //       fill:   '#aab7c1',
    //       stroke: '#aab7c1',
    //     },
    //   },
    //   edgeStateStyles: {
    //     'edgeState:default': {
    //       strokeOpacity: 1,
    //       cursor:        'default',
    //       endArrow:      {
    //         path:   'M 0,0 L 8,4 L 7,0 L 8,-4 Z',
    //         fill:   '#aab7c1',
    //         stroke: '#aab7c1',
    //       },
    //     },
    //     'edgeState:hover': {
    //       strokeOpacity: 0.6,
    //       cursor:        'pointer',
    //     },
    //     'edgeState:selected': {
    //       strokeOpacity: 1,
    //       cursor:        'pointer',
    //     },
    //   },
    // },
    // {
    //   source: '2',
    //   target: '4',
    //   data:   {
    //     type:   'C',
    //     amount: '100,000 元',
    //     date:   '2019-08-03',
    //   },
    //   label: '',
    //   style: {
    //     endArrow: {
    //       path:   G6.Arrow.vee(),
    //       fill:   '#aab7c1',
    //       stroke: '#aab7c1',
    //     },
    //   },
    //   edgeStateStyles: {
    //     'edgeState:default': {
    //       strokeOpacity: 1,
          
    //       animate:  false,
    //       endArrow: {
    //         path:   G6.Arrow.vee(),
    //         fill:   '#aab7c1',
    //         stroke: '#aab7c1',
    //       },
    //     },
    //     'edgeState:hover': {
    //       strokeOpacity: 0.6,
    //       stroke:        '#ccc',
    //       animate:       true,
    //       animationType: 'ball',
    //     },
    //     'edgeState:selected': {
    //       strokeOpacity: 1,
    //       stroke:        '#ccc',
          
    //     },
    //   },
    // },
    // {
    //   source:       '2',
    //   target:       '5',
    //   sourceAnchor: 2,
    //   targetAnchor: 1,
    //   data:         {
    //     type:   'C',
    //     amount: '100,000 元',
    //     date:   '2019-08-03',
    //   },
    //   label: '准备',
    //   style: {
    //     endArrow: {
    //     path:   G6.Arrow.diamond(10, 10, 3),
    //       fill:   '#aab7c1',
    //       stroke: '#aab7c1',
    //     },
    //   },
    // },
    // {
    //   source: '4',
    //   target: '6',
    //   data:   {
    //     type:   'B',
    //     amount: '100,000 元',
    //     date:   '2019-08-03',
    //   },
    //   label: '继续',
    //   style: {
    //     endArrow: {
    //       path:   G6.Arrow.rect(10, 10, 3),
    //       fill:   '#aab7c1',
    //       stroke: '#aab7c1',
    //     },
    //   },
    //     edgeStateStyles: {
    //     'edgeState:default': {
    //       strokeOpacity: 1,
          
    //       animate:  false,
    //       endArrow: {
    //         path:   G6.Arrow.vee(),
    //         fill:   '#aab7c1',
    //         stroke: '#aab7c1',
    //       },
    //     },
    //     'edgeState:hover': {
    //       strokeOpacity: 0.6,
    //       stroke:        '#ccc',
    //       animate:       true,
    //       animationType: 'growth',
    //     },
    //     'edgeState:selected': {
    //       strokeOpacity: 1,
    //       stroke:        '#ccc',
          
    //     },
    //   },
    // },
    // {
    //   source: '6',
    //   target: '7',
    //   data:   {
    //     type:   'C',
    //     amount: '100,000 元',
    //     date:   '2019-08-03',
    //   },
    // },
    // {
    //   source: '6',
    //   target: '8',
    //   data:   {
    //     type:   'C',
    //     amount: '100,000 元',
    //     date:   '2019-08-03',
    //   },
    // },
    // {
    //   source: '8',
    //   target: '9',
    //   data:   {
    //     type:   'C',
    //     amount: '100,000 元',
    //     date:   '2019-08-03',
    //   },
    // },
    // {
    //   source: '8',
    //   target: '10',
    //   data:   {
    //     type:   'C',
    //     amount: '100,000 元',
    //     date:   '2019-08-03',
    //   },
    // },
    // {
    //   source: '9',
    //   target: '11',
    //   data:   {
    //     type:   'C',
    //     amount: '100,000 元',
    //     date:   '2019-08-03',
    //   },
    // },
    // {
    //   source: '10',
    //   target: '11',
    //   data:   {
    //     type:   'C',
    //     amount: '100,000 元',
    //     date:   '2019-08-03',
    //   },
    // },
  ],
};
