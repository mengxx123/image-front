<template>
    <my-page title="图片浏览器" :page="page">
        <div class="empty" v-if="!images.length">暂无图片</div>
        <div class="img-box">
            <ul class="image-list">
                <li class="item" v-for="img in images">
                    <img class="img" :src="img.url">
                </li>
            </ul>
        </div>
    </my-page>
</template>

<script>
    const Intent = window.Intent

    export default {
        data () {
            return {
                images: [
                    // {
                    //     url: 'https://attach.bbs.miui.com/forum/201708/02/162005d5f9vaf9rjav5j9l.jpg.thumb.jpg',
                    //     title: '壁纸一'
                    // },
                    // {
                    //     url: 'https://attach.bbs.miui.com/forum/201708/02/162015g8shss8wbwb8w193.jpg.thumb.jpg',
                    //     title: '壁纸二'
                    // },
                    // {
                    //     url: 'https://attach.bbs.miui.com/forum/201605/11/162946e5vawgobk5b3bq4h.jpg.thumb.jpg',
                    //     title: '壁纸三'
                    // }
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'all_inclusive',
                            click: this.link,
                            title: '用其他应用打开'
                        },
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/e5440d40150a11eab0b24dd2f63334a6',
                            target: '_blank',
                            title: '帮助'
                        }
                    ]
                }
            }
        },
        mounted() {
            let data = this.$route.query.data
            if (data) {
                this.images = [
                    {
                        url: data,
                        title: '图片一'
                    }
                ]
            }
            // this.images = []
            this.initWebIntents()
        },
        methods: {
            initWebIntents() {
                if (!window.intent) {
                    return
                }
                console.log(window.intent.data)
                let data = window.intent.data
                if (data instanceof Array) {
                    this.images = data
                } else {
                    this.images = [
                        {
                            url: data,
                            title: ''
                        }
                    ]
                }
            },
            link() {
                let data = null
                if (this.images.length) {
                    data = this.images[0].url // TODO
                }
                let intent = new Intent({
                    action: 'http://webintent.yunser.com/?',
                    type: 'image/*',
                    data: data
                })
                navigator.startActivity(intent, data => {
                    console.log('成功')
                    if (data instanceof Array) {
                        this.images = data
                    } else {
                        this.images = [
                            {
                                url: data,
                                title: ''
                            }
                        ]
                    }
                }, data => {
                    console.log('失败')
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.empty {
    padding: 80px 0;
    color: #999;
    text-align: center;
}
.img-box {
    height: 100%;
}
.image-list {
    height: 100%;
    .item {
        height: 100%;
        margin-bottom: 24px;
        text-align: center;
    }
    .img {
        max-width: 100%;
        max-height: 100%;
    }
}
</style>
