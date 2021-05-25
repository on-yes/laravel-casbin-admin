(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-500c909d"],{"275f":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("treeselect",{attrs:{multiple:!1,options:e.nodes,normalizer:e.normalizer},model:{value:e.valueId,callback:function(t){e.valueId=t},expression:"valueId"}})],1)},i=[],o=n("ca17"),s=n.n(o),a=(n("542c"),{components:{Treeselect:s.a},props:["nodes","value"],data:function(){return{valueId:0,node:{id:0,name:null,title:null,label:null},normalizer:function(e){return{id:e.id,label:e.title,children:e.children}}}},mounted:function(){this.valueId=this.value?this.value:0},watch:{valueId:function(e){this.$emit("setId",this.valueId)}}}),l=a,u=n("2877"),c=Object(u["a"])(l,r,i,!1,null,null,null);t["a"]=c.exports},3786:function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.addUser=o,t.getPermissionList=s,t.getAllPermissions=a,t.getUserList=l,t.addPermissions=u,t.updatePermissions=c,t.delPermissions=d,t.updateUser=m,t.getLogList=f,t.delLog=p;var i=r(n("b775"));function o(e){return(0,i.default)({url:"/admin/users",method:"post",data:e})}function s(e){return(0,i.default)({url:"/admin/permissions",method:"get",data:{id:e}})}function a(){return(0,i.default)({url:"/admin/all_permissions",method:"get"})}function l(e){return(0,i.default)({url:"/admin/users",method:"get",params:e})}function u(e){return(0,i.default)({url:"/admin/permissions",method:"post",data:e})}function c(e){return(0,i.default)({url:"/admin/permissions/"+e.id,method:"put",data:e})}function d(e){return(0,i.default)({url:"/admin/permissions/"+e,method:"delete"})}function m(e){return(0,i.default)({url:"/admin/users/"+e.id,method:"put",data:e})}function f(e){return(0,i.default)({url:"/admin/log",method:"get",params:e})}function p(e){return(0,i.default)({url:"/admin/log/"+e,method:"delete"})}},"66d4":function(e,t,n){"use strict";var r=n("d928"),i=n.n(r);i.a},cc5e:function(e,t,n){"use strict";n.r(t),n.d(t,"getRoutes",(function(){return o})),n.d(t,"getRoles",(function(){return s})),n.d(t,"addRole",(function(){return a})),n.d(t,"updateRole",(function(){return l})),n.d(t,"deleteRole",(function(){return u})),n.d(t,"allRole",(function(){return c}));var r=n("b775"),i=n.n(r);function o(){return i()({url:"/vue-element-admin/routes",method:"get"})}function s(){return i()({url:"/admin/roles",method:"get"})}function a(e){return i()({url:"/admin/roles",method:"post",data:e})}function l(e){return i()({url:"/admin/roles/".concat(e.id),method:"put",data:e})}function u(e){return i()({url:"/admin/roles/".concat(e),method:"delete"})}function c(){return i()({url:"/admin/all_role",method:"get"})}},d78e:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-form",[n("el-form-item",[n("el-button",{attrs:{type:"success",icon:"el-icon-plus"},on:{click:e.add}})],1)],1)],1),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticClass:"content-container"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list,border:"","tree-props":{children:"children",hasChildren:"hasChildren"},"row-key":"id"}},[n("el-table-column",{attrs:{prop:"name",label:"角色名称"}}),n("el-table-column",{attrs:{prop:"status",label:"权限状态"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[1==r.status?n("el-tag",[e._v("正常")]):n("el-tag",[e._v("禁用")])]}}])}),n("el-table-column",{attrs:{prop:"description",label:"角色描述"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-tag",[e._v(e._s(r.description))])]}}])}),n("el-table-column",{attrs:{prop:"create_time",label:"添加时间"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("span",[e._v(e._s(r.created_at))])]}}])}),n("el-table-column",{attrs:{label:"操作",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-button",{attrs:{type:"primary",icon:"el-icon-edit-outline"},on:{click:function(t){return e.edit(r)}}}),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(t){return e.del(r)}}})]}}])})],1)],1),n("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.formLoadding,expression:"formLoadding"}],ref:"roleForm",attrs:{model:e.form,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"角色名称: ",required:!0,prop:"name"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"角色描述: ",required:!0,prop:"description"}},[n("el-input",{model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),n("el-form-item",{attrs:{label:"状态选择: ",required:!0,prop:"status"}},[n("el-radio",{attrs:{label:"1"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[e._v("启用")]),n("el-radio",{attrs:{label:"2"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[e._v("禁用")])],1),n("el-form-item",{attrs:{label:"赋予权限节点:",required:!0}},[n("el-tree",{ref:"tree",attrs:{data:e.form.permissions,"show-checkbox":"","default-expand-all":"","node-key":"id","default-checked-keys":e.form.node,"highlight-current":"",props:e.defaultProps},on:{"check-change":e.nodeChange}})],1),n("el-form-item",[n("el-button",{on:{click:e.submit}},[e._v("提交")])],1)],1)],1)],1)},i=[],o=(n("a4d3"),n("e01a"),n("b0c0"),n("d3b7"),n("25f0"),n("96cf"),n("1da1")),s=(n("df7c"),n("ed08"),n("cc5e")),a=n("3786"),l=n("275f"),u={key:"",name:"",description:"",routes:[]},c={components:{selectTree:l["a"]},data:function(){return{defaultProps:{label:"name",children:"children"},count:1,permissions:[],title:"",role:Object.assign({},u),routes:[],list:[],dialogVisible:!1,dialogType:"new",checkStrictly:!1,formLoadding:!0,form:{id:void 0,name:void 0,description:void 0,status:void 0,node:[]},listLoading:!1}},computed:{routesData:function(){return this.routes}},created:function(){this.getRoles()},methods:{handleClose:function(e){this.$confirm("确认关闭？").then((function(t){e()})).catch((function(e){}))},getRoutes:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,getRoutes();case 2:n=t.sent,e.serviceRoutes=n.data,e.routes=e.generateRoutes(n.data);case 5:case"end":return t.stop()}}),t)})))()})),getRoles:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["getRoles"])();case 2:n=t.sent,r=n.data,e.list=r.list;case 5:case"end":return t.stop()}}),t)})))()},add:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.title="新增角色",e.form=e.$options.data().form,t.next=4,e.setFormPermissionTree();case 4:e.formLoadding=!1,e.dialogVisible=!0;case 6:case"end":return t.stop()}}),t)})))()},edit:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(e.node),t.form=Object.assign(t.form,{name:e.name,description:e.description,status:e.status.toString(),id:e.id,node:e.node}),n.next=4,t.setFormPermissionTree(e.id);case 4:t.title="编辑角色 | "+e.name,t.dialogVisible=!0,t.formLoadding=!1,t.allPermissions();case 8:case"end":return n.stop()}}),n)})))()},del:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["deleteRole"])(e.id).then((function(e){t.$message({type:"success",message:"删除成功!"}),t.getRoles()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 1:case"end":return n.stop()}}),n)})))()},setFormPermissionTree:function(){var e=this;new Promise((function(t,n){Object(a["getPermissionList"])().then((function(n){var r=n.data;e.$set(e.form,"permissions",r.list),t(!0)}))}))},nodeChange:function(){var e=this.$refs.tree.getCheckedKeys();this.form.node_ids=e,0!=e.length?this.form.node=e:this.form.node=""},submit:function(){var e=this;void 0!=this.form.id?Object(s["updateRole"])(this.form).then((function(t){e.$message.success("success"),e.dialogVisible=!1,e.getRoles()})):Object(s["addRole"])(this.form).then((function(t){e.$message.success("success"),e.dialogVisible=!1,e.getRoles()}))},getCheckedNodes:function(){this.$refs.tree.getCheckedNodes()},getCheckedKeys:function(){return this.$refs.tree.getCheckedKeys()},setCheckedNodes:function(){this.$refs.tree.setCheckedNodes([{id:5,label:"二级 2-1"},{id:9,label:"三级 1-1-1"}])},setCheckedKeys:function(){console.log(this.$refs.tree.setCheckedKeys([3])),this.$refs.tree.setCheckedKeys([3])},resetChecked:function(){this.$refs.tree.setCheckedKeys([])},allPermissions:function(){var e=this;Object(a["getPermissionList"])().then((function(t){var n=t.data;e.permissions=n.list,e.$set(e.form,"permissions",n.list)}))}},mounted:function(){this.allPermissions()}},d=c,m=(n("66d4"),n("2877")),f=Object(m["a"])(d,r,i,!1,null,"7344028b",null);t["default"]=f.exports},d928:function(e,t,n){}}]);