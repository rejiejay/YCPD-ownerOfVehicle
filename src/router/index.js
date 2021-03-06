import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
	{
		path: '/index',
		alias: ['/home', '/'],
		name: 'home',
		component: () => import('@/views/Home/index'), // 主页 首屏
		meta: { title: '养车频道' },
	}, 
	{
		path: '/user/index',
		alias: ['/user/', '/user'],
		name: 'user',
		component: () => import('@/views/User/index'), // 个人中心
		meta: { title: '个人中心' },
	},
	
	{ // 这个页面的需求 已经废弃
		path: '/city',
		component: () => import('@/views/Home/city'), // 主页 选择城市
		name: 'city',
		meta: { title: '选择地区' },
	}, 

	{  // 这个页面也是废弃了
		path: '/user/infor',
		name: 'userInfor',
		component: () => import('@/views/User/infor'), // 个人信息
		meta: { title: '个人信息' },
	}, 
	
	{
		path: '/user/order',
		name: 'userOrder',
		component: () => import('@/views/User/order'), // 订单页面
		meta: { title: '订单信息' },
	}, {
		path: '/user/ticket/list',
		name: 'myTicketList',
		component: () => import('@/views/Ticket/my-list'), // 我的优惠券
		meta: { title: '我的优惠券' },
	}, {
		path: '/user/ticket/detail',
		name: 'myTicketDetail',
		component: () => import('@/views/Ticket/my-list-detail'), // 我的优惠券详情
		meta: { title: '我的优惠券详情' },
	}, {
		path: '/ticket/list/index',
		alias: ['/ticket/list/', '/ticket/list'],
		name: 'ticketList',
		component: () => import('@/views/Ticket/list'), // 购买券列表
		meta: { title: '购买券列表' },
	},
	{
		path: '/ticket/list/detail',
		name: 'ticketListDetail',
		component: () => import('@/views/Ticket/list-detail'), // 购买券详情
		meta: { title: '购买券详情' },
	},
	{
		path: '/jumpPage',
		name: 'jumpPage',
		component: () => import('@/views/Home/jumpPage'), // 跳转页
		meta: { title: '正在跳转' },
	},

	// 个人中心和卡券详情模块
	{
		path: '/user/integral',
		name: 'integral',
		component: () => import('@/views/User/integral'), // 我的积分
		meta: { title: '我的积分' },
	},
	{
		path: '/user/myCar',
		name: 'myCar',
		component: () => import('@/views/User/myCar'), // 我的车辆
		meta: { title: '我的车辆' },
	},
	{
		path: '/user/updataCar',
		name: 'updataCar',
		component: () => import('@/views/User/updataCar'), // 修改车辆信息
		meta: { title: '修改车辆信息' },
	},
	{
		path: '/card/cardList',
		name: 'cardList',
		component: () => import('@/views//card/cardList'), // 我的卡券列表
		meta: { title: '我的卡券' },
	},

	{
		path: '/card/cardInfo',
		name: 'cardInfo',
		component: () => import('@/views//card/cardInfo'), // 卡券详情
		meta: { title: '卡券详情' },
	},
	{
		path: '/card/cardUsed',
		name: 'cardUsed',
		component: () => import('@/views//card/cardUsed'), // 卡券详情已使用
		meta: { title: '卡券详情' },
	},
	{
		path: '/card/shopList',
		name: 'shopList',
		component: () => import('@/views//card/shopList'), // 全部门店
		meta: { title: '全部门店' },
	},

	//卡券延期活动模块
	{
		path: '/cardDelay/cardDelay',
		name: 'cardDelay',
		component: () => import('@/views/cardDelay/cardDelay'), // 限时活动
		meta: { title: '限时活动' },
	},
	{
		path: '/cardDelay/cardQuery',
		name: 'cardQuery',
		component: () => import('@/views/cardDelay/cardQuery'), // 卡券查询
		meta: { title: '卡券查询' },
	},
	{
		path: '/cardDelay/queryResulte',
		name: 'queryResulte',
		component: () => import('@/views/cardDelay/queryResulte'), // 卡券延期
		meta: { title: '卡券延期' },
	},
	{
		path: '/cardDelay/examples',
		name: 'examples',
		component: () => import('@/views/cardDelay/examples'), // 卡券查询
		meta: { title: '卡券查询' },
	},
	{
		path: '/piccPage',
		name: 'piccPage',
		component: () => import('@/views/Home/piccPage'), // 人保预约页面
		meta: { title: '人保预约' },
	},
	{
		path: '/reservationList',
		name: 'reservationList',
		component: () => import('@/views/User/reservationList'), // 预约记录页面
		meta: { title: '预约记录' },
	},
	{
		path: '/reservationState',
		name: 'reservationState',
		component: () => import('@/views/User/reservationState'), // 预约记录详情
		meta: { title: '预约详情' },
	},

	/**
	 * 重定向页面
	 */
	{
		path: '/redirect/gasstation',
		name: 'goto-gasstation',
		component: () => import('@/views/redirect/goto-gasstation'), // 优惠加油
		meta: { title: '优惠加油' },
	}, {
		path: '/redirect-gas',
		component: () => import('@/views/redirect/gasstation-preview'), // 加油优惠 导航页面 
		name: 'redirect-gasstation',
		meta: { title: '养车频道' },
	},
];

let router = new Router({
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.meta.title) { // 路由发生变化修改页面 title
		document.title = to.meta.title;
	}

	next();
});

export default router;
