<template>
    <my-page title="幻灯片" :page="page">
        <div class="empty" v-if="!images.length">请先上传图片</div>
        <ul class="image-list">
            <li class="item" v-for="img, index in images" :style="{width: imgWidth + 'px'}">
                <img class="img" :src="img.url">
                <ui-icon-button class="btn" icon="close" @click="remove(img, index)" />
            </li>
        </ul>
        <ui-text-field v-model.number="offsetTime" label="切换时间（秒）" />
        <div class="btns">
            <ui-raised-button class="file-select-btn btn" label="上传图片" secondary>
                <input type="file" class="ui-file-button" accept="image/*" @change="fileChange($event)">
            </ui-raised-button>
            <!-- <ui-raised-button class="btn" secondary label="上传图片" @click="play" /> -->
            <ui-raised-button primary label="播放" @click="play" />
        </div>
        <div class="slider" v-if="slidervisible" @click="stop">
            <img class="img" :src="sliderImg" />
        </div>
    </my-page>
</template>

<script>
    const Intent = window.Intent

    export default {
        data () {
            return {
                offsetTime: 3,
                imgWidth: 100,
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
                curImgIndex: 0,
                sliderImg: '',
                slidervisible: false,
                page: {
                    menu: [
                        // {
                        //     type: 'icon',
                        //     icon: 'all_inclusive',
                        //     click: this.link,
                        //     title: '用其他应用打开'
                        // }
                    ]
                }
            }
        },
        mounted() {
            this.imgWidth = window.screen.width * 100 / window.screen.height
            // this.images = []
            this.initWebIntents()
        },
        destroyed() {
            this.timer && clearInterval(this.timer)
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
            fileChange(e) {
                var file = e.target.files[0]

                let reader = new FileReader()
                reader.onloadend = e => {
                    this.images.push({
                        title: '',
                        url: e.target.result
                    })
                }
                reader.readAsDataURL(file)
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
            },
            play() {
                this.slidervisible = true
                this.curImgIndex = 0
                this.sliderImg = this.images[this.curImgIndex].url
                this.timer = setInterval(() => {
                    this.curImgIndex++
                    if (this.curImgIndex >= this.images.length) {
                        this.curImgIndex = 0
                    }
                    this.sliderImg = this.images[this.curImgIndex].url
                }, this.offsetTime * 1000)
            },
            stop() {
                this.slidervisible = false
                clearInterval(this.timer)
            },
            remove(img, index) {
                this.images.splice(index, 1)
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
    display: flex;
    flex-wrap: wrap;
    .item {
        position: relative;
        width: 300px;
        height: 100px;
        margin-right: 16px;
        margin-bottom: 24px;
        text-align: center;
        border: 1px solid rgba(0, 0, 0, .12);
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            .btn {
                display: block;
            }
        }
    }
    .img {
        max-width: 100%;
        max-height: 100%;
    }
    .btn {
        display: none;
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: #fff;
        color: #333;
    }
}
.slider {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000000;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
        max-width: 100%;
        max-height: 100%;
    }
}
.btn {
    margin-right: 8px;
    cursor: pointer !important;
}
.btns {
    margin-bottom: 16px;
}
</style>
