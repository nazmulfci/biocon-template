<script setup>
const HeaderData = {
    HeaderMenu: [
        { name:'Home', url: 'home' },
        { name:'About', url: '/About' },
        { name:'Projects', url: '/projects' },
        { name:'Business Segment', url: '/Business' },
        { name:'Corporate', url: '/Corporate' },
        { name:'Contact us', url: '/' },
    ]
}
</script>

<template>
    <header id="header">
            <nav id="main-nav" class="navbar navbar-default navbar-fixed-top" role="banner">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index-2.html"><img class="navbar-logo" src="biocon-template/image/logo.png"
                                alt="logo"></a>
                    </div>

                    <div class="collapse navbar-collapse navbar-right">
                        <ul class="nav navbar-nav">
                            <li class="scroll active" v-for="index in HeaderData.HeaderMenu" :key="index"><a :href="index.url">{{ index.name }}</a></li>
                            <!-- <li class="scroll"><a href="#about">About</a></li>
                            <li class="scroll"><a href="/projects">Projects</a></li>
                            <li class="scroll"><a href="#business-segment">Business Segment</a></li>
                            <li class="scroll"><a href="#corporate">Corporate</a></li>
                            <li class="scroll"><a href="#Career">Career</a></li>
                            <li class="scroll"><RouterLink class="nav-link" to="Contact">Contact us</RouterLink></li> -->
                        </ul>
                    </div>
                </div>
            </nav>
            <!--/navbar section end/-->
        </header>
</template>