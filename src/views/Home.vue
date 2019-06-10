<template>
    <my-page title="图片" :page="page">
        <div class="common-container container">
            <app-list :data="groups" />
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    export default {
        data () {
            return {
                groups: [
                    {
                        name: '基本',
                        apps: [
                            {
                                name: '图片查看',
                                desc: '',
                                icon: '/static/img/image.svg',
                                to: '/viewer'
                            },
                        ]
                    },
                    {
                        name: '其他',
                        apps: [
                            {
                                name: '幻灯片',
                                desc: '',
                                icon: '/static/img/image.svg',
                                to: '/slider'
                            },
                        ]
                    }
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'search',
                            href: 'https://search.yunser.com?utm_source=image',
                            target: '_blank',
                            title: '搜索'
                        },
                        {
                            type: 'icon',
                            icon: 'apps',
                            href: 'https://app.yunser.com?utm_source=image',
                            target: '_blank',
                            title: '应用'
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>
</style>
