<template>
    <my-page title="选择图片">
        <ul class="image-list">
            <li class="item" v-for="img in images" @click="convert(img)">
                <img class="img" :src="img" />
            </li>
        </ul>
    </my-page>
</template>

<script>
    /* eslint-disable */
    function imageToDataURL(src, cb) {
        imageToCanvas(src, function (canvas) {
            cb(canvasToDataURL(canvas))
        })
    }

    function imageToCanvas(src, cb){
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.src = src;
        img.onload = function (){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            cb(canvas);
        };
    }

    function canvasToDataURL(canvas, format, quality){
        return canvas.toDataURL(format||'image/jpeg', quality||1.0);
    }

    export default {
        data () {
            return {
                images: [
                    '/static/img/demo_1.png',
                    '/static/img/demo_2.png'
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/help'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                // this.convert(this.images[0])
            },
            convert(uri) {
                imageToDataURL(uri, data => {
                    console.log('121212')
                    console.log(data)
                    window.intent.postResult(data)
                    setTimeout(() => {
                        let owner = window.opener || window.parent
                        owner.window.close()
                    }, 100)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.image-list {
    .item {
        padding: 16px;
        margin-bottom: 16px;
        box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
        cursor: pointer;
    }
    .img {
        max-width: 400px;
        max-height: 100px;
        border: 1px solid #eee;
    }
}

</style>
