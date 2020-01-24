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
                            {
                                name: '图片编辑',
                                desc: '',
                                icon: '/static/img/image_tool.svg',
                                to: 'xxx',
                                href: 'https://imagetool.yunser.com/',
                                target: '_blank'
                            },
                        ]
                    },
                    {
                        name: '图片制作',
                        apps: [
                            {
                                name: '画板',
                                desc: '在线 PS',
                                icon: '/static/img/draw.svg',
                                to: 'xxx',
                                href: 'https://draw.yunser.com/',
                                target: '_blank'
                            },
                            {
                                name: 'GIF',
                                desc: '',
                                icon: '/static/img/gif.svg',
                                to: 'xxx',
                                href: 'https://gif.yunser.com/',
                                target: '_blank'
                            },
                            {
                                name: '像素图',
                                desc: '',
                                icon: '/static/img/pixel.svg',
                                to: 'xxx',
                                href: 'https://pixel.yunser.com/',
                                target: '_blank'
                            },
                            {
                                name: '证件照',
                                desc: '证件照片排版生成',
                                icon: '/static/img/photo.svg',
                                to: 'xxx',
                                href: 'https://photo.yunser.com/',
                                target: '_blank'
                            },
                            {
                                name: 'Favicon 图标制作',
                                desc: '',
                                icon: '/static/img/favicon.svg',
                                to: 'xxx',
                                href: 'https://favicon.yunser.com/',
                                target: '_blank'
                            },
                            {
                                name: '占位图片',
                                desc: '',
                                icon: '/static/img/image_placeholder.svg',
                                to: '/temp'
                            },
                            {
                                name: '故障风格文字',
                                desc: '抖音风格的文字生成器',
                                icon: '/static/img/glitch.svg',
                                to: '/glitch'
                            },
                            {
                                name: '印章',
                                desc: '印章制作',
                                icon: '/static/img/seal.svg',
                                to: 'xxx',
                                href: 'https://seal.yunser.com/',
                                target: '_blank'
                            },
                            {
                                name: '图标制作',
                                desc: '',
                                icon: '/static/img/icon.svg',
                                to: 'xxx',
                                href: 'https://icongenerator.yunser.com/',
                                target: '_blank'
                            },
                            {
                                name: 'SVG',
                                desc: '',
                                icon: '/static/img/svg.svg',
                                to: 'xxx',
                                href: 'https://svgtool.yunser.com/',
                                target: '_blank'
                            },
                        ]
                    },
                    {
                        name: '下载',
                        apps: [
                            {
                                name: '图标下载',
                                desc: '',
                                icon: '/static/img/icon.svg',
                                to: 'xxx',
                                href: 'https://icon.yunser.com/',
                                target: '_blank'
                            },
                            {
                                name: '纹理图片下载',
                                desc: '',
                                icon: '/static/img/texture.svg',
                                to: 'xxx',
                                href: 'https://download.yunser.com/pattern/',
                                target: '_blank'
                            },
                            {
                                name: '矢量 LOGO 下载',
                                desc: '',
                                icon: '/static/img/logo.svg',
                                to: 'xxx',
                                href: 'https://logo.yunser.com/',
                                target: '_blank'
                            }
                        ]
                    },
                    {
                        name: '智能应用',
                        apps: [
                            {
                                name: '图片转文字',
                                desc: '',
                                icon: 'https://icons.yunser.com/icons/tool.svg',
                                to: 'xxx',
                                href: 'https://ai.yunser.com/ocr',
                                target: '_blank'
                            },
                            {
                                name: '图像识别',
                                desc: '',
                                icon: 'https://icons.yunser.com/icons/tool.svg',
                                to: 'xxx',
                                href: 'https://ai.yunser.com/image_recognition',
                                target: '_blank'
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
