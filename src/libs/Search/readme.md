#### 搜索框的通用功能

1. 数据的双向绑定
2. 鼠标移入移除的动画
3. 一键清空文本
4. 触发搜索功能
5. 可控制，可填充的下拉展示区
6. 监听到以下事件列表

- clear
- input
- focus
- blur
- search

#### 搜索框的各种状态

里面包括

- 搜索图标
- input框
- 清除图标
- 搜索按钮

父元素的样式如下

```html
<div className="group relative w-full p-0.5 rounded-xl border-white hover:bg-red-100/40 duration-500 "></div>
```

里面的布局应该是怎么样的， input占满整个宽度，其他用绝对定位，这种方法有个小bug，文字太长会穿过后面的按钮

```html
<input  className='block w-full h-[44px] rounded-xl outline-0 border-zinc-100 bg-zinc-100 pl-4 text-xs font-semibold caret-zinc-400 tracking-wide group-hover:bg-white focus:border-red-300 '/>
```



