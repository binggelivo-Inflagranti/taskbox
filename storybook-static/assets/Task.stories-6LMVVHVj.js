import{f as r}from"./index-C8QWqHwq.js";import{T as u}from"./Task-CvvmmvWM.js";import"./vue.esm-bundler-BTUbD3nE.js";const g={onPinTask:r(),onArchiveTask:r()},D={component:u,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...g}},a={args:{task:{id:"1",title:"Task 1",state:"TASK_INBOX"}}},s={args:{task:{...a.args.task,state:"TASK_PINNED"}}},t={args:{task:{...a.args.task,state:"TASK_ARCHIVED"}}};var e,n,o;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Task 1',
      state: 'TASK_INBOX'
    }
  }
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,i,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,k;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(k=(p=t.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const S=["ActionsData","Default","Pinned","Archived"];export{g as ActionsData,t as Archived,a as Default,s as Pinned,S as __namedExportsOrder,D as default};
