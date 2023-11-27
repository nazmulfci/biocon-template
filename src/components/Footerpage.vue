<script setup>
const FooterData = {
    image:'biocon-template/image/logo.png',
    footertext:'South Banasree , Block-G',
    footertext1:'Dhaka, 1219',
    footertext2: 'Bangladesh',
    phone: 'Phone:',
    number:'+88028100 024',
    number1: '+8801971993366',
    emailtitle:'Email :',
    emailName:'info@example.com',
    Useful:'Useful Links',
}
</script>

<template>
    <section class="footer-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img :src=" FooterData.image " class="footer-logo">
                        <p class="footer-text">{{ FooterData.footertext }}<br>{{ FooterData.footertext1 }}<br>{{ FooterData.footertext2 }}</p>
                        <h3 class="footer-info">{{ FooterData.phone }}<span style="color: #333;">{{ FooterData.number }}<br>{{ FooterData.number1 }}</span>
                        </h3>
                        <h3 class="footer-info">{{ FooterData.emailtitle }}<span style="color: #333; ;">{{ FooterData.emailName }}</span></h3>
                    </div>

                    <div class="col-md-3">
                        <h4 class="footer-list">{{ FooterData.Useful }}</h4>

                        <div class="footer-link">
                            <ul>
                                <li><a href="#"><i class="fas fa-angle-right" style="color: #106eea;"></i>Home</a></li>
                                <li><a href="#"><i class="fas fa-angle-right" style="color: #106eea;"></i>About us</a></li>
                                <li><a href="#"><i class="fas fa-angle-right" style="color: #106eea;"></i>Services</a></li>
                                <li><a href="#"><i class="fas fa-angle-right" style="color: #106eea;"></i>Terms of service</a></li>
                                <li><a href="#"><i class="fas fa-angle-right" style="color: #106eea;"></i>Privacy policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <h4 class="footer-list">Our Services</h4>

                        <div class="footer-link">
                            <ul>
                                <li><a href="#"><i class="fas fa-angle-right" style="color: #106eea;"></i> Build Building</a></li>
                                <li><a href="#"><i class="fas fa-angle-right" style="color: #106eea;"></i> Business Development</a></li>
                                <li><a href="#"><i class="fas fa-angle-right" style="color: #106eea;"></i> Product Management</a></li>
                                <li><a href="#"><i class="fas fa-angle-right" style="color: #106eea;"></i> Corporate </a></li>
                                <li><a href="#"><i class="fas fa-angle-right" style="color: #106eea;"></i> Land Management</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <h4 class="footer-social-list">Our Social Networks</h4>
                        <p class="footer-social">Cras fermen tum odio eu feugiat lide par naso tierra videa magna derita valies</p>

                        <div class="social-icon">
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-pinterest-p"></i></a>
                            <a href="#"><i class="fab fa-tumblr"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>