<script setup>
const ProjectData = {
    Title: 'Project',
    titledescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis quam.',
    image1: 'https://ditlbd.com/wp-content/uploads/2015/02/Completed-Construction-03.jpg',
    image2: 'https://aastitvastore.com/wp-content/uploads/2021/06/moden-elevation-259-1400x788.jpg',
    image3:'https://i.ebayimg.com/images/g/7OsAAOSwxPBh4Dta/s-l400.jpg',
    image4:'https://i.pinimg.com/474x/7b/54/e5/7b54e51e36b56dc037c85ab9d43c74ed.jpg',
    image5:'https://aastitvastore.com/wp-content/uploads/2021/06/moden-elevation-259-1400x788.jpg',
    image6:'https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_770,h_433/https://www.orientbell.com/blog/wp-content/uploads/2023/01/Single-Floor-Normal-House-Front-Elevation-Designs.jpg',
    image7:'https://i.ebayimg.com/images/g/ZPcAAOSwnc1h4Dte/s-l1200.jpg',
    image8:'https://aastitvastore.com/wp-content/uploads/2021/06/moden-elevation-259-1400x788.jpg'
}
</script>
<template>
    <section id="portfolio">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title text-center wow fadeInDown">{{ ProjectData.Title }}</h2>
                    <p class="text-center wow fadeInDown">{{ ProjectData.titledescription }}</p>
                </div>
                <div class="text-center">
                    <ul class="portfolio-filter">
                        <li><a class="active" href="#" data-filter="*">Show All</a></li>
                        <li><a href="#" data-filter=".designing">3 Katha</a></li>
                        <li><a href="#" data-filter=".mobile">5 Katha</a></li>
                    </ul>
                    <!--/#portfolio-filter-->
                </div>
                <div class="portfolio-items">
                    <div class="portfolio-item designing">
                        <div class="portfolio-item-inner">
                            <img class="img-responsive" :src="ProjectData.image1" alt="">
                            <div class="portfolio-info">
                                <a class="preview" :href="ProjectData.image1" rel="prettyPhoto"><i
                                        class="fa fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                    <!--/.portfolio-item-->
                    <div class="portfolio-item mobile development">
                        <div class="portfolio-item-inner">
                            <img class="img-responsive" :src="ProjectData.image2" alt="">
                            <div class="portfolio-info">
                                <a class="preview" :href="ProjectData.image2" rel="prettyPhoto"><i
                                        class="fa fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                    <!--/.portfolio-item-->
                    <div class="portfolio-item designing">
                        <div class="portfolio-item-inner">
                            <img class="img-responsive" :src="ProjectData.image3" alt="">
                            <div class="portfolio-info">
                                <a class="preview" :href="ProjectData.image3" rel="prettyPhoto"><i
                                        class="fa fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                    <!--/.portfolio-item-->
                    <div class="portfolio-item mobile">
                        <div class="portfolio-item-inner">
                            <img class="img-responsive" :src="ProjectData.image4" alt="">
                            <div class="portfolio-info">
                                <a class="preview" :href="ProjectData.image4" rel="prettyPhoto"><i
                                        class="fa fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                    <!--/.portfolio-item-->
                    <div class="portfolio-item designing development">
                        <div class="portfolio-item-inner">
                            <img class="img-responsive" :src="ProjectData.image5" alt="">
                            <div class="portfolio-info">
                                <a class="preview" :href="ProjectData.image5" rel="prettyPhoto"><i
                                        class="fa fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                    <!--/.portfolio-item-->
                    <div class="portfolio-item mobile">
                        <div class="portfolio-item-inner">
                            <img class="img-responsive" :src="ProjectData.image6" alt="">
                            <div class="portfolio-info">
                                <a class="preview" :href="ProjectData.image6" rel="prettyPhoto"><i
                                        class="fa fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                    <!--/.portfolio-item-->
                    <div class="portfolio-item designing development">
                        <div class="portfolio-item-inner">
                            <img class="img-responsive" :src="ProjectData.image7" alt="">
                            <div class="portfolio-info">
                                <a class="preview" :href="ProjectData.image7" rel="prettyPhoto"><i
                                        class="fa fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                    <!--/.portfolio-item-->
                    <div class="portfolio-item mobile">
                        <div class="portfolio-item-inner">
                            <img class="img-responsive" :src="ProjectData.image8" alt="">
                            <div class="portfolio-info">
                                <a class="preview" :href="ProjectData.image8" rel="prettyPhoto"><i
                                        class="fa fa-search"></i></a>
                            </div>
                        </div>
                    </div><!--/.portfolio-item-->
                </div>

            </div>
        </section>
</template>